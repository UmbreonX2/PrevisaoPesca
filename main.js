import obterCidade from "./cidade.js";

const container = document.querySelector('.container');
const search = document.querySelector('.procurar button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');


async function main(){
    try {
            const cidade = document.querySelector('.procurar input').value;

            console.log(cidade)
        
            if(cidade== '')
                return;
            

            const result  = await obterCidade(cidade)

            console.log(result);

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperatura');
            const descricao = document.querySelector('.weather-box .descricao');
            const umidade = document.querySelector('.weather-details .umidade span');
            const vento = document.querySelector('.weather-details .vento span');
        
            image.src = `https://assets.hgbrasil.com/weather/icons/conditions/${result.data.results.condition_slug}.svg`;
            console.log(result.data.results.condition_slug)
            temperature.innerHTML = `${parseInt(result.data.results.temp)}<span>ºC</span>`;
            descricao.innerHTML = `${result.data.results.description}`;
            umidade.innerHTML = `${result.data.results.humidity}%`;
            vento.innerHTML =`${(result.data.results.wind_speedy)}`;
    
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '620px';

        } catch (error) {
        console.log('Erro 404', error)
    }

}

search.addEventListener('click', main)