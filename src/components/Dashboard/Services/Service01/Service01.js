import React from 'react'
import { TextField, Button } from '@material-ui/core'
import classes from './Service01.module.css'

export default function Service01(props) {

    return (
        <div style={{ textAlign: 'left', width: '70%' }}>
            <form>
                <h3>บริการส่งสินค้า</h3>
                <h3>กรุณากรอกแบบฟอร์มออเดอร์</h3>
                <div>
                    <div className={classes.serviceItem}>
                        <p>ที่อยู่ผู้ส่ง</p>
                        <button className={classes.serviceItemBtn}>Recent</button>
                    </div>
                    <p>เลือกที่อยู่จากแผนที่</p>
                </div>
                <hr />
                <div>
                    <div className={classes.serviceItem}>
                        <p>ที่อยู่ผู้รับสินค้า</p>
                        <button className={classes.serviceItemBtn}>Recent</button>
                    </div>
                    <p>โปรดระบุจำนวนสินค้า</p>
                    <p>โปรดเลือกช่วงเวลา</p>
                    <TextField id="outlined-basic" className={classes.serviceInput} required placeholder="โปรดระบุชื่อผู้รับบนสินค้าให้ชัดเจน" fullWidth variant="outlined" />
                </div>
                    <TextField id="outlined-basic" className={classes.serviceInput} required label="คูปอง" placeholder="พิมพ์รหัสคูปอง" fullWidth variant="outlined" />
                    <Button variant="contained" className={classes.serviceSubmitBtn} type="submit" onClick={props.clickSubmit} color="secondary" fullWidth>
                        ยืนยัน
                    </Button>
            </form>
        </div>
    )
}