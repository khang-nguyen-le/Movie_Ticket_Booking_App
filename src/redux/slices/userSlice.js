import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getLocal } from "../../utils/localStore"
import { userServ } from "../../services/userServices"

// Tạo createAsyncThunk để xử lí các tác vụ bất đồng bộ trước khi dispatch dữ liệu lên Redux store bằng Redux-thunk
// Hàm createAsyncThunk có 2 tham số, tham số thứ nhất là type của hàm, tham số thứ 2 là hàm để xử lí các tác vụ bất đồng bộ
export const getAllUser = createAsyncThunk('user/getAllUser', async () => {
    const res = await userServ.getAllUser()

    return res.data.content
})

export const getUserThunk = createAsyncThunk('user/getUserThunk', async (taiKhoan) => {
    const res = await userServ.getUser(taiKhoan)

    return res.data.content
})

const initialState = {
    user: getLocal('user'),
    users: [],
    notification: null,
    updatedUser: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (!state.user) {
                state.user = action.payload
            }
        },
        resetUpdatedUser: (state, action) => {
            state.updatedUser = {}
        }
    },
    // extraReducers giúp tách biệt các logic bất đồng bộ ra khỏi reducer vì khi xử lí bất đồng bộ có nhiều trường hợp xảy ra
    extraReducers: (builder) => {
        // Bên trong hàm có 3 phương thức tương ứng với các trường hợp chạy thành công (fulfilled), đang chạy (pending), thất bại (rejected)
        builder.addCase(getAllUser.fulfilled, (state, action) => {
            //Thuộc tính payload bên trong action chứa các giá trị được trả về từ hàm createAsyncThunk
            console.log(action)
            state.users = action.payload
        });

        builder.addCase(getAllUser.rejected, (state, action) => {
            console.log(action)
            state.notification = action.error.message
        });

        builder.addCase(getUserThunk.fulfilled, (state, action) => {
            console.log(action)
            state.updatedUser = action.payload
        });

        builder.addCase(getUserThunk.rejected, (state, action) => {
            console.log(action)
        })
    }
})

export const { setUser, resetUpdatedUser } = userSlice.actions

export default userSlice.reducer