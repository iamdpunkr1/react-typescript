import React from 'react'
type ErrorProps = {
    error: string
}

function TextError({error}:ErrorProps) {
  return (
    <div className="error">{error}</div>
  )
}

export default TextError