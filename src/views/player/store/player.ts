import { createSlce } from '@reduxjs/toolkit'

interface IPlayerState {
  currentSongs: any
}

const initialState: IPlayerState = {
  currentSongs: {}
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {}
})

export default playerSlice.reducers
