// const controllers = require('../controllers');
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('index',
    {title: "Cubicle Workshop"});
});

router.get('/about', (req, res) => {
    res.render('about', {title: "About | Cubicle"});
});

router.get('/create', (req, res) => {
    res.render('create', {
        title: "Create | Cubilce"
    });
});

router.get('/details:id', (req, res) => {
    res.render('details', {
        title: "Details | Cubicle"
    });
});

router.get('*', (req, res) => {
    res.render('404', { title: "Page Not Found"});
});

module.exports = router;

