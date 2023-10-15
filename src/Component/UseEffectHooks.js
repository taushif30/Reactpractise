import React, { useEffect, useState } from 'react'

function UseEffectHooks (){

    const [mouseCod, setmouseCod] = useState({x:0 ,y:0});
    const [width,setWidth] = useState(window.screen.width);
    console.log(mouseCod,width)



    // useEffect(()=> {
    //     console.log('useeffect mount 1')

    // },[count,data])

    const mouseHandle=(e)=>{
        setmouseCod({
            x : e.clientX,
            y : e.clientY


        })
    }

    const resizeScreen=()=>{
        setWidth(window.innerWidth)
    }

    useEffect(()=> {
        window.addEventListener('resize',resizeScreen)
        return(()=>{
            window.removeEventListener('resize',resizeScreen)
        })

    },[width])


    useEffect(()=>{
        window.addEventListener('mousemove',mouseHandle)
        return(()=>{
            window.removeEventListener('mousemove' , mouseHandle)
        })
    },[mouseCod])










    return(
        <>
        <h1>hello</h1>
        <h1>{width} px</h1>
        <h1>Mouse Co-ordinate : X ={mouseCod.x} , Y= {mouseCod.y}</h1>
        {/* <h1>Count : {count}</h1>
        <h1>Data : {data}</h1>
        <button onClick={()=>setCount(count + 1)}>Count</button>
        <button onClick={()=>setData(data - 1)}>Data</button> */}
        </>
    )
}

export default UseEffectHooks