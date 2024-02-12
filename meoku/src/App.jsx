import './App.css'
import React from 'react';
import logo_font from './images/logo_font.png'
import logo_img from './images/logo_img.png'

function App() {

    return (
        <div className="App">
            <div className="nav">
                <div className='logo'>
                    <img src={logo_img} width="36px" height="41px" />
                    <img src={logo_font} width="202px" height="28px" />
                </div>
                <div className='menu'>
                    <p>구내식당표</p>
                </div>
                <div className='menu'>
                    <p>맛집리스트</p>
                </div>
                <div className='menu'>
                    <p>AI 추천</p>
                </div>
            </div>
        </div>
    )
}

export default App
