


const Payment = () => {
  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-3xl"> Please Pay Now</h2>
      
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
