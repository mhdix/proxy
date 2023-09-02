import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './MtProxy.css'
const MtProxy = () => {
    const [proxy, setProxy] = useState([])
    const [onClicked, setOnClicked] = useState()
    console.log(proxy);
    useEffect(() => {
        async function proxy() {
            const pro = await axios.get('https://raw.githubusercontent.com/hookzof/socks5_list/master/tg/mtproto.json')
            setProxy(pro.data)
        }
        proxy()
    }, [])
    return (
        <div className='proxy'>
            {
                proxy.map((item) => {
                    return (
                        <div className='proxy-box'>
                            <p>host : {item.host}</p>
                            <p>port : {item.port}</p>
                            <p>ping : {item.ping}</p>
                            <p>secret : {item.secret}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MtProxy