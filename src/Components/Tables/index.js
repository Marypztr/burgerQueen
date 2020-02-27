import React, { Component } from 'react'
import styles from "./Tables.module.css"

export default class Tables extends Component {
    render() {
        return (
            <div className={styles.historyOrders}>
                <h3>Orden de Pedidos</h3>
                <section className={styles.gridContainerTables}>
                    <div className={styles.cardOrder}>
                        <b>Mesa:</b><label>5</label>
                        <b>Nombre del cliente: </b><label>Bonguito</label>
                        <label>Total $:</label>
                        <button className={styles.editButton}>Editar pedido</button>
                        <button className={styles.DoneButton}>Pedido  listo</button>
                    </div>
                    <div className={styles.cardOrder}>
                        <label>Mesa: 1</label>
                        <p>Nombre del cliente: Bonguito</p>
                        <label>Total $:</label>
                        <button className={styles.editButton}>Editar pedido</button>
                        <button className={styles.DoneButton}>Pedido  listo</button>
                    </div>
                    <div className={styles.cardOrder}>
                        <label>Mesa: 2</label>
                        <p>Nombre del cliente: Bonguito</p>
                        <label>Total $:</label>
                        <button className={styles.editButton}>Editar pedido</button>
                        <button className={styles.DoneButton}>Pedido  listo</button>
                    </div>
                    <div className={styles.cardOrder}>
                        <label>Mesa: 3</label>
                        <p>Nombre del cliente: Bonguito</p>
                        <label>Total $:</label>
                        <button className={styles.editButton}>Editar pedido</button>
                        <button className={styles.DoneButton}>Pedido  listo</button>
                    </div>
                    <div className={styles.cardOrder}>
                        <label>Mesa: 4</label>
                        <p>Nombre del cliente: Bonguito</p>
                        <label>Total $:</label>
                        <button className={styles.editButton}>Editar pedido</button>
                        <button className={styles.DoneButton}>Pedido  listo</button>
                    </div>
                    <div className={styles.cardOrder}>
                        <label>Mesa: 5</label>
                        <p>Nombre del cliente: Bonguito</p>
                        <label>Total $:</label>
                        <button className={styles.editButton}>Editar pedido</button>
                        <button className={styles.DoneButton}>Pedido  listo</button>
                    </div>
                </section>
            </div>
        )
    }
}
