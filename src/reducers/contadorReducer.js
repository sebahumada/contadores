import Swal from 'sweetalert2';



export const contadorReducer = (state = [], action)=>{
    switch (action.type) {
        case 'agregar':       
            if(state.length===5){                    
                Swal.fire('Máximo 5 items');
                return [...state];
                              
            } else {

                return [...state, action.payload]; 
            }

        
        case 'borrar':
            return state.filter(n=> n.id !== action.payload);

        case 'reiniciar':
            return [];
            
        default:
            return state;
    }
}

