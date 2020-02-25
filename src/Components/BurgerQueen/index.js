import React, { Component } from 'react'
import styles from "./BurgerQueen.module.css"

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
                    <p> <input type="checkbox"/>Soy Gerente</p>
                    <p> <input type="checkbox"/>Soy Mesero</p>
                </div>
            </div>
        )
    }
}
