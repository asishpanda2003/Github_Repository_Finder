import { useState, useEffect, useCallback } from 'react';
import { searchRepositories, getPreviousSearches, deleteSearchTerm, saveSearchTerm } from '../services/api';

export const useRepoSearch = (initialTerm = 'react') => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(initialTerm);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [previousSearches, setPreviousSearches] = useState([]);

    const fetchRepos = useCallback(async (term, pageNum) => {
        setLoading(true);
        setError(null);
        try {
            const response = await searchRepositories(term, pageNum);
            setRepos(response.data.items);
            const totalCount = Math.min(response.data.total_count, 1000);
            setTotalPages(Math.ceil(totalCount / 10));
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while fetching data.');
            setRepos([]);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchPreviousSearches = useCallback(async () => {
        try {
            const response = await getPreviousSearches();
            setPreviousSearches(response.data);
        } catch (err) {
            console.error("Could not fetch previous searches", err);
        }
    }, []);
    
    useEffect(() => {
        fetchRepos(searchTerm, page);
    }, [searchTerm, page, fetchRepos]);

    useEffect(() => {
        fetchPreviousSearches();
    }, [fetchPreviousSearches]);

    // Handles a brand-new search from the search bar
    const handleNewSearch = async (term) => {
        try {
            await saveSearchTerm(term);
            setSearchTerm(term);
            setPage(1);
            fetchPreviousSearches();
        } catch (error) {
            console.error("Failed to save search term", error);
        }
    };
    
    // Handles clicking on a search term from the history
    const handlePreviousSearchClick = (term) => {
        setSearchTerm(term);
        setPage(1);
    };

    const handleDeleteSearch = async (idToDelete) => {
        try {
            // Find the term being deleted to check if it's the active one
            const searchToDelete = previousSearches.find(search => search._id === idToDelete);
            await deleteSearchTerm(idToDelete);
            
            // Update the UI list immediately
            setPreviousSearches(prev => prev.filter(search => search._id !== idToDelete));

            if (searchToDelete && searchToDelete.term === searchTerm) {
                setSearchTerm(initialTerm); 
                setPage(1);
            }

        } catch (err) {
            console.error("Failed to delete search term", err);
        }
    };

    return { 
        repos, 
        loading, 
        error, 
        page, 
        totalPages, 
        previousSearches, 
        handleNewSearch,
        handlePreviousSearchClick,
        handleDeleteSearch,
        setPage 
    };
};