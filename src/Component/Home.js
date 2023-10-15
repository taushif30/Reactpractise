import React from 'react'

const Home = () => {


  return (
    <div>
      <h1>Hello</h1>
      
    </div>
  )
}

export default Home
































// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   const [data,setData] = useState([
//     {name:'Taushif' , id:1},
//     {name:'Ta' , id:2},
//     {name:'Taus' , id:3},
//     {name:'Taush' , id:4},
//     {name:'Taushi' , id:5}
//   ])



//   return (
//     <div>
//       {data.map((item,index)=>{
//         return(
//           <Link to={'/User/' + item.id}> <h4>{item.name}</h4> </Link>
//         )
//       })}
//     </div>
//   )
// }

// export default Home










































// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   const [file,setFile] = useState([
//     {name:'Taushift' , id:1 , course:'Mern'},
//     {name:'Taushifr' , id:2 , course:'Mern'},
//     {name:'Taushife' , id:3 , course:'Mern'},
//     {name:'Taushifw' , id:4 , course:'Mern'},
//     {name:'Taushifq' , id:5 , course:'Mern'}
//   ])
//   return (
//     <div>
//       {file.map((item,index)=>{
//         return(
//           <div>
//             <Link to={'/student/'+item.id } ><h4>{item.name}</h4></Link>
//           </div>
//         )
//       })}
//       </div>
//   )
// }

// export default Home