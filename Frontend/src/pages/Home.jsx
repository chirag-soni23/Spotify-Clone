import React from 'react'
import Layout from '../components/Layout'
import { songData } from '../context/Song'
import Albumitem from '../components/Albumitem'
import Songitem from '../components/Songitem';


function Home() {
  const { songs, albums } = songData();

  return (
    <Layout>
      <div className='mb-4 px-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albums.map((e, i) => (
            <Albumitem key={i} image={e.thumbnail.url} name={e.title} description={e.description} id={e._id} />
          ))}
        </div>
      </div>
      <div className="mb-4 px-4">
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
      </div>
      <div className='flex overflow-auto'>
        {songs.map((song) => (
          <Songitem
            key={song._id}
            image={song.thumbnail.url}
            name={song.title}
            description={song.description}
            id={song._id}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Home
