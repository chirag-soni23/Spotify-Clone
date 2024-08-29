import React, { useState, useEffect } from 'react'
import { UserData } from '../context/User'
import { Link, useNavigate } from 'react-router-dom';
import { songData } from '../context/Song';
import { MdDelete } from "react-icons/md";

const Admin = () => {
  const { user } = UserData();
  const { albums, songs, addAlbum, addSong, loading } = songData();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [singer, setSinger] = useState("");
  const [description, setDescription] = useState("");
  const [album, setAlbum] = useState("");
  const [file, setFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  useEffect(() => {
    if (user && user.role !== "admin") navigate("/");
  }, [user, navigate]);

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const audioFileChangeHandler = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);
  };

  const addAlbumHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    addAlbum(formData);
    setTitle("");
    setDescription("");
    setFile(null);
  };

  const addSongHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("singer", singer);
    formData.append("description", description);
    formData.append("album", album);
    formData.append("file", audioFile);
    addSong(formData);
    setTitle("");
    setSinger("");
    setDescription("");
    setAlbum("");
    setAudioFile(null);
  };

  return (
    <div className='min-h-screen bg-[#212121] text-white p-8'>
      <Link to="/" className='bg-green-500 text-white font-bold py-2 px-4 rounded-full'>Go to Home page</Link>
      
      <h2 className='text-2xl font-bold mb-6 mt-6'>Add Album</h2>
      <form onSubmit={addAlbumHandler} className='bg-[#181818] p-6 rounded-lg shadow-lg'>
        <div className="mb-4">
          <label className='block text-sm font-medium mb-1'>Title</label>
          <input value={title} className='auth-input' type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Title' required />
        </div>
        <div className="mb-4">
          <label className='block text-sm font-medium mb-1'>Description</label>
          <input onChange={(e) => setDescription(e.target.value)} value={description} className='auth-input' type="text" placeholder='Description' required />
        </div>
        <div className="mb-4">
          <label className='block text-sm font-medium mb-1'>Thumbnail</label>
          <input onChange={fileChangeHandler} className='auth-input' required type="file" accept='image/*' />
        </div>
        <button disabled={loading} className='auth-button' style={{ width: "100px" }}>{loading?"Please wait....":"Add"}</button>
      </form>

      <h2 className='text-2xl font-bold mb-6 mt-6'>Add Songs</h2>
      <form onSubmit={addSongHandler} className='bg-[#181818] p-6 rounded-lg shadow-lg'>
        <div className="mb-4">
          <label className='block text-sm font-medium mb-1'>Title</label>
          <input value={title} className='auth-input' type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Title' required />
        </div>
        <div className="mb-4">
          <label className='block text-sm font-medium mb-1'>Singer</label>
          <input value={singer} onChange={(e) => setSinger(e.target.value)} className='auth-input' type="text" placeholder='Singer' required />
        </div>
        <div className="mb-4">
          <label className='block text-sm font-medium mb-1'>Description</label>
          <input onChange={(e) => setDescription(e.target.value)} value={description} className='auth-input' type="text" placeholder='Description' required />
        </div>
        <select value={album} onChange={(e) => setAlbum(e.target.value)} className='auth-input mb-4'>
          <option value="">Choose Album</option>
          {albums && albums.map((album, i) => (
            <option value={album._id} key={i}>{album.title}</option>
          ))}
        </select>
        <div className="mb-4">
          <label className='block text-sm font-medium mb-1'>Audio</label>
          <input onChange={audioFileChangeHandler} className='auth-input' type="file" accept='audio/*' required />
        </div>
        <button disabled={loading} className='auth-button' style={{ width: "100px" }}>{loading ? "Please wait..." : "Add"}</button>
      </form>

      <div className="mt-8">
        <h2 className='text-2xl font-bold mb-6 mt-6'>Added Songs</h2>
        <div className="flex flex-wrap gap-4">
          {songs && songs.map((song, i) => (
            <div key={i} className='bg-[#181818] p-4 rounded-lg shadow-md w-64 space-y-2'>
              {song.thumbnail ? (
                <img className='mr-1 h-52 w-full object-cover rounded-lg' src={song.thumbnail.url} alt={song.title} />
              ) : (
                <div className='flex flex-col justify-center items-center gap-2'>
                  <input onChange={fileChangeHandler} type="file" />
                  <button className='bg-green-500 text-white px-2 py-1 rounded'>Add Thumbnail</button>
                </div>
              )}
              <h4 className='text-lg font-bold mt-2'>{song.title}</h4>
              <h4 className='text-sm text-gray-500'>{song.singer}</h4>
              <h4 className='text-sm text-gray-500'>{song.description}</h4>
              <button className='bg-red-500 p-2 rounded'><MdDelete/></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Admin;
