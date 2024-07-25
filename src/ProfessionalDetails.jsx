import { useState } from "react";

export default function ProfessionalDetails() {
    const [companyName, setCompanyName] = useState(null);
    const [posTitle, setPosTitle] = useState(null);
    const [responsibilities, setResponsibilities] = useState(null);

    const [isEditMode, setIsEditMode] = useState(true);
    
    return  <form>
                <legend>Proffesional Details</legend>
                <ul>
                    <li>
                        <label htmlfor="companyName">Company Name: </label>
                        {isEditMode && <input type="text" id="companyName" name="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />}
                        {!isEditMode && <span>{companyName}</span>}
                    </li>
                    <li>
                        <label htmlfor="posTitle">Position Title: </label>
                        {isEditMode && <input type="text" id="posTitle" name="posTitle" value={posTitle} onChange={(e) => setPosTitle(e.target.value)} />}
                        {!isEditMode && <span>{posTitle}</span>}
                    </li>
                    <li>
                        <label htmlfor="responsibilities">Job Role: </label>
                        {isEditMode && <input type="text" id="responsibilities" name="responsibilities" value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} />}
                        {!isEditMode && <span>{responsibilities}</span>}
                    </li>
                    <li>
                        <button type="button" onClick={() => setIsEditMode(false)}>Submit</button>
                        <button type="button" onClick={() => setIsEditMode(true)}>Edit</button>
                    </li>
                </ul>
            </form>
}
