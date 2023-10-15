import React, { Component } from 'react'

class Mount extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        console.log('this is Comp Mount')
    }


    render(){
        return(
            <>
            <h1>Counter value : {this.state.count}</h1>
            <button onClick={()=> this.setState({count:this.state.count + 1})}>Increment</button>
            <button onClick={()=> this.setState({count:this.state.count - 1})}>Decrement</button>   
            <button onClick={()=>this.setState({count:0})}>Reset</button>       
            </>
        )
    }
}

export default Mount