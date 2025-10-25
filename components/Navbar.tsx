import React from 'react'
import { checkUser } from '@/app/lib/checkUser'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Navbar() {
  const user = await checkUser();
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
      <div>Navbar</div>
      <div>
        {user ? (
          // Clerk's UserButton is a client component that shows avatar + sign-out
          <UserButton />
        ) : (
          <Link href="/sign-in">Sign in</Link>
        )}
      </div>
    </nav>
  )
}

