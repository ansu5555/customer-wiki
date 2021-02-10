import PropTypes from 'prop-types'

function Section({ text, img, color }) {
  return (
    <div
      className='d-flex flex-column section'
      style={{ backgroundColor: color.bgColor }}>
      <div
        style={{
          width: '98vw',
          borderTop: `2px solid ${color.fgColor}`,
          margin: 'auto',
        }}></div>
      <div className='d-flex flex-row justify-content-start align-items-center'>
        <div className='section-text' style={{ color: color.fgColor }}>
          <span className='h1 center-section-text'>{text}</span>
        </div>
      </div>
      <div className='d-flex flex-row justify-content-end align-items-center'>
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
