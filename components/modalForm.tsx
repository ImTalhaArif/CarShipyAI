import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Question {
  label: string;
  name: string;
  type: 'text' | 'checkbox' | 'number' | 'date' | 'location' | 'email' | 'select';
  required?: boolean;
  options?: string[]; // Add options property for select type
}

const ModalForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string | boolean | Date | undefined }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const questions: Question[] = [
    {
      label: 'Your Name',
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      label: 'Email Address',
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      label: 'Phone Number',
      name: 'number',
      type: 'number',
      required: true,
    },
    {
      label: 'The model of Car',
      name: 'model',
      type: 'text',
      required: true,
    },
    {
      label: 'The make of Car',
      name: 'make',
      type: 'text',
      required: true,
    },
    {
      label: 'The year of Car',
      name: 'year',
      type: 'number',
      required: true,
    },
    {
      label: 'Is the Vehicle Operable?',
      name: 'operable',
      type: 'checkbox',
    },
    {
      label: 'Would you prefer an open air carrier?',
      name: 'carrier',
      type: 'checkbox',
    },
    {
      label: 'Pick up City',
      name: 'city',
      type: 'select', // Change type to select
      options: ['New York', 'California', 'Texas', 'Florida', 'Illinois', 'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'], // Add options for states
      required: true,
    },
    {
      label: 'Desired Pick up date',
      name: 'dates',
      type: 'date',
      required: true,
    },
    {
      label: 'Destination City',
      name: 'destination',
      type: 'select', // Change type to select
      options: ['New York', 'California', 'Texas', 'Florida', 'Illinois', 'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'], // Add options for states
      required: true,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const inputValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  const calculateEstimatedPrice = () => {
    // Your calculation logic goes here
    // Example: Set the estimated price based on some formula or algorithm
    const price = Math.random() * 1000;
    setEstimatedPrice(price);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormData((prevData) => ({ ...prevData, [questions[currentQuestionIndex].name]: undefined }));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex === questions.length - 1) {
      setIsLoading(true);
      setTimeout(() => {
        calculateEstimatedPrice();
        setIsLoading(false);
      }, 3000);
    }
  };

  const handleBookNow = () => {
    alert('Details will be emailed to you shortly');
    window.location.reload();
  };

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'checkbox':
        return (
          <label style={{ display: 'inline-flex', alignItems: 'center', marginTop: '1.5rem' }}>
            <input
              type="checkbox"
              name={question.name}
              checked={formData[question.name] as boolean | undefined}
              onChange={handleInputChange}
              style={{ marginRight: '0.5rem' }}
            />
            <span>{question.label}</span>
          </label>
        );
      case 'date':
        return (
          <DatePicker
            name={question.name}
            selected={formData[question.name] as Date | undefined}
            onChange={(date: Date) => setFormData((prevData) => ({ ...prevData, [question.name]: date }))}
            dateFormat="yyyy-MM-dd"
            placeholderText="yyyy-MM-dd"
            className="form-control"
          />
        );
      case 'select':
        return (
          <select
            name={question.name}
            value={formData[question.name] as string | undefined}
            onChange={handleInputChange}
            style={{color:'black', fontWeight: 700}}
            required={question.required}
            className="form-control"
          >
            <option value="">Select an option</option>
            {question.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type={question.type}
            name={question.name}
            style={{ color: 'black', fontWeight: '700' }}
            value={formData[question.name] as string | undefined}
            onChange={handleInputChange}
            required={question.required}
            className="form-control"
          />
        );
    }
  };

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

                <form onSubmit={handleSubmit}>
                  {renderQuestion(questions[currentQuestionIndex])}

                  <button
                    className="form-button"
                    type="submit"
                    style={{
                      backgroundColor: '#6B46C1',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      marginLeft: '3px',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '14px',
                      cursor: 'pointer',
                    }}
                  >
                    Next
                  </button>
                </form>
              </div>
            )}

            {currentQuestionIndex === questions.length && (
              <div>
                <h2>Estimated Price:</h2>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <p>${estimatedPrice !== null ? estimatedPrice.toFixed(2) : 'N/A'}</p>
                )}

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
        </div>
      )}
    </div>
  );
};

export default ModalForm;
