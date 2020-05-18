import React from 'react'
import classes from './Service03.module.css'
import { Button } from '@material-ui/core'

export default function Service02(props) {

    return (
        <div style={{ textAlign: 'left', width: '70%' }}>
            <div>
                <h3>บริการส่งสินค้า</h3>
                <p>จากร้าน xxxxxxx</p>
                <h3>เลขที่แสดงการใช้บริการ</h3>
                <p>xxxxxxxxxxxxxxxxxx</p>
            </div>
            <div className={classes.method}>
                <Button variant="outlined" className={classes.methodBtn}>
                    บัตรเครดิต / บัตรเดบิต
                </Button>
                <br />
                <Button variant="outlined" className={classes.methodBtn}>
                    iBanking/Mobile Banking
                </Button>
                <br />
                <Button variant="outlined" className={classes.methodBtn}>
                    ชำระผ่าน ATM
                </Button>
                <br />
                <Button variant="outlined" className={classes.methodBtn}>
                    โอน/ชำระผ่านบัญชีธนาคาร
                </Button>
            </div>
            <div style={{ marginTop: 80 }}>
                <Button variant="contained" onClick={props.clickSubmit} color="secondary" fullWidth>
                    ชำระเงิน
                    </Button>
            </div>
        </div>
    )
}