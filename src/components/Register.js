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
import validation from 'react-validation-mixin'
import strategy from 'react-validatorjs-strategy'
import validatorjs from 'validatorjs'        
import classnames from 'classnames'

 class Register extends React.Component{
 constructor(props){
     super(props);

     this.state={
         
     };
 
 
 this.validatorTypes=strategy.createSchema(
     {
         lastName:'required',
         firstName:'required',
          gender:'required',
           municipality:'required',
           comments:'required'
     },
     {
         "required": "The field :attribute is required!"
     },
     (validation)=>{
         validation.setAttributeNames({
             lastName:'Lastname',
             firstname:'Firstname',
             gender:'Gender',
             municipality:'Municipality',
             comments:'Comment'
         });
     }
 );
 
 }
 
 //let the mixin know your testing object
 
 getValidatorData = ()=> {
        return this.state
    };
 
getClasses = (field)=>{
  
            
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
 
 
  render(){
      
        const wellStyle={
         width: 400,
         height: 'auto',
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

          <form onSubmit={this.onFormSubmit}>
          <legend>Please Register</legend> 

          <FormGroup validationState={this.getClasses('firstName')}>
         <ControlLabel>First Name: </ControlLabel>
         <FormControl type="text" name="firstname" 
                       placeholder="Enter your first name"
                        value={this.state.firstName || ''}
                        onBlur={()=>{                       
                         this.props.validate('firstName');
                    }
                        }
                       onChange={
                           (e)=>this.setState({
                            firstName:e.target.value
                            })
                        }
                   />
         <FormControl.Feedback/>
         <HelpBlock>{this.getErrorText('firstName')}</HelpBlock>
         </FormGroup>
         
         
          <FormGroup validationState={this.getClasses('lastName')}>
         <ControlLabel>Last Name: </ControlLabel>
         <FormControl type="text" name="lastname" 
                       placeholder="Enter your lastname"
                       value={this.state.lastName || ''}
                       onBlur={()=>{                        
                         this.props.validate('lastName');
                        }
                        }
                       onChange={
                           (e)=>this.setState({
                            lastName:e.target.value
                            })
                        }
                   />                
         <FormControl.Feedback/>
         <HelpBlock>{this.getErrorText('lastName')}</HelpBlock>
         </FormGroup>
      
      
         <FormGroup  validationState={this.getClasses('gender')}>
         <ControlLabel>Gender: </ControlLabel>    
          <Radio name='gender' style={rbutton} inline
           checked={this.state.gender === 'Male'}
            onBlur={()=>{
                         this.props.validate('gender');
                        }
                        }
           
                       onClick={()=>
                           {this.setState({'gender':'Male'})
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
                       }>
            Female
          </Radio>
           <HelpBlock>{this.getErrorText('gender')}</HelpBlock>
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
                       
                       }>
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
                       }>
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
                       }>
           Fries
        </Checkbox>
        </FormGroup>
        
        
       <FormGroup controlId="formControlsSelect" validationState={this.getClasses('municipality')}>
      <ControlLabel>Municipality: </ControlLabel>
      <FormControl componentClass="select" placeholder="select" name="municipality" 
       value={this.state.municipality || ''}
                    onBlur={()=>{
                         this.props.validate('municipality');
                        }
                        }
       
       
                       onChange={
                           (e)=>this.setState({                    
                            municipality:e.target.value
                            })
                        }>
                                                
        <option value="">Please Select...</option>
        <option value="albur">Albur</option>
        <option value="baclayon">Baclayon</option>
        <option value="carmen">Carmen</option>
        <option value="duero">Duero</option>
        <option value="loay">Loay</option>
        <option value="tagbilaran">Tagbilaran</option>
      </FormControl>
       <HelpBlock>{this.getErrorText('municipality')}</HelpBlock>
      </FormGroup>
      
      
      <FormGroup controlId="formControlsTextarea" validationState={this.getClasses('comments')}>
      <ControlLabel>Comment:</ControlLabel>
      <FormControl componentClass="textarea" name="comments"  placeholder="write your comments here.. ." 
      value={this.state.comments || ''}
                         onBlur={()=>{
                         this.props.validate('comments');
                        }
                        }
                        
                       onChange={
                           (e)=>this.setState({                    
                            comments:e.target.value
                            })
                        }>
                        
      </FormControl>
      <HelpBlock>{this.getErrorText('comments')}</HelpBlock>
      </FormGroup>
      
      
     
      <ButtonToolbar>
       <ButtonGroup style={btcontainer}>
       <Button bsStyle="warning" type="reset">Reset</Button>
         <Button bsStyle="success" type="submit">Sumbit</Button>
         </ButtonGroup>
       </ButtonToolbar>  
      </form>
          </Well>
         </div>
       );
 }
 
}  

//calling the high order function
export default validation(strategy)(Register);