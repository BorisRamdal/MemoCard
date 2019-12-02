export default function (activeRange){
    return dispatch => {
        if(localStorage.length > 0) {
            let store = JSON.parse(localStorage.getItem('redux_localstorage_simple'));
            dispatch({type: 'LOAD_STORE', payload: store})
        } else {
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
}