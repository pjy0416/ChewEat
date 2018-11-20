import express from 'express';
import {community} from './controller';

let router = express.Router();

router.get('/:id', (req, res) => {
    community(req, res, req.params.id);
});

module.exports = router;