import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { songData } from '../context/Song'
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import { UserData } from '../context/User';
import { FaBookmark, FaPlay } from 'react-icons/fa';

const Album = () => {
    const { fetchAlbumSong, albumSong, albumData, setSelectedSong,setIsplaying } = songData();
    const params = useParams();
    const {addtoPlaylist} = UserData();
    useEffect(() => {
        fetchAlbumSong(params.id);
    }, [params.id]);
    const onClickhandler = (id)=>{
        setSelectedSong(id);
        setIsplaying(true);        
    }

    const savePlaylisthandler =(id)=>{
        addtoPlaylist(id);

    }
    return (
        <Layout>{albumData && (
      <>
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-center">
            {albumData.thumbnail && <img src={albumData.thumbnail.url} className='w-48 rounded' />}
            <div className="flex flex-col">
                <p>Playlist</p>
                <h2 className='text-3xl font-bold mb-4 md:text-4xl'>{albumData.title} PlayList</h2>
                <h4>{albumData.description}</h4>
                <p className="mt-1">
                    <img className='inline-block w-6' src={assets.spotify_logo} alt="" />
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p>
                    <b className='mr-4'>#</b>
                </p>
                <p>Artist</p>
                <p className='hidden sm:block'>Description</p>
                <p className='text-center'>Actions</p>
                
            </div>
            <hr />
            {albumSong && albumSong.map((e,i)=>(
                <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer' key={i}>
                    <p className='text-white'>
                        <b className='mr-4 text-[#a7a7a7]'>{i+1}</b>
                        <img src={e.thumbnail.url} className='inline w-10 mr-5' alt="" />
                        {e.title}
                    </p>
                    <p className='text-[15px]'>{e.singer}</p>
                    <p className='text-[15px] hidden sm:block'>{e.description.slice(0,13)}</p>
                    <p className='flex justify-center items-center gap-5'>
                        <p onClick={()=>savePlaylisthandler(e._id)} className='text-[15px] text-center'><FaBookmark/></p>
                        <p onClick={()=>onClickhandler(e._id)} className='text-[15px] text-center'><FaPlay/></p>
                    </p>
                </div>
            ))}

      </>
        )}</Layout>
    )
}

export default Album