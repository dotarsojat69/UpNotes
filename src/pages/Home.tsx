import React from 'react'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'

const Home = () => {
  return (
    <>
        <Navbar />

        <div className='container mx-auto'>

            <NoteCard
                title="Meeting mijit puting"
                date="28 April 2023"
                content="Mijit Puting"
                tags="#Meeting"
                isPinned={true}
                onEdit={() =>{}}
                onDelete={() =>{}}
                onPinNote={() =>{}}
            />
        </div>
    </>
  )
}

export default Home