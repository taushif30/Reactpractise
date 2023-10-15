import React, { useRef } from 'react'

const Uncontrol = () => {
    const refData = useRef(null)
    console.log(refData)

            //prevent reload wal athing & using type=button 

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('input value',refData.current.value);
        refData.current.focus()
        refData.current.style.backgroundColor='red'

        //using dom
        // let data = document.getElementById('input').value;
        // console.log(data)

    }



  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type='text' ref={refData} />
            <button >Submit</button>

        </form>

    </div>
  )
}

export default Uncontrol