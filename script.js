const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '13e3bac1',
            s: searchTerm
        }
    });

    console.log(response);
};

const input = document.querySelector('input');

let timeoutId;
const onInput = event => {
    if(timeoutId) {
        clearInterval(timeoutId);
    }
    timeoutId = setTimeout( () => {fetchData(event.target.value)}, 1000);
};

input.addEventListener('input', onInput);
