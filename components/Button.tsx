import React from 'react'

function Button({name,style}:any) {
  return (
    <button style={style ? {
        ...style,
        height:'54px',
        borderRadius:4
    } : {}} >{name}</button>
  )
}

export default Button