import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styles  from "./Menu.module.css"


export default class Menu extends Component {
    render() {
        const { items } =this.context;
        console.log("Hola", items)
        return (
            <div>

               <div className={styles.navbar}>
                    <div>                        
                    <p>Selecciona lo que indique el cliente</p>
                    <div className={styles.menuType}>Comida</div>
                    </div>
                </div>
                <section className={styles.gridContainer}>
                    <section className={styles.MenuItems}>
                        <div>Desayuno</div>
                        {items
                            .filter(items => items.type.includes("breakfast")) 
                            .map(item =>{
                            return(
                                <button>{item.name}</button>
                            )
                        })}
                    <div>Lunch</div>
                    {items
                            .filter(items => items.type.includes("lunch")) 
                            .map(item =>{
                            return(
                                <button>{item.name}</button>
                            )
                        })}
                    <div>Notas</div>
                    <textarea></textarea>
                    </section>
                    <section className={styles.Account}>
                        <div className={styles.containerAccount}>
                            <p>Total</p>
                            <div className={styles.total}>
                                <hr/>
                                <p>Total:$00.00</p>
                                <Link to="/tables">
                                    <button>Mandar a cocina</button>
                                </Link>
                            </div>
                        </div> 
                    </section>
                </section> 
            </div>
        )
    }
}
