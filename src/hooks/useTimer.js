import { useEffect, useState } from 'react';

export const useTimer = () => {

    
    const [segundos, setSegundos] = useState(0);
    const [pausa, setPausa] = useState(false);

    useEffect(() => {
        const id = setInterval(() => {

            if(!pausa){
                setSegundos(s=> s+0.01);
            }
        }, 10);
        return () => {
            clearInterval(id);
        }
    }, [pausa]);

    const handlePausa = ()=>{
        setPausa(!pausa);
    }


    return {
        segundos,
        handlePausa,
        textoBoton: !pausa? 'Pausar':'Reanudar'        
    }
}
