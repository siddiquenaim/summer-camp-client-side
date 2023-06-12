# Summer Camp Learning School (Melodica)

Summer Camp Learning School, also known as Melodica, is a music instrument learning school. The website is built using Vite, React, React Router, Node.js, Express.js, Firebase, MongoDB, Tailwind CSS, DaisyUI, Stripe, and various React packages. It is deployed on Firebase and offers a comprehensive platform for individuals interested in learning music instruments.

## Live Site

A live demo of the Melodica website can be accessed at the following link: [Melodica Live](https://summer-camp-e9d34.web.app/)

## About This Project

The main features of Melodica are as follows:

- **User Roles**: The website offers three roles for users: Admin, Instructor, and Student. Initially, a user is assigned the Student role. The Admin can promote users to become Instructors or Admins. Each role has specific routes and options available in their respective dashboards. Users can only access options specific to their role, and their data is segregated accordingly. Users cannot view the data of other users unless they are an Admin.

- **Instructor-Added Classes**: Instructors can add classes, but these classes are only visible to other users once they are approved by the Admin. If the Admin denies a class, feedback can be provided to the Instructor for necessary updates and changes.

- **Secure Login System**: The user login system is secured by Firebase Authentication, ensuring a safe and reliable login process.

- **Payment Gateway Integration**: Melodica incorporates Stripe as the payment gateway to facilitate seamless enrollment in classes and process payments. Users can securely make payments for class enrollment using popular payment methods such as credit/debit cards.

- **CRUD Operations**: The website utilizes CRUD operations to dynamically load data from the server. MongoDB is used as the database to store all the necessary data.

## Technologies Used

- Vite
- React
- React Router
- Node.js
- Express.js
- Firebase
- MongoDB
- Tailwind CSS
- DaisyUI
- Stripe
