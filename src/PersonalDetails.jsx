import { useState } from "react";

export default function PersonalDetails() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    const [isEditMode, setIsEditMode] = useState(true);
    
    return  <form>
                <legend>Personal Details</legend>
                <ul>
                    <li>
                        <label htmlfor="name">Name: </label>
                        {isEditMode && <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />}
                        {!isEditMode && <span>{name}</span>}
                    </li>
                    <li>
                        <label htmlfor="email">Email: </label>
                        {isEditMode && <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />}
                        {!isEditMode && <span>{email}</span>}
                    </li>
                    <li>
                        <label htmlfor="phone">Phone: </label>
                        {isEditMode && <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />}
                        {!isEditMode && <span>{phone}</span>}
                    </li>
                    <li>
                        <button type="button" onClick={() => setIsEditMode(false)}>Submit</button>
                        <button type="button" onClick={() => setIsEditMode(true)}>Edit</button>
                    </li>
                </ul>
            </form>
}
