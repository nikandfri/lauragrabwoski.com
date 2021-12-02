import Box from '@material-ui/core/box'
import Link from '@material-ui/core/Link'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
    },
    icons: {
        textDecoration: 'none',
        color:'white',
    }
})

export default function IconsWhite(){
    const classes = useStyles()
    return(
        <div>
            <Box display="flex" flexDirection="row" id="7" >
                <Box m={4} style={{marginLeft: "0px"}}><Link href="https://www.linkedin.com/in/lauragrabowski25/"><a alt="Linkedin" className={classes.icons}><LinkedInIcon /></a></Link></Box>
                <Box m={4} ><Link component="a" href="mailto:lauragrabowski@icolud.com" passhref><a alt="Email" className={classes.icons}><AlternateEmailIcon /></a></Link></Box>
            </Box>
        </div>
    )
}