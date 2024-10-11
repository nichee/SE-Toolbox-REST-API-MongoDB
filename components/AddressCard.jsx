'use client'

import { FileEdit, Trash2 } from 'lucide-react'
import axios from 'axios'
import { useState } from 'react'


const AddressCard = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState(props.address.title);
  const [description, setDescription] = useState(props.address.description);
  const handleDeleteAddress = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/api/addresses/${props.address._id}`,
      )
    } catch (error) {
      console.error('Error deleting address:', error)
    }
  }
  const onSubmit = async (e) => {
    try {
      const data = {
        title: title,
        description: description
      }
      await axios.put(
        `http://localhost:8080/api/addresses/${props.address._id}`,
        data
      )
      setOpen(false)
    } catch (error) {
      console.error('Error updating address:', error)
    }
  }


  
  return (
    <div className="flex justify-between rounded-lg shadow-lg overflow-hidden bg-blue-100 my-8">
      <div className="px-6 py-4">
        <h3 className="text-lg font-medium text-gray-900">
          {props.address.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{props.address.address}</p>
      </div>
      <div className="bg-green-100 flex flex-col p-2">
        <FileEdit
          className="py-1 cursor-pointer"
          onClick={() => {
            console.log('Click file edit');
            setOpen(true);
          }}
        />
         {isOpen && (
          <form onSubmit={onSubmit} className="w-full"> 
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Save</button>  
 
          </form>  
        )}

        {/* Add tailwind css to have pointer when hover */}
        <Trash2
          className="py-1 cursor-pointer"
          onClick={() => {
            console.log('Click trash');
            handleDeleteAddress();
          }}
        />
      </div>
    </div>
  )
}

export default AddressCard
