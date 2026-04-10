Day 12 Starting Project Insta Clon

Instagram Clone - Backend
This is the backend server for an Instagram clone built using Node.js, Express, and MongoDB. The project focuses on a modular architecture to handle authentication, media sharing, and user interactions.


🛠️ Tech StackRuntime: Node.jsFramework: Express.jsDatabase: MongoDB (via Mongoose)Authentication: JWT (JSON Web Tokens) & Bcrypt for password hashing⚙️ Setup InstructionsClone the project:Bashgit clone <your-repository-url>
Install dependencies:Bashnpm install
Environment Setup:Create a .env file in the root directory and add the following:Code snippetPORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_random_secret_key
Run the server:For production: npm startFor development (with nodemon): npm run dev
