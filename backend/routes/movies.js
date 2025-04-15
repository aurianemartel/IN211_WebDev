import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
    console.log("Coucou");
    res.json(null);
});



export default router;
