import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Forms extends React.Component {
  render() {
    return (
        <div className="container">
            <div class="row ">
           <div class="col-12">
              <h3>Send us your Feedback</h3>     
            </div>   
            </div>
         <Form>
            <FormGroup row>
            <Label for="firstname" sm={2}>FirstName</Label>
            <Col sm={7}>
                <Input type="text" name="firstname" id="firstname" placeholder="Enter First Name" />
            </Col>
            </FormGroup>

            <FormGroup row>
            <Label for="lastname" sm={2}>FirstName</Label>
            <Col sm={7}>
                <Input type="text" name="lastname" id="lastname" placeholder="Enter Last Name" />
            </Col>
            </FormGroup>

             <FormGroup row>
            <Label for="telnum" sm={2}>Telnum</Label>
            <Col sm={7}>
                <Input type="number" name="telnum" id="telnum" placeholder="Enter Your Phone Numnber" />
            </Col>
            </FormGroup>

            <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={7}>
                <Input type="email" name="email" id="lastname" placeholder="Enter Your Email" />
            </Col>
            </FormGroup>

            <FormGroup row>
            <Label for="exampleText" sm={2}>Text Area</Label>
            <Col sm={7}>
                <Input type="textarea" name="text" id="exampleText" />
            </Col>
            </FormGroup>
            <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
            </Col>
            </FormGroup>
        </Form>
        
        </div>
    );
  }
}
