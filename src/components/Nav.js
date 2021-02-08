import PropTypes from 'prop-types'

function Nav({ link, text, color }) {
  return (
    <a
      className='d-flex flex-column justify-content-center align-items-center text-decoration-none'
      style={{ color: color, cursor: 'none' }}
      href={`#${link}`}>
      <span className='navbar-brand nav-links'>{text}</span>
      <div
        className={
          window.location.href.split('#')[1] === link
            ? 'transform-indicator'
            : ''
        }
        style={{ backgroundColor: color }}
      />
    </a>
  )
}

Nav.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
}

export default Nav
