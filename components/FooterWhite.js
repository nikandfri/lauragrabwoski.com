import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Icons from './IconsWhite'

const useStyles = makeStyles({
    bold: {
        fontWeight: '800',
        fontSize: '1.5rem',
        textDecoration: 'none',
        color: 'white'
    },
    bold2: {}
})
export default function Footer(){
    const classes = useStyles()
    return(
        <footer> 
            <Box style={{background: "linear-gradient(to right, #FF006E, #FB5607)"}} color="white" minHeight="150px" >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={8}>
                            <Box className={classes.bold}>
                                New ideas just a click away!
                            </Box>
                            <Icons></Icons>
                        </Grid>
                        <Grid item xs={false} sm={4}>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}