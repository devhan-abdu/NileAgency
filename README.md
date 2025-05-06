
<h1 style="color:red; font-size: 50px; font-family:sans-serif ;">NileAgency</h1>

## Live
[here](https://nile-agency-six.vercel.app/)

## Available Scripts

## Screenshots


<table>
  <tr>
    <td style="vertical-align: top; padding: 10px;">
      <img src="https://github.com/user-attachments/assets/7cfb8813-4fcd-44e1-be22-37018dffa7ca" width="100%">
    </td>
    <td style="vertical-align: top; padding: 10px;">
      <img src="https://github.com/user-attachments/assets/8bcb5e03-c660-42c1-a89a-31b85fe0915d" width="100%">
    </td>
  </tr>
  <tr>
    <td style="vertical-align: top; padding: 10px;">
      <img src="https://github.com/user-attachments/assets/c04d33a7-2197-4f96-bffd-34af47a62c53" width="100%">
    </td>
    <td style="vertical-align: top; padding: 10px;">
      <img src="https://github.com/user-attachments/assets/53b915e8-9a11-45a7-a45d-209032abeed1" width="100%">
    </td>
  </tr>
  <tr>
    <td style="vertical-align: top; padding: 10px;">
      <img src="https://github.com/user-attachments/assets/694a1ada-0e62-44bc-8f53-3159a3d15be2" width="100%">
    </td>
    <td style="vertical-align: top; padding: 10px;">
      <img src="https://github.com/user-attachments/assets/94845e07-ab7f-4084-a066-b779391c396d" width="100%">
    </td>
  </tr>
</table>





## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Setup and Installation](#setup-and-installation)
6. [Database Schema](#database-Schema)
7. [Authors](#authors)
8. [License](#license)




## Introduction

# 🚀 NileAgency

We help brands **grow, scale, and succeed** online. Whether you're launching a startup or scaling your business, we build digital products that deliver results.

### 🔧 What We Do

- **🎨 UI/UX Design** – Modern, delightful experiences your users will love.
- **💻 Web Development** – Speedy, secure, and scalable websites.
- **📱 App Development** – Mobile apps that feel native, look great, and perform.
- **📣 Digital Marketing** – Growth campaigns built on data and creativity.
- **✍️ Content Writing** – Stories and SEO to capture and convert.
- **🛒 Ecommerce** – Powerful storefronts tailored to your goals.

### 🤝 Why Work With Us?

- 💸 **Affordable** – Get more value without compromise.
- 🧠 **Experienced Pros** – 10+ years of delivering digital success.
- 👨‍👩‍👧‍👦 **Skilled Team** – Cross-functional experts you can trust.
- 📊 **Proven Results** – Clients see 30%+ growth on average.

> Let’s create something great, together.





## 🚀 Features

NileAgency’s website is designed for clarity, engagement, and results. Here's what it includes:

- **🏠 Home Page**  
  Hero intro with CTAs, service highlights, and real client testimonials to build trust.

- **🛠️ Services Page**  
  Full breakdown of all services (UI/UX, Development, Marketing, etc.), each with detailed descriptions and icons.

- **🎨 Portfolio Page**  
  Showcase of past projects with a category filter (e.g., Web, App, Marketing) for quick browsing.

- **🔍 Project Detail Page**  
  In-depth case studies featuring objectives, process, technologies used, and outcomes.

- **👥 About Page**  
  Story, values, and team introduction to connect with clients on a personal level.

- **📞 Contact Page**  
  Clean contact form with social links, encouraging visitors to reach out effortlessly.




  ## Technology Stack

- **Frontend**: Next.js, Tailwind CSS, shadcn/ui  
- **Backend / CMS**: Sanity (with deployed Studio)  
- **Deployment**: Vercel

## Project Structure
   ```plaintext
 LICENSE
.
├── .gitignore
├── backendSanity
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   ├── sanity.cli.js
│   ├── sanity.config.js
│   ├── schemaTypes
│   │   ├── Contact.js
│   │   ├── Project.js
│   │   └── index.js
│   └── static
│       └── .gitkeep
├── frontend
│   ├── .env.local
│   ├── README.md
│   ├── components.json
│   ├── desktop.ini
│   ├── eslint.config.mjs
│   ├── jsconfig.json
│   ├── next.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── public
│   │   ├── about
│   │   │   ├── about.jpg
│   │   │   └── about2.jpg
│   │   ├── error.png
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── partnerLogo
│   │   │   ├── corel.svg
│   │   │   ├── creative-new.svg
│   │   │   ├── nokia.svg
│   │   │   ├── opera.svg
│   │   │   ├── oppo-new.svg
│   │   │   └── schibsted.svg
│   │   ├── serviceImage
│   │   │   ├── appteam.jpg
│   │   │   ├── content2.jpg
│   │   │   ├── eccomerce.jpg
│   │   │   ├── market2.png
│   │   │   ├── ui.png
│   │   │   └── web.png
│   │   ├── vercel.svg
│   │   └── window.svg
│   └── src
│       ├── app
│       │   ├── about
│       │   │   └── page.jsx
│       │   ├── contact
│       │   │   └── page.jsx
│       │   ├── error.js
│       │   ├── favicon.ico
│       │   ├── globals.css
│       │   ├── layout.js
│       │   ├── not-found.jsx
│       │   ├── page.js
│       │   ├── portfolio
│       │   │   ├── Portfolio.jsx
│       │   │   ├── PortfolioWrapper.js
│       │   │   ├── [slug]
│       │   │   │   ├── not-found.jsx
│       │   │   │   └── page.jsx
│       │   │   └── page.jsx
│       │   └── services
│       │       └── page.jsx
│       ├── components
│       │   ├── Contact.jsx
│       │   ├── Footer.jsx
│       │   ├── Header.jsx
│       │   ├── Partner.js
│       │   ├── RecentProject.js
│       │   └── ui
│       │       ├── AnimatedTestimonials.js
│       │       ├── FloatedNav.jsx
│       │       ├── button.jsx
│       │       ├── sheet.jsx
│       │       └── skeletons.jsx
│       └── lib
│           ├── actions.js
│           ├── data.js
│           ├── queries.js
│           ├── sanity.js
│           ├── sanityImage.js
│           ├── sendEmail.js
│           └── utils.js
├── package-lock.json
└── package.json
```  

 
## Setup and installation

 1. Clone the repository
git clone https://github.com/devhan-hub/NileAgency.git

 ```bash
cd NileAgency
```


 2. Setup Backend (Sanity)
 ```bash
cd backend
npm install   # or yarn install
npm run dev    # or yarn start
```

 3. Setup Frontend (Next.js)
 ```bash
cd ../frontend
npm install   # or yarn install
npm run dev   # or yarn dev
```


 4. Access the application:
 ```bash
# Frontend (Next.js) - http://localhost:3000
# Backend (Sanity Studio) - http://localhost:3333
```


    
## Database Schema

### Project Collection
- **Collection Name**: `Projects`
  - **Document ID**: `slug`
    - `_id`: String (Project ID - auto-generated by Sanity)
    - `clientName`: String (The name of the client for the project)
    - `description`: Text (Description of the company or project)
    - `servicesProvided`: Array of Strings (List of services provided in the project)
    - `timeline`: String (Timeline to complete the project)
    - `challenge`: Text (Challenges faced during the project)
    - `solution`: Text (Our approach or solution to the challenges)
    - `result`: Text (The final result or outcome of the project)
    - `testimonial`: Object (CEO's testimonial)
      - `ceoName`: String (Name of the CEO providing the testimonial)
      - `companyName`: String (Name of the company)
      - `image`: Image (CEO's image)
      - `message`: Text (The testimonial message from the CEO)
    - `image`: Image (Project image)

---

### Contact Collection
- **Collection Name**: `Contact`
  - **Document ID**: `contactId` (Auto-generated by Sanity)
    - `name`: String (Name of the person reaching out)
    - `email`: String (Email address of the person)
    - `phoneNumber`: String (Phone number of the person)
    - `subject`: String (Subject of the message)
    - `message`: Text (The content of the message)
    - `createdAt`: DateTime (Timestamp when the message was submitted)

---




   ## Author

**Hanan Abdulshikur**  
- [GitHub](https://github.com/devhan-hub)  
- [LinkedIn](https://linkedin.com/in/hanan-abdulshikur)

---

## License

This project is licensed under the **MIT License**.  
Copyright &copy; 2025 Hanan Abdulshikur.

