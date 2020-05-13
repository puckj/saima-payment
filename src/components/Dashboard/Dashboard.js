import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Typography, AppBar, Tabs, Tab, Box } from '@material-ui/core'
import { ShoppingBasket } from '@material-ui/icons'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from '../../firebase'
import { withRouter } from 'react-router-dom'

import Profile from './Profile/Profile'
import Wallet from './Wallet/Wallet'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
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
    },
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 5,
    }
})

function Dashboard(props) {
    const { classes } = props
    const [value, setValue] = useState(0);

    // useEffect(() => {
    //     firebase.getCurrentUserTel().then(setTel)
    //     firebase.getCurrentUserBank().then(setBank)
    //     firebase.getCurrentUserAccountNum().then(setAccountNum)
    // })

    if (!firebase.getCurrentUsername()) {
        // not logged in
        alert('Please login first')
        props.history.replace('merchant_payment_v2/')
        return null
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="default" className={classes.appBar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="โปรโมชั่น" icon={<ShoppingBasket />} {...a11yProps(0)} />
                    <Tab label="ข้อมูลส่วนตัว" icon={<PersonPinIcon />} {...a11yProps(1)} />
                    <Tab label="บัญชี" icon={<AccountBalanceWalletIcon />} {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                โปรโมชั่น
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Profile logout={logoutHandler}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Wallet />
            </TabPanel>
        </div>
    )

    async function logoutHandler() {
        await firebase.logout()
        props.history.push('/merchant_payment_v2/')
    }
}

export default withRouter(withStyles(styles)(Dashboard))