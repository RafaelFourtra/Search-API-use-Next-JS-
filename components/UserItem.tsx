import { User } from '@/types/User'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function UserItem({user}:Props) {
  return (
    <div className='flex justify-between items-center w-full hover:bg-zinc-100 px-[20px] py-[5px]'>
      <div className='inline-flex items-center space-x-3'>
        <Image alt="profile" width={40} height={40} src={user?.avatar_url} className='rounded-full' /> 
        <p className='text-base'>{user?.login}</p>
      </div>
      <span className='hover:bg-black hover:text-white p-4 rounded-full'><Link  legacyBehavior href={user?.repos_url}><a><ChevronRightIcon className='w-4 h-4' /></a></Link></span>
    </div>
  )
}

interface Props{
    user: User
}