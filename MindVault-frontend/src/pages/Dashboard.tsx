import '../App.css';
import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ShareIcon } from '../icons/ShareIcon'
import { PlusIcon } from '../icons/PlusIcon'
import { ContentModal } from '../components/ContentModal'
import { Sidebar } from '../components/Sidebar'

export default function Dashboard () {
  const [count, setCount] = useState(0)
  const [modalOpen , setModalOpen ] = useState(false)

  return ( <div>
   <Sidebar />
      <div className='p-6 ml-72 min-h-screen bg-gray-100'>
         <ContentModal open={modalOpen} onClose = {()=>{
            setModalOpen(false)
         }} />
          <div className='flex justify-end gap-3'>
            <Button variant="primary" text="Share Brain" startIcon={<ShareIcon />}/>
            <Button onClick={ () => {
              setModalOpen(true)
            }} variant="secondary" text="Add Content" startIcon={<PlusIcon />}/>
          </div>
     

        <div className='flex gap-2'>
          <Card type = "youtube" link = "https://www.youtube.com/watch?v=GGli3uBqUts" title= "React with typescript" />
          <Card type = "twitter" link = "https://x.com/freeCodeCamp/status/2000732870524948760" title= "Freecodecamp" />
        </div>
      </div>
  </div>
  )
}

