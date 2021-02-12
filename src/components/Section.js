import PropTypes from 'prop-types'

function Section({ text, img, color }) {
  return (
    <div className='section' style={{ backgroundColor: color.bgColor }}>
      <div
        className='section-divider'
        style={{
          borderTop: `2px solid ${color.fgColor}`,
        }}></div>
      <div className='section-wrapper' style={{ color: color.fgColor }}>
        <span className='section-text'>{text}</span>
        <img className='section-image' src={img} alt='about text'></img>
      </div>
    </div>
  )
}

Section.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  color: PropTypes.object,
}

export default Section
