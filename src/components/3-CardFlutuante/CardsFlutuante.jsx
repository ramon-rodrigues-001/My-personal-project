import React from 'react'

export default function CardsFlutuante() {
    return (
        <div id="CardsFlutuante">
            <div className='cards' id='card-1'>
                <div id='icone'>
                    <img src="./src/assets/icon-check.webp" alt="Icon Check" id='img-check' />
                    <div>
                        <h2>100% SEGURO</h2>
                        <p>Segurança Nas Entregas</p>
                    </div>
                </div>
                <div id='text-card'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, voluptates? Eum ea labore, culpa totam dolores cupiditate non blanditiis, consequatur recusandae ipsam at molestias perferendis, distinctio eius. Quod, ea quasi?</p>
                </div>
            </div>
            <div className='cards' id='card-2'></div>
            <div className='cards' id='card-3'></div>
        </div>
    )
}