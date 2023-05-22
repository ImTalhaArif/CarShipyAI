import React, { useState, useEffect } from 'react';

interface Question {
  label: string;
  name: string;
  type: 'text' | 'checkbox' | 'number' | 'date' | 'location' | 'email';
}

const ModalForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string | boolean }>({});

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState('');

  const questions: Question[] = [
    {
      label: 'Your Name',
      name: 'name',
      type: 'text',
    },
    {
      label: 'Email Address',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Phone Number',
      name: 'number',
      type: 'number',
    },
    {
      label: 'The model of Car',
      name: 'model',
      type: 'text',
    },
    {
      label: 'The make of Car',
      name: 'make',
      type: 'text',
    },
    {
      label: 'The year of Car',
      name: 'make',
      type: 'number',
    },
    {
      label: 'Is the Vehicle Operable?',
      name: 'operable',
      type: 'checkbox',
    },
    {
      label: 'Would you prefer an oper air carrier?',
      name: 'carrier',
      type: 'checkbox',
    },
    {
      label: 'Pick up City',
      name: 'city',
      type: 'text',
    },
    {
      label: 'Desired Pick up date',
      name: 'dates',
      type: 'date',
    },
    {
      label: 'Destination City',
      name: 'destination',
      type: 'text',
    },
    
    // Add more questions here
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsLoading(true);

      // Simulate loading time
      setTimeout(() => {
        const basePrice = 1200;
        const price = basePrice + Math.floor(Math.random() * 5) * 50; // Generate random price
        setEstimatedPrice(`$${price}`);
        setIsLoading(false);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }, 6000);
    }, 3000);
  };

  const handleBookNow = () => {
    alert('Details will be emailed to you shortly');
    window.location.reload();
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length + 1) {
      setIsOpen(false);
      setCurrentQuestionIndex(0);
    }
  }, [currentQuestionIndex, questions.length]);

  return (
    <div>
      <button
        className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
        onClick={() => setIsOpen(true)}
        style={{
          backgroundColor: '#6B46C1',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          fontSize: '14px',
          cursor: 'pointer',
        }}
      >
        FREE QUOTE
      </button>

      {isOpen && (
        <div
          className="modal-overlay"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '2rem',
              borderRadius: '4px',
              maxWidth: '400px',
              textAlign: 'center',
            }}
          >
            {currentQuestionIndex < questions.length && (
              <div>
                <h2>{questions[currentQuestionIndex].label}</h2>

                {questions[currentQuestionIndex].type === 'checkbox' ? (
                  <label style={{ display: 'inline-flex', alignItems: 'center', marginTop: '1.5rem' }}>
                    <input
                      type="checkbox"
                      name={questions[currentQuestionIndex].name}
                      checked={formData[questions[currentQuestionIndex].name] as boolean}
                      onChange={handleInputChange}
                      style={{ marginRight: '0.5rem' }}
                    />
                    <span>{questions[currentQuestionIndex].label}</span>
                  </label>
                ) : (
                  <input
                    type="text"
                    name={questions[currentQuestionIndex].name}
                    value={formData[questions[currentQuestionIndex].name] as string}
                    onChange={handleInputChange}
                    style={{ marginBottom: '1rem', padding: '0.5rem' }}
                  />
                )}

                <button
                  className="form-button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: '#6B46C1',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Next'}
                </button>
              </div>
            )}

            {currentQuestionIndex === questions.length && (
              <div>
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <div>
                    <h2>Estimated Price:</h2>
                    <p>{estimatedPrice}</p>

                    <button
                      className="form-button"
                      onClick={handleBookNow}
                      style={{
                        backgroundColor: '#6B46C1',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '14px',
                        cursor: 'pointer',
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
