import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Box from '@material-ui/core/Box'

export default function Writing(){
    return(
        <div>
            <Header />
            <Box minHeight={"200px"} color={"blue"}>Welcome to writing</Box> 
            <Footer />
        </div>
    )
}
