"use client"
import React, { useState } from 'react';
import styles from '@/components/modalForm.module.css'; // Import CSS file for styling

const ModalForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset form data and close the modal
    setFormData({ name: '', email: '', message: '' });
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3" onClick={() => setIsOpen(true)}>FREE QUOTE</button>
      

      {isOpen && (
       <div
       className={styles.modal}
       style={{
         backgroundColor: 'black',
         background: 'linear-gradient(to bottom, #4e54c8, #8f94fb)',
         animation: 'fadeIn 0.7s ease-in',
       }}
     >
       <div
         className={styles.modalContent}
         style={{
           backgroundColor: 'transparent',
           color: 'white',
         }}
       >
         <span
           className={styles.closeButton}
           onClick={() => setIsOpen(false)}
           style={{
             color: 'white',
             cursor: 'pointer',
           }}
         >
           &times;
         </span>
     
         <h2>Get A Free Quote</h2>
     
         <form
           className={styles.modalForm}
           onSubmit={handleSubmit}
           style={{
             display: 'flex',
             flexDirection: 'column',
             gap: '10px',
             padding: '20px',
             borderRadius: '8px',
             width: '500px',
             backdropFilter: 'blur(10px)',
             position: 'relative',
             backgroundColor: 'rgba(0, 0, 0, 0.6)',
           }}
         >
           <div
             style={{
               position: 'absolute',
               top: 0,
               left: 0,
               right: 7,
               bottom: 0,
               zIndex: -1,
               backgroundImage: "url('public/images/car-carrier-image.jpg')",
               opacity: 0.6,
               backgroundRepeat: 'repeat',
               animation: 'glowingStarsAnimation 10s linear infinite',
             }}
           ></div>
     
           <label style={{ display: 'flex', flexDirection: 'column' }}>
             <span>Car Model:</span>
             <input
               type="text"
               name="carModel"
               placeholder="Enter Car Model"
               onChange={handleInputChange}
               style={{
                 padding: '5px',
                 borderRadius: '4px',
                 border: '2px solid #fff',
                 boxShadow: '0 0 10px rgba(255, 255, 255, 0.5) inset',
                 outline: 'none',
                 background: 'transparent',
                 color: '#fff',
                 textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
               }}
               required
             />
           </label>
     
           <label style={{ display: 'flex', flexDirection: 'column' }}>
             <span>Car Year:</span>
             <input
               type="number"
               name="carYear"
               placeholder="Enter Car Year"
               onChange={handleInputChange}
               style={{
                 padding: '5px',
                 borderRadius: '4px',
                 border: '2px solid #fff',
                 boxShadow: '0 0 10px rgba(255, 255, 255, 0.5) inset',
                 outline: 'none',
                 background: 'transparent',
                 color: '#fff',
                 textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
               }}
               required
             />
           </label>
     
           <label style={{ display: 'flex', flexDirection: 'column' }}>
             <span>Ship From:</span>
             <select
               name="location"
               onChange={handleInputChange}
               style={{      
padding: '5px',      
borderRadius: '4px',
border:'2px solid #fff',
boxShadow:'0 0 10px rgba(255, 255, 255, 0.5) inset',
outline: 'none',      
background: 'transparent',
color: '#fff',      
textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
appearance: 'none', /* Hide the default arrow */      
WebkitAppearance: 'none', /* Removearrow in Chrome/Safari */      
MozAppearance: 'none', /* Remove arrow in Firefox */      
paddingRight: '20px', /* Add space for custom arrow */    }}
    

               required
             >
               <option value="">Select a State</option>
               <option value="AL">Alabama</option>
               <option value="AK">Alaska</option>
               <option value="AZ">Arizona</option>
               <option value="AR">Arkansas</option>
               <option value="CA">California</option>
               <option value="CO">Colorado</option>
               <option value="CT">Connecticut</option>
               <option value="DE">Delaware</option>
               <option value="FL">Florida</option>
               <option value="GA">Georgia</option>
               <option value="HI">Hawaii</option>
               <option value="ID">Idaho</option>
               <option value="IL">Illinois</option>
               <option value="IN">Indiana</option>
               <option value="IA">Iowa</option>
               <option value="KS">Kansas</option>
               <option value="KY">Kentucky</option>
               <option value="LA">Louisiana</option>
               <option value="ME">Maine</option>
               <option value="MD">Maryland</option>
             </select>
           </label>
     
           <label style={{ display: 'flex', flexDirection: 'column' }}>
             <span>Ship To:</span>
             <select
               name="location"
               onChange={handleInputChange}
               style={{      
                padding: '5px',      
                borderRadius: '4px',
                border:'2px solid #fff',
                boxShadow:'0 0 10px rgba(255, 255, 255, 0.5) inset',
                outline: 'none',      
                background: 'transparent',
                color: '#fff',      
                textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                appearance: 'none', /* Hide the default arrow */      
                WebkitAppearance: 'none', /* Removearrow in Chrome/Safari */      
                MozAppearance: 'none', /* Remove arrow in Firefox */      
                paddingRight: '20px', /* Add space for custom arrow */    }}
               required
             >
               <option value="">Select a State</option>
               <option value="AL">Alabama</option>
               <option value="AK">Alaska</option>
               <option value="AZ">Arizona</option>
               <option value="AR">Arkansas</option>
               <option value="CA">California</option>
               <option value="CO">Colorado</option>
               <option value="CT">Connecticut</option>
               <option value="DE">Delaware</option>
               <option value="FL">Florida</option>
               <option value="GA">Georgia</option>
               <option value="HI">Hawaii</option>
               <option value="ID">Idaho</option>
               <option value="IL">Illinois</option>
               <option value="IN">Indiana</option>
               <option value="IA">Iowa</option>
               <option value="KS">Kansas</option>
               <option value="KY">Kentucky</option>
               <option value="LA">Louisiana</option>
               <option value="ME">Maine</option>
               <option value="MD">Maryland</option>
             </select>
           </label>
     
           <label style={{ display: 'flex', flexDirection: 'column' }}>
             <span>Delivery Date:</span>
             <input
               type="date"
               name="carYear"
               placeholder="Delivery Date"
               onChange={handleInputChange}
               style={{
                 padding: '5px',
                 borderRadius: '4px',
                 border: '2px solid #fff',
                 boxShadow: '0 0 10px rgba(255, 255, 255, 0.5) inset',
                 outline: 'none',
                 background: 'transparent',
                 color: '#fff',
                 textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
               }}
               required
             />
           </label>
     
           <button
             type="submit"
             style={{
               padding: '8px 16px',
               borderRadius: '50px',
               backgroundColor: '#333',
               color: '#fff',
               border: 'none',
               cursor: 'pointer',
               marginTop: '20px',
             }}
           >
             Submit
           </button>
         </form>
       </div>
     </div>
     
      )}
    </div>
  );
};

export default ModalForm;
