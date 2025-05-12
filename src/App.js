import './App.css';
import { useState, useEffect } from 'react';
import Input from './components/Input';
import { inventory } from './config';
import Message from './components/Message';
import InventoryItem from './components/InventoryItem';

function App() {
  const [inventoryList, setInventoryList] = useState(inventory);
  const [messages, setMessages] = useState([]);
  
  const newMessage = (message) => {
    let currentMessages = messages; 
    setMessages([...currentMessages, {
      id: Math.random(),
      text: message,
      isUser: true,
      messageType: 'text',
    }]);
  }

  const buyItem = (itemId) => {
    const updatedInventory = inventoryList.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setInventoryList(updatedInventory);
  }

  useEffect(() => {
    const currentMessages = messages;
    let botMessages = [];
    // If the last message is from the user and says 'hello'
    if (messages.length > 0 && messages[messages.length - 1].isUser) {

      if (messages[messages.length - 1].text.toLowerCase() === 'hello') {
        // Simulate a bot response
        botMessages.push({
          id: Math.random(),
          text: 'Hello! How can I help you today?',
          isUser: false,
          messageType: 'text',
        });
      } else if (messages[messages.length - 1].text.toLowerCase() === 'show inventory') {
        // Simulate a bot response
        botMessages.push({
          id: Math.random(),
          text: '',
          isUser: false,
          messageType: 'inventory',
        });
      }  
      setMessages([...currentMessages, ...botMessages]);
    }

  }, [messages]);

  return (
    <div className='container'>
      <div className='messages-container'>
        {messages.map((message) => (
          message.messageType === 'text' ? (
            <Message key={message.id} message={message} /> 
          ) : (
            <div key={message.id} className='inventory-container'>
              {inventoryList.map((item) => (
                <InventoryItem key={item.id} item={item} buyItem={buyItem} />
              ))}
            </div>
          )
        ))}
      </div>
      <Input sendMessage={newMessage} />
    </div>
  );
}

export default App;
