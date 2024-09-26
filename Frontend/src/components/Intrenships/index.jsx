import axios from 'axios';
import React, { useState } from 'react';
import './styles.css'
function Internship() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        college: '',
        qualification: '',
        domain: '',
        coverLetter:'',
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const apiUrl = import.meta.env.VITE_API_URL;
    
    // To handle api contact form api call
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const date = new Date().toLocaleString();
            const response = await axios.post(`${apiUrl}/internship`, {date, ...formData} )
            // console.log(response);
            if (response.data.message) {
                alert('Submitted Successfully!');
            } else {
                alert('Error submitting form');
            }
        } catch (error) {
            console.log('Error: ' + error);
            alert('Error submitting form');
        } finally {
            setLoading(false);
        }
        setFormData({
            name: '',
            email: '',
            mobile: '',
            college: '',
            qualification: '',
            domain: '',
            coverLetter:'',
        });
    };

    return (
        <div className='internshipmainbg '>
            {/* Intership page descrption */}
        <div className='bg-black bg-opacity-50 text-white'>
        <h2 className='text-xl font-bold text-center py-5'>Internship Program Overview</h2>
        <p className='mb-4 text-sm sm:text-lg text-center'>
            Gain hands-on experience in a supportive environment designed for students and recent graduates.
        </p>
        <div className=' w-full  '>
            <div className=' w-fit mx-auto  '>
                <h3 className='text-lg font-semibold'>Key Benefits</h3>
                <ul className='text-xs sm:text-lg list-disc ml-5 mb-4'>
                    <li>Real-World Experience: Work on meaningful projects.</li>
                    <li>Mentorship: Guidance from industry professionals.</li>
                    <li>Certification: Earn a certificate to enhance your resume.</li>
                    <li>Networking: Connect with experts in your field.</li>
                    <li>Skill Development: Participate in workshops to improve essential skills.</li>
                </ul>
            </div>
        </div>
         {/* Internship Form */}
        <div className='flex  justify-center p-1 sm:p-10 text-white '>
            <form onSubmit={handleSubmit} className='space-y-4 w-fit p-4 sm:p-10 border-2 border-gray-300'>
                <div>
                    <label >Name</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='John Doe'
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full mt-2 p-2 border border-gray-300 rounded bg-black bg-opacity-30'
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='john@gmail.com'
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full mt-2 p-2 border border-gray-300 rounded bg-black bg-opacity-30'
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
                      value={formData.mobile}
                      onInvalid={(e) => e.target.setCustomValidity('Enter a valid mobile number')}
                      onInput={(e) => e.target.setCustomValidity('')}
                      onChange={handleChange}
                      className='w-full mt-2 p-2 border border-gray-300 rounded bg-black bg-opacity-30'
                      required 
                    />
                </div>
                <div>
                    <label>College Name</label>
                    <input
                        type='text'
                        name='college'
                        placeholder='Your College Name'
                        value={formData.college}
                        onChange={handleChange}
                        className='w-full mt-2 p-2 border border-gray-300 rounded bg-black bg-opacity-30'
                        required
                    />
                </div>
                <div>
                    <label>Highest Qualification</label>
                    <input
                        type='text'
                        name='qualification'
                        placeholder='Your Qualification'
                        value={formData.qualification}
                        onChange={handleChange}
                        className='w-full mt-2 p-2 border border-gray-300 rounded bg-black bg-opacity-30'
                        required
                    />
                </div>
                <div>
                    <label>Choose Internship Domain</label>
                    <select
                        name='domain'
                        value={formData.domain}
                        onChange={handleChange}
                        className='w-full mt-2 p-2 border border-gray-300 rounded bg-black bg-opacity-30'
                        required
                    >
                        <option value="">Select Domain</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Fundraising Coordinator">Fundraising Coordinator</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Coding Tutor">Coding Tutor</option>
                        <option value="Human Resource Management">Human Resource Management</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Business Development Associate">Business Development Associate</option>
                        <option value="Content Writer">Content Writer</option>
                    </select>
                </div>
                <div>
                    <label>Cover Letter(Optional)</label>
                    <textarea
                      name='coverLetter'
                      value={formData.coverLetter}
                      onChange={handleChange}
                      className='w-full mt-2 p-2 border border-gray-300 rounded bg-black bg-opacity-30'
                      rows='4'
                      maxLength={500} // Limit to 500 characters
                      placeholder='Write your cover letter (max 500 words)'
                    ></textarea>
                </div>
                <button
                    type='submit'
                    className='w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600'
                    disabled={loading} 
                >
                    {loading ? 'Submitting...' : 'Submit Application'}
                </button>
            </form>
        </div>
        </div>
        </div>
    );
}

export default Internship;
