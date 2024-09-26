import React from 'react';
// import './styles.css';

function SupportUs() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6 text-center bg-gray-100">
      <h1 className="text-5xl font-bold  mb-6">Support Us in Making a Difference!</h1>
      <p className="text-lg  mb-10">
        Your generous contributions help us empower communities and create lasting change. Together, we can make the world a better place!
      </p>

      {/* Flexbox Grid Section */}
      <div className="flex flex-wrap  justify-around items-center  mb-10">
        
        {/* Bank Details Section */}
        <div className="bg-yellow-100 h-fit p-6 rounded-lg shadow-md mb-10 text-start">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Bank Details for Indian Donors</h2>
          <p className="text-lg text mb-2"><strong>Bank:</strong> Bank Of Baroda</p>
          <p className="text-lg text mb-2"><strong>City:</strong> Nagpur</p>
          <p className="text-lg text mb-2"><strong>Contact No:</strong> +91 8010996763</p>
          <p className="text-lg text mb-2"><strong>Account Name:</strong> Suvidha Mahila Mandal</p>
          <p className="text-lg text mb-2"><strong>Account No:</strong> 97840100027609</p>
          <p className="text-lg text mb-2"><strong>IFSC Code:</strong> BARB0DBKPAR</p>
        </div>

        {/* QR Code Section */}
        <div className="  mb-10">
          <h2 className="text-3xl font-semibold  mb-4">Scan to Donate!</h2>
          <img
            src='/Images/qrcode.jpg' 
            alt="QR Code for Donations"
            className=" mx-auto mb-4"
          />
          <p className="text-lg ">Use the QR code above to make your donation quickly and easily.</p>
        </div>
      </div>

      <p className="text-lg text-gray-600">
        Thank you for your support! Every contribution makes a difference and helps us to continue our work.
      </p>
    </div>
  );
};

export default SupportUs;
