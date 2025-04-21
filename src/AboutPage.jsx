import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './footer';

function AboutPage() {
    
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"40px"}}>
         <h1 style={{marginTop:"20px"}}>About Page</h1>
         <span style={{ display: "block", maxWidth: "600px", lineHeight: "1.6", color: "#333" }}>
  Привет! Это простое и удобное приложение для заметок, созданное с нуля с использованием React. Оно позволяет быстро сохранять мысли, идеи и задачи, а также редактировать и удалять их в пару кликов.<br /><br />

  Проект сделан как часть моего обучения фронтенду — я постоянно пробую новые технологии, и это приложение помогает мне расти как разработчику.<br /><br />

  <strong>Здесь уже есть:</strong><br />
  • Создание, редактирование и удаление заметок<br />
  • Модальное окно входа<br />
  • Слайдер с авто-прокруткой<br /><br />

  <strong>Планирую добавить:</strong><br />
  • Поиск по заметкам<br />
  • Сохранение заметок через fake API (json-server)<br />
  • Авторизацию с настройками профиля
</span>
         <Footer></Footer>
    </div>
  )
}

export default AboutPage