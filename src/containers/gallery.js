import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  galleryMovies } from '../actions'
import { bindActionCreators } from 'redux'

//component
import Gallerys from '../components/gallery/gallerys'

class Gallery extends Component {
    componentDidMount(){
       this.props.galleryMovies()
       
       }
     render() {
       return (
         <div>
           <div className="container">
           <div className="row">
       
       <div className="col-12">
         <br />
         
       </div>
   </div>
          
          
             </div>
           <Gallerys gallerys={this.props.gallery.gallerys}/>
         </div>
       )
     }
   }
   
   function mapStateToprops(state){
       console.log(state);
       
       return{
           gallery:state.gallery,
       }
   }
   
   function mapDispatchToProps(dispatch){
       return bindActionCreators({galleryMovies, }, dispatch)
   }
   
   export default connect(mapStateToprops,mapDispatchToProps)(Gallery) 