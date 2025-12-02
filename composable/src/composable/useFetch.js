import { onMounted, ref } from "vue"

export function useFetch(url){
    const data = ref(null)
    const error = ref(null)
    const loading = ref(true)

    const fetchData = async () =>{

        loading.value = true
        error.value = null

        try{
            const res = await fetch(url); // await solo funciona si hay un async, sirve para capturar la info
            if(!res.ok){
                throw new Error('Error a la petició:'+ res.status) //si no hi ha resposta positiva salta error
            }
            data.value = await res.json();
            console.log(data.value)    

        }catch (err){
            error.value = err.message 

        } finally {
            loading.value = false // si tot va be deixa de carregar

        }
    }

   onMounted(fetchData) //fa la execució de la funció

   return  {data, error, loading, fetchData} //si quitas el fetchData sigue funcionando
}

