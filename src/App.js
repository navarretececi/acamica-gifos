import './App.css';
import { useState, useEffect } from 'react';
import { Nav } from './components/nav/Nav';
import { Result } from './components/result/Result';
import { Header } from './components/header/Header';
import { Loading } from './components/loading/Loading';

function App() {

  const [search, setSearch] = useState(false)
  const [input, setInput] = useState("")
  const [autocomplete, setAutocomplete] = useState ([])
  const [newListaGifs, setNewListaGifs] = useState({})
  const [theme, setTheme] = useState('light');
  const [searchedText, setSearchedText] = useState("")
  console.log("autocomplete, ", autocomplete)

  const handlerInput =(e)=> {
    setInput(e.target.value);
    // setAutocomplete(e.target.value);
  }
  const handlerTheme = () => {
     theme === "light" ? setTheme("dark") : setTheme("light")
  }
  const handlerSearch =()=>{
    setSearch(true);
    setSearchedText(input)
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
      setAutocomplete([])
    })
    .catch((error)=>console.log(error))
  }
},[search])

useEffect (()=>{
  if(input){
    fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=kIliylsUejr8imYFuIhiOJ0qCHqgYDD7&q=${input}&limit=4&offset=0`)
    .then((response)=> response.json())
    .then((data)=> {
      setAutocomplete(data.data)
    })
    .catch((error)=>console.log(error))
  }
},[input])

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
        autocomplete={autocomplete}
        setAutocomplete={setAutocomplete}
      />
      {
        search ? <Loading /> :
                              <Result 
                                newListaGifs={newListaGifs}
                                searchedText={searchedText}
                              />
     }
      </div>
    </div>
  );
}

export default App;
