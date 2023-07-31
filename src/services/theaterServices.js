import { https } from "./config"

export const theaterServ = {
    getAllTheaters: () => {
        return https.get('/api/QuanLyRap/LayThongTinHeThongRap')
    },
    getAllTheater: (maHeThongRap) => {
        return https.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    },
    getMoviesByTheater: (maHeThongRap) => {
        return https.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`)
    }
}