import PropTypes from 'prop-types';
import React from 'react'
import Button from './Button';


const Header = ({title , onDisplay, showForm}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button  onClick={onDisplay} showForm={showForm}/>
    </header>
  )
}

// Default Props
Header.defaultProps={
    title: "To-Do List"
}

// PropType
Header.propTypes={
    title: PropTypes.string.isRequired
}


export default Header