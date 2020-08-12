const initialState = {
    facts: [],
    error: '',
    loading: false
};

export const factsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_FACTS':
            return {
                ...state,
                loading: true,
                error: ''
            }

        case 'FETCHING_SUCCESS':
            return {
                ...state,
                facts: action.payload,
                error: '',
                loading: false,
            }

        case 'FETCHING_FAIL':
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default: return state;
    }
}