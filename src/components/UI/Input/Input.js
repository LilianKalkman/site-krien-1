import React from 'react';
import './Input.css';

const input = (props) => {
  let inputElement = null;
  // const inputClasses = [classes.InputElement];

  // if(props.invalid && props.shouldValidate && props.touched){
  //   inputClasses.push(classes.Invalid);
  // }
  //
  // let error = null;
  // if(props.invalid && props.shouldValidate && props.touched){
  //   error = <p className={classes.Error}>Invalid input for {props.valueType}</p>
  // }

  switch(props.elementType){

    case('input'):
      inputElement = <input
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}/>;
      break;

    case('textarea'):
      inputElement = <textarea
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;

    case('select'):
      inputElement = (
        <select
        value={props.value}
        onChange={props.changed}>
        {props.elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>)
        )}
      </select>)
       break;

    default: inputElement = <input
      {...props.elementConfig}
      value={props.value}/>
  }

  return(
    <div className="Input">
      <label className="Label"></label>
      {inputElement}
    </div>
  );
}

export default input;
