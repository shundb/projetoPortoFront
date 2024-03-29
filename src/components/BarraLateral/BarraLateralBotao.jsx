import React from 'react'
import './BarraLateralBotao.scss'

function BarraLateralBotao(props) {
    
    return (
        <div className="side-bar__button" onClick={props.uiOpen} style={{ backgroundColor: props.isSelected === props.number ? '#DC3545' : ''}}>
            <i>{props.icon}</i>
            <span>{props.text}</span>
        </div>
    )
}

export default BarraLateralBotao;