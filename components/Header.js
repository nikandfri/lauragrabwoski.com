import '@fontsource/roboto';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    bold: {
        fontWeight: '800',
        fontSize: '1.25rem',
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            background: "-webkit-linear-gradient(45deg, #8338EC 25%, #3A86FF 35%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }
    },
    boldtwo: {
        fontWeight: '800',
        paddingBottom:"16px",
        paddingRight: "1rem",
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            background: "-webkit-linear-gradient(45deg, #8338EC 25%, #3A86FF 35%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }
    },
    heading: {
        fontSize: '1.25rem',
        fontWeight: '800',
        background: "-webkit-linear-gradient(45deg, #FB5607 0%, #FF006E 15%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    },
})

export default function Header() {
    const matches = useMediaQuery(`(min-width:600px)`)
    const classes = useStyles()
    return (
        <div>
            <AppBar elevation={0} style={{ position: "fixed", backgroundColor: "white", color: "black" }}>
                <Toolbar>
                    <Box sx={{width: "100%", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"flex-start"}}>
                        {matches ? <Box m={2} flexGrow={10} sx={{fontWeight: "800", fontSize:"1.5rem"}} ><span className={classes.heading}>Laura Grabowski </span></Box> : <Box m={0} sx={{width:"100%", fontWeight:"800", fontSize: "1.5rem", paddingTop: "16px"}} ><span className={classes.heading}>Laura Grabowski</span></Box>}
                        {matches ? <Box m={2} sx={{fontWeight: "800"}}><Link href="/writing"><a className={classes.bold}>Blog</a></Link></Box> :  <Box m={0}><Link href="/writing"><a className={classes.boldtwo}>Blog</a></Link></Box> }
                        {matches ? <Box m={2} sx={{fontWeight:"800"}}><Link href="https://www.linkedin.com/in/lauragrabowski25/"><a style={{color: "black"}} className={classes.bold}>LinkedIn</a></Link></Box>: <Box m={0} ><Link href="https://www.linkedin.com/in/lauragrabowski25/"><a className={classes.boldtwo} >LinkedIn</a></Link></Box>}
                        {matches ? <Box m={2} sx={{fontWeight: "800"}}><Link href="/"><a className={classes.bold}>Start</a></Link></Box> : <Box m={0} className={classes.boldtwo}><Link href="/"><a className={classes.boldtwo}>Start</a></Link></Box> }
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}