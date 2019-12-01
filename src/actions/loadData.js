export default function (activeRange){
    return dispatch => {
        if(localStorage.length > 0) {
            let data = localStorage.getItem('data');
            let storeData = JSON.parse(data);
            dispatch({type: 'LOAD_STORE', payload: storeData});
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