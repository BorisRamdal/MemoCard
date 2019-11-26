let initialState = {
    index: true,
    activeRange: '101-200',
    activeList: {dog:"собака", cat:"кошка", mouse:"мышь", horse:"лошадь"},
    savedCards: {mouse:"мышь", horse:"лошадь"},
    progress: [
        {range: '1-100',   passed: true},
        {range: '101-200', passed: false},
        {range: '201-300', passed: false},
        {range: '301-400', passed: false},
        {range: '401-500', passed: false},
        {range: '501-600', passed: false},
        {range: '601-700', passed: false},
        {range: '701-800', passed: false},
        {range: '801-900', passed: false},
        {range: '901-1000', passed: false}
    ]
};

export default function reducer(state = initialState, action) {
    return state;
}