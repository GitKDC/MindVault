import '../App.css';
import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ShareIcon } from '../icons/ShareIcon'
import { PlusIcon } from '../icons/PlusIcon'
import { ContentModal } from '../components/ContentModal'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent';
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { ContentType } from '../types/content';


export default function Dashboard () {
  const [count, setCount] = useState(0)
  const [modalOpen , setModalOpen ] = useState(false)
  const {contents, refresh} = useContent();
  const [filter, setFilter] = useState<ContentType | "all">("all");
  

  useEffect(()=>{
    refresh()
  },[modalOpen])

  const filteredContents =
  filter === "all"
    ? contents
    : contents.filter((c) => c.type === filter);


  return ( <div>
   <Sidebar setFilter={setFilter} />
      <div className='p-6 ml-72 min-h-screen bg-gray-100'>
         <ContentModal open={modalOpen} onClose = {()=>{
            setModalOpen(false)
         }} />
          <div className='flex justify-end gap-3'>
            
            <Button onClick={async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/mind/share`, {
                  share: true
              }, {
                headers: {
                  "Authorization": localStorage.getItem("token")
                }
              })
              const shareUrl = `http://localhost:5173/${response.data.hash}`;
              
              try {
                await navigator.clipboard.writeText(shareUrl);
                alert("Link copied to clipboard");
              } catch (err) {
                  alert("Failed to copy link");
              }


            }} variant="primary" text="Share Brain" startIcon={<ShareIcon />}/>
            <Button onClick={ () => {
              setModalOpen(true)
            }} variant="secondary" text="Add Content" startIcon={<PlusIcon />}/>
          </div>
            

        <div className='flex gap-2 flex-wrap'>
            {filteredContents.map(({_id, type, link, title})=> <Card 
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

