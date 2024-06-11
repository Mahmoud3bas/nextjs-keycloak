import Login from '../components/Login'
import Logout from '../components/Logout'
import { auth } from '../../auth'

export default async function Home() {
  const session = await auth() 
  if (session) {
    return <div className='flex flex-col space-y-3 justify-center items-center h-screen'>
      <div>Your name is {session.user?.name}</div>
      <div>
        <Logout />
      </div>
    </div>
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <Login />
    </div>
  )
}
