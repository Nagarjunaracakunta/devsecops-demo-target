// Demo file for the code analyzer to scan. Intentionally vulnerable.
function chargeCustomer(amount, customerId) {
  const stripeApiKey = process.env.STRIPE_API_KEY; // now sourced from environment
  console.log(`Charging ${customerId} amount ${amount}`); // no longer logs the secret
  return { status: "charged", amount };
}

module.exports = { chargeCustomer };
