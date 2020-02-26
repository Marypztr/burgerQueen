import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styles from "./Home.module.css"

/* 
paleta de colores 
        #F6D8AE
        #2E4057
        #083D77
        #DA4167
        #F4D35E
*/

export default class BurgerQueen extends Component {
    render() {
        return (
            <div className={styles.Home}>
                <div className={styles. positionLogin}>
                    <h1> Bienvenido a BurgerQueen</h1>
                    <h3>Iniciar sesión</h3>
                    <input type="name"  placeholder="nombe"/>
                    <input type="email" placeholder="correo electronico" />
                    <input type="password" placeholder="Contraseña" />
                    <p> <input type="checkbox"/>Soy Gerente</p>
                    <p> <input type="checkbox"/>Soy Mesero</p>
                    <Link to={"/menu-select"}>
                        <button>Iniciar sesión</button>
                    </Link>
                </div>
            </div>
        )
    }
}
