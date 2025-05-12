const InventoryItem = ({ item, buyItem }) => {
  return (
    <div className='inventory-item message bot-message' key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <div className='details-container'>
        <p>Quantity: {item.quantity}</p>
        <div className='buy-button' onClick={() => buyItem(item.id)}>
          <p>Buy</p>
        </div>
      </div>
    </div>
  );
}

export default InventoryItem;