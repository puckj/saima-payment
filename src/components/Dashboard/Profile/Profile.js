import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from '../../../firebase'
import { Avatar, Button } from '@material-ui/core'
import { VerifiedUserOutlined } from '@material-ui/icons'
import { withRouter } from 'react-router-dom'
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

const Profile = (props) => {
    const { classes } = props
    
    return (
            <Layout>
                <Avatar className={classes.avatar}>
                    <VerifiedUserOutlined />
                </Avatar>

                <div style={{width: '50%'}}>
                    <h3>ชื่อผู้ใช้</h3>
                    <p>{firebase.getCurrentUsername()}</p>
                    <h3>รหัสผ่าน</h3>
                    <p>754564464545</p>
                    <h3>เบอร์โทรศัพท์</h3>
                    <p>099-8889998</p>
                    <h3>ธนาคาร</h3>
                    <p>KBANK</p>
                    <h3>เลขบัญชี</h3>
                    <p>124124214124</p>
                </div>

                {/* <Typography component="h1" variant="h5">
                            ชื่อผู้ใช้ {firebase.getCurrentUsername()}
                        </Typography>
                        <Typography component="h1" variant="h5">
                            Your tel: {tel ? `"${tel}"` : <CircularProgress size={20} />}
                        </Typography>
                        <Typography component="h1" variant="h5">
                            Your bank: {bank ? `"${bank}"` : <CircularProgress size={20} />}
                        </Typography>
                        <Typography component="h1" variant="h5">
                            Your accountNum: {accountNum ? `"${accountNum}"` : <CircularProgress size={20} />}
                        </Typography> */}

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={props.logout}
                    className={classes.submit}>
                    Logout
          		</Button>
            </Layout>
    )
}

export default withRouter(withStyles(styles)(Profile))