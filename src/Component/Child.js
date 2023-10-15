const Child =(props) =>{
  console.log(props)
  return(
    <div >

     <h1> {props.data.arr.Name}</h1>
     <h1> {props.data.arr.age}</h1>
     <h1> {props.data.arr.course}</h1>






      {/* <h1>Taushif Siddique 0</h1>
      <h1>Taushif Siddique 1</h1>
      <h1>Taushif Siddique 2</h1> */}
      {/* <h1>{props.arr}</h1> */}
      {/* <h1>{props.arrr}</h1> */}


    </div>
  )
}

export default Child