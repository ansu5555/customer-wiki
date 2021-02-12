import PropTypes from 'prop-types'

function Section({ text, img, color }) {
  return (
    <div className='section' style={{ backgroundColor: color.bgColor }}>
      <div
        style={{
          width: '98vw',
          borderTop: `2px solid ${color.fgColor}`,
          margin: 'auto',
        }}></div>
      <div className='section-text-wrapper'>
        <div className='section-text' style={{ color: color.fgColor }}>
          <span className='center-section-text'>{text}</span>
        </div>
      </div>
      <div className='section-image-wrapper'>
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
