import React from 'react'
import {Nav} from '../Nav/Nav'
import {HabilityCard} from '../habilityCard/habilityCard'
import {Contact} from '../contact/contact'
import {NavResponsive} from '../NavResponsive/NavResponsive'
import style from './home.module.css'
import {Fade} from 'react-reveal/';


import {frontEnd, backEnd, diseño} from '../props.js'
import techStore from '../../assets/techStore.jpg'
import Country from '../../assets/country-finder-app.png'
import bikes from '../../assets/bikes.png'
import github2 from "../../assets/github2.png"
import linkedin2 from "../../assets/linkedin2.png"
import whatsapp2 from "../../assets/whatsapp2.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import whatsapp from "../../assets/whatsapp.png"
import profile from '../../assets/perfil.png'

export function Home(){
  return(
    <div className={style.container}>
    <Fade>
    <div className={style.navigation}>
    <Nav/>
    </div>
    <div className={style.navResponsive}>
    <NavResponsive/>
    </div>
    </Fade>
    <div className={style.head}>
      <div className={style.namePageContainer}>
          <span className={style.commonText}>SOY</span>
        <div className={style.blueBackground} style={{marginBottom:"8px"}}>

          <span className={style.highText}>MARCOS LEZCANO</span>

        </div>
        <div className={style.blueBackground}>

          <span className={style.highText}>FULL STACK</span>

        </div>
          <span className={style.commonText}>WEB DEVELOPER</span>

          <div className={style.icons}>

            <a href="https://github.com/lezcanozarza" target="_blank" rel="noreferrer"><img src={github} alt="" width="60px" className={style.icon}/></a>
            <a href="https://www.linkedin.com/in/marcos-lezcano" target="_blank" rel="noreferrer"><img src={linkedin} alt="" width="60px" className={style.icon}/></a>
            <a href="https://wa.me/543625231570" target="_blank" rel="noreferrer"><img src={whatsapp} alt="" width="60px" className={style.icon}/></a>

          </div>

      </div>
      <div className={style.profilePic}>
      <img src={profile} alt=''/>
      </div>
      </div>

      <section id="about" className={style.aboutPageContainer}>

          <div className={style.TwhiteBackground}>
          <span className={style.subTitle} style={{color:"#00A1F1"}}>SOBRE MI</span>
          </div>

        <div className={style.descriptionContainer}>
        <div className={style.description}>
        <span className={style.textDescription}>
        Soy desarrollador web Full Stack y me especializo Front End, amante de los diseños simples y modernos.
        Soy una persona autodidacta, siempre que puedo intento aprender nuevas tecnologías. <br/><br/>
      Estudié programación Full Stack en el bootcamp Soy Henry
        <strong><a href="https://certificates.soyhenry.com/cert?id=9a14a737-bb3c-47ca-ac61-7924de3cbdf7"
        target="_blank"
        rel="noreferrer"
        className={style.certificado}> (ver certificado)</a></strong> donde realicé varios de los proyectos
        que se encuentran en esta página y adquirí experiencia de trabajo con metodología ágil SCRUM.
        También trabajé como Tutor Front End en CoderHouse donde tuve la oportunidad de impartir mis conocimientos de desarrollo con otros alumnos
        y guiarlos en su proceso de aprendizaje. <br/><br/>
      Actualmente estoy buscando trabajar en un lugar que me permita dejar mi marca en la web y con el que
        pueda crecer profesionalmente.
        </span>
        <div className={style.TwhiteBackground} style={{marginTop:"45px",marginBottom:"40px", marginLeft:"-4rem", cursor:"pointer"}}>
        <a href="https://drive.google.com/file/d/1G1T3HmeQa3HvrbCBTI4itifglDocXlHT/view?usp=sharing" target="_blank" rel="noreferrer" className={style.download} ><span className={style.subTitle} style={{color:"#00A1F1"}}>DESCARGAR CV</span></a>
        </div>
        </div>
        </div>

        </section>

      <section id="habilidades" className={style.skillsPageContainer}>
      <div className={style.skillsPages}>

      <div className={style.habilityTitle}>
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
          hability.name === "Figma" ?
          <HabilityCard
          url={hability.url}
          name={hability.name}
          height="120px"
          />
          :
          <HabilityCard
          url={hability.url}
          name={hability.name}/>
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
      <span className={style.subTitle} style={{color:"white"}}>OTRAS</span>
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

      <section id="proyectos" className={style.projectsPageContainer}>


      <div className={style.blueBackground} style={{margin:"4rem"}}>
      <span className={style.highText}>PROYECTOS</span>
      </div>


      <div className={style.projectsContainer}>

        <div className={style.projectContainer}>
          <div className={style.left}>
            <div className={style.projectDesc}>
              <label className={style.pjtitle} style={{fontWeight:"800",fontSize:"35px", marginBottom:"10px", cursor:"text"}}>Ecommerce Tech Store</label>
              <label style={{fontSize:"19px", cursor:"text"}}>Proyecto final del bootcamp soy Henry. Consiste en una tienda
              online de hardware hecha desde cero completamente funcional, permite buscar productos,
              agregarlos al carrito o lista de deseos, comprar y recibirlo. En este proyecto se usaron
              todas las teconologías aprendidas en el bootcamp y supabase como base de datos. Se trabajó
              con un grupo de 10 programadores usando metodología SCRUM.</label>
            </div>

            <div className={style.buttons}>
              <div className={style.projectwhiteBackground}>
              <a href="http://henrystechstore.web.app/" target="_blank" rel="noreferrer">
              <span className={style.projectsubTitle} style={{color:"#FE007C"}}>DEMO</span>
              </a>
              </div>
            <a href="https://github.com/lezcanozarza/TechStoreEcommerce" target="_blank" rel="noreferrer">
            <div className={style.projectwhiteBackground}>
            <span className={style.projectsubTitle} style={{color:"#FE007C"}}>REPOSITORIO</span>
            </div>
            </a>
            </div>
          </div>
          <div className={style.projectImg}>
          <img src={techStore} alt="" className={style.imagen}/>
          </div>
        </div>

        <div className={style.projectContainer}>
          <div className={style.left}>
            <div className={style.projectDesc}>
              <label className={style.pjtitle} style={{fontWeight:"800",fontSize:"35px", marginBottom:"10px"}}>Stolen Bikes Index</label>
              <label style={{fontSize:"19px"}}>Aplicación para ver distintas bicicletas robadas en la zona de berlin.
                Se puede filtrar por nombre del caso y por fecha. También se puede ver el detalle individual y un mapa en la zona
                del robo. <br/>
                Hecho con React y Context. Los datos los obtengo consumiendo la api "bikeIndex."
              </label>
            </div><br/>

            <div className={style.buttons}>
              <a href="https://stolenbikesindex.netlify.app/" target="_blank" rel="noreferrer">
              <div className={style.projectwhiteBackground}>
              <span className={style.projectsubTitle} style={{color:"#FE007C"}}>DEMO</span>
              </div>
              </a>
            <a href="https://github.com/lezcanozarza/react-challenge" target="_blank" rel="noreferrer">
            <div className={style.projectwhiteBackground}>
            <span className={style.projectsubTitle} style={{color:"#FE007C"}}>REPOSITORIO</span>
            </div>
            </a>
            </div>
          </div>
          <div className={style.projectImg}>
          <img src={bikes} alt="" className={style.imagen}/>
          </div>
        </div>

        <div className={style.projectContainer}>
          <div className={style.left}>
            <div className={style.projectDesc}>
              <label className={style.pjtitle} style={{fontWeight:"800",fontSize:"35px", marginBottom:"10px"}}>Country Finder App</label>
              <label style={{fontSize:"19px"}}>Creación desde cero de una aplicación para ver distintos países
              y sus respectivas actividades turísticas. Para el Back End se utilizaron llamados a una api externa,
              Node.js y Express. Para la base de datos se utlizó PostgreSQL y Sequelize. Para el Front End se utilizó
              React & Redux. También se implementó paginado desde cero y filtrados dinámicos.
              </label>
            </div><br/>

            <div className={style.buttons}>
            <a href="https://github.com/lezcanozarza/Country-Finder-App" target="_blank" rel="noreferrer">
            <div className={style.projectwhiteBackground}>
            <span className={style.projectsubTitle} style={{color:"#FE007C"}}>REPOSITORIO</span>
            </div>
            </a>
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
      <a href="https://github.com/lezcanozarza" target="_blank" rel="noreferrer">
      <img src={github2} alt="" width="50px" className={style.ficon} style={{cursor:"pointer"}}/>
      </a>
      <a href="https://www.linkedin.com/in/marcos-lezcano" target="_blank" rel="noreferrer">
      <img src={linkedin2} alt="" width="50px" className={style.ficon} style={{cursor:"pointer"}}/>
      </a>
      <a href="https://wa.me/543625231570" target="_blank" rel="noreferrer">
      <img src={whatsapp2} alt="" width="50px" className={style.ficon} style={{cursor:"pointer"}}/>
      </a>
      </div>

      <div className={style.footText}>
      <label>Hecho con ♥ por Marcos Lezcano</label>
      </div>

      </footer>
    </div>
  )
}
