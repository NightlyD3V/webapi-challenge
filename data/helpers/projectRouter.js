//GLOBALS
const express = require('express');
const router = express.Router();
const Project = require('./projectModel.js');

//FULL CRUD
/* GET: /api/projects/ */
//Tested
router.get('/', async (req, res) => {
    try {
        const projects = await Project.get();
        res.status(200).json(projects);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error getting all projects'
        })
    }
})

/* GET: /api/projects/actions/:id */
//Tested
router.get('/actions/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const actions = await Project.getProjectActions(id);
        res.status(200).json(actions);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: `Error getting project actions with ID: ${id}`
        })
    }
})

/* POST: /api/projects */
//Tested
router.post('/', async (req, res) => {
    try {
        const projects = await Project.insert(req.body);
        res.status(200).json(projects);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error creating new project!'
        })
    }
})

/* PUT: /api/projects/:id */
//Tested
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const update = await Project.update(id, req.body);
        res.status(200).json(update);
        next();
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: `Error updating that project with ID: ${id}`
        })
    }
})

/* DELETE: /api/projects */
//Tested
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const remove = await Project.remove(id);
        res.status(200).json(remove);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: `Error deleting project with the ID: ${id}`
        })
    }
})

module.exports = router;