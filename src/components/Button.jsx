import React from 'react'
// import PropTypes from 'prop-types';

const Button = ({ onClick,showForm }) => {
  
  return (
    <button className='btn' style={{backgroundColor: ` ${showForm ? 'red':'blue'}`}} onClick={onClick}> {showForm ? "Close":"Add"} </button>
  )
}

// // Default Props
// Button.defaultProps={
//     text:"Add Task",
//     color:"steelblue"
// }
// // Prop Types
// Button.propTypes={
//     text:PropTypes.string,
//     color:PropTypes.string
// }

export default Button