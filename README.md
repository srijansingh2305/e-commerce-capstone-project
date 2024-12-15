# WireWear e-commerce site

## About WireWear E-commerce Site:-
WireWear is a dynamic and comprehensive e-commerce platform built using the MERN stack. It offers a seamless shopping experience for users looking to purchase electronics and clothing. With a user-friendly interface, secure payment options, and robust admin functionalities, WireWear is designed to cater to both customers and administrators. The platform supports product management, order tracking, and a detailed categorization system, ensuring an organized and efficient shopping environment.


## Frontend:-
The frontend of WireWear is crafted to provide a smooth and intuitive user experience. Users can easily navigate through various sections, including electronics and clothing categories. Key features include:

* User Authentication: Login and logout functionalities.

* Shopping Cart: Add products to the cart and manage quantities.

* Product Filtering: Filter products by categories and subcategories.

* Search Bar: Search for products by name and get redirected to the product page.

* Order Management: View order history and status.

* Payment Options: Multiple payment methods including Stripe and Cash on Delivery (COD).

* Product Categories: Separate sections for electronics (smartphones, laptops) and clothing (men, women, kids) with subcategories like topwear, bottomwear, and winter wear.

* Bestseller Section: Display of bestseller products on the homepage.


## Admin Panel:-
The admin panel of WireWear ensures smooth operations and data management, providing essential functionalities for administrators:
* Admin Panel Access: Secure login for admins to manage the site.

* Product Management: Add, remove, and update products with ease. Separate pages for adding clothes and electronics.

* Order Management: View and update the status of orders.

* Product Listing: Lists for both electronics and clothing in the admin panel to view added products.

* Bestseller Feature: Option to mark products as bestsellers, which will be displayed on the homepage.

* Data Models and Controllers: Separate models and controllers for electronics and clothing products.


## How to Setup & Run this Project:-

- Install NodeJs ( Ignore If Already Installed)
  1. Visit the official [Node.js](https://nodejs.org/en/download/package-manager) website
  2. Download the Node.js installer
  3. Run the installer.
  4. Follow the prompts in the installer

* First Run Backend then Frontend & Admin—

*  StepsToSetup Backend Of The Project

  1.  OpenProject Folder In VS Code
  2.  OpenIntegrated Terminal
      Right Click on ‘backend’ > Select “Open In Integrated Terminal”
  3.  Type ``npm install`` and press Enter and Wait for Installation to
      be completed (requires Internet)

* Setup Cloudinary for file storage.

  1.  Setup Cloudinary for file storage.
      Create account and login to: [Claudinary](https://cloudinary.com/)
  2.  Then go to Dashboard
  3.  Copy and paste the Cloud Name, API Key, And Secret Key in the `backend/.env` file

* Setup The MongoDB

  1. Open this link [MongoDB](https://www.mongodb.com/cloud/atlas/register)
  2. After that Sign Up on the website.
  3. Click on New Project Option
  4. After Creating Project go to Database Section & Build a database
  5. Select M0 & Your Region & Create Database
  6. Setup Username & Password & Create User
  7. NowClick on Finish & Close
  8. Whitelist IP0.0.0.0 & Clickon Add Entry
  9. Now Clickon Connect
  10. Now Select Compass Option
  11. And Copy the ConnectionString
  12. And Paste It in the `backend/.env` file and replace the <password> with the password you set previously in 4.F & save changes.

* Setup Stripe(Optional):-
  1. Create a stripe accunt from [here](https://dashboard.stripe.com/register)
  2. After creating account get the **Stripe Secret Key** from dashboard
  3. Paste the Secret Key in `backend/.env` file and save file



*  To Run Backend use `npm run server` command in Integrated Terminal
  
*  Before Running Frontend or Admin Projects make sure Backend is
  Running in the background terminal

- StepsToRunFrontend of The Project
  1. Right Click on `frontend` folder > Select `Open In Integrated Terminal`
  2. Type `npm install` and press Enter and Wait for Installation to be completed
     (requires Internet)
  3. After that type `npm run dev` in termina
  4. Nowyou will see the ‘http://localhost:5173’ link in that
     terminal. Open that link in the browser.
- StepsToRunAdminPanel of The Project

  1. Right Click on **admin** folder > Select **Open In Integrated
     Terminal**
  2. Type `npm install` and press Enter and Wait for Installation to
     be
     completed (requires Internet)
  3. After that type `npm run dev` in terminal
  4. Nowyou will see the ‘http://localhost:5174’ link in that
     terminal. Open that link in the browser.

* "I've set up Tailwind CSS for styling in the frontend project. You can use it, but some pages were causing issues, so some files have separate CSS files.

* Because of the privacy policy page, some browsers can cause issues while running the front-end, if such issue persist , please use a different browser ex:- chrome. So far I've seen that brave adblocker has caused this issue oter than that the project runs asolutely fine on all other broswer.
