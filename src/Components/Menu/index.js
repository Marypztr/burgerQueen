import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styles  from "./Menu.module.css"


export default class Menu extends Component {
    render() {
        const { items, chooseOne, order, deleteOne, cancelOrder, sendToKitchen, handleSubmit, handleChangeName, handleChangeNumber, name, number } =this.context;
        return (
            <div>
               <div className={styles.navbar}>
                    <div>                        
                    <p>Ingresa los datos para comenzar a tomar la orden</p>
                    <form onSubmit={handleSubmit} className={styles.dataMenu}>
                        <div className={styles.menuType}><input value={name} onChange={handleChangeName} type="text"  placeholder="Nombre del cliente"/></div>
                        <div className={styles.menuType}><small>No.de mesa</small><input value={number} onChange={handleChangeNumber} type="text"  placeholder="No."/></div>
                         <button type="submit" value="submit"> <img src="https://pngimage.net/wp-content/uploads/2018/05/check-button-png-4.png"  alt="check"/></button>
                    </form>
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
                                            <small>{order.cant}</small>
                                            <small>{order.name}</small>
                                            <label> ${order.Total}</label>
                                            <button onClick={()=>deleteOne(order)}> <img src="https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304223_960_720.png"/></button>
                                        </div>
                                    </div>
                                    </li>
                                </ul>
                            ))}
                            <div className={styles.total}>
                                <hr/>
                            <p>Total:$
                                {order.reduce((sum,newPrice) =>{
                                    return sum + newPrice.Total;
                                },0)
                                }</p>
                                    <div className={styles.buttons}>{order.length > 0 ? 
                                    <Link to="/confirmOrder">
                                        <button onClick={()=> sendToKitchen()}>Mandar a cocina</button>
                                    </Link> : 
                                    <button onClick={()=> sendToKitchen(alert("no has tomado la orden"))}>Mandar a cocina</button>
                                    }           
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
