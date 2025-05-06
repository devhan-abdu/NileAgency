// /schemas/contactMessage.js
export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'email', title: 'Email', type: 'string' },
      { name: 'phoneNumber', title: 'Phone Number', type: 'string' },
      { name: 'subject', title: 'Subject', type: 'string' },
      { name: 'message', title: 'Message', type: 'text' },
      { name: 'createdAt', title: 'Submission Date', type: 'datetime' },
    ]
  }
  