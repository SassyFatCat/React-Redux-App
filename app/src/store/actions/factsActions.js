import axios from 'axios';

export const fetchFacts = () => dispatch => {
dispatch({ type: 'FETCHING_FACTS' })
axios
    .get('https://cat-fact.herokuapp.com/facts')
    .then(success => {
        console.log(success.data.all)
        dispatch({ type: 'FETCHING_SUCCESS', payload: success.data.all })
    })
    .then(fail => {
        dispatch({ type: 'FETCHING_FAIL', payload: 'Please try again later' })
    })
}