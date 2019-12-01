export default function (activeRange){
    return dispatch => {
        fetch(`./data/${activeRange}.json`)
            .then(response => response.json())
            .then(data => dispatch({type: 'LOAD_RANGE', payload: data}))
            .catch(err => console.log('Fetch error: ', err));
        fetch(`./data/total.json`)
            .then(response => response.json())
            .then(data => dispatch({type: 'LOAD_RANGES', payload: data}))
            .catch(err => console.log('Fetch error: ', err))
    }
}