export default function PersonalDetails() {
    return  <fieldset>
                <legend>Personal Details</legend>
                <ul>
                    <li>
                        <label htmlfor="name">Name: </label>
                        <input type="text" id="name" name="name" />
                    </li>
                    <li>
                        <label htmlfor="email">Email: </label>
                        <input type="email" id="email" name="email" />
                    </li>
                    <li>
                        <label htmlfor="phone">Phone: </label>
                        <input type="tel" id="phone" name="phone" />
                    </li>
                </ul>
            </fieldset>
}
