import { getHomeGoodPriceData, getHomeHignScoreData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchdata', async (payload, { dispatch }) => {

  const goodPriceData = await getHomeGoodPriceData(); // 这应该是一个函数调用
  dispatch(changeGoodPriceInfoAction(goodPriceData));

  const highScoreData = await getHomeHignScoreData(); // 同样，这也应该是一个函数调用
  dispatch(changeHighScoreInfoAction(highScoreData));
})


const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    }
  }
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } = homeSlice.actions;


export default homeSlice.reducer
