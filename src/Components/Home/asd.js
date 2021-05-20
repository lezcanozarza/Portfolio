import React from 'react'
import {Nav} from '../Nav/Nav'
import {HabilityCard} from '../habilityCard/habilityCard'
import {Contact} from '../contact/contact'
import style from './home.module.css'
import { Link, animateScroll as scroll } from "react-scroll";

import {frontEnd, backEnd, diseño} from '../props.js'
import techStore from '../../assets/techStore.jpg'
import Country from '../../assets/country-finder-app.png'
import emailjs from 'emailjs-com'
import github2 from "../../assets/github2.png"
import linkedin2 from "../../assets/linkedin2.png"
import whatsapp2 from "../../assets/whatsapp2.png"

const github = "https://res.cloudinary.com/techstore/image/upload/v1619397811/Marcos/Portfolio/github_myhjnm.png"
const linkedin = "https://res.cloudinary.com/techstore/image/upload/v1619397811/Marcos/Portfolio/linkedin_al9y0q.png"
const whatsapp = "https://res.cloudinary.com/techstore/image/upload/v1619397811/Marcos/Portfolio/whatsapp_fxx00z.png"



export function Home(){
  return(
    <div className={style.container}>
      <Nav/>
      <div className={style.namePageContainer}>
          <span className={style.commonText}>SOY</span>
          <div className={style.names}>
          <div className={style.blueBackground} style={{marginBottom:"8px"}}>
          <span className={style.highText}>MARCOS </span>
          </div>
          <div className={style.blueBackground} style={{marginBottom:"8px"}}>
          <span className={style.highText}>LEZCANO</span>
          </div>
          </div>

        <div className={style.names}>
        <div className={style.blueBackground}>
          <span className={style.highText}>FULL</span>
        </div>
        <div className={style.blueBackground}>
          <span className={style.highText}>STACK</span>
        </div>
        </div>
          <span className={style.commonText}>WEB DEVELOPER</span>
          <div className={style.icons}>
            <img src={github} alt="" width="60px" className={style.icon}/>
            <img src={linkedin} alt="" width="60px" className={style.icon}/>
            <img src={whatsapp} alt="" width="60px" className={style.icon}/>
          </div>
      </div>
      <section id="about" className={style.aboutPageContainer}>
        <div style={{padding:"4rem"}}>
          <div className={style.TwhiteBackground}>
          <span className={style.subTitle} style={{color:"#8EADD0"}}>SOBRE MI</span>
          </div>
        </div>
        <div className={style.descriptionContainer}>
        <div className={style.description}>
        <span className={style.textDescription}>
        Soy desarrollador web Full Stack y apasionado del Front End, amante de los diseños simples y modernos.
        Soy una persona autodidacta, y siempre que puedo intento aprender nuevas tecnologías. <br/><br/>
        Actualmente me encuentro en la etapa final del bootcamp Soy Henry en donde realicé varios de los proyectos
        que se encuentran en esta página. Estoy buscando formar parte de un proyecto que me permita dejar mi marca
        en la web y me haga crecer profesionalmente.
        </span>
        </div>
        </div>
        </section>
      <section id="habilidades" className={style.skillsPageContainer}>

      <div className={style.skillsPages}>
      <div style={{padding:"4rem"}}>
      <div className={style.blueBackground}>
      <span className={style.highText}>HABILIDADES</span>
      </div>
      </div>

      <div className={style.habilitiesContainer}>

      <div className={style.habilityContainer}>
      <div className={style.orangeBackground}>
      <span className={style.subTitle} style={{color:"white"}}>FRONT END</span>
      </div>
      <div className={style.habilities}>
        {frontEnd.map((hability) =>
          <HabilityCard
          url={hability.url}
          name={hability.name}
          />
        )}
      </div>
      </div>

      <divisor className={style.cntLine}>
        <div className={style.line}>
        </div>
      </divisor>

      <div  className={style.habilityContainer}>
      <div className={style.orangeBackground}>
      <span className={style.subTitle}  style={{color:"white"}}>BACK END</span>
      </div>
      <div className={style.habilities}>
        {backEnd.map((hability) =>
          <HabilityCard
          url={hability.url}
          name={hability.name}
          />
        )}
      </div>
      </div>

      <divisor className={style.cntLine}>
        <div className={style.line}>
        </div>
      </divisor>

      <div className={style.habilityContainer}>
      <div className={style.orangeBackground}>
      <span className={style.subTitle} style={{color:"white"}}>DISEÑO</span>
      </div>
      <div className={style.habilities}>
        {diseño.map((hability) =>
          hability.name === "Figma" ?
          <HabilityCard
          url={hability.url}
          name={hability.name}
          height="120px"
          />
          :
          <HabilityCard
          url={hability.url}
          name={hability.name}
          />
        )}
      </div>
      </div>

      </div>

      </div>

      </section>

      <divisor className={style.secondcntLine}>
        <div className={style.secondline}>
        </div>
      </divisor>

      <section id="proyectos" className={style.skillsPageContainer} style={{height:"1200px"}}>


      <div className={style.blueBackground} style={{margin:"4rem"}}>
      <span className={style.highText}>PROYECTOS</span>
      </div>

      <div className={style.projectsContainer}>

        <div className={style.projectContainer}>
          <div className={style.left}>
            <div className={style.projectDesc}>
              <label style={{fontWeight:"800",fontSize:"35px", marginBottom:"10px"}}>Ecommerce Tech Store</label>
              <label style={{fontSize:"19px"}}>Proyecto final del bootcamp soy Henry. Consiste en una tienda
              online de hardware hecha desde cero completamente funcional, permite buscar productos,
              agregarlos al carrito o lista de deseos, comprar y recibirlo. En este proyecto se usaron
              todas las teconologías aprendidas en el bootcamp y supabase como base de datos. Se trabajó
              con un grupo de 10 programadores usando metodología SCRUM.</label>
            </div>

            <div className={style.buttons}>
            <a href="https://github.com/lezcanozarza/TechStoreEcommerce" target="_blank" rel="noreferrer">
            <div className={style.whiteBackground}>
            <span className={style.subTitle} style={{color:"#F4C69F", fontSize:"35px"}}>VER REPO</span>
            </div>
            </a>
            <div className={style.whiteBackground}>
            <a href="http://henrystechstore.web.app/" target="_blank" rel="noreferrer">
            <span className={style.subTitle} style={{color:"#F4C69F", fontSize:"35px"}}>VER SITIO</span>
            </a>
            </div>
            </div>
          </div>
          <div className={style.projectImg}>
          <img src={techStore} alt="" className={style.imagen}/>
          </div>
        </div>

        <div className={style.projectContainer}>
          <div className={style.left}>
            <div className={style.projectDesc}>
              <label style={{fontWeight:"800",fontSize:"35px", marginBottom:"10px"}}>Country Finder App</label>
              <label style={{fontSize:"19px"}}>Creación desde cero de una aplicación para ver distintos países
              y sus respectivas actividades turísticas. Para el Back End se utilizaron llamados a una api externa,
              Node.js y Express. Para la base de datos se utlizó PostgreSQL y Sequelize. Para el Front End se utilizó
              React & Redux. También se implementó paginado desde cero y filtrados dinámicos.
              </label>
            </div><br/>

            <div className={style.buttons}>
            <a href="https://github.com/lezcanozarza/TechStoreEcommerce" target="_blank" rel="noreferrer">
            <div className={style.whiteBackground}>
            <span className={style.subTitle} style={{color:"#F4C69F", fontSize:"35px"}}>VER REPO</span>
            </div>
            </a>
            <div className={style.whiteBackground}>
            <a href="http://henrystechstore.web.app/" target="_blank" rel="noreferrer">
            <span className={style.subTitle} style={{color:"#F4C69F", fontSize:"35px"}}>VER SITIO</span>
            </a>
            </div>
            </div>
          </div>
          <div className={style.projectImg}>
          <img src={Country} alt="" className={style.imagen}/>
          </div>
        </div>



      </div>


      </section>

      <section id="contacto" className={style.contact} style={{height:"550px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <Contact/>
      </section>
      <footer className={style.footer}>

      <div className={style.footIcons}>
      <img src={github2} alt="" width="50px" className={style.icon}/>
      <img src={linkedin2} alt="" width="50px" className={style.icon}/>
      <img src={whatsapp2} alt="" width="50px" className={style.icon}/>
      </div>

      <div className={style.footText}>
      <label>Hecho con ♥ por Marcos Lezcano</label>
      </div>

      </footer>
    </div>
  )
}
