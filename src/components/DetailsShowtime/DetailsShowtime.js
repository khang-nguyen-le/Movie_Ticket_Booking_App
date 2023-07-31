import React from 'react'
import DetailsFilter from './DetailsFilter'
import DetailsPlan from './DetailsPlan'

const DetailsShowtime = (props) => {
    const { theaterSystem } = props
    return (
        <div className='py-20'>
            <DetailsFilter theaterSystem={theaterSystem} />
            <DetailsPlan />
        </div>
    )
}

export default DetailsShowtime