import React,{ Component } from "react";

class ClasssCompo extends Component{

    constructor(props){
        super(props);
        console.log(props.value.arr.Name)
    }


    render(){
        return(
            <div>
                    <h2>My name Is : {this.props.value.arr.Name}</h2>
                    <h2>{this.props.value.arr.age}</h2>
                    <h2>{this.props.value.arr.course}</h2>

            </div>
        )
    }
}

export default ClasssCompo