const axios = require('axios');
const Search = require('../models/Search');

const searchRepos = async (req, res) => {
    const { q, page = 1 } = req.query;
    if (!q) {
        return res.status(400).json({ message: 'Search query is required' });
    }

    try {
        const response = await axios.get(process.env.GITHUB_API_URL, {
            params: { q, page, per_page: 10 },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching from GitHub API:', error.message);
        if (error.response) {
            res.status(error.response.status).json({ message: error.response.data.message });
        } else {
            res.status(500).json({ message: 'Server Error' });
        }
    }
};

const saveSearch = async (req, res) => {
    try {
        const { term } = req.body;
        if (!term || typeof term !== 'string' || term.trim() === '') {
             return res.status(400).json({ message: 'A valid search term is required' });
        }
        
        const newSearch = new Search({ term: term.trim() });
        await newSearch.save();
        res.status(201).json(newSearch);
    } catch (error) {
        console.error('Error saving search term:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getSearches = async (req, res) => {
    try {
        const searches = await Search.find().sort({ createdAt: -1 }).limit(10);
        res.json(searches);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteSearch = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSearch = await Search.findByIdAndDelete(id);

        if (!deletedSearch) {
            return res.status(404).json({ message: 'Search term not found' });
        }

        res.json({ message: 'Search term deleted successfully' });
    } catch (error) {
        console.error('Error deleting search term:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    searchRepos,
    saveSearch,
    getSearches,
    deleteSearch,
};