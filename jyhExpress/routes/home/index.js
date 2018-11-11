import express from 'express';
import path from 'path';

let router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

router.get('/css/chunk-vendors.a9117b99.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/css', 'chunk-vendors.a9117b99.css'));
});

router.get('/css/app.fa30566d.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/css', 'app.fa30566d.css'));
});

router.get('/js/chunk-vendors.5260e2df.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/js', 'chunk-vendors.5260e2df.js'));
});

router.get('/js/app.68fcabbd.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/js', 'app.68fcabbd.js'));
});

router.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'favicon.ico'));
});

router.get('/js/app.68fcabbd.js.map', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/js', 'app.68fcabbd.js.map'));
});

router.get('/js/chunk-vendors.5260e2df.js.map', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/js', 'chunk-vendors.5260e2df.js.map'));
});

module.exports = router;