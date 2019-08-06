const express = require('express');
const router = express.Router();
const Travel = require('../models/travel.model');
const data = require('../travels.json');

// Get all travels
router.get('/travels', (req, res, next)=> {
  Travel.find({},(err, travels)=> {
    if (err){
      res.send(err);
    } else {
      if(travels.length == 0){
        seedTravels(data.travels);
      }
      res.status(200).json(travels);
    }
  });
});

// Add travel
router.post('/travel', (req, res, next)=> {
  const newTravel = new Travel({
    title: req.body.title,
    agencyName: req.body.agencyName,
    rating: req.body.rating,
    description: req.body.description,
    mealPlan: req.body.mealPlan,
    days: req.body.days,
    ImageUrl: req.body.ImageUrl
  });

  newTravel.save((err, travel)=> {
    if(err){
      res.send('Error has occured');
    }else{
      res.status(201).json(travel);
    }
  });
});

// Get travel by Id
router.get('/travel', (req, res, next)=>{
  Travel.findById( req.param.id, 
  (err, travel) => {
    if (err){
      res.send(err);
    }else{
      res.status(200).json(travel);
    }
  });
});

// seed travels to database
const seedTravels = (travels)=> {
  let done = 0;
  for (let i = 0; i < travels.length; i++) {
    let travel = new Travel(travels[i]);
    travel.save((err, result)=>{
      done++;
      if (done === travels.length) {
        Travel.find({}, (err, response)=> {
            if (err){
              res.send(err);
            } else {
              res.status(200).json(response);
            }
        });
      }
    });
  }
}

module.exports = router;
