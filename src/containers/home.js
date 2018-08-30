import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  popularMovies } from '../actions'
import { bindActionCreators } from 'redux'

//component
import Popular from '../components/home/popular'



class Home extends Component {
    componentDidMount(){
       this.props.popularMovies()

       }
     render() {
       return (
         <div>
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
       return bindActionCreators({popularMovies}, dispatch)
   }
   
   export default connect(mapStateToprops,mapDispatchToProps)(Home) 