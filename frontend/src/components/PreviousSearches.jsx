import React from 'react';

const RemoveIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const PreviousSearches = ({ searches, onSearchClick, onDelete }) => {
    if (!searches.length) {
        return null;
    }

    const uniqueSearches = [...new Map(searches.map(item => [item.term, item])).values()];

    return (
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-teal-400">Recent Searches</h2>
            <ul className="space-y-2">
                {uniqueSearches.map(search => (
                    <li key={search._id} className="flex items-center justify-between bg-gray-700/50 rounded-md group">
                        <button
                            onClick={() => onSearchClick(search.term)}
                            className="flex-grow text-left px-3 py-2 text-gray-300 group-hover:text-teal-400 transition-colors"
                        >
                            {search.term}
                        </button>
                        <button 
                            type="button"
                            onClick={() => onDelete(search._id)}
                            className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                            aria-label={`Remove ${search.term} from history`}
                        >
                            <RemoveIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PreviousSearches;
