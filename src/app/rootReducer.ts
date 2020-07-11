import { combineReducers } from '@reduxjs/toolkit'
import todos from '../features/todoList/todoSlice';
import users from '../features/usersList/userSlice';
import visibilityFilter from '../features/visibilityFilter/visibilityFilterSlice';
const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    users
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer