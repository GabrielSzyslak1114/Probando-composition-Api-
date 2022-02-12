import {ref} from 'vue';
export default function useContador(){
      // CONFIGURACIONES DE CONTADOR
  const contador = ref(0);
  const aumentar = ()=> contador.value ++
  const disminuir = ()=> contador.value --
  return{contador,aumentar, disminuir}
}