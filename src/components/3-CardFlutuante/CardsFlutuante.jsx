import React from 'react'

export default function CardsFlutuante() {
    return (
        <div id="CardsFlutuante">
            <div className='cards' id='card-1'>
                <img src="./src/assets/icon-check.webp" alt="Icon Check" id='img-check' />
                <div>
                    <h2>100% SEGURO</h2>
                    <p>Segurança Nas Entregas</p>
                </div>
            </div>
            <div className='cards' id='card-2'>
                <img src="./src/assets/icon-qualidade.png" alt="Icon Qualidade" id='img-check' />
                <div>
                    <h2>Qualidade</h2>
                    <p>Qualidade É Nosso Foco</p>
                </div>
            </div>
            <div className='cards' id='card-3'>
                <img src="./src/assets/icon-vaso.png" alt="Icon vaso de planta" id='img-check' />
                <div>
                    <h2>Experiência</h2>
                    <p>+4 anos de experiência</p>
                </div>
            </div>
        </div>
    )
}