import { Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { theaterServ } from '../../services/theaterServices'
import Theater from './Theater'
import ShowingMovies from './ShowingMovies'

const TheaterList = (props) => {

    const [theater, setTheater] = useState([])

    const { theaterId } = props

    useEffect(() => {
        theaterServ.getAllTheater(theaterId)
            .then(res => {
                console.log(res)
                setTheater(res.data.content)
            })
            .catch(err => { console.log(err) })
    }, [theaterId])

    const TheaterList = theater.map(item => {
        return {
            label: <Theater theaterName={item.tenCumRap} address={item.diaChi} />,
            key: item.maCumRap,
            children: <ShowingMovies maCumRap={item.maCumRap} theaterId={theaterId} />,
        }
    })

    return (
        <Tabs tabPosition="left"
            items={TheaterList}
            style={{ maxHeight: '450px', overflowY: 'scroll' }}
        />
    )
}

export default TheaterList