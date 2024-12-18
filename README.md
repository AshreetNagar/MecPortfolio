# MecPortfolio

This repository contains the MecPortfolio website project, designed to showcase your projects and work in a visually appealing layout. Follow the instructions below to install, run, and modify the website locally.

## Table of Contents

- [Installation](#installation)
- [Running the Website](#running-the-website)
- [Editing the Files](#editing-the-files)
- [Building for Production](#building-for-production)
- [Troubleshooting](#troubleshooting)

---

## Installation

1. **Clone the Repository:**
   - Use `git` to clone the repository or download it as a ZIP file and extract it.
   ```bash
   git clone <repository-url>
   cd MecPortfolio/mecportfolio
   ```

2. **Install Dependencies:**
   - Ensure you have [Node.js](https://nodejs.org) installed.
   - Install project dependencies using `npm`:
   ```bash
   npm install
   ```

---

## Running the Website

1. **Start the Development Server:**
   - Launch the website locally with:
   ```bash
   npm start
   ```

2. **Access the Website:**
   - Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Editing the Files

1. **Project Structure:**
   - Locate files in the project directory. The key files and folders include:
     ```
     src/
     ├── components/       # Reusable React components
     ├── pages/            # Page-specific components (e.g., HomePage.js, ProjectTemplate.js)
     ├── assets/images/    # Images used in the project
     └── App.js            # Main application file
     ```

2. **Make Changes:**
   - Open the project in your favorite text editor (e.g., VS Code).
   - Edit the necessary files and save your changes.

3. **Live Preview:**
   - The development server will automatically reload the website to reflect your changes.

---

## Building for Production

1. **Create a Production Build:**
   - Run the following command:
   ```bash
   npm run build
   ```

2. **Output:**
   - A `build` folder will be created containing the production-ready files.

3. **Deploy:**
   - Use any hosting platform (e.g., Netlify, Vercel, or your web server) to deploy the contents of the `build` folder.

---

## Troubleshooting

1. **Check Node.js and npm Versions:**
   - Ensure you have compatible versions of Node.js and npm installed:
     ```bash
     node -v
     npm -v
     ```

2. **Fix Dependency Issues:**
   - If installation fails, delete the `node_modules` folder and `package-lock.json` file, then reinstall dependencies:
     ```bash
     rm -rf node_modules package-lock.json
     npm install
     ```

3. **Common Errors:**
   - **Error:** `Port 3000 is already in use.`
     - Solution: Kill the process using the port or use a different port:
       ```bash
       npx kill-port 3000
       npm start
       ```
   - **Error:** `Cannot GET /` or blank page.
     - Solution: Verify the file paths in your code, especially for assets and imports.

---