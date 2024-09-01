import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const songContext = createContext();

export const SongProvider = ({children})=>{
    const [songs,setSongs] = useState([]);
    const [loading,setLoading] = useState(false);
    const [songLoading,setSongLoading] = useState(true);
    const [selectedSong,setSelectedSong] = useState(null);
    const [isPlaying,setIsplaying] = useState(false);


    // fetch songs
    async function fetchSongs(){
        try {
            const {data} = await axios.get("/api/song/all") 
            setSongs(data); 
            setSelectedSong(data[0]._id);
            setIsplaying(false);         
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        fetchSongs();
    },[]);

    const [singleSong,setsingleSong] = useState([]);
    // get single song
    async function fetchsingleSong(){
        try {
            const {data} = await axios.get("/api/song/single/"+selectedSong);
            setsingleSong(data);
            
        } catch (error) {
            console.log(error)
            
        }
    }
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
            fetchSongs()
          
            
        } catch (error) {
            toast.error(error.response.data.message);
            setLoading(false);            
        }

    }

    // Addthumbnail
    async function Addthumbnail(id,formData,setFile){
        setLoading(true);
        try {
            const {data} = await axios.post("/api/song/"+id,formData)          
            toast.success(data.message);
            setFile(null)
            setLoading(false);
            fetchSongs();
          
            
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

    // Delete songs
  async function deleteSong(id){
    try {
        const {data} = await axios.delete("/api/song/delete/"+id);
        toast.success(data.message);
        fetchSongs();
      
    } catch (error) {
        toast.error(error.response.data.message);
        setLoading(false);        
    }
  }
    return <songContext.Provider value={{songs,addAlbum,loading,songLoading,albums , addSong,Addthumbnail,deleteSong,fetchsingleSong,singleSong,setSelectedSong,isPlaying,setIsplaying,selectedSong}}>{children}</songContext.Provider>
}

export const songData = () => useContext(songContext); 