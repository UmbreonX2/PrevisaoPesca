const key = 'key=c7cfdecf'
const URL = `https://api.hgbrasil.com/weather?${key}`

async function obterPrevisao(previsao){
    try{
        const response = await axios.get(URL, { params:
            previsao
        })

        console.log(response)

        return response

    } catch (error) {
        // if(URL.cod === '404'){
        //     container.computedStyleMap.height = '400px';
        //     weatherBox.computedStyleMap.display = 'none';
        //     weatherDetails.computedStyleMap.display = 'none';
        //     error404.display.display = 'block';
        //     error404.classList.add('fadeIn');
        //     return;
        // }

        // error404.display.display = 'none';
        // error404.classList.remover('fadeIn');
        return console.log(error);
    }
}

export default obterPrevisao;

