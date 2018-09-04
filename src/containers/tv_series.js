import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  upcomingMovies } from '../actions'
import { bindActionCreators } from 'redux'

//component
import UpComing from '../components/tv-series/upcoming';
// import Example from '../components/tv-series/upcoming'

class TvSeries extends Component {
    componentDidMount(){
       this.props.upcomingMovies()
       
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
           <UpComing upcoming={this.props.tvseries.upcoming}/>
           {/* <Example upcoming={this.props.tvseries}/> */}
         </div>
       )
     }
   }
   
   function mapStateToprops(state){
       console.log(state);
       
       return{
           tvseries:state.tvseries,
       }
   }
   
   function mapDispatchToProps(dispatch){
       return bindActionCreators({upcomingMovies, }, dispatch)
   }
   
   export default connect(mapStateToprops,mapDispatchToProps)(TvSeries) 