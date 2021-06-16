import './App.css';
import { useState, useEffect } from 'react';
import { listaGifs } from './data/data';
import { Nav } from './components/nav/Nav';
import { Result } from './components/result/Result';
import { Header } from './components/header/Header';

function App() {

  const[searchState, setSearchState] = useState("")
  const [newlistaGifs, setNewlistaGifs] = useState([])
  const [theme, setTheme] = useState('light');
  
  const handlerSearchState =(e)=> {setSearchState(e.target.value)}
  const handlerTheme = () => {
     theme === "light" ? setTheme("dark") : setTheme("light")
  }



  useEffect (()=>{
     const filterBySearch = (gif) => {return (searchState === [] ? [] : gif)} 

     if(searchState) {
       let filterlistaGifs = listaGifs.filter (gif =>{
          return(
            filterBySearch(gif)
          )
        })
        setNewlistaGifs(filterlistaGifs)
      }
    
  } ,[searchState])

  return (
    <div /* className="App center" */ className={`App ${theme} center`}>
      <div className="principal-container">
      <Header 
        theme={theme}
        handlerTheme={handlerTheme}
      />
      <Nav 
        searchState={searchState}
        handlerSearchState={handlerSearchState}
      />
      <Result 
        newlistaGifs={newlistaGifs}
      />
      </div>
    </div>
  );
}

export default App;
