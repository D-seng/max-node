const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  // console.log('In the other middleware.');
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name="title" /><button type="submit">Add product</button></form>',
  );
});

router.post('/product', (req, res, next) => {
  console.log(req.body);

  res.send('<p>product added</p>');
  // res.redirect('/');
});

module.exports = router;
