require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (e) => {
  console.log(e);
  try {
    console.log(`EVENT: ${JSON.stringify(e)}`);
    const { formFields, amount } = JSON.parse(e.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      meatdata: {
        email: formFields.accountData.email,
        name: `${formFields.accountData.firstName} ${formFields.accountData.lastName}`,
        phone: formFields.accountData?.phone,
      },
      shipping: {
        name: `${formFields.accountData.firstName} ${formFields.accountData.lastName}`,
        phone: formFields.accountData?.phone,
        address: {
          city: formFields.shippingData.city,
          country: formFields.shippingData.country,
          postal_code: formFields.shippingData.postcode,
          line1: formFields.shippingData.company,
        }
      },
      payment_method_types: ['card'],
      description: 'Manipura order'
    });
    return {
      "statusCode": 200,
      // Uncomment below to enable CORS requests
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      },
      "body": JSON.stringify({ paymentIntent }),
    };
  } catch(err) {
    console.log(err);
    return {
      "statusCode": 400,
      "body": JSON.stringify({ err }),
    };
  }

};
