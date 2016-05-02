import React from 'react';
import {Well,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock, 
        Button, 
        ButtonGroup} from 'react-bootstrap'; //access the well component inside react-bootstrap

export default  class App extends React.Component{
 constructor(props){
     super(props);
 }
 
  goToRegister(){
         this.props.history.push("/register");
     }
 
 
 
 
 render(){
     
     const wellStyle={
         width: 400,
         height: 300,
         marginLeft: 'auto',
         marginRight: 'auto'
     };
     
       const btcontainer={
         float: 'right',
         marginLeft: '5px'
     };
     
     
    
     return (
         <div className="container-fluid">
         <Well style={wellStyle}>
         <form>
         <legend>Please Login</legend>     
         <FormGroup>
         <ControlLabel>Enter Username</ControlLabel>
         <FormControl type="text" 
                       placeholder="Enter your username"/>
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         
         </FormGroup>
          <FormGroup>
         <ControlLabel>Enter Password</ControlLabel>
         <FormControl type="password" 
                       placeholder="Enter your password"/>
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         <ButtonGroup style={btcontainer}>
         <Button bsStyle="primary" type="submit">Login</Button>
         <Button bsStyle="info" type="button" onClick={this.goToRegister.bind(this)}>Register</Button>
         </ButtonGroup>
         </form>
         </Well>
         </div>
     );
 }
 

}