// const express = require('express');
// const cors = require('cors');

// app.use(cors(corsOptions));

// const app = express();

// const PORT = 5001; // Change this to match your preferred port

// app.use(cors());
// app.use(express.json()); // To parse JSON request bodies if needed

// // Mock Data for the API
// const bagsData = [
//     {
//         "_id": "675bc31db9bee9b9e28f7ea4",
//         "title": "Test bag Saam 2",
//         "description": "This is a nice bag super bag",
//         "category": "duffle",
//         "trending": true,
//         "coverImage": "md4.webp",
//         "oldPrice": 3999,
//         "newPrice": 3298
//     },
//     {
//         "_id": "675acfebdbd6195d444965a6",
//         "title": "Trailed 11",
//         "description": "A robust duffle bag designed for gym-goers and weekend travelers.",
//         "category": "duffle",
//         "trending": true,
//         "coverImage": "md1.webp",
//         "oldPrice": 3299,
//         "newPrice": 2599
//     },
//     // Add all other items from your dataset here
// ];

// // API Endpoints
// app.get('/api/bags', (req, res) => {
//     res.json(bagsData); // Respond with the mock data
// });

// // Start the Server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// // CORS options
// const corsOptions = {
//     origin: 'http://localhost:5174', // specify the frontend's URL
//     credentials: true, // allow credentials (cookies, authorization headers, etc.)
//   };
  
