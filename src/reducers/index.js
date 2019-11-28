let initialState = {
    activeRange: '1-100',
    activeList: {},
    savedList: {},
    progress: []
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'LOAD_DATA':
            return {...state, activeList: action.payload};
        default:
            return state;
    }
}