import React, { useState, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
});

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    }
}));

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(10),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function WithdrawModal() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [submit, setSubmit] = useState(false);

    const [bank, setBank] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSubmit(false);
    };
    const handleSubmit = () => {
        setSubmit(true);
    }

    let withdrawModal = (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                ถอนเงิน
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    ถอนเงินออกบัญชี
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <p>ธนาคาร</p>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">ตัวเลือกการถอน</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={bank}
                                onChange={e =>
                                    setBank(e.target.value)}
                            >
                                <MenuItem value={10}>TMB</MenuItem>
                                <MenuItem value={20}>KTB</MenuItem>
                                <MenuItem value={30}>KBANK</MenuItem>
                            </Select>
                        </FormControl>
                    </Typography>
                    <Typography gutterBottom>
                        <p>จำนวน</p>
                        <TextField id="filled-basic" type="number" label="ยอดเงินที่ถอนได้ ฿0.00" variant="filled" />
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        ต่อไป
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

    if (submit === true) {
        // let random_boolean = Math.random() >= 0.5;
        return (
            <div>
                <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                    ถอนเงิน
                </Button>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        ถอนเงินออกบัญชี
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                        
                        <h2><CheckCircleIcon/>ถอนเงินสำเร็จ</h2>
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            ยืนยัน
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

    return (
        <Fragment>
            {withdrawModal}
        </Fragment>
    );
}
