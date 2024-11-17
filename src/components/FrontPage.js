import * as React from "react";
import { Link } from 'react-router-dom';


function FrontPage () {

    return (
        <div>
            <h1>Jose Pablo Barragan</h1>    
            <br></br>
            <h2><Link to={"/about"}>About</Link></h2>
            <h2><Link to={"/books"}>Books</Link></h2>
            <h2><Link to={"/poems"}>Poems</Link></h2>
            <h2>Translations</h2>
            <h2>Contact</h2>
        </div>
    );
}

export default FrontPage;