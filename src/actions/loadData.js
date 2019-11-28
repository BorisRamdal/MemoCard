export default function (activeRange){
    return dispatch => {
        if(localStorage.length > 0) {
            let data = localStorage.getItem(data);
            let storeData = JSON.parse(data);
            dispatch({type: 'LOAD_DATA', payload: storeData});
        } else {
            fetch(`./data/${activeRange}.json`)
                .then((response) => response.json())
                .then((data) => dispatch({type: 'LOAD_DATA', payload: data}))
                .catch(function (err) {
                    console.log('Fetch Error: ', err);
                });
        }
    }
}