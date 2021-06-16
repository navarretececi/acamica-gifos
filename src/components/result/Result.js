import './Result.css';
import { Card } from '../card/Card';

export const Result =(props)=>{
    console.log(props.newlistaGifs)
    return(
        <section className="section center flex-column">
            <h3 className="violet-text secundary-title">Resultados de la búsqueda</h3>
            <div className="cards-container flex-row">
                {
                    props.newlistaGifs.map ( gif =>{
                        return(
                            <Card 
                                key={gif.id}
                                url={gif.url}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}