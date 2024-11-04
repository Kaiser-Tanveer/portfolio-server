const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projectsCollection = req.client.db('PortfolioUser').collection('Projects');
        const projects = await projectsCollection.find({}).toArray();
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a single project by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const projectsCollection = req.client.db('PortfolioUser').collection('Projects');
        const project = await projectsCollection.findOne({ _id: new ObjectId(id) });
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
