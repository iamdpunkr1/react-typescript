import { type } from 'os'
import React from 'react'
type horizontalProps = "left" | "center" | "right"
type verticalProps = "top" | "center" | "bottom"

type PositionProps = {
    position: Exclude<`${horizontalProps}-${verticalProps}`, "center-center"> | "center" 
}

function Template({position}: PositionProps) {
  return (
    <div className={`${position}`}>Template String</div>
  )
}

export default Template