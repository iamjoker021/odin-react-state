import { useState } from "react";

export default function EducationalDetails() {
    const [schoolName, setSchoolName] = useState(null);
    const [edTitle, setEdTitle] = useState(null);
    const [dateOfStudy, setDateOfStudy] = useState(null);

    const [isEditMode, setIsEditMode] = useState(true);
    const [count, setCount] = useState(1);
    
    return  <form>
                <legend>Educational Details</legend>
                <ul>
                    <li>
                        <label htmlfor="schoolName">School Name: </label>
                        {isEditMode && <input type="text" id="schoolName" name="schoolName" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />}
                        {!isEditMode && <span>{schoolName}</span>}
                    </li>
                    <li>
                        <label htmlfor="email">Education Title: </label>
                        {isEditMode && <input type="text" id="edTitle" name="edTitle" value={edTitle} onChange={(e) => setEdTitle(e.target.value)} />}
                        {!isEditMode && <span>{edTitle}</span>}
                    </li>
                    <li>
                        <label htmlfor="phone">Date of Study: </label>
                        {isEditMode && <input type="date" id="phdateOfStudyone" name="dateOfStudy" value={dateOfStudy} onChange={(e) => setDateOfStudy(e.target.value)} />}
                        {!isEditMode && <span>{dateOfStudy}</span>}
                    </li>
                    <li>
                        <button type="button" onClick={() => setIsEditMode(false)}>Submit</button>
                        <button type="button" onClick={() => setIsEditMode(true)}>Edit</button>
                    </li>
                </ul>
            </form>
}