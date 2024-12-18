// // const mongoose = require("mongoose");
// // const Bag = require("./src/bags/bag.model"); // Adjust the path if needed
// // require("dotenv").config();

// // const bags = [
// //     {
// //       title: "Trailed 10",
// //       description: "Lightweight and durable backpack ideal for daily commutes or travel.",
// //       category: "backpack",
// //       trending: true,
// //       coverImage: "mb4.webp",
// //       oldPrice: 1499,
// //       newPrice: 1099,
// //     },
// //     {
// //       title: "Trailed 3",
// //       description: "A premium luggage option with ample space for all your essentials.",
// //       category: "luggage",
// //       trending: true,
// //       coverImage: "m3.webp",
// //       oldPrice: 3999,
// //       newPrice: 3299,
// //     },
// //     {
// //       title: "Trailed 4",
// //       description: "Elegant luggage featuring a hard-shell design for maximum protection.",
// //       category: "luggage",
// //       trending: false,
// //       coverImage: "m4.webp",
// //       oldPrice: 4999,
// //       newPrice: 4699,
// //     },
// //     {
// //       title: "Trailed 8",
// //       description: "Ergonomic backpack with multiple compartments for organized storage.",
// //       category: "backpack",
// //       trending: true,
// //       coverImage: "mb2.webp",
// //       oldPrice: 2199,
// //       newPrice: 2099,
// //     },
// //     {
// //       title: "Trailed 2",
// //       description: "Durable and lightweight luggage designed for modern adventures.",
// //       category: "luggage",
// //       trending: true,
// //       coverImage: "m2.webp",
// //       oldPrice: 2499,
// //       newPrice: 1099,
// //     },
// //     {
// //       title: "Trailed 7",
// //       description: "A compact and durable backpack designed for urban explorers.",
// //       category: "backpack",
// //       trending: true,
// //       coverImage: "mb1.webp",
// //       oldPrice: 1999,
// //       newPrice: 1599,
// //     },
// //     {
// //       title: "Trailed 5",
// //       description: "A spacious travel bag with a classic design for every traveler.",
// //       category: "luggage",
// //       trending: true,
// //       coverImage: "m5.webp",
// //       oldPrice: 5999,
// //       newPrice: 5599,
// //     },
// //     {
// //       title: "Trailed 14",
// //       description: "Spacious duffle bag ideal for long trips and heavy packing.",
// //       category: "duffle",
// //       trending: false,
// //       coverImage: "md4.webp",
// //       oldPrice: 3499,
// //       newPrice: 2499,
// //     },
// //     {
// //       title: "Trailed 1",
// //       description: "A sleek and stylish luggage bag perfect for frequent travelers.",
// //       category: "luggage",
// //       trending: true,
// //       coverImage: "m1.webp",
// //       oldPrice: 2999,
// //       newPrice: 2599,
// //     },
// //     {
// //       title: "Trailed 6",
// //       description: "Travel light and in style with this versatile luggage option.",
// //       category: "luggage",
// //       trending: false,
// //       coverImage: "m6.webp",
// //       oldPrice: 4499,
// //       newPrice: 3899,
// //     },
// //     {
// //       title: "Trailed 9",
// //       description: "A stylish backpack with a water-resistant exterior for outdoor trips.",
// //       category: "backpack",
// //       trending: false,
// //       coverImage: "mb3.webp",
// //       oldPrice: 2799,
// //       newPrice: 2499,
// //     },
// //     {
// //       title: "Trailed 12",
// //       description: "Compact duffle with a sleek design for quick getaways or gym sessions.",
// //       category: "duffle",
// //       trending: true,
// //       coverImage: "md2.webp",
// //       oldPrice: 1999,
// //       newPrice: 1599,
// //     },
// //     {
// //       title: "Trailed 15",
// //       description: "A versatile duffle bag with multiple compartments for easy organization.",
// //       category: "duffle",
// //       trending: false,
// //       coverImage: "md5.webp",
// //       oldPrice: 2299,
// //       newPrice: 1999,
// //     },
// //   ];

