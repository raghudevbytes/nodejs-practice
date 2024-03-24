const tourController = require("./controller/TourController")

const express = require("express");
const router = express.Router();

router.param('tourId',(req,res,next,val)=>{
    console.log(`the id is ${val}`);
    next();
})

const checkBody = (req,res,next)=>{
    console.log(req.body);
    const keys = Object.keys(req.body);
    if(keys.includes("tourName"))
        next();
    else
        res.status(400).json({
            msg:"url not found"
        });
}


router.route("/")
      .get(tourController.getAllTours)
      .post(checkBody,tourController.insertTours);
router.get("/:tourId",tourController.getTourById);

module.exports = router;