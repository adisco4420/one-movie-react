//https://api.themoviedb.org/3/movie/popular?api_key=d361532bea6f9750c3e5a3bc59c3794b

const URL = 'http://localhost:3001';

// POPULAR MOVIES
export function popularMovies(){
    const request = fetch(`${URL}/results`, 
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_POPULAR',
        payload:request
    }
}
