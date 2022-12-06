import PropTypes from 'prop-types'
import Button from './Button'

 const Header = ({title}) => {
  return (
    
    <header className='header'>
        <h1 style={{color: 'red'}}>{title} </h1>
        <Button color='green' text='hey'/>
    </header>
  )
}

Header.defaultProps = {
    title: "premier props"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header