import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styles from "./MenuSelect.module.css"



export default class MenuSelect extends Component {
    render() {
        return (
            <div className={styles.menu}>
                <Link  to ="/menu" className={styles.breakfast}>
                <div>
                   <p>Desayuno</p> 
                   <small>8am a 1pm</small>
                    </div>
                </Link>
                <Link to ="/menu" className={styles.lunch}>
                <div >
                    <p>Comida</p>
                    <small>1pm a 9pm</small>
                    </div>
                </Link>
            </div>
        )
    }
}
