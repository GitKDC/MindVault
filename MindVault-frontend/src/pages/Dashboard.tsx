import '../App.css';
import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ShareIcon } from '../icons/ShareIcon'
import { PlusIcon } from '../icons/PlusIcon'
import { ContentModal } from '../components/ContentModal'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent';

export default function Dashboard () {
  const [count, setCount] = useState(0)
  const [modalOpen , setModalOpen ] = useState(false)
  const {contents, refresh} = useContent();

  useEffect(()=>{
    refresh()
  },[modalOpen])

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
            

        <div className='flex gap-2 flex-wrap'>
            {contents.map(({_id, type, link, title})=> <Card 
            key = {_id}
            _id={_id}
            type = {type} 
            link = {link} 
            title={title} 
          />)}
        </div>
      </div>
  </div>
  )
}

