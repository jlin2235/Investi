import {
    createNewWatchList,
    getAllWatchLists,
    getOneWatchList,
    deleteWatchList
} from './../util/watchList_api_util';
// import WatchList from '../components/watchlist/watchlist';

export const CREATE_WATCHLIST = 'CREATE_WATCHLIST';
export const DELETE_WATCHLIST = 'DELETE_WATCHLIST';
export const GET_ALL_WATCHLIST = 'GET_ALL_WATCHLIST';
export const GET_ONE_WATCHLIST = 'GET_ONE_WATCHLIST';


const createWatchListHelperMethod = (watchlist) => {
    debugger
    return {
        type: CREATE_WATCHLIST,
        watchlist
    }  
};
const deleteWatchListHelperMethod = (watchlist) => {
    debugger
    return {
        type: DELETE_WATCHLIST,
        watchlist
    }  
};

const getAllWatchListsHelperMethod = (watchlists) => ({
    type: GET_ALL_WATCHLIST,
    watchlists
})

const getOneWatchListHelperMethod = watchlist => ({
    type: GET_ONE_WATCHLIST,
    watchlist
})

export const createWatchList = watchlist => dispatch => createNewWatchList(watchlist)
    .then(watchlist => {
        debugger
        return dispatch(createWatchListHelperMethod(watchlist))});

export const deleteWatch = watchlist => dispatch => deleteWatchList(watchlist)
    .then(watchlist => {
        debugger
        return dispatch(deleteWatchListHelperMethod(watchlist))});

export const getWatchLists = watchlist => dispatch => getAllWatchLists(watchlist)
    .then(watchlists => dispatch(getAllWatchListsHelperMethod(watchlists)))


export const getWatchList = watchlist => dispatch => getOneWatchList(watchlist)
    .then(watchlist => dispatch(getOneWatchListHelperMethod(watchlist)))