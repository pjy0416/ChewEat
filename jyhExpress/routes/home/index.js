import express from 'express';
import path from 'path';

let router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

router.get('/css/chunk-vendors.a9117b99.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/css', 'chunk-vendors.a9117b99.css'));
});

router.get('/css/app.e34ca2a1.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/css', 'app.e34ca2a1.css'));
});

router.get('/js/chunk-vendors.5260e2df.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/js', 'chunk-vendors.5260e2df.js'));
});

router.get('/js/app.9f0fb676.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/js', 'app.9f0fb676.js'));
});

router.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'favicon.ico'));
});

router.get('/js/app.9f0fb676.js.map' , (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/js', 'app.9f0fb676.js.map'));
});

router.get('/js/chunk-vendors.5260e2df.js.map', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/js', 'chunk-vendors.5260e2df.js.map'));
});

module.exports = router;