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
 constructor(props){
     super(props);
 
     this.state={
         
     };
 }
 
 
  render(){
      
        const wellStyle={
         width: 400,
         height: 600,
         marginLeft: 'auto',
         marginRight: 'auto'
     };
     
     
     const btcontainer={
         float: 'right',
         marginLeft: '5px'
     };
     
     
     const rbutton={
         paddingLeft: '50px'
     }; 
     
         
       return (
         <div className="container">
         <Well style={wellStyle}>

          <form>
          <legend>Please Register</legend> 
           {JSON.stringify(this.state)}
           
          <FormGroup>
         <ControlLabel>First Name: </ControlLabel>
         <FormControl type="text" 
                       placeholder="Enter your first name"
                        value={this.state.firstName || ''}
                       onChange={
                           (e)=>this.setState({
                            firstName:e.target.value
                            })
                        }
                   />
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
         
          <FormGroup>
         <ControlLabel>Last Name: </ControlLabel>
         <FormControl type="text" 
                       placeholder="Enter your lastname"
                       value={this.state.lastName || ''}
                       onChange={
                           (e)=>this.setState({
                            lastName:e.target.value
                            })
                        }
                   />
                       
                    
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
      
      
         <FormGroup>
         <ControlLabel>Gender: </ControlLabel>
          
          <Radio name='gender' style={rbutton} inline
           checked={this.state.gender === 'Male'}
                       onClick={
                         ()=>{
                           this.setState({
                            'gender':'Male'
                            })
                        }
                       }
                   >
             Male
          </Radio>
           {' '}
          <Radio name='gender' inline
            checked={this.state.gender === 'Female'}
                       onClick={
                          ()=>{
                           this.setState({ 'gender':'Female' })
                        }
                       }
                   >
            Female
          </Radio>
         </FormGroup>
          
          
          <FormGroup>
          <ControlLabel>Favorite Food: </ControlLabel>
          <Checkbox style={rbutton} inline
           checked={this.state.food1 === 'Pizza'}
                       onClick={
                         ()=>{
                           if(this.state.food1 === 'Pizza')
                           this.setState({ 'food1':''}) 
                           else 
                           this.setState({ 'food1':'Pizza'}) 
                        }
                       
                       } >
          Pizza
          </Checkbox>
          {' '}
          <Checkbox inline
           checked={this.state.food2 === 'Burger'}
                       onClick={
                         ()=>{
                           if(this.state.food2 === 'Burger')
                           this.setState({'food2':'' })
                            else 
                           this.setState({ 'food2':'Burger'}) 
                        }
                       }
                   >
          Burger
          </Checkbox>
          {' '}
          <Checkbox inline
          checked={this.state.food3 === 'Fries'}
                       onClick={
                         ()=>{
                           if(this.state.food3 === 'Fries')
                           this.setState({'food3':''})
                           else
                            this.setState({ 'food3':'Fries'})
                        }
                       }
                       
                   >
           Fries
        </Checkbox>

        </FormGroup>
        
        
       <FormGroup controlId="formControlsSelect">
      <ControlLabel>Municipality: </ControlLabel>
      <FormControl componentClass="select" placeholder="select"
       value={this.state.municipality || ''}
                       onChange={
                           (e)=>this.setState({                    
                            municipality:e.target.value
                            })
                        }
                   >
        <option value="">Please Select...</option>
        <option value="albur">Albur</option>
        <option value="baclayon">Baclayon</option>
        <option value="carmen">Carmen</option>
        <option value="duero">Duero</option>
        <option value="loay">Loay</option>
        <option value="tagbilaran">Tagbilaran</option>
      </FormControl>
      </FormGroup>
      
      
      <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Comment:</ControlLabel>
      <FormControl componentClass="textarea" placeholder="write your comments here.. ." 
      value={this.state.comments || ''}
                       onChange={
                           (e)=>this.setState({                    
                            comments:e.target.value
                            })
                        }
        >
      </FormControl>
      </FormGroup>
      <ButtonToolbar>
       <ButtonGroup style={btcontainer}>
       <Button bsStyle="warning" type="submit">Reset</Button>
         <Button bsStyle="success" type="submit">Sumbit</Button>
         </ButtonGroup>
       </ButtonToolbar>  
      </form>
          </Well>
         </div>
       );
 }
 

}  