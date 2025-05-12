const Message = ({ message }) => {
    return (
        <div key={message.id} className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}>
            <p>{message.text}</p>
        </div>
    )
}

export default Message;