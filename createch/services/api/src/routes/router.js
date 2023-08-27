import {Router} from "express";
const router = Router();

// Default bitmap for example
let bitmap = [
    { x: 1,  y: 1, r: 0, g: 0,  b: 0 },
    { x: 2,  y: 1, r: 0, g: 0,  b: 0 },
    { x: 3,  y: 1, r: 0, g: 0,  b: 0 },
];

router.get("/", (req, res) => {
    res.status(200).json({ status: "API is online!"});
});

router
    .post('/bitmap', (req, res) => {
        bitmap = req.body.bitmap;
    })
    .get("/bitmap", (req, res) => {
        res.status(200).json({ status: "Success", data: { bitmap: bitmap } });
    });

export default router;