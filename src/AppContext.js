import React from 'react'
import firebase from "firebase"

export const AppContext = React.createContext()

 firebase.initializeApp(
    {
        apiKey: "AIzaSyD-ZEQ_qJ81h6aTywv3IqJDZ3nFQlrDYh4",
        authDomain: "burgerqueen-af63d.firebaseapp.com",
        databaseURL: "https://burgerqueen-af63d.firebaseio.com",
        projectId: "burgerqueen-af63d",
        storageBucket: "burgerqueen-af63d.appspot.com",
        messagingSenderId: "753871332426",
        appId: "1:753871332426:web:05dcfb0ef22225ffb1f2b3",
        measurementId: "G-90K9C2YJN2"
      }
 )
  let db = firebase.firestore()

export  class AppContextProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            order:[],
            name:"",
            number: 0,
            allOrders:[]
        }
        this.chooseOne = this.chooseOne.bind(this) //esto es para que pueda mandarla llamar en otro componente sin tener que hacer estados 
        this.deleteOne = this.deleteOne.bind(this)
        this.cancelOrder = this.cancelOrder.bind(this)
        this.sendToKitchen = this.sendToKitchen.bind(this)
        this.handleChangeNumber = this.handleChangeNumber.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.historyOrders = this.historyOrders.bind(this)
    }
    componentDidMount(){
        fetch("https://burgerqueen-af63d.firebaseio.com/Products.json")
        .then( res =>
            res.json().then(json => {
                this.setState({
                    items: json
                })
            })
            )
    }

    chooseOne(item){
        let oneItem = [...this.state.order];
        
            if ( oneItem.includes(item)){
                item.cant = item.cant +1;
                item.Total = item.price + item.Total;

            } else{
                oneItem.push(item)
            }
            this.setState({
                order: oneItem
            })
    }

    deleteOne(item){
        let oneItem = []
            if(item.cant > 1){
                item.cant = item.cant - 1;
                item.Total = item.Total - item.price;
                oneItem = this.state.order
            } else {
                oneItem = this.state.order.filter(element => {
                    return element !== item;
                })
            }
            this.setState({
                order:[...oneItem]
            })
    }

    cancelOrder(){
        let cancel = [];
        this.state.order.map(item =>{
            if(item.cant > 1) {
                item.cant = 1;
                item.total = item.price;
            }
            return this.state.order;
        })
        this.setState({
            order:cancel
        })
    }

    sendToKitchen(e){
        db.collection("OrdenesCreadas").add({
            name:this.state.name,
            numerodemesa:this.state.number,
            order:this.state.order,
            statusdelpedido:"",
            total:""
        })  .then(function(docRef){
            console.log("Document written with ID: ", docRef .id)
        } )
        .catch(function(error){
            console.error("Error adding document: ", error);
        })

    } 



    handleChangeName(e){
        this.setState({
            name:e.target.value, 
        })
    }

    handleChangeNumber(e){
        this.setState({
             number:e.target.value
        })
        
    }
    

    handleSubmit(e){
        const name = this.state.name 
        const number =  this.state.number
        if(name == "" && number == ""){
            alert("introduzca los datos correspondientes")
        }else{
            alert("Nombre:  " + this.state.name + "  Número de mesa  " + this.state.number);
            this.setState({
                name: this.state.name, 
                number: this.state.number
            });
        }
        e.preventDefault()
    }

     historyOrders(){
 db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
    } 
  
    render() {
        
        return (
            <AppContext.Provider
            value={{
                items:this.state.items,
                order:this.state.order,
                chooseOne: this.chooseOne,
                deleteOne: this.deleteOne,
                cancelOrder:this.cancelOrder,
                sendToKitchen:this.sendToKitchen,
                handleSubmit:this.handleSubmit,
                handleChangeName:this.handleChangeName,
                handleChangeNumber:this.handleChangeNumber,
                number: this.state.number,
                name:this.state.name,
                historyOrders:this.state.historyOrders

                
            }}
            >
          {this.props.children}      
            </AppContext.Provider>
        )
    }
}

export const AppContextConsumer = AppContext.Consumer;