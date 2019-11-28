let initialState = {
    activeRange: '1-100',
    activeList: null,
    savedList: null,
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
        default:
            return state;
    }
}