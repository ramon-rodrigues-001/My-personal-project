import React from 'react'

export default function Destaque(props) {


    return(
        <div id="destaque">
            
            <div id='text-destaques'>
                <h2>Destaques para o dia das mães</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium distinctio illo qui similique dolorum ducimus at velit, assumenda obcaecati quisquam quo cum molestias quibusdam. Quo repudiandae dicta aspernatur sit.</p>
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