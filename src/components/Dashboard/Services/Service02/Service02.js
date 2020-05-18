import React from 'react'
import classes from './Service02.module.css'
import { Button } from '@material-ui/core'

export default function Service02(props) {

    return (
        <div className={classes.container}>
            <div>
                <h3>บริการส่งสินค้า</h3>
                <p>จากร้าน xxxxxxx</p>
                <h3>เลขที่แสดงการใช้บริการ</h3>
                <p>xxxxxxxxxxxxxxxxxx</p>

                <h3>จัดส่งไปที่</h3>
                <p>คุณ xxxxxxx</p>
                <p>เบอร์โทร xxxxxxx</p>
                <p>ที่อยู่ xxxxxxx</p>
            </div>
            <div>
                <h3>ค่าบริการ</h3>
                <div className={classes.serviceFeeItem}>
                    <p>ค่าบริการ</p>
                    <p>xxxx บาท</p>
                </div>
                <div className={classes.serviceFeeItem}>
                    <p>ค่าธรรมเนียม</p>
                    <p>xxxx บาท</p>
                </div>
                <div className={classes.serviceFeeItem}>
                    <p>ยอดชำระทั้งหมด</p>
                    <p>xxxx บาท</p>
                </div>
            </div>

            <div style={{ marginTop: 80 }}>
                <Button variant="contained" onClick={props.clickSubmit} color="secondary" fullWidth>
                    ชำระเงิน
                    </Button>
            </div>
        </div>
    )
}