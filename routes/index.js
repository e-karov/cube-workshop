const { Router } = require('express');
const { getAllCubes, getCube } = require('../controllers/cubes.js');
const Cube = require('../models/cube.js');

const router = Router();

router.get('/', async (req, res) => {

    const cubes = await getAllCubes();
    res.render('index',
        {
            title: "Cubicle Workshop",
            cubes
        });
    
});

router.get('/about', (req, res) => {
    res.render('about', {title: "About | Cubicle"});
});

router.get('/create', (req, res) => {
    res.render('create', {
        title: "Create | Cubilce"
    });
});

router.post('/create', (req, res) => {
    console.log("req.body:", req.body);
    const {
        name,
        description,
        imageUrl,
        difficultyLevel
    } = req.body;

    const cube = new Cube({ name, description, imageUrl, difficulty: difficultyLevel });

    cube.save((err) => {
        if (err) {
            console.error(err);
            throw err;
        }
        res.redirect('/');
    });
});

router.get('/create/accessory', (req, res) => {
    res.render('createAccessory', {
        title: "Cubicle | Create Accessory"
    });
});

router.post('/create/accessory', (req, res) => {
})

router.get('/details/:id', async (req, res) => {

    const cube = await getCube(req.params.id);
    res.render('details', {
        title: "Details | Cubicle",
        ...cube
    });
});

router.get('*', (req, res) => {
    res.render('404', { title: "Page Not Found"});
});

module.exports = router;

