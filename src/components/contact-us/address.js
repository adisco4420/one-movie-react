import React from 'react';

const Address = () =>{
    return(
        <div class="container">
        <div class="row">
            <ol class="col-12 breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active">Contact Us</li>
            </ol>
            <div class="col-12">
               <h3>Contact Us</h3>
               <hr/>
            </div>
        </div>

        <div class="row row-content">
           <div class="col-12">
              <h3>Location Information</h3>
           </div>
            <div class="col-12 col-sm-4 offset-sm-1">
                   <h5>Our Address</h5>
                    <address style={{fontSize:'100%'}}>
		              14, Tokosi street<br/>
                      Orile Iganmu<br/>
                      Lagos <br/>
		              Nigeria<br/>
		              <i class="fa fa-phone"></i>: +2349064155137<br/>
		              <i class="fa fa-fax"></i>: +2348095653002<br/>
		              <i class="fa fa-envelope"></i>:
                        <a href="mailto:adisc04420@gmail.com">adisco4420@gmail.com</a>
		           </address>
            </div>
            <div class="col-12 col-sm-6 offset-sm-1 embed-responsive map-responsive">
                <h5>Map of our Location</h5>
              

            </div>
            <div class="col-12 col-sm-11 offset-sm-1">
                <div class="btn-group" role="group">
                  <a role="button" class="btn btn-primary btn-md" href="tel:+2348095653002"><i class="fa fa-phone"></i> Call</a>
                  <a role="button" class="btn btn-info btn-md" ><i class="fa fa-skype"></i> skype</a>
                  <a role="button" class="btn btn-success btn-md" href="mailto:adisco4420@gmail.com"><i class="fa fa-envelope"></i> Email </a>
                </div>
            </div>
         </div>
        </div>
       
      
    )
}
 export default Address;