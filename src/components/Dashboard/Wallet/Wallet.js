import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Paper, Avatar } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import ButtonGroup from '@material-ui/core/ButtonGroup';

import DepositModal from './DepositModal/DepositModal'
import WithdrawModal from './WithdrawModal/WithdrawModal'
import PaymentCard from './PaymentCard/PaymentCard'

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: '70%',
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
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    }
})

const Wallet = (props) => {
    const { classes } = props

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountBalanceIcon />
                </Avatar>
                <div style={{ width: '400px', textAlign: 'center' }}>
                    <h3>ยอดรวม</h3>
                    <p>100 บาท</p>
                    <ButtonGroup>
                        <div style={{marginRight: 20}}><DepositModal /></div>
                        <div><WithdrawModal /></div>
                    </ButtonGroup>
                    
                </div>
                <div style={{width: '200px', textAlign: 'center', marginTop: 20}}>
                        <PaymentCard bank="KBANK" accountNum="369774145" />
                </div>
            </Paper>
        </main>
    )
}

export default withRouter(withStyles(styles)(Wallet))