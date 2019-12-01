export default function (range){
    return dispatch => {
        fetch(`./data/${range}.json`)
            .then(response => response.json())
            .then(data => {
                dispatch({type: 'SET_ACIVE_RANGE', payload: range});
                dispatch({type: 'LOAD_RANGE', payload: data});
            })
            .catch(err => console.log('Fetch error: ', err));
    }
}