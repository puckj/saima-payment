import React, { useState } from 'react'
import Layout from '../../../ui/Layout/Layout'
import Service01 from './Service01/Service01'
import Service02 from './Service02/Service02'
import Service03 from './Service03/Service03'

export default function Service() {
    const [status, setStatus] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        if(status===''){
            setStatus('service01')
        }else if(status==='service01'){
            setStatus('service02')
        }else if(status==='service02'){
            setStatus('service03')
        }
        
    }

    let servicePage = <Service01 clickSubmit={submitHandler}/>

    if(status==='service01'){
        servicePage = <Service02 clickSubmit={submitHandler}/>
    }else if(status==='service02'){
        servicePage = <Service03 />
    }

    return (
            <Layout>
                {servicePage}
            </Layout>
    )
}
