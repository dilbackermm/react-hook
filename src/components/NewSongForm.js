import React, { useState } from "react";

const NewSongForm = () => {
    return ( 
        <form action="">
            <label htmlFor="">song Name:</label>
            <input type="text" required />
            <input type="submit" value="add song" />
        </form>
     );
}
 
export default NewSongForm;