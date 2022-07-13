import React from 'react'

export default function Footer() {
  let footerStyle= {
    position: "relative",
    width: "100%",
    top: "100%",
    marginTop:"115px",
   }
  return (
    <div className="bg-dark text-light text-center py-3" style={footerStyle}>&copy; 2022 Copyright:
    <a href="/"> myReact.Todos.com</a>
    </div>
  )
}
