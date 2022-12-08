import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
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
                <Box m={4} style={{marginLeft: "0px"}}><Link href="https://www.linkedin.com/in/niklas-jahn/"><a alt="Linkedin" className={classes.icons}><LinkedInIcon /></a></Link></Box>
                <Box m={4} ><Link component="a" href="mailto:jahn230@googlemail.com" passhref><a alt="Email" className={classes.icons}><AlternateEmailIcon /></a></Link></Box>
                <Box m={4} ><Link component="a" href="https://github.com/nikandfri" passhref><a alt="Github" className={classes.icons}><GitHubIcon /></a></Link></Box>
            </Box>
        </div>
    )
}