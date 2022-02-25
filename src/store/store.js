import { action, createStore } from 'easy-peasy';
import Swal from 'sweetalert2';


const store = createStore({
    contadores: [],

    clickContador: action((state) => {

        if(state.contadores.length === 5){
          Swal.fire('Máximo 5 items');
          return;
        }

      const payload = {
        id:new Date().getTime(),
        tipo: 'TIMER'
      }  

      state.contadores = [...state.contadores, payload];
    }),

    clickCountDown: action((state) => {

        if(state.contadores.length === 5){
          Swal.fire('Máximo 5 items');
          return;
        }

      const payload = {
        id:new Date().getTime(),
        tipo: 'REGRESIVA'
      }
      
      state.contadores = [...state.contadores, payload];
    }),

    borrar: action((state, id) => {
      
      state.contadores = state.contadores.filter(n=> n.id !== id);
    }),

    clickReset: action((state) => {
      
      state.contadores = [];
    }),
  });

  export default store;