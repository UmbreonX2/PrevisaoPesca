
import obterPrevisao from "./api.js"

async function obterCidade(cidade){
    try {
        const previsao = {
            
            city_name: cidade
        }
        
        const result = await obterPrevisao(previsao)
        
        return result

    } catch (error) {
        console.log('Erro 404', error)
    }

}

export default obterCidade;

