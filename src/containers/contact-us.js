import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  popularMovies, sliderMovies } from '../actions'
import { bindActionCreators } from 'redux'

//component
import Forms from '../components/contact-us/form'
import Address from '../components/contact-us/address'

class ContactUs extends Component {
   
     render() {
       return (
        <div>
            <Address />
            <Forms />
        </div>
       )
     }
   }
   
   
export default ContactUs