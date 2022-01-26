import React from 'react'
import { calcularTiempo } from '../helpers/tiempo.js';
import { useTimer } from './../hooks/useTimer';

export const Contador = ({id, nro, borrar, oscuro}) => {

    
    const { segundos, handlePausa, textoBoton } = useTimer(0);
    const decimales = Number(segundos).toFixed(2).split('.')[1];
    const tiempo = calcularTiempo(Number(segundos).toFixed(2)).concat('.'+decimales);

    return (
        <div key={id} className="flex-grow-1">      
            <h2>{nro+1} - Timer</h2>      
            <h4>{tiempo}</h4>
            {/* <button type="button" className="btn btn-outline-warning me-1" onClick={ handlePausa } > */}
            <button type="button" className={ `${oscuro}warning me-1` } onClick={ handlePausa } >
                {textoBoton}
            </button>
            {/* <button type="button" className="btn btn-outline-danger" onClick={ ()=> borrar(id)} > */}
            <button type="button" className={ `${oscuro}danger` } onClick={ ()=> borrar(id)} >
                Borrar
            </button>
        </div>
    )
}
