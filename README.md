# Pastebin App

A simple **Pastebin-like application** built with Node.js and plain HTML/CSS/JS.  
Users can create text pastes and share a link to view them.

---

## 🌟 Features

- Create and save text pastes
- View pastes via a unique link
- Minimalistic UI for quick use
- Works locally and deployed on **Vercel**
- Temporary file-based storage (for serverless compatibility)

---

## 🛠 Technologies Used

- **Node.js** – Backend API
- **nanoid** – Unique ID generator for pastes
- **HTML / CSS / JavaScript** – Frontend UI
- **Vercel** – Deployment platform

---

## ⚡ How It Works

1. User opens **index.html** and types a paste.
2. Clicking **Create Paste** sends a **POST request** to the API (`/api/paste`).
3. The API generates a **unique ID** and stores the paste in temporary file storage.
4. A **link** is generated like:
5. Opening the link fetches the paste content from the API and displays it.

   ---

## 💻 Running Locally

1. Clone the repository:

```bash
git clone https://github.com/dhanyadiya/Pastebin.git
cd Pastebin/pastebin-app
npm install
vercel dev
http://localhost:3000

   ---

## 🚀 Deployment

https://pastebin-c3gd.vercel.app/

