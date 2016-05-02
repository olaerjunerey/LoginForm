import React from 'react';
import {Well,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock, 
        Button, 
        ButtonGroup, 
        Checkbox,
        Radio,
        ButtonToolbar} from 'react-bootstrap';
        
export default  class Register extends React.Component{

 
 
  render(){
      
        const wellStyle={
         width: 600,
         height: 500,
         marginLeft: 'auto',
         marginRight: 'auto'
     };
     
     
     const btcontainer={
         float: 'right',
         marginLeft: '5px'
     };
     
       return (
         <div className="container">
         <Well style={wellStyle}>
          <form>
          <legend>Please Register</legend> 
          <FormGroup>
         <ControlLabel>First Name: </ControlLabel>
         <FormControl type="text" 
                       placeholder="Enter your first name"/>
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
         
          <FormGroup>
         <ControlLabel>Last Name: </ControlLabel>
         <FormControl type="password" 
                       placeholder="Enter your lastname"/>
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
      
      
         <FormGroup>
         <ControlLabel>Gender: </ControlLabel>
          
          <Radio inline>
             Male
          </Radio>
           {' '}
          <Radio inline>
            Female
          </Radio>
         </FormGroup>
          
          
          <FormGroup>
          <ControlLabel>Favorite Food: </ControlLabel>
          <Checkbox inline>
          Pizza
          </Checkbox>
          {' '}
          <Checkbox inline>
          Burger
          </Checkbox>
          {' '}
          <Checkbox inline>
           Fries
        </Checkbox>
        {' '}
          <Checkbox inline>
           Cake
        </Checkbox>
        </FormGroup>
        
        
       <FormGroup controlId="formControlsSelect">
      <ControlLabel>Municipality: </ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">Albur</option>
        <option value="select">Baclayon</option>
        <option value="select">Carmen</option>
        <option value="select">Duero</option>
        <option value="select">Loay</option>
        <option value="select" selected>Tagbilaran</option>
      </FormControl>
      </FormGroup>
      
      <ButtonToolbar>
       <ButtonGroup style={btcontainer}>
         <Button bsStyle="success" type="submit">Sumbit</Button>
         <Button bsStyle="warning" type="submit">Cancel</Button>
         </ButtonGroup>
       </ButtonToolbar>  
      </form>
          </Well>
         </div>
       );
 }
 

}  