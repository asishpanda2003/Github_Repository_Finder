import React from 'react';
import { useRepoSearch } from './hooks/useRepoSearch';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import PreviousSearches from './components/PreviousSearches';
import Pagination from './components/Pagination';

function App() {
    const { 
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
    } = useRepoSearch('');

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans">
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-teal-400">GitHub Repo Finder</h1>
                    <p className="text-gray-400 mt-2">Search for repositories on GitHub.</p>
                </header>
                
                <main className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <aside className="lg:col-span-1">
                         <SearchBar onSearch={handleNewSearch} loading={loading} />
                         <PreviousSearches 
                            searches={previousSearches} 
                            onSearchClick={handlePreviousSearchClick} 
                            onDelete={handleDeleteSearch}
                         />
                    </aside>

                    <div className="lg:col-span-3">
                        {error && <div className="bg-red-500/20 text-red-400 p-4 rounded-lg text-center">{error}</div>}
                        
                        <RepoList repos={repos} loading={loading} />

                        <Pagination 
                            currentPage={page}
                            totalPages={totalPages}
                            onPageChange={setPage}
                            loading={loading}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;