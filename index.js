"use client";
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tl2ww1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const projectsCollection = client.db("PortfolioUser").collection("Projects");

        app.get('/projects', async (req, res) => {
            try {
                const query = {};
                const allProjects = await projectsCollection.find(query).toArray();
                res.send(allProjects);
            } catch (error) {
                console.error("Error fetching projects:", error);
                res.status(500).send("Internal Server Error");
            }
        });

        // app.get('/project/:id', async (req, res) => {
        //     try {
        //         const { id } = req.params;

        //         if (!ObjectId.isValid(id)) {
        //             return res.status(400).json({ error: 'Invalid ID format' });
        //         }

        //         const filter = { _id: new ObjectId(id) };
        //         const result = await projectsCollection.findOne(filter);

        //         if (!result) {
        //             return res.status(404).json({ error: 'Project not found' });
        //         }
        //         res.send(result);
        //     } catch (error) {
        //         console.error('Error fetching project:', error);
        //         res.status(500).json({ error: 'Internal Server Error' });
        //     }
        // });


        app.get('/projects', async (req, res) => {
            console.log("GET /projects route hit");  // Log route call
            try {
                const query = {};
                const allProjects = await projectsCollection.find(query).toArray();
                console.log("Projects fetched:", allProjects);  // Log fetched data
                res.send(allProjects);
            } catch (error) {
                console.error("Error fetching projects:", error);
                res.status(500).send("Internal Server Error");
            }
        });
        


    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("KAISER TANVEER'S Portfolio server is running...");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
