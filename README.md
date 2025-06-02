This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# 🔗 ShortLynk – URL Shortener

**ShortLynk** is a modern URL shortener built with **Next.js**, **Tailwind CSS**, and **MongoDB** (using both Compass and Atlas). It offers a sleek interface for users to generate and manage short links easily.

Check out the deployed application: [Watch Live](https://short-lynk.vercel.app//)

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📁 Pages and Features

### 🏠 Home (`/`)
- Introduction to the tool
- Hero section with call-to-action
- Responsive UI built with Tailwind

### 📎 Shorten URL (`/shorten`)
- Enter your original URL and desired short slug
- Duplicate slug detection with meaningful error messages
- Success confirmation on valid submission

### 👤 About (`/about`)
- Learn more about the creator and purpose behind ShortLynk

### 📬 Contact (`/contact`)
- Contact form for feedback and suggestions

---

## 🛠️ Tech Stack

| Category        | Technologies Used                      |
|----------------|------------------------------------------|
| Framework       | Next.js                                 |
| Styling         | Tailwind CSS                            |
| Database        | MongoDB (Compass for local, Atlas for cloud) |
| Hosting         | Vercel                                   |
| Language        | JavaScript (ES6+)                        |

---

## 🧩 Project Structure



## Setup

---

## 🧪 Local Development

```bash
1. Clone the repository:
git clone https://github.com/AbhishekNegi12/ShortLynk.git
cd ShortLynk

2.Install dependencies for both client and server:
npm install

3.Set up your environment variables:
touch .env.local
# Add your MongoDB URI in .env.local
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/db
Create a .env file in the server directory and add the necessary environment variables.
    
    MONGO_URL=your_mongodb_uri
    SECRET=your_jwt_secret

# Start the server
4. Run the application:
npm run dev  

## Contributing
  Feel free to contribute to the project. 

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.