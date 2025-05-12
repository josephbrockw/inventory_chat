import { useState } from 'react';


const Input = ({ sendMessage }) => {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="input-container">
            <input
                className="text-input"
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type your message here..."
            />
            <div className='input-submit' onClick={() => {
                sendMessage(text);
                setText('');
            }}>
                <p>Send</p>
            </div>
        </div>
    )
}

export default Input;