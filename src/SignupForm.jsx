import { useState } from "react";

export default function SignupForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const updateFirstName = (evt) => {
        console.log("change event!!");
        console.log(evt.target.value);
        setFirstName(evt.target.value)
    };
    const updateLastName = (evt) => {
        console.log("change event!!");
        console.log(evt.target.value);
        setLastName(evt.target.value)
    };
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input
            type="text" 
            placeholder="firstname" 
            value={firstName}
            onChange={updateFirstName}
            id="firstname"
            />
            <label htmlFor="lastname">Last Name</label>
            <input
            type="text" 
            placeholder="lastname" 
            value={lastName}
            onChange={updateLastName}
            id="lastname"
            />
            <button>Submit</button>
        </div>
    )
}