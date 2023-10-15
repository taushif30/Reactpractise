import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {id} = useParams()
  return (
    <div>

      <h1>This is {id}</h1>
      
    </div>
  )
}

export default User





// // import React from 'react'
// // import { useParams } from 'react-router-dom'

// // const User = () => {
// //     const {id} = useParams();
// //     console.log(id)


// //   return (
// //     <div>
// //         <h1>This is user {id}</h1>

// //     </div>
// //   )
// // }

// // export default User