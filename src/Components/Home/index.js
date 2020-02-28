import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styles from "./Home.module.css"

/* 
paleta de colores 
        #43B4F5 AZUL
        #DD43F5 FUSCIA
        #F58443 NARANJA 
        #5BF543 VERDE
*/

export default class BurgerQueen extends Component {
    render() {
        return (
            <div className={styles.Home}>
                <div className={styles. positionLogin}>
                    <div className={styles.containerLogin}>
                    <h1> Bienvenidx a BurgerQueen</h1>
                    <h3>Iniciar sesión</h3>
                    <input type="name"  placeholder="nombre"/>
                    <input type="email" placeholder="correo electronico" />
                    <input type="password" placeholder="Contraseña" />
                    <Link to={"/menu-select"}>
                        <button>Iniciar sesión</button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}
