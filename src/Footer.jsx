import React from 'react'
import { Link } from 'react-router-dom'

function Footer({ style }) {
  return (
    <div className="footercss" style={style}>
      <img src="footer.jpg" alt="" />
      <div className="footer-nav">
    <Link to="/" style={{color:"#fff"}}>Main page</Link>
    <Link to="/about" style={{color:"#fff"}}>About us</Link>
    <Link to="/contacts" style={{color:"#fff"}}>Contacts</Link>
    <a href="https://yakutsk.hh.ru/resume/a7162627ff0e86b8a20039ed1f6d536d5a4c52" style={{color:"#fff"}}>Hire me</a>
    <a href="https://github.com/kiyotaki4" style={{color:"#fff"}}>github: @kiyotaki4</a>
    </div>
</div>
  )
}

export default Footer