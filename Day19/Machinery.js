// import React, { useState, useEffect } from 'react';
// import './Machinery.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Machinery() {
//   const userId = localStorage.getItem('userId');
//   const [machineryList, setMachineryList] = useState([]);
//   const [newMachinery, setNewMachinery] = useState({
//     deviceName: '',
//     type: '',
//     purpose: '',
//     controlMethod: '',
//     purchaseDate: '',
//     user: {
//       maid: userId,
//     },
//   });
//   const [userIdInput, setUserIdInput] = useState('');
//   const [editIndex, setEditIndex] = useState(null);
//   const authToken = localStorage.getItem('token');
//   const navigate = useNavigate();

//   useEffect(() => {
    
//     fetchMachineryList();
//   }, []);

//   const fetchMachineryList = () => {
//     axios
//     .get(`http://localhost:8080/machinery/muser?user_Id=${userId}`, {        
//        headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       })
//       .then((response) => {
//         setMachineryList(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching machinery data:', error);
//       });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewMachinery((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const navigateToDashboard = () => {
//     navigate('/hom');
//   };

//   const addMachinery = () => {
//     axios
//       .post('http://localhost:8080/machinery/post', newMachinery, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       })
//       .then((response) => {
//         console.log('Machinery created:', response.data);
//         fetchMachineryList();
//         setNewMachinery({
//           deviceName: '',
//           type: '',
//           purpose: '',
//           controlMethod: '',
//           purchaseDate: '',
//           user: {
//             maid: userId,
//           },
//         });
//       })
//       .catch((error) => {
//         console.error('Error creating machinery:', error);
//       });
//   };

//   const editMachinery = (index) => {
//     setEditIndex(index);
//     const editedMachinery = machineryList[index];
//     setNewMachinery({ ...editedMachinery });
//   };

//   const updateMachinery = () => {
//     if (editIndex === null) {
//       return;
//     }

//     const updatedMachinery = machineryList[editIndex];

//     if (!updatedMachinery || !updatedMachinery.mid) {
//       console.error('Invalid machinery data for update:', updatedMachinery);
//       return;
//     }

//     axios
//       .put(`http://localhost:8080/machinery/put/${updatedMachinery.mid}`, newMachinery, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       })
//       .then((response) => {
//         const updatedMachineryList = [...machineryList];
//         updatedMachineryList[editIndex] = response.data;
//         setMachineryList(updatedMachineryList);

//         setNewMachinery({
//           deviceName: '',
//           type: '',
//           purpose: '',
//           controlMethod: '',
//           purchaseDate: '',
//           user: {
//             maid: userId,
//           },
//         });

//         setEditIndex(null);
//       })
//       .catch((error) => {
//         console.error('Error updating machinery:', error);
//       });
//   };
//   const deleteMachinery = (machineryId) => {
//     axios
//       .delete(`http://localhost:8080/machinery/delete/${machineryId}`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       })
//       .then(() => {
//         const updatedMachineryList = machineryList.filter((machinery) => machinery.mid !== machineryId);
//         setMachineryList(updatedMachineryList);
//       })
//       .catch((error) => {
//         console.error('Error deleting machinery:', error);
//       });
//   };

