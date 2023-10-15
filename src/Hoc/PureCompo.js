import React, {  PureComponent } from 'react'

class PureCompo extends PureComponent {
    constructor(){
        super();
        this.state={
            count : 0
        }
    }


  render() {
    console.log("hiii" +this.state.count);
    return (
      <div>
        <h1>THIS IS PURE FUNCTION</h1>
        <h3> COUNT :{this.state.count}</h3>
        <button onClick={()=>this.setState({count:this.state.count+1})}>INC</button>
        
      </div>
    )
  }
}

export default PureCompo;
