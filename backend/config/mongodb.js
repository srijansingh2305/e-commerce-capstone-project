// import mongoose from "mongoose";
// import require from "require";

// // // const connectDB = async () => {

// // //     mongoose.connection.on('connected',() => {
// // //         console.log("DB Connected");
// // //     })

// // //     await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)

// // // }

// // export default connectDB;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://srijansingh2305:<db_password>@cluster0.mwhv4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// const connectDB = async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// export default connectDB


import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://vercel-admin-user:vercel1234@cluster0.mwhv4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectDB = async () => {
  try {
    // Connect the client to the server
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    setTimeout(() => {
        client.close();
    }, 2500);
    // Ensures that the client will close when you finish/error
    
  }
};

// Uncomment the line below to test the connection during development
connectDB().catch(console.error);

export default connectDB;