// // const seedData = async () => {
// //   try {
// //     // Connect to MongoDB
// //     await mongoose.connect(process.env.DB_CONNECTION, {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //     });
// //     console.log("Connected to MongoDB Atlas");

// //     // Delete existing data (optional, for a fresh start)
// //     await Bag.deleteMany({});
// //     console.log("Existing data cleared");

// //     // Insert new data
// //     await Bag.insertMany(bags);
// //     console.log("Data seeded successfully!");

// //     mongoose.connection.close();
// //   } catch (err) {
// //     console.error("Error seeding data:", err);
// //     process.exit(1);
// //   }
// // };

// // seedData();
// const mongoose = require("mongoose");
// const Bag = require("./src/bags/bag.model"); // Adjust the path if needed
// require("dotenv").config();

// const bags = [
//     {
//       title: "Trailed 10",
//       description: "Lightweight and durable backpack ideal for daily commutes or travel.",
//       category: "backpack",
//       trending: true,
//       coverImage: "mb4.webp",
//       oldPrice: 1499,
//       newPrice: 1099,
//     },
//     {
//       title: "Trailed 3",
//       description: "A premium luggage option with ample space for all your essentials.",
//       category: "luggage",
//       trending: true,
//       coverImage: "m3.webp",
//       oldPrice: 3999,
//       newPrice: 3299,
//     },
//     {
//       title: "Trailed 4",
//       description: "Elegant luggage featuring a hard-shell design for maximum protection.",
//       category: "luggage",
//       trending: false,
//       coverImage: "m4.webp",
//       oldPrice: 4999,
//       newPrice: 4699,
//     },
//     {
//       title: "Trailed 8",
//       description: "Ergonomic backpack with multiple compartments for organized storage.",
//       category: "backpack",
//       trending: true,
//       coverImage: "mb2.webp",
//       oldPrice: 2199,
//       newPrice: 2099,
//     },
//     {
//       title: "Trailed 2",
//       description: "Durable and lightweight luggage designed for modern adventures.",
//       category: "luggage",
//       trending: true,
//       coverImage: "m2.webp",
//       oldPrice: 2499,
//       newPrice: 1099,
//     },
//     {
//       title: "Trailed 7",
//       description: "A compact and durable backpack designed for urban explorers.",
//       category: "backpack",
//       trending: true,
//       coverImage: "mb1.webp",
//       oldPrice: 1999,
//       newPrice: 1599,
//     },
//     {
//       title: "Trailed 5",
//       description: "A spacious travel bag with a classic design for every traveler.",
//       category: "luggage",
//       trending: true,
//       coverImage: "m5.webp",
//       oldPrice: 5999,
//       newPrice: 5599,
//     },
//     {
//       title: "Trailed 14",
//       description: "Spacious duffle bag ideal for long trips and heavy packing.",
//       category: "duffle",
//       trending: false,
//       coverImage: "md4.webp",
//       oldPrice: 3499,
//       newPrice: 2499,
//     },
//     {
//       title: "Trailed 1",
//       description: "A sleek and stylish luggage bag perfect for frequent travelers.",
//       category: "luggage",
//       trending: true,
//       coverImage: "m1.webp",
//       oldPrice: 2999,
//       newPrice: 2599,
//     },
//     {
//       title: "Trailed 6",
//       description: "Travel light and in style with this versatile luggage option.",
//       category: "luggage",
//       trending: false,
//       coverImage: "m6.webp",
//       oldPrice: 4499,
//       newPrice: 3899,
//     },
//     {
//       title: "Trailed 9",
//       description: "A stylish backpack with a water-resistant exterior for outdoor trips.",
//       category: "backpack",
//       trending: false,
//       coverImage: "mb3.webp",
//       oldPrice: 2799,
//       newPrice: 2499,
//     },
//     {
//       title: "Trailed 12",
//       description: "Compact duffle with a sleek design for quick getaways or gym sessions.",
//       category: "duffle",
//       trending: true,
//       coverImage: "md2.webp",
//       oldPrice: 1999,
//       newPrice: 1599,
//     },
//     {
//       title: "Trailed 15",
//       description: "A versatile duffle bag with multiple compartments for easy organization.",
//       category: "duffle",
//       trending: false,
//       coverImage: "md5.webp",
//       oldPrice: 2299,
//       newPrice: 1999,
//     },
//     // New Trekking-Related Products
//     {
//       title: "Mountain Trail Pro",
//       description: "Rugged 65L hiking backpack with advanced suspension system for long treks.",
//       category: "backpack",
//       trending: true,
//       coverImage: "trek1.webp",
//       oldPrice: 3499,
//       newPrice: 2999,
//     },
//     {
//       title: "Alpine Expedition Gear",
//       description: "Waterproof and windproof trekking jacket with multiple utility pockets.",
//       category: "trekking-accessories",
//       trending: true,
//       coverImage: "trek2.webp",
//       oldPrice: 2799,
//       newPrice: 2399,
//     },
//     {
//       title: "Trail Master Poles",
//       description: "Lightweight carbon fiber trekking poles with ergonomic cork handles.",
//       category: "trekking-accessories",
//       trending: true,
//       coverImage: "trek3.webp",
//       oldPrice: 1599,
//       newPrice: 1299,
//     },
//     {
//       title: "Wilderness Survival Kit",
//       description: "Comprehensive emergency kit for serious hikers and trekkers.",
//       category: "trekking-accessories",
//       trending: false,
//       coverImage: "trek4.webp",
//       oldPrice: 2299,
//       newPrice: 1899,
//     },
//     {
//       title: "Peak Comfort Sleeping Bag",
//       description: "Lightweight, compact sleeping bag rated for extreme cold conditions.",
//       category: "trekking-accessories",
//       trending: true,
//       coverImage: "trek5.webp",
//       oldPrice: 3999,
//       newPrice: 3499,
//     }
//   ];

