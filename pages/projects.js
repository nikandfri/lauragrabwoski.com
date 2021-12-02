import React from 'react'
import Header from '../components/Header'
import Footer from '../components/FooterWhite'
import Box from '@material-ui/core/Box'
import axios from 'axios'
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import Tools from '../components/Tools.js'
import Button from '@material-ui/core/Button'
import Image from 'next/image'

const useStyles = makeStyles({
    heading: {
        fontSize: '24px',
        fontWeight: '800',
    },
    footer: {
        background: "-webkit-linear-gradient(45deg, #C33764 30%, #1D2671 50%)",
    },
    icons: {
        textDecoration: 'none',
        color:'black',
    },
    bold: {
        fontWeight: '800',
        fontSize: '1.5rem',
        textDecoration: 'none',
        color: 'white',
    },
    spacing:{
        paddingBottom:"2rem"
    }
})

function Projects({posts}){
    const classes = useStyles()

    return(
        <div>
            <Header />
            <Container  style={{marginBottom:"100px", paddingTop: "150px", minHeight: "300px", width: "100vw" }}> {posts.map((post)=> (
                <Box key={post.id} className={classes.spacing}>
                    <Box className={classes.heading}><span style={{color: "#8338EC", fontWeight:"700"}}>{post.year}</span>{post.headline}</Box>
                    <Tools name={[post.tool_one, post.tool_two, post.tool_three]}></Tools>
                    <Typography>{post.long_text}</Typography>
                    <Button variant="contained" mt={2} onClick={() => window.open(post.url)}> Check it out!</Button>
                </Box>
                ))}
            </Container>
            <Footer />
        </div>
    )
}


export async function getStaticProps() {
    const res = await fetch('http://localhost:1337/projects')
    const posts = await res.json()
    return { props: {posts}}
}


export default Projects