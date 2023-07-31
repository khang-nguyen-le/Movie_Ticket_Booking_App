import { https } from "./config"

export const ticketServ = {
    getMovieSeatPlan: (scheduleId) => {
        return https.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${scheduleId}`)
    },
    bookTicket: (ticket) => {
        return https.post('api/QuanLyDatVe/DatVe', ticket)
    }
}