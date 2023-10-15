import React,{Component} from 'react'

class ClassCompo extends Component{
    constructor(){
        super();
        this.state = {
            message:false
        }
        console.log(this.state.message)
    }

  

    render(){
        return(
            <div>
              {this.state.message ? <h1>True</h1> : <h1>False</h1>}
               <button onClick={()=> this.setState({
                message:!this.state.message
               })}>Click here</button>

                {/* <button onClick={()=>this.setState({
                    message : !this.state.message,
                    
                })}>Click</button> */}
                
                

                {/* {this.state.message ?  <ClassCompo/> : ''} */}

            </div>
            
        )
    }
}

export default ClassCompo
