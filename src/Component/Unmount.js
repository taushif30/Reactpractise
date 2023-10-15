import React, { Component } from 'react'

class Unmount extends Component{
    constructor(){
        super();
        this.state={
            show : true
        }
    }


    render(){
        return(
            <>
            {/* <h1>Data</h1> */}
            <p>{this.state.show ? <UnmountData/> : ''}</p>
            <button onClick={()=> this.setState({show: !this.state.show})}> Show / Hide</button>
            </>
        )
    }
}

export default Unmount;



export class UnmountData extends Component{
    componentWillUnmount(){
        alert('This is unmounting Phase')
    }
    render(){
        return(
            <>
            <h1>This is unmount Data</h1>
            </>
        )
    }

}