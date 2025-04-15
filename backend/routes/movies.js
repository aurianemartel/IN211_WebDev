import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
    console.log("Current : get api/movies");
    res.json(null);
});

router.post('/new', function (req, res) {
    const { titre, date } = req.body;
    console.log(req.body);
    res.json({ message: "OK" })
});


export default router;
