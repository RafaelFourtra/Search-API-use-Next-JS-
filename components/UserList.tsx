import { SearchRes } from '@/types/SearchRes'
import React from 'react'
import UserItem from './UserItem'

export default function UserList({result}:Props) {
  return (
    <div className='border rounded-[8px] w-full space-y-3'>
      <p className='text-center p-[20px]'>Hasil Pencarian : 
        <span className='font-bold'> {result?.search}</span>
      </p>
      {result?.users.map((users,index)=>(
        <UserItem key={index} user={users} />
      ))}
    </div>
  )
}

interface Props{
  result? : SearchRes
}