import React, { Component, getScroll } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Scroll: ''
        }
    }




    functionScroll = ()=> {
        const scroll = document.documentElement.scrollTop

        this.setState(state => ({
            Scroll: scroll
        }))
    }




    chamarScroll = window.onscroll = ()=> {
        scroll = this.functionScroll()
    }




    chamarMenuLateral = () => {
        // document.addEventListener('click', () => {
        //     for (i in link) {
        //     if (link[i] == event.target) {
        //         leftMenu.style.left = "-300px";
        //         menu.style.zIndex = '1';
        //     }
        //     }
        // });
        // document.addEventListener('play', () => {
        //     for (i in video) {
        //     if (video[i] == event.target) {
        //         video[i].play();
        //     } else {
        //         video[i].pause();
        //     }
        //     }
        // }, true);
        menu.onclick = () => {
            leftMenu.style.left = "0px";
            menu.style.zIndex = '-1';
        };
        closeMenu.onclick = () => {
            leftMenu.style.left = "-300px";
            menu.style.zIndex = '1';
        };
    }




    render() {
        if (this.state.Scroll < .5) {
            return (
                <header id="header">
                    <nav id='nav'>
                        <h1>Flor De Liz</h1>
                        <button id='icon-carrinho'>
                            <i className="bi bi-cart4"></i>
                        </button>
                    </nav>
                    <div id='extensao_nav' className='ativo'>
                        <ul>
                            <li>CATEGORIA</li>
                            <li>FLORES</li>
                            <li>LOCALIDADE</li>
                            <li>CONTATOS</li>
                        </ul>
                    </div>
                </header>
            )
        }
        else {
            return (
                <header id="header">
                    <nav id='nav'>
                        <h1>Liz</h1>
                        <button id='icon-carrinho'>
                            <i className="bi bi-cart4"></i>
                        </button>

                        <div id='leftMenu'>
                            <h1 id='logo-menu-lateral'>Flor De Liz</h1>
                            <button id='closeMenu'></button>
                            <button><a href="#">CATEGORIA</a></button>
                            <button><a href="#">FLORES</a></button>
                            <button><a href="#">LOCALIDADE</a></button>
                            <button><a href="#">CONTATOS</a></button>
                        </div>

                        <button id='menu' onClick={()=>{this.chamarMenuLateral()}}></button>
                    </nav>
                    <div id='extensao_nav' className='passivo'>
                        
                    </div>
                </header>
            )
        }
    }
}



// CSS==================



// HTML==================



// SCRIPT========================
