
import '@fontsource/roboto';
import { Typography, useMediaQuery } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { blue } from '@material-ui/core/colors';





const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  bold: {
    fontWeight: '700',
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#4a5568',
    '&:hover': {
      background: "-webkit-linear-gradient(45deg, #916482 0%, #A4AADB 35%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  },

  heading: {
    fontSize: '3rem',
    fontWeight: '800',
    background: "-webkit-linear-gradient(45deg, #649173 0%, #DBD5A4 35%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },

  icons: {
    textDecoration: 'none',
    color: 'black',
  },
  hand: {
    WebkitTextFillColor: "none"
  }
});


export default function Home(props) {
  const classes = useStyles(props)
  const matches = useMediaQuery(`(min-width:600px)`)
  return (
    <div>
      <Grid container spacing={3} style={{ height: "100vh", width: "100vw" }}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Box id="body" >
              <Box>
                <Typography variant="body1" gutterBottom>Hi, I’m</Typography>
                <div className={classes.heading}>Niklas Jahn</div>
                <Typography fontStyle="italic" variant="body1" gutterBottom style={{color:"#4a5568"}}>
                I am an innovation manager, developer and a true dog lover. Always exploring new sustainable
                business models and realizing new digital opportunities.  
                </Typography>
              </Box>
              <Box style={matches ? { display: "flex", flexDirection: "row-reverse", flexWrap: "wrap" } : { display: "flex", flexDirection: "column", flexWrap: "wrap"}}>
                <Box style={matches ? {padding:"16px", margin:"4px"} : {paddingTop:"20px", margin:"0px"}}>
                  <Link href="/about">
                    <a className={classes.bold}>About</a>
                  </Link>
                </Box>
                <Box style={matches ? {padding:"16px", margin:"4px"} : {paddingTop:"12px", margin:"0px"}}>
                  <Link href="https://www.linkedin.com/in/niklas-jahn/">
                    <a className={classes.bold}>LinkedIn</a>
                  </Link>
                </Box>
                <Box style={matches ? {padding:"16px", margin:"4px"} : {paddingTop:"12px", margin:"0px"}}>
                  <Link href="https://medium.com/@jahn230">
                    <a className={classes.bold}>Writing</a>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}
