import React, { useState, useEffect } from 'react';

const ModalForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    isOperable: false,
    openAirCarrier: false,
    shipTo: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);

    setTimeout(() => {
      const basePrice = 200;
      const shipToOptions = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI',
        'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD'
      ];
      const selectedIndex = shipToOptions.indexOf(formData.shipTo);
      const price = 21 * 100;

      setEstimatedPrice(`$${price}`);
      setIsSubmitted(true);
      setIsCalculating(false);
    }, 3000);
  };

  const handleBookNow = () => {
    console.log('Book Now clicked');

  };

  useEffect(() => {
    if (isCalculating) {
      setIsOpen(true);
    }
  }, [isCalculating]);

  return (
    <div>
      <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3" onClick={() => setIsOpen(true)}>
        FREE QUOTE
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
          }}
        >
          {!isSubmitted ? (
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '20px',
                maxWidth: '90%',
                maxHeight: '90%',
                overflow: 'auto',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => setIsOpen(false)}
              >
                &times;
              </span>

              <h2>Get A Free Quote</h2>

              <form onSubmit={handleSubmit} style={{color:'black'}}>
              <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                <span>Car Model:</span>
                <input
                  type="text"
                  name="carModel"
                  placeholder="Enter Car Model"
                  onChange={handleInputChange}
                  style={{
                    padding: '5px',
                    borderRadius: '4px',
                    border: '2px solid #ccc',
                    outline: 'none',
                  }}
                  required
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                <span>Car Year:</span>
                <input
                  type="number"
                  name="carYear"
                  placeholder="Enter Car Year"
                  onChange={handleInputChange}
                  style={{
                    padding: '5px',
                    borderRadius: '4px',
                    border: '2px solid #ccc',
                    outline: 'none',
                  }}
                  required
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                <span>Ship From:</span>
                <select
                  name="location"
                  onChange={handleInputChange}
                  style={{
                    padding: '5px',
                    borderRadius: '4px',
                    border: '2px solid #ccc',
                    outline: 'none',
                  }}
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

              <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                <span>Ship To:</span>
                <select
                  name="location"
                  onChange={handleInputChange}
                  style={{
                    padding: '5px',
                    borderRadius: '4px',
                    border: '2px solid #ccc',
                    outline: 'none',
                  }}
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

              <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                <span>Delivery Date:</span>
                <input
                  type="date"
                  name="carYear"
                  placeholder="Delivery Date"
                  onChange={handleInputChange}
                  style={{
                    padding: '5px',
                    borderRadius: '4px',
                    border: '2px solid #ccc',
                    outline: 'none',
                  }}
                  required
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                <input
                  type="checkbox"
                  name="isOperable"
                  checked={formData.isOperable}
                  onChange={handleInputChange}
                />
                <span>Is the car operable?</span>
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                <input
                  type="checkbox"
                  name="openAirCarrier"
                  checked={formData.openAirCarrier}
                  onChange={handleInputChange}
                />
                <span>Open air carrier preferred?</span>
              </label>


                <button
                  type="submit"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '4px',
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    marginTop: '16px',
                    cursor: 'pointer',
                  }}
                >
                  Calculate
                </button>
              </form>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '20px',
                maxWidth: '90%',
                maxHeight: '90%',
                overflow: 'auto',
              }}
            >
              <h2 style={{color: 'black'}}>Estimated Price</h2>

              {isCalculating ? (
                <div className="text-center text-xl">Calculating...</div>
              ) : (
                <div>
                     <span
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => setIsOpen(false)}
              >
                &times;
              </span>
                  <p style={{color: 'black'}}>Your estimated price is: {estimatedPrice}</p>
                  <button
                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ModalForm;
