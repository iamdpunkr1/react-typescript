import React from 'react'
type basicProps = {
    values: string
}
const Basic = (props: basicProps) => {
  return (
    <div>Basic {props.values}</div>
  )
}

export default Basic