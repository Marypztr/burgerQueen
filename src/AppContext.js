import React from 'react'

export const AppContext = React.createContext()

export  class AppContextProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            order:[]
        }
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

    chooseButton(item){
        
    }

    render() {
        return (
            <AppContext.Provider
            value={{
                items:this.state.items
            }}
            >
          {this.props.children}      
            </AppContext.Provider>
        )
    }
}

export const AppContextConsumer = AppContext.Consumer;