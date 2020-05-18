import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Avatar } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import ButtonGroup from '@material-ui/core/ButtonGroup';

import DepositModal from './DepositModal/DepositModal'
import WithdrawModal from './WithdrawModal/WithdrawModal'
import PaymentCard from './PaymentCard/PaymentCard'
import Layout from '../../../ui/Layout/Layout'

const styles = theme => ({
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
        <Layout>
            <Avatar className={classes.avatar}>
                <AccountBalanceIcon />
            </Avatar>
            <div style={{ width: '400px', textAlign: 'center' }}>
                <h3>ยอดรวม</h3>
                <p>100 บาท</p>
                <ButtonGroup>
                    <div style={{ marginRight: 20 }}><DepositModal /></div>
                    <div><WithdrawModal /></div>
                </ButtonGroup>

            </div>
            <div style={{ width: '200px', textAlign: 'center', marginTop: 20 }}>
                <PaymentCard bank="KBANK" accountNum="369774145" />
            </div>
        </Layout>
    )
}

export default withRouter(withStyles(styles)(Wallet))