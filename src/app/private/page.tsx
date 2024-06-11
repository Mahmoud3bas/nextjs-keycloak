import Logout from '@/components/Logout';
import { auth } from '../../../auth';

export default async function Private() {
  const session = await auth()
  if (session) {
    return <div className='flex flex-col space-y-3 justify-center items-center h-screen'>
      <div>You are accessing a private page</div>
      <div>Your name is {session.user?.name}</div>
      <div>
        <Logout />
      </div>
    </div>
  }
}
