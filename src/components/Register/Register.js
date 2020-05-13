import React, { useState } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../firebase'

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
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
})

function Register(props) {
    const { classes } = props

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [tel, setTel] = useState('')
    const [bank, setBank] = useState('')
    const [accountNum, setAccountNum] = useState('')

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register Account
       			</Typography>
                <form className={classes.form} onSubmit={e => e.preventDefault() && false}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="name">ชื่อ-นามสกุล</InputLabel>
                        <Input id="name" name="name" autoComplete="off" autoFocus value={name} onChange={e => setName(e.target.value)} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">อีเมล</InputLabel>
                        <Input id="email" name="email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">รหัสผ่าน</InputLabel>
                        <Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="tel">เบอร์โทรศัพท์</InputLabel>
                        <Input name="tel" type="text" id="tel" autoComplete="off" value={tel} onChange={e => setTel(e.target.value)} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel id="demo-simple-select-label">ธนาคาร</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={bank}
                            onChange={e => setBank(e.target.value)}
                        >
                            <MenuItem value={'TMB'}>TMB</MenuItem>
                            <MenuItem value={'KTB'}>KTB</MenuItem>
                            <MenuItem value={'KBANK'}>KBANK</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="accountNum">เลขบัญชี</InputLabel>
                        <Input name="accountNum" type="text" id="accountNum" autoComplete="off" value={accountNum} onChange={e => setAccountNum(e.target.value)} />
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={onRegister}
                        className={classes.submit}>
                        Register
          			</Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/merchant_payment_v2/"
                        className={classes.submit}>
                        Go back to Login
          			</Button>
                </form>
            </Paper>
        </main>
    )

    async function onRegister() {
        try {
            await firebase.register(email, name, password, tel, bank, accountNum)
            // await firebase.addTel(tel)
            // await firebase.addBank(bank)
            // await firebase.addAccountNum(accountNum)

            props.history.replace('/merchant_payment_v2/dashboard')
        } catch (error) {
            alert(error.message)
        }
    }
}

export default withRouter(withStyles(styles)(Register))