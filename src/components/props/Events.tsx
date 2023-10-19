import React from 'react'
type handleChangeProps = {
    value: string,
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
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