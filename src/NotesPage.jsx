import React from 'react'
import { useEffect, useState,useRef } from 'react'
import { Link } from 'react-router-dom';
import Footer from './footer';
function NotesPage() {
    const [select, setSelect] = useState({name:"deleted.404" ,content:"deleted.404"})
    const [notesArray, setNotesArray] = useState([
      { id: Date.now(), rating: 0, name: "Milk", content: "Fresh milk straight from the farm, perfect for your morning coffee.", createdAt: Date.now() },
      { id: Date.now() + 1, rating: 0, name: "Cow", content: "Cows are essential for milk production and play a big role in farming.", createdAt: Date.now() },
      { id: Date.now() + 2, rating: 4, name: "Meat", content: "Meat is a great source of protein, but it's important to consume it in moderation.", createdAt: Date.now() },
      { id: Date.now() + 3, rating: 5, name: "Pig", content: "Pigs are intelligent animals, often used in farming for their meat, like bacon.", createdAt: Date.now() },
      { id: Date.now() + 4, rating: 0, name: "Bus", content: "Public buses are a great way to get around the city, eco-friendly and affordable.", createdAt: Date.now() },
      { id: Date.now() + 5, rating: 0, name: "Apple", content: "An apple a day keeps the doctor away! Rich in vitamins and fiber.", createdAt: Date.now() },
      { id: Date.now() + 6, rating: 6, name: "Stone", content: "Stones are naturally occurring solid aggregates of minerals or mineraloid matter.", createdAt: Date.now() },
      { id: Date.now() + 7, rating: 0, name: "Fire", content: "Fire can provide warmth, but it's also a powerful force that can cause destruction.", createdAt: Date.now() },
      { id: Date.now() + 8, rating: 7, name: "Wind", content: "Wind is a natural phenomenon caused by the movement of air, and it's essential for our weather patterns.", createdAt: Date.now() },
      { id: Date.now() + 9, rating: 0, name: "Water", content: "Water is essential for life, hydrating the body and supporting all living organisms on Earth.", createdAt: Date.now() }
    ]);

  useEffect(()=>{
    const savedArray = localStorage.getItem("myArray");
    if(savedArray){
      setNotesArray(JSON.parse(savedArray));
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("myArray",JSON.stringify(notesArray))
  },[notesArray])


  const changeNote = (e) =>{
const updatedContent = e.target.value;
setSelect((prev)=>({...prev,content:updatedContent}));
setNotesArray((prevNotes) =>
  prevNotes.map((note) =>
    note.id === select.id ? { ...note, content: updatedContent } : note
  ))
  }
  const changeName= (e) =>{
    const updatedName=e.target.value;
    setSelect((prev)=>({...prev,name:updatedName}));
    setNotesArray((prevNotes)=>
    prevNotes.map((note)=>
    note.id === select.id ? {...note,name:updatedName}:note
    )
    )
  }

  const removeNote = (index) =>{
    const tempArray =  notesArray.filter((e)=>e.id!==(index))
    
    setNotesArray(tempArray)
    setSelect({name:"deleted.404",content:"deleted.404"})

  }
  const createNote = ()=>{
    let newElement= {id: Date.now(), name:"Новая заметка", content:"Напишите что нибудь"}
    const tempArray= [...notesArray, {id: Date.now(), name:"Новая заметка", content:"Напишите что нибудь"}]
    setNotesArray(tempArray)
    setSelect(newElement)
  }
 
  const [isSelected,setIsSelected]=useState(false)
  useEffect(()=>{
    if(select.name==="deleted.404"){
      setIsSelected(false)
      console.log("404 eroor")
    }
    else{
      setIsSelected(true)
      console.log("yo no error yooo")
    }
    

  },[select])
  const [isModal,setIsModal]=useState(false)
  const toggleModal = () =>{
    setIsModal(!isModal)
  }
  const colors = ["#ff6b6b", "#feca57", "#1dd1a1", "#54a0ff", "#5f27cd"];

    
  const slides = [
    {
      title: "Добро пожаловать!",
      content: "Это ваш первый шаг в создании заметок. Мы поможем вам организовать ваши мысли и задачи!",
      backgroundColor: "#ff6b6b", // Красный
    },
    {
      title: "Как начать?",
      content: "Создайте новую заметку, добавьте текст и выберите рейтинг. Не забудьте сохранять ваши заметки!",
      backgroundColor: "#feca57", // Желтый
    },
    {
      title: "Особенности",
      content: "Легкий интерфейс, возможность ставить рейтинг и редактировать заметки в любое время.",
      backgroundColor: "#1dd1a1", // Зеленый
    },
    {
      title: "Начни использовать!",
      content: "Готовы попробовать? Перейдите на страницу заметок и создайте свою первую заметку уже сейчас!",
      backgroundColor: "#54a0ff", // Голубой
    },
  ];
// ------------------------------------------------
const [curr,setCurr] = useState(0)
const prev = () =>{
  setCurr((curr)=> (curr===0?slides.length-1:curr-1))
  console.log(curr)
}
const next = () =>{
  setCurr((curr)=> (curr===slides.length-1?0:curr+1))
  console.log(curr)

}
useEffect(()=>{
  const slideInterval = setInterval(next,3000)
  return () => clearInterval(slideInterval)
},[])
const [stars,setStars] = useState(Array(10).fill(false))
  const updateStars = (index) => {
    const tempArray = stars.map((_,i)=>i<=index);
    setStars(tempArray)
  }
const [timer,setTimer]=useState(null)
const handleMouseLeave = () =>{
  if(timer) clearTimeout(timer);
  const newTimer = setTimeout(()=>{
    setStars(Array(10).fill(false))
  },2000)
  setTimer(newTimer)
}
// const [isRated,setIsRated] = useState(true)
const rateNote = (noteId,newRating) => {
  setNotesArray(prevNotes=>prevNotes.map(note=>note.id===noteId?{...note,rating: newRating}:note))
  // setIsRated(!isRated)
  setSelect(prevSelect => 
    prevSelect.id === noteId ? { ...prevSelect, rating: newRating } : prevSelect
  );
}

const handleStarClick = (index) =>{
  const newRating = index+1;
  rateNote(select.id,newRating)
}
const timeAgo = (timestamp) => {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000); // 60000 миллисекунд = 1 минута
  const hours = Math.floor(diff / 3600000); // 3600000 миллисекунд = 1 час
  const days = Math.floor(diff / 86400000); // 86400000 миллисекунд = 1 день

  if (minutes < 1) return "Только что";
  if (minutes < 60) return `${minutes} минут назад`;
  if (hours < 24) return `${hours} часов назад`;
  return `${days} дней назад`;
};
  return (
    (
        <>
          <div className="Main-page">
            {/* ------------------------------------------- */}
            <div className="leftbar">
            <h1 style={{marginBottom:"20px",marginLeft:"0"}}>Notes <img src="pinklogo.png" alt="" /></h1>
            <div className="App-container">
              <div className="notes-list">
                  <span className="today-span">History 📝</span>
                <button onClick={()=>createNote()} >Create note</button>
                
                <div className="notes-container">
                  {notesArray.map((s,index)=>(
                  <div
                  key={s.id}
                  onClick={() => setSelect(s)}
                  className="note-div"
                  style={{ cursor: "pointer" }}
                >
                  <span style={{ color: colors[index % colors.length], marginRight: "6px" }}>•</span>
                  {s.name}
                </div>
              )).reverse()}
                </div>
                {/* <div className="navigation">
                <Link to="/" style={{color:"#a2d5f2"}}>Main page</Link>
                <Link to="/about" style={{color:"#a2d5f2"}}>About us</Link>
                <Link to="/contacts" style={{color:"#a2d5f2"}}>Contacts</Link>
                <a href="https://github.com/kiyotaki4" style={{color:"#a2d5f2"}}>My github @kiyotaki4</a>
                </div> */}
              </div>
              </div>
              </div>
              {isModal && (<div className="modal">
                <div className="modal__main">
                  <button className="close" onClick={toggleModal}>x</button>
                  <h1 className="modal_h1" style={{color:"#515151", marginBottom:"60px",fontSize:"50px", marginTop:"10px"}}>Login</h1>
                  <input type="email" placeholder='Login' style={{width:"100%",height:"10%",paddingLeft:"10px"}}/>
                  <input type="password" placeholder='Password' style={{width:"100%",height:"10%",paddingLeft:"10px"}}/>
                  <button style={{marginTop:"20px",width:"100%",height:"15%",fontSize:"25px"}}>Sign in</button>
                </div>
              </div>)}
    
            {/* ------------------------------------------- */}
    
             {isSelected?(
                
                <div className="note">
              <div className="nav">
              <textarea name="" id="" value={select.name} onChange={changeName}
                style={{
                  paddingLeft:"0px",
                  height: '50px',
                  // width: '15%',
                  fontSize: '40px',
                  fontWeight:"500",
                   resize: 'none',
                  boxSizing: 'border-box',
                  border:"none",
                  outline:"none",
                  background:"transparent",
                  color:"#696969",
                  // marginBottom:"60px",
                }}
                />
                <div className="login-container" >
                <button onClick={toggleModal}>Login</button>
                <img src="profile.jpg" alt="" />
                </div>
                
              </div>
                
                  
                <div className="rating__container">
                  
                  {
                  [...Array(10)].map((_,index)=>
                    <span key={index}  style={{cursor:"pointer",width:"20px",height:"20px"}}
                  onClick={()=>handleStarClick(index)}
                    className='stars'

                    >
                     {index < select.rating ? (
        <img src="star-full.svg" alt="full star" />
      ) : (
        <img src="star-empty.svg" alt="empty star" />
      )}
                     
                  </span>
               
                )}
                  
                
                  
                </div>
                
                <p className="symparagraph" style={{color:"#7f8c8d"}}>{new Date().toLocaleString()}</p>
    
                <p className="symparagraph" style={{color:"#34495e"}}>Символов: {select.content.length} (С пробелами и переносами)</p>
                  <textarea
                    style={{
                      height: '400px',
                      width: '90%',
                      padding: '5px 10px',
                      borderRadius:"3px",
                      lineHeight: '1.5',
                      fontSize: '16px',
                      // resize: 'none',
                      boxSizing: 'border-box',
                      background:"#fff",
                      color:"rgb(50, 49, 51)",
                      outline:"none",
                      border:"2px solid rgb(207, 207, 207)",
                    }}
                    value={select.content}
                    onChange={changeNote}
                  />
                    
                  
                  <div className="btn-container"><p className="symparagraph" style={{color:"#f39c12"}}>Создано {timeAgo(select.id)}</p> <button onClick={()=>removeNote(select.id)}>Delete note</button></div>
                  <div className="slider-wrapper" style={{marginTop:"200px"}}>
                      <div className="slider-track" style={{transform:`translateX(-${curr*100}%)`,transition: 'transform 0.7s ease' }}>
                     
                        {slides.map((e,i)=>

                          <div className="slide" key={i} style={{backgroundColor:`${e.backgroundColor}`}}>
                            <h1 style={{fontSize:"70px",margin:"20px 0 50px"}}>{e.title}</h1>
                           <p style={{fontSize:"40px"}}>{e.content}</p>
                            </div>
                        )}
                      </div>
                      <div className="slider-btn">
                    <button onClick={prev}>left</button>
                    <button onClick={next}>right</button>
                    </div>
                    </div>
                  <Footer style={{paddingLeft:"200px"}}/>  
                  </div>
                  
                ):
                  <div className='container-404'>
                    <div className="nav" style={{width:"100%",marginBottom:"20px"}}>
                      
                <textarea name="" id="" value={select.name} onChange={changeName}
                  style={{
                    paddingLeft:"0px",
                    height: '50px',
                    // width: '15%',
                    fontSize: '40px',
                    fontWeight:"500",
                    resize: 'none',
                    boxSizing: 'border-box',
                    border:"none",
                    outline:"none",
                    display:"none",
                    background:"transparent",
                    color:"#696969",
                    // marginBottom:"60px",
                  }}
                  />
                  <a href="http://google.com"></a>
                  <div className="login-container" style={{paddingRight:"50px"}}>
                  <button onClick={toggleModal}>Login</button>
                  <img src="profile.jpg" alt="" />
                  </div>
                  
                </div>
              <div className="firstBlock">
                    <h1 style={{color:"black",fontWeight:"400",marginBottom:" 5px"}}>Note is not found.</h1>
                    <p style={{marginBottom:"30px"}}>Create or choose any note</p>
                    <img src="lego404.jpg" alt="" style={{marginBottom:"50px"}}/>
                    <button onClick={()=>createNote()} >Create note</button>
                    </div>
                    {/* ----------------------- */}
                    {/* <Footer/> */}
                    <div className="slider-wrapper" >
                      <div className="slider-track" style={{transform:`translateX(-${curr*100}%)`,transition: 'transform 0.7s ease' }}>
                     
                        {slides.map((e,i)=>

                          <div className="slide" key={i} style={{backgroundColor:`${e.backgroundColor}`}}>
                            <h1 style={{fontSize:"70px",margin:"20px 0 50px"}}>{e.title}</h1>
                           <p style={{fontSize:"40px"}}>{e.content}</p>
                            </div>
                        )}
                      </div>
                      <div className="slider-btn">
                    <button onClick={prev}>left</button>
                    <button onClick={next}>right</button>
                    </div>
                    </div>
                    
                      <Footer style={{paddingLeft:"200px"}}/>
                  </div>
                  
                
    }
          </div>
        </>
      )
  )
}

export default NotesPage