"use strict"

var express = require('express');
var router = express.Router();
var braintree = require('braintree');
const { response } = require('express');

var gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: 'yq5kf6k84xwzpbpc',
    publicKey: 'wqh7yt45tn5pm7mc',
    privateKey: 'd14110c78737c97347340770ede91d8d'
});


router.get("/", function(req, res) {

    gateway.clientToken.generate({}, function(err, response){
        res.sendFile("/views/index.html", {root: "/home/luca/Skole/Praktik/webshop"});
    }
    );
});

router.post('/', function(req, res, next) {


  // Use the payment method nonce here
  var nonceFromTheClient = req.body.paymentMethodNonce;
  // Create a new transaction for $10
  var newTransaction = gateway.transaction.sale({
    amount: '10.00',
    paymentMethodNonce: nonceFromTheClient,
    options: {
      // This option requests the funds from the transaction
      // once it has been authorized successfully
      submitForSettlement: true
    }
  }, function(error, result) {
      if (result) {
          res.sendFile(__dirname + "/views/index.html");
      } else {
        res.status(500).send(error);
      }
  });
});

module.exports = router;