import React from 'react'

type styleProp = {
    style: React.CSSProperties
}
function Styles(props: styleProp) {
  return (
    <div style={props.style}>Styles</div>
  )
}

export default Styles