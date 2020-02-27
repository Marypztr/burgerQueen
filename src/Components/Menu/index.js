import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styles  from "./Menu.module.css"


export default class Menu extends Component {
    render() {
        const { items, chooseOne, order, deleteOne, cancelOrder } =this.context;
        return (
            <div>

               <div className={styles.navbar}>
                    <div>                        
                    <p>Selecciona lo que indique el cliente</p>
                    <section className={styles.dataMenu}>
                        <div className={styles.menuType}><input type="text"  placeholder="Nombre del cliente"/></div>
                        <div className={styles.menuType}><small>No.de mesa</small><input type="text"  placeholder="No."/></div>
                    </section>
                    </div>
                </div>
                <section className={styles.gridContainer}>
                    <section className={styles.MenuItems}>
                        <div >Desayuno</div>
                        {items
                            .filter(items => items.type.includes("breakfast")) 
                            .map(item =>{
                            return(
                                <button key={item.index} onClick={()=> chooseOne(item)} >{item.name}</button>
                            )
                        })}
                    <div>Lunch</div>
                    {items
                            .filter(items => items.type.includes("lunch")) 
                            .map(item =>{
                            return(
                                <button key={item.index} onClick={()=> chooseOne(item)}>{item.name}</button>
                            )
                        })}
                    <div>Notas</div>
                    <textarea></textarea>
                    </section>
                    <section className={styles.Account}>
                        <div className={styles.containerAccount}>
                            <p>Total</p>
                            {order.map((order,index) =>(
                                <ul>
                                    <li className={styles.container}>
                                    <div className={styles.cardPosition}>
                                        <div className={styles.cardBody}>
                                            <label>{order.cant}</label>
                                            <p>{order.name}</p>
                                            <label> ${order.Total}</label>
                                            <button onClick={()=>deleteOne(order)}> <img src="https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304223_960_720.png"/></button>
                                        </div>
                                    </div>
                                    </li>
                                </ul>
                            ))}
                            <div className={styles.total}>
                                <hr/>
                                <p>Total:$00.00</p>
                                    <div className={styles.buttons}>
                                    <Link to="/confirmOrder">
                                        <button>Mandar a cocina</button>
                                    </Link>
                                        <button onClick={()=> cancelOrder(order)} className={styles.cancelOrder}>Cancelar Orden</button>
                                </div>
                            </div>
                        </div> 
                    </section>
                </section> 
            </div>
        )
    }
}
