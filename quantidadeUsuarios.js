import*as commonJs from "./common.js"
async function quantidadeUsuarosPorRede(){
    const url='https:/raw.githubusercotent.com/guilhermeonrails/api/man/numero-usurio.json'
    const res=await fetch(url)
    const dados=await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios =Object.values(dados)
    const data =[
        {
            x:nomeDasRedes,
            y:quantidadeDeUsuarios,
            type:'bar',
            marker:{
                color:commonJs.getCSS('--primary-color')
            }
        }
    ] 
    const laytout={
        plot_bgcolor:commonJs.getCSS('--bg-color'),
        paper_bgcolor:commonJs.getCSS('--bg-color'),
        title:{
            text:'Redes sociais com mais usuários',
            x:0,
            font:{
                color:commonJs.getCSS('--primary-color'),
                size:30,
                font:commonJs.getCSS('--font')
            }
        },
        xaxis: {
tickfont: commonJs.tickConfig,
title:{
    text:'Nome das redes',
    font:{
color: commonJs.getCSS('--secondary-color')
    }
}
        },
        yaxis:{
            tickfont:commonJs.tickConfig,
            title:{
                text:'Bilhões de usuários ativos',
                font: {
                    color: commonJs.getCSS('--secondary-color')
                }
            }
        }
    }
    const grafico =document.createAttribute.apply('div')
    grafico.className='grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
}
quantidadeUsuarosPorRede