import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styles from "./Tables.module.css"


export default class Tables extends Component {
    render() {
        return (
            <div className={styles.historyOrders}>
                <div className={styles.navbar}>
                    <div  className={styles.buttonBack}>                        
                         <p>historial de pedidos</p>
                         <Link to="/menu-select">
                            <button>Regresar</button>
                         </Link>
                    </div>
                    </div>
                <section className={styles.gridContainerTables}>
                    <div className={styles.cardOrder}>
                        <b>Mesa:</b><label>5</label>
                        <b>Cliente: </b><label>Bonguito</label>
                        <label>Total $:</label>
                        <div className={styles.buttonsPositionCard}>
                            <Link to="/menu">
                                <button className={styles.editButton}>Editar pedido</button>
                            </Link>
                            <button  className={styles.DoneButton}>Pedido  listo</button>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}
