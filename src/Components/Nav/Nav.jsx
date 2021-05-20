import {React} from 'react'
import style from './nav.module.scss'
import { Link } from "react-scroll";

export function Nav() {

  const widthSize = window.innerWidth
  console.log(widthSize)
//630
    return(
        <div className={style.container}>

        <div className={style.nav}>
        <div>
          <span className={style.block}><Link to="about" smooth={true}>SOBRE MI</Link></span>
          </div>
          <div>
          <span className={style.block}><Link to="habilidades" smooth={true}>HABILIDADES</Link></span>
          </div>
          <div>
          <span className={style.block}><a href="https://drive.google.com/file/d/1G1T3HmeQa3HvrbCBTI4itifglDocXlHT/view?usp=sharing" className={style.download} target="_blank" rel="noreferrer">CURRICULUM</a></span>
          </div>
          <div>
          <span className={style.block}><Link to="proyectos" smooth={true}>PROYECTOS</Link></span>
          </div>
          <div>
          <span className={style.block}><Link to="contacto" smooth={true}>CONTACTO</Link></span>
          </div>
          </div>

        </div>
    )
}
