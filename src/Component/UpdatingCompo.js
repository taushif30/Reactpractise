import React, { Component } from 'react'

class UpdatingCompo extends Component{
    constructor(){
        super();
        console.log('constructor')
        this.state={
            count:0
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log('updatingCompo')
        console.log('this is PrevState',prevState.count)
        if(prevState.count === 1){
            alert('dataMatch')
        }
    }


    render(){
        console.log('render')
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count + 1})}>Increase</button>
            </>
        )
    }
}

export default UpdatingCompo