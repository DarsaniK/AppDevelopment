// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Review.css';
// import { useNavigate } from 'react-router-dom';
// import { useDarkMode } from './context/DarkModeContext';

// function ReviewApp() {
//   const [reviews, setReviews] = useState([]);
//   const [formData, setFormData] = useState({ email: '', text: '' });
//   const { isDarkMode} = useDarkMode();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const response = await axios.get('http://localhost:8181/api/feedback');
//       setReviews(response.data);
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//     }
//   };
  
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8181/api/feedback', formData);
//       fetchReviews();
//       setFormData({ email: '', text: '' });
//     } catch (error) {
//       console.error('Error submitting review:', error);
//     }
//   };
  
//   const handleAbout = () => {
//     navigate('/about');
//   };
//   const handlePrivacy = () => {
//     navigate('/privacy');
//   };
//   const handleTerms = () => {
//     navigate('/terms');
//   };
  
//   const handleContact = () => {
//     navigate('/contact');
//   };
//   const handlefaq = () => {
//     navigate('/faq');
//   };
//   const handleReviews = () => {
//     navigate('/review');
//   };
//   const handleHome=()=>
//   {
//     navigate('/hom');
//   }
//   return (
//     <div>
//       <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
//             <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
//         <ul>
//         <button className="home-button" onClick={handleHome}>Home</button>
//           <li>
//           <a href="#" className={isDarkMode ? 'dark-text' : '' }  onClick={handleAbout}>About Us</a>
//           </li>
//           <li>
//           <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleContact}>Contact Us</a>
//           </li>
//           <li>
//           <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleReviews}>Reviews</a>
//           </li>
//         </ul>
//       </nav>
      
//       <nav className={`down-navbar ${isDarkMode ? 'dark' : ''}`}>
//         <ul>
//         <li className="copyright1">
//           <a href="#" className={isDarkMode ? 'dark-text' : ''}>&copy; 2023 All rights reserved.</a>
//           </li>
//           <li>
//           <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlePrivacy}>Privacy policy</a>
//           </li>
//           <li>
//           <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleTerms}>Terms and conditions</a>
//           </li>
//           <li>
//           <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlefaq}>FAQ's</a>
//           </li>
          
//         </ul>
//         </nav>
//       <div className="add-review">
//         <h1>Review App</h1>
//         <div className="review-form">
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//             <textarea
//               name="text"
//               placeholder="Review"
//               value={formData.text}
//               onChange={handleInputChange}
//               required
//             />
//             <button type="submit" className='submitbtn'>Submit Review</button>
//           </form>
//         </div>
//       </div>
//       <div className="review-list">
//         <h2>Reviews</h2>
//         <div className="card-container">
//           {reviews.map((review) => (
//             <div className="card" key={review.id}>
//               <div className="card-content">
//                 <h3>{review.email}</h3>
//                 <p>{review.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default ReviewApp;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Review.css';

function ReviewApp() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ email: '', text: '' });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/feedback');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/feedback', formData);
      fetchReviews();
      setFormData({ email: '', text: '' });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="App">
      <h1>Review App</h1>
      <div className="review-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="text"
            placeholder="Review"
            value={formData.text}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
      <div className="review-list">
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.email}:</strong> {review.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReviewApp;