import './Result.css';
import { Card } from '../card/Card';
import { Notification } from '../notification/Notification';

export const Result =(props)=>{
    return(
        <section className="section center flex-column">
            <h3 className="violet-text secundary-title">
                {Object.keys(props.newListaGifs).length > 0 ? "Resultados de la búsqueda" : null}
            </h3>
            <div className="cards-container flex-row">
                {
                    Object.keys(props.newListaGifs).length > 0 ?
                        props.newListaGifs.pagination.count === 0 ?
                            <Notification notification={"No se encontraron gifs con la categoría introducida"}/> :
                        
                            props.newListaGifs.data.map ((objeto)=>{
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