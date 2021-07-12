import React from 'react'
import './Result.css';
import { Card } from '../card/Card';
import { Notification } from '../notification/Notification';
import { AppContext } from "../../context/AppContext";


export const Result =()=>{
    const { searchedText, newListaGifs } = React.useContext(AppContext);

    return(
        <section className="section center flex-column">
            <h3 className="violet-text secundary-title">
                {Object.keys(newListaGifs).length > 0 ? `Resultados de la búsqueda: ${searchedText}` : null}
            </h3>
            <div className="cards-container flex-row">
                {
                    Object.keys(newListaGifs).length > 0 ?
                        newListaGifs.pagination.count === 0 ?
                            <Notification notification={"No se encontraron gifs con la categoría introducida"}/> :
                        
                            newListaGifs.data.map ((objeto)=>{
                                return(
                                    <Card
                                        key={objeto.id}
                                        url={objeto.images.original.url}
                                    />
                                )
                            }) 
                    : <Notification notification={"Por favor realizar una búsqueda"}/>
                }
            </div>
        </section>
    )
}