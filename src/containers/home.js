import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  popularMovies } from '../actions'
import { bindActionCreators } from 'redux'

//component
import Popular from '../components/home/popular'
import Slider from '../components/home/slider'




class Home extends Component {
    componentDidMount(){
       this.props.popularMovies()
       
       }
     render() {
       return (
         <div>
           <div className="container">
           <div className="row">
       
       <div className="col-12">
         <br/>
          <h3><b>Watch out for latest movies</b></h3>
          <hr/>
       </div>
   </div>
           <Slider  />
             </div>
           <Popular popular={this.props.home.popular}/>
         </div>
       )
     }
   }
   
   function mapStateToprops(state){
       console.log(state);
       
       return{
           home:state.home,
       }
   }
   
   function mapDispatchToProps(dispatch){
       return bindActionCreators({popularMovies, }, dispatch)
   }
   
   export default connect(mapStateToprops,mapDispatchToProps)(Home) 