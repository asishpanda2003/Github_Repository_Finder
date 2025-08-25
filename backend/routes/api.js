const express = require('express');
const router = express.Router();
const { 
    searchRepos, 
    saveSearch, 
    getSearches, 
    deleteSearch 
} = require('../controllers/searchController');

router.get('/search', searchRepos);

router.route('/searches').post(saveSearch).get(getSearches);

router.route('/searches/:id').delete(deleteSearch);

module.exports = router;