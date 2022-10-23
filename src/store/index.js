import { configureStore } from '@reduxjs/toolkit'
import reposReducer from '../features/gitApi/reposReducer'
import usersReducer from '../features/gitApi/usersReducer'
import notifReducer  from '../features/notifications/notifReducer'

export default configureStore({
  reducer: {
    users: usersReducer,
    repos: reposReducer,
    notifications: notifReducer
  },
})