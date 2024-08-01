import { useState } from "react";

export default function UsernameForm() {
    const [username, setUsername] = useState("");
    const updateUsername = (evt) => {
        console.log("change event!!");
        console.log(evt.target.value);
        setUsername(evt.target.value)
    };
    return (
        <div>
            <label>Enter a username</label>
            <input
            type="text" 
            placeholder="username" 
            value={username}
            onChange={updateUsername}
            id="username"
            />
            <button>Submit</button>
        </div>
    )
}