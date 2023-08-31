const key = 'kWT1a8O7Kzg2w3ngg2OJoIFstXdGgHbp'

const getWeather = async (id) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query)
    const data = await response.json();

    console.log(data)
    // return data;
}


//도시 정보 가져오기
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'; //endpoint주소
    const query = `?apikey=${key}&q=${city}`
        // http://dataservice.accuweather.com/locations/v1/cities/search?kWT1a8O7Kzg2w3ngg2OJoIFstXdGgHbp=&q=seoul

        const response = await fetch(base + query)
        const data = await response.json();

        // console.log(data[0])
        return data[0]
}

// getCity('newyork')  
//     .then(data =>{
//         // console.log(data.key)
//         return getWeather(data.Key)
//     })
//     .catch(err =>console.log(err))