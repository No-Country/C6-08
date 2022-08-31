import React from 'react'

const Message = ({msg,bgColor}) => {
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: bgColor,
        margin: "0 auto",
        marginTop: "1rem" 
    }
  return (
    <div style={styles}>
        <p>{msg}</p>
    </div>
  )
}

export default Message