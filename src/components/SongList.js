import React, { useEffect, useState } from "react";
import NewSongForm from "./NewSongForm";


const SongList = () => {
    const [songs, setSongs] = useState([
       { title: 'almost home' },
       { title: 'memory gospel' },
       { title: 'this wild darkness' }
    ]);
const addSong = (title) => {
    setSongs ([ ...songs, { title}]);
}
const [age, setAge] = useState(20);

useEffect(() => {
    console.log('useEffect hook ran ', age)
},[age])
useEffect(() => {
    console.log('useeffect hook for song ran', songs )
},[songs])
    return ( 
        <div className="song-list">
            <ul>
                {songs.map((song, index) => {
                    return(<li key={index}>{song.title}</li>)
                })}
            </ul>
          <NewSongForm addSong={addSong} />
          <button onClick={() => setAge(age + 1)}>add 1 to age: {age}</button>
        </div>
     );
}
 
export default SongList;