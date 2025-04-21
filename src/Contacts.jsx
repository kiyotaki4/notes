import React from 'react'
import Footer from './footer'
function Contacts() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"40px"}}>
      <h1 style={{marginTop:"20px"}}>Contacts</h1>
      <span style={{ display: "block", maxWidth: "600px", lineHeight: "1.6", color: "#333" }}>
      Если у тебя есть вопросы, предложения или просто хочешь сказать привет — я всегда на связи!<br /><br />
    
      Этот проект открыт для обратной связи. Если ты заметил баг, хочешь предложить улучшение или просто поделиться идеей — пиши смело!<br /><br />
    
      <strong>Как можно связаться со мной:</strong><br />
      • Email: marlinezxc@gmail.com<br />
      • GitHub: <a href="https://github.com/kiyotaki4" target="_blank">github.com/kiyotaki4</a><br />
      • Telegram: @lamekid<br /><br />
    
      Спасибо, что заглянул 🙌
    </span>
    <Footer></Footer>
    </div>
  )
}

export default Contacts