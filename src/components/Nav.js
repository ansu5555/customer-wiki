import PropTypes from 'prop-types'

function Nav({ link, text, color, position }) {
  return (
    <a
      className='d-flex flex-column justify-content-center align-items-center text-decoration-none'
      style={{ color: color, cursor: 'none' }}
      onClick={link}>
      <span className='navbar-brand nav-links'>{text}</span>
      <div
        className={
          position.top <= 15 && position.bottom > 15
            ? 'transform-indicator'
            : ''
        }
        style={{ backgroundColor: color }}
      />
    </a>
  )
}

Nav.propTypes = {
  link: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.object,
}

export default Nav
