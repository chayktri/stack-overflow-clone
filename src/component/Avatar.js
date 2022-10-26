import React from 'react'

const Avatar = ({children, backgroundColor,px,py,color,borderRadius,fontSize,cursor}) => {
    const style = {
        backgroundColor,
        padding:`${py} ${px}`,
        color:color|| "black",
        borderRadius,
        fontSize:fontSize,    
        cursor:cursor|| null,
    }

  return (
    <div>
      <div style={style}>
        {children}
      </div>
    </div>
  )
}

export default Avatar
