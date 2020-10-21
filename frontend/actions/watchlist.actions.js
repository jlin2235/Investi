import {
    createNewWatchList,
    getAllWatchLists
} from './../util/watchList_api_util';
import WatchList from '../components/watchlist/watchlist';

export const CREATE_WATCHLIST = 'CREATE_WATCHLIST';
export const GET_ALL_WATCHLIST = 'GET_ALL_WATCHLIST';


const createWatchListHelperMethod = (watchlist) => ({
    type: CREATE_WATCHLIST,
    watchlist
});

const getAllWatchListsHelperMethod = (watchlists) => ({
    type: GET_ALL_WATCHLIST,
    watchlists
})

export const createWatchList = watchlist => dispatch => createNewWatchList(watchlist)
    .then(watchlist => dispatch(createWatchListHelperMethod(watchlist)));

export const getWatchLists = watchlist => dispatch => getAllWatchLists(watchlist)
    .then(watchlists => dispatch(getAllWatchListsHelperMethod(watchlists)))