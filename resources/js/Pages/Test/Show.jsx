import { Head } from '@inertiajs/react'

export default function Welcome({ user }) {
  return (
    <>
      <Head title="Welcome" />
      <h1>Welcome</h1>
      <p>Hello {user.name}, welcome to your first Inertia app!</p>
      <p>I'm {user.age}</p>
    </>
  )
}