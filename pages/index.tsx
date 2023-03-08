import Button from '@/components/Button'
import Form from '@/components/Form'
import Header from '@/components/Header'
import UserList from '@/components/UserList'
import Head from 'next/head'
import React, { useState } from 'react'
import { User } from '@/types/User'
import { SearchRes } from '@/types/SearchRes'

export default function Home() {

  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [result, setResult] = useState<SearchRes | null>(null)

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search) {
      setIsLoading(true)
      fetch(`https://api.github.com/search/users?q=${search}`)
        .then(res => res.json())
        .then(data => {
          const users: User[] = data.items
          const searchRes: SearchRes = {
            search: search,
            users: users,
          }
          setResult(searchRes)
        }).finally(() => {
          setIsLoading(false)
        })
    }
  }
  return (
    <div className='space-y-5'>
      <Head>
        <title>Github User</title>
      </Head>
      <Header />
      <form className='flex place-self-center space-x-5' onSubmit={onSearchSubmit}>
        <Form value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button type='submit' isLoading={isLoading} />
      </form>
      {result && <UserList result={result}/>}
    </div>
  )
}

