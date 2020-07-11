import React from 'react'

interface UserProps {
  id: string,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export default function UserListItem({ id, name }: UserProps) {
  return (
    <li
      // style={{
      //   textDecoration: completed ? 'line-through' : 'none'
      // }}
    >
      {name}
    </li>
  )
}