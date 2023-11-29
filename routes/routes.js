const express = require('express');

const router = express.Router();

const shortenUrlController = require('../controllers/shortenUrl');

router.post("/app/v1/shortenUrl",shortenUrlController.shortenUrl);

router.get("/app/v1/:urlId",shortenUrlController.originalUrl)

// router.get("/app/v1",(req,res,next)=>{
//   res.json({message:"ok"});
// })

module.exports = router;
