require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const AWS = require('aws-sdk')

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (e) => {
  console.log(e);
  try {
    console.log(`EVENT: ${JSON.stringify(e)}`);
    const { amount } = JSON.parse(e.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    return {
      statusCode: 200,
      // Uncomment below to enable CORS requests
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      },
      body: JSON.stringify({ paymentIntent }),
    };
  } catch(err) {
    console.log(err);
    return {
      statusCode: 400,
      body: JSON.stringify({ err }),
    };
  }

};
