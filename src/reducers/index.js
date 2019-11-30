let initialState = {
    activeRange: '1-100',
    activeList: null,
    savedList: {},
    progress: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'LOAD_DATA':
            return {...state, activeList: action.payload};
        case 'LOAD_TOTAL':
            let progress = [];
            action.payload.forEach((item)=>{
                let obj = {};
                obj.range = item;
                obj.passed = false;
                progress.push(obj);
            });
            return {...state, progress: progress};
        case 'ADD_TO_SAVELIST':
            return {...state, savedList: {...state.savedList, ...action.payload}};
        case 'REMOVE_FROM_SAVELIST':
            const {[action.payload]: value, ...withoutword } = state.savedList;
            return {...state,  savedList: {...withoutword}};
        default:
            return state;
    }
}