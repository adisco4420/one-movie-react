import React, { Component } from 'react';
import { BrowserRouter ,Route, Switch,Link } from 'react-router-dom'

//component
import Header from '../components/header'
import Footer from '../components/footer'

//container
import Home from '../containers/home'
import ContactUs from '../containers/contact-us'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          
             <Header />
         
          <Switch>
           
        
            <Route exact path="/" component={Home} />
            <Route exact path="/contactus" component={ContactUs} />

          </Switch> 
          <Footer />
        </div>
     </BrowserRouter>    );
  }
}

export default App;
