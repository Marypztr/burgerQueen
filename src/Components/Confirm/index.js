import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styles from "./Confirm.module.css"

export default class Confirm extends Component {
    render() {
        return (
            <div className={styles.containerConfirm}>
                <section className={styles.positionDetails}>
                    <div className={styles.detailsOrder}>
                        <h1>Pedido confirmado</h1>
                        <p>Nombre del comensal:</p>
                        <label>total:$</label>
                        <small> status del pedido: </small>
                        <Link  to="/tables">
                            <button>Listo</button>
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}
