import React from 'react'
import style from './Campanha.module.css'

const Campanha = (props) => {
    function definirMensagem(mes) {
        if (mes === "setembro") {
            return "Prevenção ao suicídio"
        } else if (mes === "outubro") {
            return "Conscientização sobre câncer de mama"
        }  else if (mes === "novembro") {
            return "Prevenção e combate ao câncer de próstata"
        }
    }

    function definirCor(mes) {
        if (mes === "setembro") {
            return style.setembro
        } else if (mes === "outubro") {
            return style.outubro
        }  else if (mes === "novembro") {
            return style.novembro 
        }
    }
  return (
    <div className={definirCor(props.mes)}>
        {definirMensagem(props.mes)}
    </div>
  )
}

export default Campanha