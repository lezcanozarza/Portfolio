import {React} from 'react';
import style from './contact.module.css'
import emailjs from 'emailjs-com'

export function Contact(){

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)

    emailjs.sendForm('service_mx6keqh','template_v47xxjh', e.target, 'user_XoLpZirwgT2E9YeW0khqR')
  }
  return(

      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.TwhiteBackground} style={{padding:"4px",textAlign:"center"}}>
        <label className={style.titlesubTitle} style={{color:"#F4C69F"}}>CONTÁCTAME</label>
        </div>
  				<div className={style.inputs}>
  					<label className={style.inputs}>
  						<input className={style.iwhiteBackground} type="text" name="user_name" placeholder="Tu nombre" required />
  					</label>
  					<label>
  						<input className={style.iwhiteBackground} type="email" name="user_email" placeholder="Correo Electrónico" required />
  					</label>
  				</div>
  				<div>
  					<label>
  						<textarea className={style.textwhiteBackground} name="message" placeholder="mensaje" required></textarea>
  					</label>
  				</div>
          <div className={style.whiteBackground} style={{textAlign:"center",padding:"2px", cursor:"pointer"}}>
  				<button className={style.subTitle} style={{cursor:"pointer", color:"#F4C69F",justifyContent:"center", height:"inherit"}} type="submit">
  					ENVIAR MENSAJE
  				</button>
          </div>
  			</form>
  )
}
