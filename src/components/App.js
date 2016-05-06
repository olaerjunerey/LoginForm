import React from 'react';
import {Well,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock, 
        Button, 
        ButtonGroup} from 'react-bootstrap'; //access the well component inside react-bootstrap
import validation from 'react-validation-mixin'
import strategy from 'react-validatorjs-strategy'
import validatorjs from 'validatorjs'        
import classnames from 'classnames'

export default  class App extends React.Component{
 constructor(props){
     super(props);
   validated:false
 
     this.state={
 };
 
 
  this.validatorTypes=strategy.createSchema(
     {
         email:'required',
         password:'required'

     },
     {
         "required": "The field :attribute is required!"
     },
     (validation)=>{
         validation.setAttributeNames({
             email:'Email',
             password:'Password'

         });
     }
 );
 
 }
 
 //let the mixin know your testing object
 
 getValidatorData = ()=> {
        return this.state
    };
 
getClasses = (field)=>{
  if(!this.state.validated)
            return null;
            
        return classnames({
            'success': this.props.isValid(field),
            'error': !this.props.isValid(field)
        });
 };
 
 
getErrorText=(field)=>{
        var error = this.props.errors[field];
        if(!error)
            return null;
        if(Array.isArray(error)){
            var message = [];
            message = error.map((item,i)=>{
                return(
                    <span key={i}>
                        {item}
                        <br/>
                    </span>
                )
            });
            return message;
        }
        else
            return  (<span>{error || ''}</span>);
    };
 
 
 
 
 onFormSubmit = (event)=>{
        event.preventDefault();
        this.setState({
            validated:true
        });
        
        this.props.validate(this.onValidate);
    };
 
 
onValidate=(error)=>{
        if (error) {
            //form has errors; do not submit
        } else {
           // submit to rest here
        }
    };
 
 
 
 
 

 
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
          {JSON.stringify(this.state)}
            
         <FormGroup validationState={this.getClasses('email')}>
         <ControlLabel>Enter Username</ControlLabel>
         <FormControl type="text" 
                       placeholder="Enter your username"   
                       value={this.state.email || ''}  
                        onChange={
                           (e)=>this.setState({
                            email:e.target.value
                            })
                        }       
                 />
         <FormControl.Feedback/>
          <HelpBlock>{this.getErrorText('email')}</HelpBlock>
         
         </FormGroup>
         
         
          <FormGroup validationState={this.getClasses('password')}>
         <ControlLabel>Enter Password</ControlLabel>
         <FormControl type="password" 
                       placeholder="Enter your password"
                       value={this.state.password || ''}  
                       onChange={
                           (e)=>this.setState({
                            password:e.target.value
                            })
                        }
                        />
         <FormControl.Feedback/>
          <HelpBlock>{this.getErrorText('password')}</HelpBlock>
          
          
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

export default validation(strategy)(App);