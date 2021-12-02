import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Icons from './IconsComponent'

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
            <Box style={{background: "linear-gradient(to right, #FB5607, #FF006E)"}} color="white" minHeight="150px" >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={8}>
                            <Box className={classes.bold}>
                                Lets talk! Hit me up on LinkedIn, Github or Instagram
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