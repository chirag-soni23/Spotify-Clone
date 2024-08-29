import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const songContext = createContext();

export const SongProvider = ({children})=>{
    const [songs,setSongs] = useState([]);
    const [loading,setLoading] = useState(false);
    const [songLoading,setSongLoading] = useState(true);

    // fetch songs
    async function fetchSongs(){
        try {
            const {data} = await axios.get("/api/song/all") 
            setSongs(data);          
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        fetchSongs();
    },[]);

    // add album
    async function addAlbum(formData){
        setLoading(true);
        try {
            const {data} = await axios.post("/api/song/album/new",formData);
            toast.success(data.message);
            setLoading(false);
            fetchAlbums();
       
            
        } catch (error) {
            toast.error(error.response.data.message);
            setLoading(false);            
        }

    }

    // add songs
    async function addSong(formData){
        setLoading(true);
        try {
            const {data} = await axios.post("/api/song/new",formData);
            toast.success(data.message);
            setLoading(false);
            fetchAlbums();
          
            
        } catch (error) {
            toast.error(error.response.data.message);
            setLoading(false);            
        }

    }
    const [albums,setAlbums] = useState([]);
    // fetch album
    async function fetchAlbums(){
        try {
            const {data} = await axios.get("/api/song/album/all") 
            setAlbums(data);          
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{

        fetchAlbums();
    },[]);
    return <songContext.Provider value={{songs,addAlbum,loading,songLoading,albums , addSong}}>{children}</songContext.Provider>
}

export const songData = () => useContext(songContext); 