// const seedData = async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(process.env.DB_CONNECTION, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB Atlas");

//     // Delete existing data (optional, for a fresh start)
//     await Bag.deleteMany({});
//     console.log("Existing data cleared");

//     // Insert new data
//     await Bag.insertMany(bags);
//     console.log("Data seeded successfully!");

//     mongoose.connection.close();
//   } catch (err) {
//     console.error("Error seeding data:", err);
//     process.exit(1);
//   }
// };

// seedData();

const mongoose = require("mongoose");
const Bag = require("./src/bags/bag.model"); // Adjust the path if needed
const User = require("./src/users/user.model"); // Adjust the path if needed
require("dotenv").config();
const bcrypt = require("bcrypt");

const bags = [
    {
      title: "Trailed 10",
      description: "Lightweight and durable backpack ideal for daily commutes or travel.",
      category: "backpack",
      trending: true,
      coverImage: "mb4.webp",
      oldPrice: 1499,
      newPrice: 1099,
    },
    {
      title: "Trailed 3",
      description: "A premium luggage option with ample space for all your essentials.",
      category: "luggage",
      trending: true,
      coverImage: "m3.webp",
      oldPrice: 3999,
      newPrice: 3299,
    },
    {
      title: "Trailed 4",
      description: "Elegant luggage featuring a hard-shell design for maximum protection.",
      category: "luggage",
      trending: false,
      coverImage: "m4.webp",
      oldPrice: 4999,
      newPrice: 4699,
    },
    {
      title: "Trailed 8",
      description: "Ergonomic backpack with multiple compartments for organized storage.",
      category: "backpack",
      trending: true,
      coverImage: "mb2.webp",
      oldPrice: 2199,
      newPrice: 2099,
    },
    {
      title: "Trailed 2",
      description: "Durable and lightweight luggage designed for modern adventures.",
      category: "luggage",
      trending: true,
      coverImage: "m2.webp",
      oldPrice: 2499,
      newPrice: 1099,
    },
    {
      title: "Trailed 7",
      description: "A compact and durable backpack designed for urban explorers.",
      category: "backpack",
      trending: true,
      coverImage: "mb1.webp",
      oldPrice: 1999,
      newPrice: 1599,
    },
    {
      title: "Trailed 5",
      description: "A spacious travel bag with a classic design for every traveler.",
      category: "luggage",
      trending: true,
      coverImage: "m5.webp",
      oldPrice: 5999,
      newPrice: 5599,
    },
    {
      title: "Trailed 14",
      description: "Spacious duffle bag ideal for long trips and heavy packing.",
      category: "duffle",
      trending: false,
      coverImage: "md4.webp",
      oldPrice: 3499,
      newPrice: 2499,
    },
    {
      title: "Trailed 1",
      description: "A sleek and stylish luggage bag perfect for frequent travelers.",
      category: "luggage",
      trending: true,
      coverImage: "m1.webp",
      oldPrice: 2999,
      newPrice: 2599,
    },
    {
      title: "Trailed 6",
      description: "Travel light and in style with this versatile luggage option.",
      category: "luggage",
      trending: false,
      coverImage: "m6.webp",
      oldPrice: 4499,
      newPrice: 3899,
    },
    {
      title: "Trailed 9",
      description: "A stylish backpack with a water-resistant exterior for outdoor trips.",
      category: "backpack",
      trending: false,
      coverImage: "mb3.webp",
      oldPrice: 2799,
      newPrice: 2499,
    },
    {
      title: "Trailed 12",
      description: "Compact duffle with a sleek design for quick getaways or gym sessions.",
      category: "duffle",
      trending: true,
      coverImage: "md2.webp",
      oldPrice: 1999,
      newPrice: 1599,
    },
    {
      title: "Trailed 15",
      description: "A versatile duffle bag with multiple compartments for easy organization.",
      category: "duffle",
      trending: false,
      coverImage: "md5.webp",
      oldPrice: 2299,
      newPrice: 1999,
    },
    // New Trekking-Related Products
    {
      title: "Mountain Trail Pro",
      description: "Rugged 65L hiking backpack with advanced suspension system for long treks.",
      category: "backpack",
      trending: true,
      coverImage: "trek1.webp",
      oldPrice: 3499,
      newPrice: 2999,
    },
    {
      title: "Alpine Expedition Gear",
      description: "Waterproof and windproof trekking jacket with multiple utility pockets.",
      category: "trekking-accessories",
      trending: true,
      coverImage: "trek2.webp",
      oldPrice: 2799,
      newPrice: 2399,
    },
    {
      title: "Trail Master Poles",
      description: "Lightweight carbon fiber trekking poles with ergonomic cork handles.",
      category: "trekking-accessories",
      trending: true,
      coverImage: "trek3.webp",
      oldPrice: 1599,
      newPrice: 1299,
    },
    {
      title: "Wilderness Survival Kit",
      description: "Comprehensive emergency kit for serious hikers and trekkers.",
      category: "trekking-accessories",
      trending: false,
      coverImage: "trek4.webp",
      oldPrice: 2299,
      newPrice: 1899,
    },
    {
      title: "Peak Comfort Sleeping Bag",
      description: "Lightweight, compact sleeping bag rated for extreme cold conditions.",
      category: "trekking-accessories",
      trending: true,
      coverImage: "trek5.webp",
      oldPrice: 3999,
      newPrice: 3499,
    }
];

const adminUsername = "admin@gmail.com"; // Admin username you want
const adminPassword = "adminPassword"; // Admin password you want

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");

    // Check if an admin already exists
    const adminExists = await User.findOne({ username: adminUsername });
    if (!adminExists) {
      // If admin doesn't exist, create a new admin
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      const adminUser = new User({
        username: adminUsername,
        password: hashedPassword,
        role: "admin",
      });

      await adminUser.save();
      console.log("Admin user created successfully!");
    } else {
      console.log("Admin user already exists");
    }

    // Delete existing data (optional, for a fresh start)
    await Bag.deleteMany({});
    console.log("Existing bag data cleared");

    // Insert new bag data
    await Bag.insertMany(bags);
    console.log("Bag data seeded successfully!");

    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
};

seedData();
