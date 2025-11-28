const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);





exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
try {
  console.log("Sending Stripe API key:", process.env.STRIPE_API_KEY);

    if (!process.env.STRIPE_API_KEY) {
          console.error("Stripe API key not found in .env");
      return res.status(500).json({ message: "Stripe API key not set" });
    }

    res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
    
  } catch (error) {
    console.error("Stripe API key error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});