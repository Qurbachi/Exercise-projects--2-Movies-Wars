const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '13e3bac1',
            s: 'Shrek'
        }
    });

    console.log(response);
};

fetchData();

