export default function (){
    return dispatch => {
        if(localStorage.length > 0) {
            let store = JSON.parse(localStorage.getItem('redux_localstorage_simple'));
            dispatch({type: 'LOAD_STORE', payload: store})
        } else {
            fetch(`./data/1000.json`)
                .then(response => response.json())
                .then(data => dispatch({type: 'LOAD_DATA', payload: data}))
                .catch(err => console.log('Fetch error: ', err));
        }
    }
}