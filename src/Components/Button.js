import PropTypes from 'prop-types'

 const Button = ({color, text}) => {


  const OnClick = (e) => {
    console.log('click')
  }
  return (<button onClick={OnClick} style={{backgroundColor:color}} className='btn'>
    {text}
    </button>)
  
}


Button.defaultProps = {
  color: 'blue'
}

Button.propTypes = {

  text: PropTypes.string
}

export default Button;


