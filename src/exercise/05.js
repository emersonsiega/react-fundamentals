// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import PropTypes from 'prop-types'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

// Exercise
// const fontStyle = {fontStyle: 'italic'}
// const smallBox = <div className='box box--small' style={{backgroundColor: 'lightblue', ...fontStyle}}>small lightblue box</div>
// const mediumBox = <div className='box box--medium' style={{backgroundColor: 'pink', ...fontStyle}}>medium pink box</div>
// const largeBox = <div className='box box--large' style={{backgroundColor: 'orange', ...fontStyle}}>large orange box</div>

// EXTRA-1
// function Box({className = '', style={}, ...otherProps}) {
//   return (
//     <div className={`box ${className}`} style={{fontStyle: 'italic', ...style}} {...otherProps}/>
//   )
// }
// const smallBox = (
//   <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//     small lightblue box
//   </Box>
// )
// const mediumBox = (
//   <Box className="box--medium" style={{backgroundColor: 'pink'}}>
//     medium pink box
//   </Box>
// )
// const largeBox = (
//   <Box className="box--large" style={{backgroundColor: 'orange'}}>
//     large orange box
//   </Box>
// )

// EXTRA-2
function Box({size, style={}, ...otherProps}) {
  let className = size ? `box--${size}` : ''

  return (
    <div className={`box ${className}`} style={{fontStyle: 'italic', ...style}} {...otherProps}/>
  )
}

Box.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}


const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
