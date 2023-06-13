import React, { useState } from "react";
import NewSongForm from "./NewSongForm";


const SongList = () => {
    const [songs, setSongs] = useState([
       { title: 'almost home' },
       { title: 'memory gospel' },
       { title: 'this wild darkness' }
    ]);
const addsong = () => {
    setSongs ([ ...songs, { title:'new song'}]);
}

    return ( 
        <div className="song-list">
            <ul>
                {songs.map((song, index) => {
                    return(<li key={index}>{song.title}</li>)
                })}
            </ul>
          <NewSongForm />
        </div>
     );
}
 
export default SongList;