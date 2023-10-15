import React,{Component} from 'react'
import Mount from './Component/Mount'
import UpdatingCompo from './Component/UpdatingCompo'
import Unmount, { UnmountData } from './Component/Unmount'
class DisplayLife extends Component{
    render(){
        return(
            <>
            <Mount/>
            <UpdatingCompo/>
            <Unmount/>
            <UnmountData/>
            </>
        )
    }
} 

export default DisplayLife