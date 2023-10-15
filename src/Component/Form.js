// import React,{Component} from 'react'

// class Form extends Component{
//     constructor(){
//         super()
//         this.state={
//             name :'',
//             dept:'',


//         }
//     }

//     handleChange=(e)=>{
//         this.setState({[e.target.name] : e.target.value})
//     }




//     render(){
//         return(
//             <>
//             <form>
//             <label htmlFor='name' >Name</label>
//             <input type='text' id='name' name='name'  onChange={this.handleChange}/>
//             <br/>
//             <label htmlFor='dept' >Department</label>
//             <input type='text' id='dept' name='dept'  onChange={this.handleChange}/>
//             <br/>
//             <label htmlFor='rate' >Rating</label>
//             <input type='number' id='rate' name='rate'  onChange={this.handleChange}/>
//             <br/>
//             <button>Submit</button>
//             </form>
//             </>
//         )
//     }
// }

// export default Form







































import React, { Component } from 'react';
import '../Component/Style.css'


class Form extends Component{
    constructor(){
        super();
        this.state= {
            name : '',
            password : '',
            rate: '',
            toggle : true,
            sdata: []

        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name] : e.target.value});


       

    }

    handleSubmit=(e)=>{
        e.preventDefault()

        const tempObj ={
            name : this.state.name,
            password : this.state.password,
            rate : this.state.rate
        }

        
        this.state.sdata.push(tempObj)
               
        this.setState({
            sdata : this.state.sdata , 
            name:'',
            password :'',
            rate :''
        })
           
           
        

    }

    render(){
        return(
            <>
            <form>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' value={this.state.name}  onChange={this.handleChange}/>
                <br/>
                <label htmlFor='pass'>Password</label>
                <input type='password' id='pass' name='password' value={this.state.password} onChange={this.handleChange}/>
                <br/>
                <label htmlFor='rate'>Rating</label>
                <input type='number' id='rate' name='rate'value={this.state.rate} onChange={this.handleChange}/>
                <br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>


            <div className='show'>

            {this.state.sdata.map((item,index) => {
                console.log(item);
                return(

                    <div key ={index} className='box'>
                    <h4>{item.name} || {item.password} || {item.rate}</h4>
                    
                    </div>
                )
             })}
            </div>
  
                
        

            
            </>

           
        )
    }
}

export default Form