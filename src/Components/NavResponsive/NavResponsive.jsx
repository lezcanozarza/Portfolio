import {React} from 'react'
import style from './navresponsive.module.css'
import { Link} from "react-scroll";
import menu from '../../assets/menu.png'

export function NavResponsive() {

  return (
    <button className={style.div}>
      <img src={menu} width="50px" alt="menu"/>
      <ul>
    	<li><Link to="about" smooth={true}>SOBRE MI</Link></li>
    	<li><Link to="habilidades" smooth={true}>HABILIDADES</Link></li>
    	<li><Link to="">CURRRICULUM</Link></li>
      <li><Link to="proyectos" smooth={true}>PROYECTOS</Link></li>
      <li><Link to="contacto" smooth={true}>CONTACTO</Link></li>
      </ul>
    </button>

  // <div className={style.container}>
  //   <select name="" onChange={handleChange} className={style.select}>
  //     <option value="">MENU</option>
  //     <option value="about">SOBRE MI</option>
  //     <option value="habilidades">HABILIDADES</option>
  //     <option value="CURRRICULUM">CURRRICULUM</option>
  //     <option value="proyectos">PROYECTOS</option>
  //     <option value="contacto">CONTACTO</option>
  //   </select>
  // </div>
  )
}
