import React from 'react'
import { Link } from 'react-router-dom'


const showlatest = ({popular}) =>{
    if(popular){
        return popular.map((movie) =>{
            const imgUrl = 'http://i0.wp.com/image.tmdb.org/t/p/w342/';
            const style = {
                background:`url(${imgUrl}/${movie.poster_path})`
            }
            return(
                <div className="col-md-3" key={movie.id}>
                    <Link to="/"  >                  
                            <img className="img-fluid" src={`${imgUrl}/${movie.poster_path}`} alt={movie.title}/>
                            <div className="">
                                <h5 className="text-center">{movie.title}</h5>
                            </div>              
                    </Link>
                </div>
            )
        })
    }
}

const Popular = (props) =>{
    console.log(props);
    
    return(
        <div className="container">
            <h1>Popular Movies</h1>
       
            <div className="row">
            
            {showlatest(props)}
            </div>
        </div>
    )
}

export default Popular;