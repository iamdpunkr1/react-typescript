import React from 'react'

type childProps = {
    children: React.ReactNode
}

function Child(props: childProps) {
  return (
    <div>{props.children}</div>
  )
}

export default Child