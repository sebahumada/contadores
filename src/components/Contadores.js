import React, { useReducer, useState } from 'react';

import { Contador } from './Contador';
import { Regresiva } from './Regresiva';
import { useDateTime } from './../hooks/useDateTime';
import { contadorReducer } from '../reducers/contadorReducer';

export const Contadores = () => {

    const [oscuro, setOscuro] = useState({modo: 'claro', texto: 'Activa Oscuro', clase: 'btn btn-'});

    
    const {fecha}= useDateTime();

    const initState = ()=>{
        return [];
    }

    const [contadores, dispatch] = useReducer(contadorReducer, [], initState);


    const clickContador = ()=>{
        const i=new Date().getTime();
        dispatch({
            type:'agregar',
            payload:{
                id:i,
                tipo:'TIMER'
            }
        });
    }

    const clickCountDown = ()=>{
        const i=new Date().getTime();
        dispatch({
            type:'agregar',
            payload:{
                id:i,
                tipo:'REGRESIVA'
            }
        });
    }

    const clickReset = ()=>{
        dispatch({
            type:'reiniciar'            
        });
    }

    const borrar = (n)=>{

        console.log(contadores);
        console.log(n);

        dispatch({
            type:'borrar',
            payload:n
        });
    }

    const oscurecer =()=>{

        if(oscuro.modo==='claro'){
            setOscuro({modo: 'oscuro', texto: 'Activa Claro', clase: 'btn btn-outline-'});
            document.querySelector('body').className ='container mt-4 bg-black text-info';
            
            
        } else {
            setOscuro({modo: 'claro', texto:'Activa Oscuro', clase: 'btn btn-'});
            document.querySelector('body').className='container mt-4';
            
        }
    }
    

    return (
        <div>
            
            <button type="button" className={ `${oscuro.clase}info` } onClick={oscurecer}>{oscuro.texto}</button>
            <h1>Timers</h1>
            <h5>{fecha}</h5>
            
            <button type="button" className={ `${oscuro.clase}success me-1 mt-1` } onClick={clickContador}>Agregar Timer</button>
            
            <button type="button" className={ `${oscuro.clase}danger me-1 mt-1` } onClick={clickCountDown}>Agregar Cuenta Regresiva</button>

            <button type="button" className={ `${oscuro.clase}primary me-1 mt-1` } onClick={clickReset}>Resetear</button>
            <br />
            <hr />

            <div className="d-flex flex-column">
            {
                contadores.map((n, index)=> (

                    (n.tipo ==='TIMER')?

                    (<Contador key={n.id} id={n.id} nro={index} borrar={borrar} oscuro={oscuro.clase} />):
                    (<Regresiva key={n.id} id={n.id} nro={index} borrar={borrar} inicio={10} oscuro={oscuro.clase}/>)
                ))
            }
            </div>
            
           
            
        </div>
    )
}
