import React from 'react'

type advProps = {
  values: {
    name: string,
    age: number
  }[]
  
}
function Advance(props: advProps) {
  return (
    <ul>
        {props.values.map((item, index) => {
            return <li key={index}>{item.name} - {item.age}</li>
         })
         } 
    </ul>
  )
}

export default Advance