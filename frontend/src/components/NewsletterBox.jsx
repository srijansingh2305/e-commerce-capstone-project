import React, { useState } from 'react'; // Importing React and useState hook

const NewsletterBox = () => {
    const [email, setEmail] = useState(''); // State to hold the email input

    const onSubmitHandler = (event) => {
        event.preventDefault(); // Preventing default form submission behavior
        // You can add your subscription logic here

        // Clear the input field after submission
        setEmail('');
    }

    return (
        <div className='text-center'> {/* Container for the newsletter box, centered text */}
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 10% off</p> {/* Promotion text */}
            <p className='text-gray-400 mt-3'>
                Be the first to know about our latest collections and exclusive offers. Sign up for our newsletter today and enjoy a 20% discount on your first purchase!
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'> {/* Form for subscribing */}
                <input 
                    className='w-full sm:flex-1 outline-none bg-gray-250 border border-black' 
                    type="email" 
                    placeholder='Enter your email' 
                    value={email} // Controlled input
                    onChange={(e) => setEmail(e.target.value)} // Update state on input change
                    required 
                /> {/* Email input field */}
                <button className='border border-black px-8 py-4 text-sm hover:bg-gray-700 hover:text-white transition-all duration-500'>SUBSCRIBE</button> {/* Subscribe button */}
            </form>
        </div>
    )
}

export default NewsletterBox; // Exporting NewsletterBox component