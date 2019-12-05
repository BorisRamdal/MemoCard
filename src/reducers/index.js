let initialState = {
    activeRange: '1-100',
    dataList: null,
    savedList: {}
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'LOAD_DATA':
            return {...state, dataList: action.payload};
        case 'LOAD_STORE':
            return {...state, ...action.payload};
        case 'SET_ACIVE_RANGE':
            return {...state, activeRange: action.payload};
        case 'ADD_TO_SAVELIST':
            return {...state, savedList: {...state.savedList, ...action.payload}};
        case 'REMOVE_FROM_SAVELIST':
            const {[action.payload]: value, ...withoutword } = state.savedList;
            return {...state,  savedList: {...withoutword}};
        default:
            return state;
    }
}