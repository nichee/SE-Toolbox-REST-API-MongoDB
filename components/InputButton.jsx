'use client'

import { Plus } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const InputButton = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
 
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description
    }
    try {
      await axios.post('http://localhost:8080/api/addresses', data)
      setTitle('');
      setDescription('');
      
    } catch (error) {
      console.error('Error creating address:', error)
    }
  }
  return (
    <div className="flex bg-red-100 justify-end px-4 py-4 rounded-b-lg">
      <form onSubmit={onSubmit} className="w-2/3 space-y-6">
      <input
        type="text"
        value={title}
        onChange= {(e) => setTitle(e.target.value)} 
      />
      <input
        type="text"
        value={description}
        onChange= {(e) => setDescription(e.target.value)}
       />
      <button
        className="flex items-center text-white transition ease-in-out delay-50 bg-gray-900 hover:scale-105 hover:bg-gray-800 duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="submit"
        onClick={() => {
          console.log('clicked')
        }}
      >
        <Plus className="pr-2" /> Add address
      </button>
      </form>
    </div>
  
  )
}




export default InputButton
// 'use client'

// import { Plus } from 'lucide-react';
// import { useState } from 'react';
// import axios from 'axios';

// const InputButton = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const onSubmit = async (e) => { 
//     e.preventDefault(); // Prevent default form submission behavior
//     const data = {
//       title: title,  // Use state variables for data
//       description: description
//     }
//     try {
//       await axios.post('http://localhost:8080/api/addresses', data);
//       // Optionally clear the form fields after successful submission:
//       setTitle('');
//       setDescription('');
//       console.log('clicked');
//     } catch (error) {
//       console.error('Error creating address:', error);
//     }
//   };

//   return (
//     <div className="flex bg-red-100 justify-end px-4 py-4 rounded-b-lg">
//       <form onSubmit={onSubmit} className="w-2/3 space-y-6"> 
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <button
//           className="flex items-center text-white transition ease-in-out delay-50 bg-gray-900 hover:scale-105 hover:bg-gray-800 duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
//           type="submit"
//         >
//           <Plus className="pr-2" /> Add address
//         </button>
//       </form>
//     </div>
//   );
// };<files />

// export default InputButton