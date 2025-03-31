import React from 'react'

export default function LoginPage() {
  return (
    <>

        <h1>Login Page</h1>
        <form action="/api/login" method="post">
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>


    </>
  )
}
