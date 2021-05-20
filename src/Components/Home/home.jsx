import React from 'react'
import {Nav} from '../Nav/Nav'
import {HabilityCard} from '../habilityCard/habilityCard'
import {Contact} from '../contact/contact'
import {NavResponsive} from '../NavResponsive/NavResponsive'
import style from './home.module.css'
import {Fade, Slide} from 'react-reveal/';


import {frontEnd, backEnd, diseño} from '../props.js'
import techStore from '../../assets/techStore.jpg'
import Country from '../../assets/country-finder-app.png'
import github2 from "../../assets/github2.png"
import linkedin2 from "../../assets/linkedin2.png"
import whatsapp2 from "../../assets/whatsapp2.png"
import Portfolio from "../../assets/Portoflio.jpg"

const github = "https://res.cloudinary.com/techstore/image/upload/v1619397811/Marcos/Portfolio/github_myhjnm.png"
const linkedin = "https://res.cloudinary.com/techstore/image/upload/v1619397811/Marcos/Portfolio/linkedin_al9y0q.png"
const whatsapp = "https://res.cloudinary.com/techstore/image/upload/v1619397811/Marcos/Portfolio/whatsapp_fxx00z.png"


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


      <div className={style.namePageContainer}>
      <Fade right big cascade>
          <span className={style.commonText}>SOY</span>
        <div className={style.blueBackground} style={{marginBottom:"8px"}}>
        <Fade right big cascade>
          <span className={style.highText}>MARCOS LEZCANO</span>
          </Fade>
        </div>
        <div className={style.blueBackground}>
        <Fade right big cascade>
          <span className={style.highText}>FULL STACK</span>
          </Fade>
        </div>
          <span className={style.commonText}>WEB DEVELOPER</span>
          </Fade>
          <div className={style.icons}>
          <Fade left big cascade>
            <a href="https://github.com/lezcanozarza" target="_blank" rel="noreferrer"><img src={github} alt="" width="60px" className={style.icon}/></a>
            <a href="https://www.linkedin.com/in/marcos-lezcano" target="_blank" rel="noreferrer"><img src={linkedin} alt="" width="60px" className={style.icon}/></a>
            <a href="https://wa.me/543625231570" target="_blank" rel="noreferrer"><img src={whatsapp} alt="" width="60px" className={style.icon}/></a>
            </Fade>
          </div>

      </div>
      <section id="about" className={style.aboutPageContainer}>
      <Fade>
          <div className={style.TwhiteBackground}>
          <span className={style.subTitle} style={{color:"#8EADD0"}}>SOBRE MI</span>
          </div>
        <div className={style.descriptionContainer}>
        <div className={style.description}>
        <span className={style.textDescription}>
        Soy desarrollador web Full Stack y apasionado del Front End, amante de los diseños simples y modernos.
        Soy una persona autodidacta, siempre que puedo intento aprender nuevas tecnologías. <br/><br/>
        Recientemente he finalizado el bootcamp de desarrollo full stack Soy Henry
        <strong><a href="https://certificates.soyhenry.com/cert?id=9a14a737-bb3c-47ca-ac61-7924de3cbdf7"
        target="_blank"
        rel="noreferrer"
        className={style.certificado}> (ver certificado)</a></strong> en donde realicé varios de los proyectos
        que se encuentran en esta página y adquirí experiencia de trabajo con metodología ágil SCRUM.
        Estoy buscando formar parte de un proyecto que me permita dejar mi marca en la web y con el que
        pueda crecer profesionalmente.
        </span>
        <div className={style.TwhiteBackground} style={{marginTop:"45px",marginBottom:"40px", marginLeft:"-4rem", cursor:"pointer"}}>
        <a href="https://drive.google.com/file/d/1G1T3HmeQa3HvrbCBTI4itifglDocXlHT/view?usp=sharing" className={style.download} download="CV-Marcos-Lezcano"><span className={style.subTitle} style={{color:"#8EADD0"}}>DESCARGAR CV</span></a>
        </div>
        </div>
        </div>


        </Fade>
        </section>
        <Fade>
      <section id="habilidades" className={style.skillsPageContainer}>
      <div className={style.skillsPages}>
      <Slide top>
      <div className={style.habilityTitle}>
      <div className={style.blueBackground}>
      <span className={style.highText}>HABILIDADES</span>
      </div>
      </div>
      </Slide>

      <div className={style.habilitiesContainer}>

      <Slide left>
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
      </Slide>


      <divisor className={style.cntLine}>
        <div className={style.line}>
        </div>
      </divisor>
      <Slide bottom>
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
      </Slide>

      <divisor className={style.cntLine}>
        <div className={style.line}>
        </div>
      </divisor>
      <Slide right>
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
</Slide>
      </div>


      </div>

      </section>
      </Fade>

      <divisor className={style.secondcntLine}>
        <div className={style.secondline}>
        </div>
      </divisor>

      <section id="proyectos" className={style.projectsPageContainer}>

      <Fade>
      <div className={style.blueBackground} style={{margin:"4rem"}}>
      <span className={style.highText}>PROYECTOS</span>
      </div>
      </Fade>

      <div className={style.projectsContainer}>
      <Slide left>
        <div className={style.projectContainer}>
          <div className={style.left}>
            <div className={style.projectDesc}>
              <label style={{fontWeight:"800",fontSize:"35px", marginBottom:"10px", cursor:"text"}}>Ecommerce Tech Store</label>
              <label style={{fontSize:"19px", cursor:"text"}}>Proyecto final del bootcamp soy Henry. Consiste en una tienda
              online de hardware hecha desde cero completamente funcional, permite buscar productos,
              agregarlos al carrito o lista de deseos, comprar y recibirlo. En este proyecto se usaron
              todas las teconologías aprendidas en el bootcamp y supabase como base de datos. Se trabajó
              con un grupo de 10 programadores usando metodología SCRUM.</label>
            </div>

            <div className={style.buttons}>
            <a href="https://github.com/lezcanozarza/TechStoreEcommerce" target="_blank" rel="noreferrer">
            <div className={style.projectwhiteBackground}>
            <span className={style.projectsubTitle} style={{color:"#F4C69F"}}>VER REPO</span>
            </div>
            </a>
            <div className={style.projectwhiteBackground}>
            <a href="http://henrystechstore.web.app/" target="_blank" rel="noreferrer">
            <span className={style.projectsubTitle} style={{color:"#F4C69F"}}>VER SITIO</span>
            </a>
            </div>
            </div>
          </div>
          <div className={style.projectImg}>
          <img src={techStore} alt="" className={style.imagen}/>
          </div>
        </div>
        </Slide>
        <Slide left>
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
            <a href="https://github.com/lezcanozarza/Country-Finder-App" target="_blank" rel="noreferrer">
            <div className={style.projectwhiteBackground}>
            <span className={style.projectsubTitle} style={{color:"#F4C69F"}}>VER REPO</span>
            </div>
            </a>
            </div>
          </div>
          <div className={style.projectImg}>
          <img src={Country} alt="" className={style.imagen}/>
          </div>
        </div>
      </Slide>

      <Slide left>
      <div className={style.projectContainer}>
        <div className={style.left}>
          <div className={style.projectDesc}>
            <label style={{fontWeight:"800",fontSize:"35px", marginBottom:"10px"}}>¡Esta Página! Portfolio</label>
            <label style={{fontSize:"19px"}}>Este Portfolio Lo hice yo mismo utilizando JavaScript, CSS y React.
            También utilicé react-reveal y react-scroll para las animaciones y Cloudinary para almacenar algunas imágenes.
            El diseño es 100% propio, así como la paleta de colores. Personalmente son colores que me representan mucho.
            </label>
          </div><br/>

          <div className={style.buttons}>
          <a href="https://github.com/lezcanozarza/Portfolio" target="_blank" rel="noreferrer">
          <div className={style.projectwhiteBackground}>
          <span className={style.projectsubTitle} style={{color:"#F4C69F"}}>VER REPO</span>
          </div>
          </a>
          </div>
        </div>
        <div className={style.projectImg} style={{width:"500px"}}>
        <img src={Portfolio} alt="" className={style.imagen} style={{borderLeft:"1px solid white", borderBottom:"1px solid white"}}/>
        </div>
      </div>
    </Slide>



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
