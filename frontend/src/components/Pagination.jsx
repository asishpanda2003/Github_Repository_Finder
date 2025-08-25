import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, loading }) => {
    if (loading || totalPages === 0) {
        return null;
    }

    return (
        <div className="flex justify-center items-center mt-8 space-x-4">
            <button
                onClick={() => onPageChange(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-700 rounded-md hover:bg-teal-500 disabled:bg-gray-800 disabled:cursor-not-allowed transition-colors"
            >
                Previous
            </button>
            <span className="text-gray-400">Page {currentPage} of {totalPages}</span>
            <button
                onClick={() => onPageChange(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-700 rounded-md hover:bg-teal-500 disabled:bg-gray-800 disabled:cursor-not-allowed transition-colors"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
