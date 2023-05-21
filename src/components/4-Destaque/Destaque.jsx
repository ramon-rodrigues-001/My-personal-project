import React from 'react'

export default function Destaque(props) {


    return(
        <div id="destaque">
            
            <div id='text-destaques'>
                <h2>Destaques para o dia das mães</h2>
                <p>
                    Surpreenda sua mãe no Dia das Mães com a delicadeza e beleza das rosas,
                    Nossas rosas para o Dia das Mães são cuidadosamente cultivadas, selecionadas e entregues frescas, garantindo a máxima qualidade e durabilidade.</p>
            </div>

            <div id='cards'>
                {props.link.map((index) => {
                    return(
                        <div id='card-vaso-destaque'>
                            <h3>EM DESTAQUE</h3>
                            <img src={index} alt="Destaque" id='img-vaso-destaque' />
                            <img src="/src/assets/ribbons.png" alt="Ribbon" className='ribbons'/>
                            <button id='comprar' className='destaque'>Ver Produto</button>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}
// 