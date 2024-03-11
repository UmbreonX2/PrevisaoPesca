const container = document.querySelector('.container');
const procurar = document.querySelector('.procurar');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

procurar.addEventListener('click', () =>{
    
    const APIKey = '71b5825d';
    const city = document.querySelector('.procurar input').ariaValueMax;

    if(city== '')
        return;

    fetch(`https://api.hgbrazil.com/weather`).then(response => response.json()).then
    (json => {
        if(json.cod === '404'){
            container.computedStyleMap.height = '400px';
            weatherBox.computedStyleMap.display = 'none';
            weatherDetails.computedStyleMap.display = 'none';
            error404.display.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.display.display = 'none';
        error404.classList.remover('fadeIn');

        const image = document.querySelector('weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const descricao = document.querySelector('.weather-box .description');
        const umidade = document.querySelector('.weather-details .umidade span');
        const vento = document.querySelector('.weather-details .vento span');

        switch (json.wather[0].main){
            case 'Clear':
                image.src = 'images/clear.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/snow.png';
                break;

            case 'Clouds':
                image.src = 'images/cloud.png';
                break;

            case 'Haze':
                image.src = 'images/haze.png';
                break;

            default:
                image.src = '';
        }
        
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>ºC</span>`;
        descricao.innerHTML = `${json.weather[0].descricao}`;
        umidade.innerHTML = `${json.main.umidade}%`;
        vento.innerHTML =`${parseInt(json.vento.speed)}Km/h`;

        weatherBox.computedStyleMap.display = '';
        weatherDetails.computedStyleMap.display = '';
        weatherBox.classList.add(fadeIn);
        weatherDetails.classList.add('fadeIn');
        container.computedStyleMap.height = '590px';

    });
});