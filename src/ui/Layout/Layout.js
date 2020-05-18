import React from 'react'
import { Paper } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { withRouter } from 'react-router-dom'


const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    }
})

const Layout = (props) => {
    const { classes } = props

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                {props.children}
            </Paper>
        </main>
    )
}

export default withRouter(withStyles(styles)(Layout))