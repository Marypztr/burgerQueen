import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styles from "./Confirm.module.css"


export default class Confirm extends Component {
    render() {
        const{ number, name, historyOrders } = this.context;
        return (
            <div className={styles.containerConfirm}>
                <section className={styles.positionDetails}>
                    <div className={styles.detailsOrder}>
                        <h1>Pedido confirmado</h1>
                        <p>Nombre del comensal: <label> {name}</label></p>
                        <label>número de mesa: {number}</label>
                        <small> total </small>
                        <Link  to="/tables">
                            <button> Ver órdenes</button>
                        </Link>
                        <Link to="/menu">
                            <button>Regresar</button>
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}
