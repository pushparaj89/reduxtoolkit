import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from '../../app/store'
import { User } from './userTypes';

const initialState : User[] = [];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<User>) {
            state.push(action.payload);
        },
        toggleUser(state, action: PayloadAction<User>) {
            let user = state.find(user => user.id === action.payload.id);
        },
        receiveUsers(state, action: PayloadAction<User[]>) {
            console.log("action Payload", action.payload)
            return action.payload;
        },
      
    },
});

export const { toggleUser } = userSlice.actions;

export const addUser = (
    text: string
): AppThunk => async (dispatch: AppDispatch) => {
    const newUser : User = {
        id: Math.random().toString(36).substr(2, 9), // https://gist.github.com/gordonbrander/2230317,
        name: text,
        username: text,
        email: text,
        address: {
            street: text,
            suite: text,
            city: text,
            zipcode: text,
            geo: {
              lat: text,
              lng: text
            }
          },
          phone: text,
          website: text,
          company: {
            name: text,
            catchPhrase: text,
            bs: text
          }
    }
    dispatch(userSlice.actions.addUser(newUser))
}

export async function readUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();

}

export const loadUsers = (): AppThunk => async (dispatch: AppDispatch) => {
    const todos = await readUsers();
    dispatch(userSlice.actions.receiveUsers(todos))
}
  

export default userSlice.reducer;  