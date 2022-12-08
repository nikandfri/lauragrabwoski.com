import React, { useEffect, useState } from 'react'
import '@fontsource/roboto';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { flexbox } from '@material-ui/system';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from 'next/link'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { palette } from '@material-ui/system';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import pic from '../public/picture.jpg'
import Image from 'next/image'
import Footer from '../components/FooterWhite'
import Header from '../components/Header'



const useStyles = makeStyles({
  heading: {
    fontSize: '3rem',
    fontWeight: '800',
  },
  footer: {
    background: "-webkit-linear-gradient(45deg, #C33764 30%, #1D2671 50%)",
  },
  icons: {
    textDecoration: 'none',
    color: 'black',
  },
  bold: {
    fontWeight: '800',
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: 'white',
  },
  bold3: {
    fontWeight: '800',
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#4a5568',
  },
  bold2: {
    fontWeight: '800',
    textDecoration: 'underline',
    color: '#4a5568',
  }
})


export default function About(props) {
  const classes = useStyles(props)
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Header />
      <div>
        <Container style={{ marginBottom: "100px", paddingTop: "100px", minHeight: "100%", width: "100vw" }}>

          <Grid container spacing={3}>
            <Box clone order={{ xs: 1, sm: 2 }}>
              <Grid item xs={12} sm={6} order={{ sm: 2 }}> <Image src={pic} alt="Picture of the author" /></Grid>
            </Box>
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                <div className={classes.bold3}>
                  About Me 🔥
                </div>
                <Typography variant="body1" style={{ color: "#4a5568", lineHeight: 2.0 }}>
                  I am a developer, digital marketer, and Corporate Innovation Specialist living in Essen. <br></br>I am good at incubating PowerPoints to products. I am passionate about sustainability and new business model that dare to solve problems.<br></br>Recently I joined <Link href="https://www.dnb.no/" passHref><span className={classes.bold2}>DNB Bank Asa</span></Link> in 2022 as one of their Innovation Specialists, and helped to pilot new initatives in payments and coporate banking.
                  Before that, I worked at <Link href="https://schmiede.one/" passHref ><span className={classes.bold2}>schmiede.one</span></Link> for a few years in Robotics and Web-Development after graduating from <Link href="https://www.uni-wuppertal.de/de/" passHref><span className={classes.bold2}>University of Wuppertal</span></Link> with a specialisation in Entrepreneurship and Innovation.
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  )
}
