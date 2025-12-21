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
import { Navbar } from '../components/Navbar';


export default function Dashboard () {
  const [count, setCount] = useState(0)
  const [modalOpen , setModalOpen ] = useState(false)
  const {contents, refresh} = useContent();
  const [filter, setFilter] = useState<ContentType | "all">("all");
  const [selectedType, setSelectedType] = useState<ContentType>(ContentType.All);
  const [ search, setSearch ] = useState("");


  

  useEffect(()=>{
    refresh()
  },[modalOpen])

  const finalContents = contents.filter((contents) => {
      const typeMatch =
      filter === "all" || contents.type === filter

      const searchMatch =
      contents.title.toLowerCase().includes(search.toLowerCase());

      return typeMatch && searchMatch
  })

  

  const filteredSearchContents = contents.filter((content) =>
    content.title.toLowerCase().includes(search.toLowerCase())
  );

  return ( <div>
   <Sidebar setFilter={setFilter} setSelectedType={setSelectedType}/> 
      <div className='  ml-72 min-h-screen bg-gray-100'>
        <div className='sticky top-0 z-20 bg-gray-400 w-full'>
          <Navbar type={selectedType} />
        </div>

       <div className='px-3 py-4'>
         <input 
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-70 md:h-10 px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
       </div>

        <div className='px-3 flex flex-wrap gap-8'>
            {finalContents.map(({_id, type, link, title})=> <Card 
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

