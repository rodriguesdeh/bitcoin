

const lblBTC = document.getElementById('lblBTC');
const btnConsultar = document.getElementById('btnConsultar');

const API = axios.create({
    baseURL:'https://www.mercadobitcoin.com.br/api/BTC/ticker/'
});

async function consultarBTC(){
    const response = await API.get();
    console.log(response.data.ticker.high);
    lblBTC.innerHTML = response.data.ticker.high;
}

btnConsultar.onClick = ()=>{
    consultarBTC();
}