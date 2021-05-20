import React from 'react'
import style from './habilitycard.module.css'

export function HabilityCard(props){
  return(
    <div className={style.container}>
    <div className={style.cntimg}>
    <img src={props.url} alt="" className={props.height ? style.fimg : style.img}/>
    </div>
    <span>{props.name}</span>
    </div>
  )
}
