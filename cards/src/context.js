import React, { Component } from 'react'
 const infoContext=React.createContext()

//  Provider
// Consumer

 class infoProvider extends Component {
    render() {
        return (
            <infoContext.Provider>
                {this.props.children}
            </infoContext.Provider>
        )
    }
}

const infoConsumer=infoContext.Consumer;

export {infoProvider,infoConsumer};
