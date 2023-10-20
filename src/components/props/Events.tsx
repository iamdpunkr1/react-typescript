import React from 'react'
import { Change } from './Event.types'
type handleChangeProps = {
    value: string,
    handleChange: (e:Change) => void,
    handleClick: () => void
}

function Events(props: handleChangeProps) {
  return (
    <div>
        <input type="text"
         value={props.value}
         onChange={(e) => props.handleChange(e)}/>

         <button onClick={props.handleClick}>Click</button>
    </div>
  )
}

export default Events