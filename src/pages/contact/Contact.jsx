import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto w-[80%] lg:w-[60%] mt-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6 w-[80%] mx-auto">
        Have questions, feedback, or inquiries? We'd love to hear from you!
        Reach out to us using the contact information below or fill out the
        form, and we'll get back to you as soon as possible.
      </p>
      <div className="flex flex-col items-center mb-10">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Email:</h2>
          <p className="text-blue-500 hover:underline">contact@example.com</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Phone:</h2>
          <p>+1 (123) 456-7890</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Address:</h2>
          <p>123 Education Street, Learning City, LC 12345</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Office Hours:</h2>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Follow Us:</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
        <form className="max-w-md mx-auto">
          {/* ... (existing form fields) ... */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (123) 456-7890"
              className="w-full p-2 bg-gray-200 rounded focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Subject (Optional)
            </label>
            <textarea
              type="text"
              id="subject"
              name="subject"
              placeholder="Write your message"
              className="w-full p-2 bg-gray-200 rounded focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
          {/* ... (existing form fields) ... */}
        </form>
        {/* ... (existing form submit button) ... */}
      </div>
    </div>
  );
};

export default Contact;
