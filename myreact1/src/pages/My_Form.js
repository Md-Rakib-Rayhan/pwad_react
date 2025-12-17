
// Hooks import
import { useState } from 'react'

function My_Form() {

    // Hooks use
    const [name, setName] = useState("");

    function handleChange(e){
    setName(e.target.value);
    }

    return (
    <form>
        <br/> <br/>
        <label>Enter your name: 
            <input
            type="text" 
            value={name}
            onChange={handleChange}
            // onChange={(e) => setName(e.target.value)}
            />
        </label>
        <br/> <br/>
        <p>Current value: {name}</p>
    </form>
    )
}

export default My_Form