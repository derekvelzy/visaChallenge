# visaChallenge

## Summary ##
Contact list web application.

## Requirements ##
1. You may use a set of existing contacts for the list. Hard code a list to start with. The list may reside in memory and be manipulated by the add, edit, and delete functions.
2. Contact information should consist of:
  - First Name
  - Last Name
  - Phone Number
  - Email Address
3. Initially the user should be viewing a page with a list of existing contacts. In the contacts list, a contact should be shown with a card style layout. Each card should consist of:
  - First Name
  - Last Name
  - Phone Number
4. From the Contact Listing page, the user should be able to:
  - Edit an existing contact
    - All fields are editable
    - Create a separate page for editing
  - View a contact
    - Expand a contact to view all information
  - Delete an existing user
    - A simple delete with a confirmation popup. Are you sure you want to delete “Contact”?
  - Create a new contact
    - Create a separate page for creating

## Features ##
#### Home: / ####
- Home screen displays all existing contacts.
- Clicking a contact card will animate to open a more detailed view of that contact.
  - A card includes first name, last name, and phone number in the compressed format, and includes email in the detailed view.
- From the detailed view, the user can:
  - Close the contact
  - Edit the contact, taking them to the edit page
  - Delete the contact, bringing up a confirmation popup
- Clicking the "Create New Contact" button will route to a new create page.

#### Create: /create ####
- Must input First and Last Name, Phone Number, and Email Address.
- Regex-checked text fields ensure that the inputs are valid.
- Cancel button brings the user back to the home page and clear all fields.
- Submit button will add the user to the database and bring the user back to the home page.

#### Edit: /edit ####
- Must input First and Last Name, Phone Number, and Email Address.
- Regex-checked text fields ensure that the inputs are valid.
- Cancel button brings the user back to the home page.
- Submit button will edit the contact's info and bring the user back to the home page.

## Tech/framework Used ##
__Built with__
- React
- Redux Toolkit
- Node.js
- MongoDB
- Webpack
- Styled Components
- React Router
- react-spring

## Run the Project Locally ##
From the repo
1. Clone the project locally
2. Run ```npm install``` in the command line
3. Run ```npm run seed``` in the command line to seed the database
  - A confirmation of 'Seeded Database!' should appear in the console. If so, cancel from the running command (^c on Mac).
4. Run ```npm run server``` in the command line to start the server
5. Open [http://localhost:8000](http://localhost:8000) with your browser to see the result
