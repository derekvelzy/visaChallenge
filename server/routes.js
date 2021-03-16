const router = require('express').Router();
const model = require('../db/model.js');

// routes
router.get('/get', (req, res) => {
  model.get((err, results) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(results);
    }
  })
});

router.post('/post', (req, res) => {
  model.post(req.body, (err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(200);
    }
  })
});

router.delete('/delete', (req, res) => {
  console.log(req.body);
  model.delete(req.body, (err, response) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(200);
    }
  })
});

router.patch('/patch', (req, res) => {
  model.patch(req.body, (err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(200);
    }
  })
});

module.exports = router;
