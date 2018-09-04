//https://api.themoviedb.org/3/movie/popular?api_key=d361532bea6f9750c3e5a3bc59c3794b

// const URL = 'https://servre.herokuapp.com'

const URL = 'http://localhost:3001';

// POPULAR MOVIES
export function popularMovies(){
    const request = fetch(`${URL}/results?_order=desc&_end=4`, 
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_POPULAR',
        payload:request
    }
}

// SlIDER MOVIES
export function galleryMovies(){
    const request = fetch(`${URL}/results`, 
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_GALLERYS',
        payload:request
    }
}

export function upcomingMovies(){
    const request = fetch(`${URL}/upcoming`,
                    {method:'GET'})
                    .then(res => res.json())
            return{
                type:'GET_UPCOMING',
                payload:request
            }
}
