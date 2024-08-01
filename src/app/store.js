import {configureStore} from '@reduxjs/toolkit'
import addSlices from '../slices/slices'

export const store = configureStore({
      reducer : {
         getUserList: addSlices,

    }
})

