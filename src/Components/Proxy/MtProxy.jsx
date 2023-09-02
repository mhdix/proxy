import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './MtProxy.css'
const MtProxy = () => {
    const [proxy, setProxy] = useState([])
    const [onClicked, setOnClicked] = useState()
    const [ping,setPing] = useState(null)
    console.log(proxy);
    useEffect(() => {
        async function proxy() {
            const pro = await axios.get('https://raw.githubusercontent.com/hookzof/socks5_list/master/tg/mtproto.json')
            setProxy(pro.data)
            // https://web.telegram.org/k/
            setPing(proxy.ping)
        }
        proxy()
        console.log(ping);
    }, [ping])
    return (
        <div className='proxy'>
            {
                proxy.map((item) => {
                    return (
                        <div className='proxy-box'>
                            <div>
                                <p>host : {item.host}</p>
                                <button onClick={() => navigator.clipboard.writeText(`${item.host}`)}>copy</button>
                            </div>
                            <div>
                                <p>port : {item.port}</p>
                                <button onClick={() => navigator.clipboard.writeText(`${item.port}`)}>copy</button>

                            </div>
                            <div>
                                <p>secret : {item.secret}</p>
                                <button onClick={() => navigator.clipboard.writeText(`${item.secret}`)}>copy</button>

                            </div>
                            <div>
                                <p className={item.ping > 1000 ? 'red' : 'green'} >ping : {item.ping}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MtProxy