const fs = require("fs");
const tourData = JSON.parse(fs.readFileSync(`${__dirname}/../public/data/tours.json`,'utf-8'));

exports.getAllTours = (req,res)=>{
    res.status(200).json({
        'list-size':tourData.length,
        'tours':tourData
    })
};
exports.insertTours=(req,res)=>{
    const tourId = tourData[tourData.length-1].tourId +1;
    const newTour = Object.assign({"tourId":tourId},req.body);
    tourData.push(newTour);
    fs.writeFile(`${__dirname}/public/data/tours.json`,JSON.stringify(tourData),err=>{
        console.log("file return successfully");
    })
    res.status(201).json({
        'operation':'success',
        'tourData':newTour
    });
};
exports.getTourById= (req,res)=>{
    const tourId = req.params.tourId;
    const tour = tourData.find(el => el.tourId === tourId);
    if(tour != null)
        res.status(200).json({
            tour
        })
    else
        res.status(400).send("Invalid tourId")
};