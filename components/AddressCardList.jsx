'use client'
import React, { useState, useEffect } from 'react';
import AddressCard from './AddressCard';
import axios from 'axios';





const AddressCardList = () => {  // Define the functional component
  const [addresses, setAddresses] = useState([]); // Move useState here

 useEffect(() => {
  const fetchAddresses = async () => {
    try {
      // make a GET request to backend server via axios
      const response = await axios.get('http://localhost:8080/api/addresses')
      // update the addresses state with the retrieved data
      setAddresses(response.data) 
    } catch (error) {
      console.error('Error fetching addresses:', error)
    }
  }

  fetchAddresses()
}, [addresses])
  return (
    <div className="flex-1 max-w-3xl">
      {addresses.map((address) => (
        <AddressCard key={address.id} address={address} />
      ))}
    </div>
  );
};


export default AddressCardList
