import React from "react";

const Location = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <h1 className="font-bold text-2xl mb-4">Location</h1>

      <p className="flex items-center gap-2 mb-2 text-gray-800">
        <span role="img" aria-label="location">📍</span>
        <strong>Changunarayan 06, Bastola Gaun, Nagarkot, Bhaktapur</strong>
      </p>

      <p className="flex items-center gap-2 mb-4 text-gray-800">
        <span role="img" aria-label="phone">📞</span>
        984-1211597
      </p>

    
      <div className="rounded-md overflow-hidden shadow">
        <iframe
          title="Nagarkot Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.645338513595!2d85.52015921505967!3d27.718706282788636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1d63e8798ed9%3A0xa81d16541b8e2323!2sNagarkot%20View%20Tower!5e0!3m2!1sen!2snp!4v1694450000000!5m2!1sen!2snp"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        For partnerships and media inquiries:{" "}
        <a
          href="mailto:info@nagarkothomestay.com.np"
          className="text-blue-500 underline"
        >
          info@nagarkothomestay.com.np
        </a>
      </p>
    </div>
  );
};

const Section = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white shadow-md rounded-lg p-6 w-full">
          <h1 className="font-bold text-2xl text-gray-800 mb-6 flex items-center gap-3">
            Send a Message
            <span className="flex-1 border-b border-blue-300"></span>
          </h1>

          <form className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div className="flex gap-4">
              <input
                type="tel"
                name="contactNo"
                placeholder="Your Contact No."
                className="w-1/2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="w-1/2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Your contact subject"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="How can We help ? (Upto 250 Words)"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-32 bg-green-300 text-black font-medium rounded-md py-2 hover:bg-green-400 transition"
            >
              Submit
            </button>

            <p className="text-sm text-gray-600 mt-2">
              * By submitting information, you accept our{" "}
              <span className="text-black font-medium">Terms & Conditions</span>
            </p>
          </form>
        </div>

        
        <Location />
      </div>
    </div>
  );
};

export default Section;
