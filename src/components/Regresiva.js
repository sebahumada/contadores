import React from 'react'
import { useCountdown } from './../hooks/useCountdown';

export const Regresiva = ({id, nro, borrar, inicio, oscuro}) => {

    const {regresiva, handlePausa, textoBoton, fin, fechaFin} = useCountdown(inicio);

    const fecha=fechaFin?new Date(fechaFin).toLocaleDateString()+' - '+new Date(fechaFin).toLocaleTimeString():''

    return (
        <div key={id} className="flex-grow-1">      
            <h2>{nro+1} - Regresiva: {inicio}s. </h2>      
            <h4>{regresiva} {fecha}</h4>

            {
                    (!fin)?
                        (
                        // <button type="button" className="btn btn-outline-warning me-1" onClick={ handlePausa } >
                        <button type="button" className={ `${oscuro}warning me-1` } onClick={ handlePausa } >
                        {textoBoton}
                        </button>
                        )
                        : (
                            <></>
                        )               
                  
                   
            }

            
            {/* <button type="button" className="btn btn-outline-danger" onClick={ ()=> borrar(id)} > */}
            <button type="button" className={ `${oscuro}danger` } onClick={ ()=> borrar(id)} >
                Borrar
            </button>
        </div>
    )
}
