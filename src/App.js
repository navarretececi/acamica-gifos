import './App.css';
import { useState, useEffect } from 'react';
import { Nav } from './components/nav/Nav';
import { Result } from './components/result/Result';
import { Header } from './components/header/Header';
import { Loading } from './components/loading/Loading';

function App() {

  const [search, setSearch] = useState(false)
  const [input, setInput] = useState("")
  const [newListaGifs, setNewListaGifs] = useState({})
  const [theme, setTheme] = useState('light');
  const [serchedText, setSerchedText] = useState("")

  console.log(`soy el text serched, ${serchedText}`)

  const handlerInput =(e)=> {
    setInput(e.target.value);
  }
  const handlerTheme = () => {
     theme === "light" ? setTheme("dark") : setTheme("light")
  }
  const handlerSearch =()=>{
    setSearch(true);
    setSerchedText(input)
  }

useEffect (()=>{
  if(search){
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=kIliylsUejr8imYFuIhiOJ0qCHqgYDD7&q=${input}&limit=12&offset=0&rating=g&lang=en
    `)
    .then((response)=> response.json())
    .then((data)=> {
      setNewListaGifs(data)
      setSearch(false)
      setInput("")
    })
    .catch((error)=>console.log(error))
  }
},[search])

  return (
    <div className={`App ${theme} center`}>
      <div className="principal-container">
      <Header 
        theme={theme}
        handlerTheme={handlerTheme}
      />
      <Nav 
        input ={input}
        handlerInput={handlerInput}
        handlerSearch={handlerSearch}
      />
      {
        search ? <Loading /> :
                              <Result 
                                newListaGifs={newListaGifs}
                                serchedText={serchedText}
                              />
     }
      </div>
    </div>
  );
}

export default App;
