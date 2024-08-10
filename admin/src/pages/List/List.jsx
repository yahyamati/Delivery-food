import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';  // Importing the X icon from react-icons

const List = ({url}) => {
  const [foods, setFoods] = useState([]);
  

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(`${url}/api/food/list`);
        setFoods(response.data.data); // Adjust this based on your response structure
      } catch (error) {
        console.error("There was an error fetching the foods!", error);
      }
    };

    fetchFoods();
  }, []);

  // Function to handle the removal of a food item
  const handleRemove = async (id) => {
    try {
      await axios.post(`${url}/api/food/remove`, { id });
      setFoods(foods.filter(food => food._id !== id));  // Update state to remove the deleted food item
    } catch (error) {
      console.error("There was an error removing the food item!", error);
    }
  };

  return (
    <div className="food-list">
      {foods.length > 0 ? (
        <ul>
          {foods.map((food) => (
            <li key={food._id} className="food-item">
              <img src={`${url}/images/${food.image}`} alt={food.name} />
              <div className="food-info">
                <p><strong>Name:</strong> {food.name}</p>
                <p><strong>Description:</strong> {food.description}</p>
                <p><strong>Price:</strong> ${food.price}</p>
                <p><strong>Category:</strong> {food.category}</p>
              </div>
              <button className="remove-btn" onClick={() => handleRemove(food._id)}>
                <FaTimes /> {/* X icon */}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className='no-found'>"No foods found"</p>
      )}
    </div>
  );
};

export default List;