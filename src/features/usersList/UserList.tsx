import React from 'react'
import UserListItem from './UserListItem'
import { RootState } from '../../app/rootReducer';
import { useSelector } from 'react-redux';

export default function UserList() {
  const users = useSelector(
      (state: RootState) => state.users
  );

  return (
    <div>
      <h3>Users List</h3>
      <ul>
        {users.map(user => (
          <UserListItem key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
}