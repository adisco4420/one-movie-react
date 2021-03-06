import React from 'react'
import { Link } from 'react-router-dom'

const showlatest = ({gallerys}) =>{

    if(gallerys){
        try{
        return gallerys.map((movie) =>{
            const imgUrl = 'http://i0.wp.com/image.tmdb.org/t/p/w342/';
            const style = {
                background:`url(${imgUrl}/${movie.poster_path})`
            }
            return(
                <div className="col-md-3" key={movie.id}>
                    <Link to="/"  >                  
                            <img className="img-fluid text-center" src={`${imgUrl}/${movie.poster_path}`} alt={movie.title}/>
                            <div className="text-center">
                                <h5 className="text-center">{movie.title}</h5>
                            </div>              
                    </Link>
                </div>
            )
        })
    
    }
    catch(err){
        return(
            <div>
               <h3>gallery movie not found </h3>
            </div>
        )
    }
    }
    
}

const Gallerys = (props) =>{
    console.log(props);
    
    return(
        <div className="container">
            <h1>Gallery </h1>
       
            <div className="row">
            
            {showlatest(props)}
            </div>
        </div>
    )
}

export default Gallerys;