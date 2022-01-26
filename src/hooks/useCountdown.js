import { useEffect, useState } from 'react'

export const useCountdown = (segundos) => {

    const [regresiva, setRegresiva] = useState(segundos);
    const [pausa, setPausa] = useState(false);
    const [fechaFin, setFechaFin] = useState()

    useEffect(() => {
        const id = setInterval(() => {

            if(!pausa){

                if(regresiva>0 && !fechaFin){
                    setRegresiva(s=> s-1);
                } else {
                    if(!fechaFin){

                        setFechaFin(Date.now()-1000);
                    }
                }
            }
            
        }, 1000);
        return () => {
            clearInterval(id);
        }
    }, [pausa, regresiva, fechaFin]);

    const handlePausa = ()=>{
        setPausa(!pausa);
    }

    return {
        regresiva: regresiva>0?regresiva:'Finalizado',
        handlePausa,
        textoBoton: !pausa? 'Pausar':'Reanudar',        
        fin: regresiva===0?true:false,
        fechaFin
    }
}