//   return (
//     <div className="Machinery-container">
//       <button className="home-buttonUG" onClick={navigateToDashboard}>
//         Home
//       </button>
//       <h1 className="Machinery-title">Machinery Details</h1>
//       <div className="Machinery-element">
//         <h2 className="Machinery-subtitle">Add Machinery</h2>
//         <input
//           type="text"
//           name="deviceName"
//           className="Machinery-input"
//           placeholder="Device Name"
//           value={newMachinery.deviceName}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="type"
//           className="Machinery-input"
//           placeholder="Type"
//           value={newMachinery.type}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="purpose"
//           className="Machinery-input"
//           placeholder="Purpose"
//           value={newMachinery.purpose}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="controlMethod"
//           className="Machinery-input"
//           placeholder="Control Method"
//           value={newMachinery.controlMethod}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="purchaseDate"
//           className="Machinery-input"
//           placeholder="Purchase Date"
//           value={newMachinery.purchaseDate}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="userIdInput"
//           className="Machinery-input"
//           placeholder={"User id : " + userId}
//           value={userIdInput}
//           readOnly
//         />
//         {editIndex === null ? (
//           <button className="Machinery-button" onClick={addMachinery}>
//             Add
//           </button>
//         ) : (
//           <button className="Machinery-button" onClick={updateMachinery}>
//             Update
//           </button>
//         )}
//       </div>
//       <div className="Machinery-element">
//         <h2 className="Machinery-subtitle">Machinery List</h2>
//         <div className="Machinery-table-container">
//           <table className="Machinery-table">
//             <thead>
//               <tr>
//                 <th className="Machinery-th">Device Name</th>
//                 <th className="Machinery-th">Type</th>
//                 <th className="Machinery-th">Purpose</th>
//                 <th className="Machinery-th">Control Method</th>
//                 <th className="Machinery-th">Purchase Date</th>
//                 <th className="Machinery-th">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {machineryList.map((machinery, index) => (
//                 <tr key={machinery.mid}>
//                   <td className="Machinery-td">{machinery.deviceName}</td>
//                   <td className="Machinery-td">{machinery.type}</td>
//                   <td className="Machinery-td">{machinery.purpose}</td>
//                   <td className="Machinery-td">{machinery.controlMethod}</td>
//                   <td className="Machinery-td">{machinery.purchaseDate}</td>
//                   <td className="Machinery-td">
//                     <button className="Machinery-button" onClick={() => editMachinery(index)}>
//                       Edit
//                     </button>
//                     <button className="Machinery-button" onClick={() => deleteMachinery(machinery.mid)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Machinery;
import React, { useState, useEffect } from 'react';
import './Machinery.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Machinery() {
  const [machineryList, setMachineryList] = useState([]);
  const navigate = useNavigate();
  const [newMachinery, setNewMachinery] = useState({
    deviceName: '',
    type: '',
    purpose: '',
    controlMethod: '',
    purchaseDate: '',
    user: {
      id: localStorage.getItem('userId'),
    },
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const authToken = localStorage.getItem('token');

  useEffect(() => {
    fetchMachinery();
  }, []);

  const fetchMachinery = () => {
    axios
      .get(`http://localhost:8080/machinery/muser?user_Id=${localStorage.getItem('userId')}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setMachineryList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching machinery:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMachinery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigateToDashboard = () => {
    navigate('/hom');
  };

  const addMachinery = () => {
    axios
      .post('http://localhost:8080/machinery/post', newMachinery, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log('Machinery created:', response.data);
        setMachineryList([...machineryList, response.data]);
        setNewMachinery({
          deviceName: '',
          type: '',
          purpose: '',
          controlMethod: '',
          purchaseDate: '',
          user: {
            id: localStorage.getItem('userId'),
          },
        });
      })
      .catch((error) => {
        console.error('Error creating machinery:', error);
      });
  };

  const editMachinery = (index) => {
    setEditingIndex(index);
    const editedMachinery = machineryList[index];
    setNewMachinery({
      deviceName: editedMachinery.deviceName,
      type: editedMachinery.type,
      purpose: editedMachinery.purpose,
      controlMethod: editedMachinery.controlMethod,
      purchaseDate: editedMachinery.purchaseDate,
      user: {
        id: localStorage.getItem('userId'),
      },
    });
  };

  const updateMachinery = () => {
    if (editingIndex === null) {
      return;
    }

    const updatedMachinery = machineryList[editingIndex];

    if (!updatedMachinery || !updatedMachinery.mid) {
      console.error('Invalid machinery data for update:', updatedMachinery);
      return;
    }

    axios
      .put(`http://localhost:8080/machinery/put/${updatedMachinery.mid}`, newMachinery, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        const updatedMachineryList = [...machineryList];
        updatedMachineryList[editingIndex] = response.data;
        setMachineryList(updatedMachineryList);

        setNewMachinery({
          deviceName: '',
          type: '',
          purpose: '',
          controlMethod: '',
          purchaseDate: '',
          user: {
            id: localStorage.getItem('userId'),
          },
        });
        setEditingIndex(null);
      })
      .catch((error) => {
        console.error('Error updating machinery:', error);
      });
  };

  const deleteMachinery = (machineryId) => {
    axios
      .delete(`http://localhost:8080/machinery/delete/${machineryId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(() => {
        const updatedMachineryList = [...machineryList].filter((machinery) => machinery.mid !== machineryId);
        setMachineryList(updatedMachineryList);
      })
      .catch((error) => {
        console.error('Error deleting machinery:', error);
      });
  };

  return (
    <div className="Machinery-container">
      <button className="home-buttonUG" onClick={navigateToDashboard}>
        Home
      </button>
      <h1 className="Machinery-title">Machinery Details</h1>
      <div className="Machinery-element">
        <h2 className="Machinery-subtitle">Add Machinery</h2>
        <input
          type="text"
          name="deviceName"
          className="Machinery-input"
          placeholder="Device Name"
          value={newMachinery.deviceName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="type"
          className="Machinery-input"
          placeholder="Type"
          value={newMachinery.type}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="purpose"
          className="Machinery-input"
          placeholder="Purpose"
          value={newMachinery.purpose}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="controlMethod"
          className="Machinery-input"
          placeholder="Control Method"
          value={newMachinery.controlMethod}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="purchaseDate"
          className="Machinery-input"
          placeholder="Purchase Date"
          value={newMachinery.purchaseDate}
          onChange={handleInputChange}
        />
        <button className="Machinery-button" onClick={addMachinery}>
          Add
        </button>
      </div>
      <div className="Machinery-element">
        <h2 className="Machinery-subtitle">Machinery List</h2>
        <div className="Machinery-table-container">
          <table className="Machinery-table">
            <thead>
              <tr>
                <th className="Machinery-th">Device Name</th>
                <th className="Machinery-th">Type</th>
                <th className="Machinery-th">Purpose</th>
                <th className="Machinery-th">Control Method</th>
                <th className="Machinery-th">Purchase Date</th>
                <th className="Machinery-th">Action</th>
              </tr>
            </thead>
            <tbody>
              {machineryList.map((machinery, index) => (
                <tr key={machinery.mid}>
                  <td className="Machinery-td">{machinery.deviceName}</td>
                  <td className="Machinery-td">{machinery.type}</td>
                  <td className="Machinery-td">{machinery.purpose}</td>
                  <td className="Machinery-td">{machinery.controlMethod}</td>
                  <td className="Machinery-td">{machinery.purchaseDate}</td>
                  <td className="Machinery-td">
                    {editingIndex === index ? (
                      <button className="Machinery-button" onClick={updateMachinery}>
                        Update
                      </button>
                    ) : (
                      <button className="Machinery-button" onClick={() => editMachinery(index)}>
                        Edit
                      </button>
                    )}
                    <button
                      className="Machinery-button"
                      onClick={() => deleteMachinery(machinery.mid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Machinery;

