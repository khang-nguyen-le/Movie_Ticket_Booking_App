import { https } from "./config"

export const userServ = {
    login: (data) => {
        return https.post('/api/QuanLyNguoiDung/DangNhap', data)
    },
    getAllUser: () => {
        return https.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
    },
    deleteUser: (taiKhoan) => {
        return https.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    },
    addUser: (data) => {
        return https.post('/api/QuanLyNguoiDung/ThemNguoiDung', data)
    },
    getUser: (taiKhoan) => {
        return https.post(`/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
    },
    updateUser: (data) => {
        return https.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data)
    },
    createUser: (data) => {
        return https.post('/api/QuanLyNguoiDung/DangKy', data)
    }
}