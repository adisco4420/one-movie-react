import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () =>{
    return(
        <div>
       
<footer className="page-footer  font-small special-color-dark pt-4">

  
    <div className="container">

     
      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <a className="btn-floating btn-fb mx-1">
            <i className="fa fa-facebook"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-tw mx-1">
            <i className="fa fa-twitter"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-gplus mx-1">
            <i className="fa fa-google-plus"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-li mx-1">
            <i className="fa fa-linkedin"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-dribbble mx-1">
            <i className="fa fa-dribbble"> </i>
          </a>
        </li>
      </ul>
     

    </div>
   

   
    <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="#">One Movie </a>
    </div>
   

  </footer>
  
        </div>
    )
}

export default Footer;