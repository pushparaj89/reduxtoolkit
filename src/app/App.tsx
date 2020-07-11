import React from 'react';
import TodoList from '../features/todoList/TodoList';
import UserList from '../features/usersList/UserList';
import AddTodo from '../features/todoList/AddTodo';
import { useDispatch } from 'react-redux';
import { loadUsers } from '../features/usersList/userSlice';

// import './App.css';

export default function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
      dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div>
      <AddTodo />
      <TodoList />
      <UserList />
    </div>
  );
}