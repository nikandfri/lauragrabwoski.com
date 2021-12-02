import Box from '@material-ui/core/box'
import Link from '@material-ui/core/Link'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { Button, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    marginRight: "10px",
    marginBottom: "0.6rem",
    padding: "5px",
    backgroundColor: "#3A86FF",
    color: "white",
    fontSize: "12px",
    display: "inlineBlock",
  },  
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
      }
})

export default function Tools(props) {
    const classes = useStyles()
    return (
        <Box display="flex" flexDirection="column">
          <Card variant="outlined" className={classes.root}>
            {props.name[0]}
          </Card>
          <Card variant="outlined" className={classes.root}>
            {props.name[1]}
          </Card>
          <Card variant="outlined" className={classes.root}>
            {props.name[2]}
          </Card>
        </Box>

        )
}