//GLOBALS
const express = require('express');
const router = express.Router();
const Action = require('./actionModel.js');

//FULL CRUD
/* GET: /api/actions/ */
//Tested
router.get('/', async (req, res) => {
    try {
        const actions = await Action.get();
        res.status(200).json(actions);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error getting all actions!'
        })
    }
})

/* POST: /api/actions/ */
//Tested
router.post('/', async (req, res) => {
    try {
        const newAction = await Action.insert(req.body);
        res.status(200).json(newAction);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error creating new action!'
        })
    }
})

/* PUT: /api/actions/:id */
//Tested
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const update = await Action.update(id, req.body);
        res.status(200).json(update);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: `Error updating action with ID: ${id}`
        })
    }
})

/* DELETE: /api/actions/id */
//Tested
router.delete('/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const remove = await Action.remove(id);
        res.status(200).json(remove);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: `Error deleteing action with ID: ${id}`
        })
    }
})

module.exports = router;