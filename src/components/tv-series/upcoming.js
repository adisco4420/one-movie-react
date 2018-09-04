import React from 'react'
import { Link } from 'react-router-dom'
// import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import classnames from 'classnames';

const showlatest = ({upcoming}) =>{

    if(upcoming){
        try{
        return upcoming.map((movie) =>{
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
               <h3>upcoming movie not found </h3>
            </div>
        )
    }
    }
    
}

const UpComing = (props) =>{
    console.log(props);
    
    return(
        <div className="container">
            <h1>UpComing Movie </h1>
       
            <div className="row">
            
            {showlatest(props)}
            </div>
        </div>
    )
}

export default  UpComing;

// const showlatest = ({upcoming}) =>{

//     if(upcoming){
//         try{
//         return upcoming.map((movie) =>{
//             const imgUrl = 'http://i0.wp.com/image.tmdb.org/t/p/w342/';
//             const style = {
//                 background:`url(${imgUrl}/${movie.poster_path})`
//             }
//             return(
//                 <div className="col-md-3" key={movie.id}>
//                     <Link to="/"  >                  
//                             <img className="img-fluid text-center" src={`${imgUrl}/${movie.poster_path}`} alt={movie.title}/>
//                             <div className="text-center">
//                                 <h5 className="text-center">{movie.title}</h5>
//                             </div>              
//                     </Link>
//                 </div>
//             )
//         })
    
//     }
//     catch(err){
//         return(
//             <div>
//                <h3>upcoming movie not found </h3>
//             </div>
//         )
//     }
//     }
    
// }

// export  class Example extends React.Component {
//     constructor(props) {
//       super(props);
//       console.log(props);
      
  
//       this.toggle = this.toggle.bind(this);
//       this.state = {
//         activeTab: '1'
//       };
//     }
  
//     toggle(tab) {
//       if (this.state.activeTab !== tab) {
//         this.setState({
//           activeTab: tab
//         });
//       }
//     }
//     render() {
//       return (
//         <div>
//           <Nav tabs>
//             <NavItem>
//               <NavLink
//                 className={classnames({ active: this.state.activeTab === '1' })}
//                 onClick={() => { this.toggle('1'); }}
//               >
//                 Tab1
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink
//                 className={classnames({ active: this.state.activeTab === '2' })}
//                 onClick={() => { this.toggle('2'); }}
//               >
//                 Moar Tabs
//               </NavLink>
//             </NavItem>
//           </Nav>
//           <TabContent activeTab={this.state.activeTab}>
//             <TabPane tabId="1">
//               <Row>
//                 <Col sm="12">
//                 {/* {showlatest(props)} */}
//                 </Col>
//               </Row>
//             </TabPane>
//             <TabPane tabId="2">
//               <Row>
//                 <Col sm="6">
//                   <Card body>
//                     <CardTitle>Special Title Treatment</CardTitle>
//                     <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                     <Button>Go somewhere</Button>
//                   </Card>
//                 </Col>
//                 <Col sm="6">
//                   <Card body>
//                     <CardTitle>Special Title Treatment</CardTitle>
//                     <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                     <Button>Go somewhere</Button>
//                   </Card>
//                 </Col>
//               </Row>
//             </TabPane>
//           </TabContent>
//         </div>
//       );
//     }
//   }