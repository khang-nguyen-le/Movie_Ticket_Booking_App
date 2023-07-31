import React, { useEffect } from 'react'
import BookingBanner from '../../components/BookingBanner/BookingBanner'
import PageTitle from '../../components/PageTitile/PageTitle'
import BookingPlan from '../../components/BookingPlan/BookingPlan'
import { useParams } from 'react-router-dom'
import { ticketServ } from '../../services/ticketServices'
import { useDispatch } from 'react-redux'
import { getMovieSeatPlanThunk } from '../../redux/slices/ticketSlice'
import { setLoading } from '../../redux/slices/loadingSlice'
import ProceedBook from '../../components/ProceedBook/ProceedBook'

const BookingPage = () => {
    const { scheduleId } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoading())
        ticketServ.getMovieSeatPlan(scheduleId)
            .then(res => {
                dispatch(setLoading())
                console.log(res)
                dispatch(getMovieSeatPlanThunk(res.data.content.thongTinPhim.maLichChieu))
            })
            .catch(err => {
                console.log(err)
                dispatch(setLoading())
            })
    }, [scheduleId])

    return (
        <div className='bg-gray-950 text-white'>
            <BookingBanner />
            <PageTitle />
            <BookingPlan />
            <ProceedBook />
        </div>
    )
}

export default BookingPage