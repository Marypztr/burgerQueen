import React from 'react'

export const AppContext = React.createContext()

export  class AppContextProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            order:[]
        }
        this.chooseOne = this.chooseOne.bind(this) //esto es para que pueda mandarla llamar en otro componente sin tener que hacer estados 
        this.deleteOne = this.deleteOne.bind(this)
        this.cancelOrder = this.cancelOrder.bind(this)
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
            console.log(oneItem)
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


    render() {
        return (
            <AppContext.Provider
            value={{
                items:this.state.items,
                order:this.state.order,
                chooseOne: this.chooseOne,
                deleteOne: this.deleteOne,
                cancelOrder:this.cancelOrder,
            
            }}
            >
          {this.props.children}      
            </AppContext.Provider>
        )
    }
}

export const AppContextConsumer = AppContext.Consumer;