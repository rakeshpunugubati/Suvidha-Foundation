import React ,{useState} from 'react'
import axios from 'axios'
function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const apiUrl = import.meta.env.VITE_API_URL;

      // Api call to submit Internship form data
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const date = new Date().toLocaleString();
          const response = await axios.post(`${apiUrl}/contact`, {date, ...formData} );
          // console.log(response);
          if (response.data.message) {
            alert('Submitted Successfully!');
          } else {
            alert('Error submitting form');
          }
        } catch (error) {
          console.log('Error: ' + error);
          alert('Error submitting form');
        }
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: '',
        });
      };
  return (
    <div className='w-full flex justify-center'>
    <form onSubmit={handleSubmit}  className='space-y-4 w-full px-2 sm:px-16'>
      <div>
        <label className=' text-gray-700'>Name</label>
        <input
          type='text'
          name='name'
          placeholder='John Doe'
          value={formData.name}
          onChange={handleChange}
          className='w-full mt-2 p-2 border border-gray-300 rounded'
          required
        />
      </div>
      <div>
        <label className='text-gray-700'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='john@gmail.com'
          value={formData.email}
          onChange={handleChange}
          className='w-full mt-2 p-2 border border-gray-300 rounded'
          required
        />
      </div>
      <div>
        <label className='text-gray-700'>Mobile Number</label>
        <input
          type='tel'
          name='mobile'
          pattern='[6-9]{1}[0-9]{9}'
          placeholder='7832212313'
          onInvalid={(e) => e.target.setCustomValidity('Enter a valid mobile number')}
          onInput={(e) => e.target.setCustomValidity('')}
          onChange={handleChange}
          className='w-full mt-2 p-2 border border-gray-300 rounded'
          required 
        />
      </div>
      <div>
        <label className='text-gray-700'>Message</label>
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          className='w-full mt-2 p-2 border border-gray-300 rounded'
          rows='4'
          required
        ></textarea>
      </div>
      <button
        type='submit'
        className='w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600'
      >
        Send Message
      </button>
    </form>
    </div>
  )
}

export default Form
