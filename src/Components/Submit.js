import React from 'react';
import "./Submit.css";

const Submit = ({ classesName, value, isDisable }) => {

  return (
    <button disabled={isDisable} type="submit" className={`${classesName}`} >{value}</button>
  )
}

export default Submit;