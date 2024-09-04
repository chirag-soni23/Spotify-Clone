import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { songData } from '../context/Song'
import { assets } from '../assets/assets';

function Playlist({user}) {
    const {songs} = songData();
    const [myPlaylist,setmyPlaylist] = useState([]);
    useEffect(()=>{
        if(songs && user && Array.isArray(user.playlist)){
            const filteredSongs = songs.filter((e)=>(
                user.playlist.includes(e._id.toString())
            ));
            setmyPlaylist(filteredSongs);
        }
    },[songs,user])
    console.log(myPlaylist)
    return (

        <Layout>
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-center">
                {myPlaylist && myPlaylist[0] ?(
                    <img src={myPlaylist[0].thumbnail.url} alt="" />
                ):(
                    <img src="https://via.placeholder.com/250" alt="" />
                )}
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className='text-3xl font-bold mb-4 md:text-4xl'>{user.name} PlayList</h2>
                    <h4>Your Favourate songs</h4>
                    <p className="mt-1">
                        <img className='inline-block w-6' src={assets.spotify_logo} alt="" />
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3'>
                
            </div>
            
        </Layout>


    )
}

export default Playlist
