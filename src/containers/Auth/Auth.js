import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-mail'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Your Password'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
    }
  }
  render(){

    const formElementsArray = [];
    for(let key in this.state.controls){
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    let form = (
        <form>
          {formElementsArray.map(element => {
            return <Input
              key={element.id}
              elementType={element.config.elementType}
              elementConfig={element.config.elementConfig}
              value={element.config.value}
              changed={(event)=> this.inputChangeHandler(event, element.id)}
              invalid={!element.config.valid}
              shouldValidate={element.config.validation}
              touched={element.config.touched}
              valueType={element.id}
              />
          })}
        </form>
    );

    return(
      <div>
        {form}
        <button>Submit</button>
      </div>
    );
  }
}

export default Auth;
