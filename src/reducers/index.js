let initialState = {
    activeRange: '1-100',
    activeList: null,
    savedList: {},
    ranges: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'LOAD_RANGE':
            return {...state, activeList: action.payload};
        case 'LOAD_RANGES':
            return {...state, ranges: action.payload};
        case 'SET_ACIVE_RANGE':
            return {...state, activeRange: action.payload};
        case 'ADD_TO_SAVELIST':
            return {...state, savedList: {...state.savedList, ...action.payload}};
        case 'REMOVE_FROM_SAVELIST':
            const {[action.payload]: value, ...withoutword } = state.savedList;
            return {...state,  savedList: {...withoutword}};
        case 'LOAD_STORE':
            return {...state, ...action.payload};
        default:
            return state;
    }
}