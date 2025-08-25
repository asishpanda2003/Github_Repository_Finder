import React from 'react';

const RepoCard = ({ repo }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-teal-500/20 hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center mb-4">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} className="w-12 h-12 rounded-full mr-4 border-2 border-gray-600"/>
            <div>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-teal-400 hover:underline">
                    {repo.full_name}
                </a>
                <p className="text-sm text-gray-400">by @{repo.owner.login}</p>
            </div>
        </div>
        <p className="text-gray-300 mb-4 h-12 overflow-hidden">{repo.description || 'No description provided.'}</p>
        <div className="flex justify-between items-center text-sm text-gray-400">
            <span>⭐ {repo.stargazers_count.toLocaleString()}</span>
            <span>{repo.language}</span>
            <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
        </div>
    </div>
);


const RepoList = ({ repos, loading }) => {
    if (loading) {
        return (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                     <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                            <div>
                                <div className="h-5 w-48 bg-gray-700 rounded mb-2"></div>
                                <div className="h-4 w-24 bg-gray-700 rounded"></div>
                            </div>
                        </div>
                        <div className="h-4 bg-gray-700 rounded mb-2"></div>
                        <div className="h-4 w-3/4 bg-gray-700 rounded mb-4"></div>
                        <div className="flex justify-between items-center text-sm">
                           <div className="h-4 w-16 bg-gray-700 rounded"></div>
                           <div className="h-4 w-20 bg-gray-700 rounded"></div>
                           <div className="h-4 w-24 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (!repos || repos.length === 0) {
        return <div className="text-center text-gray-500 py-10">No repositories found. Try a different search term.</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map(repo => (
                <RepoCard key={repo.id} repo={repo} />
            ))}
        </div>
    );
};

export default RepoList;