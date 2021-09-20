import styled from "styled-components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "../PaymentForm/PaymentForm";

const StripePaymentGateway = () => {
  const PUBLIC_KEY = "pk_test_rgWMA3zxjAtwaB6iV8b5W40x";

  const stripeTestPromise = loadStripe(PUBLIC_KEY);

  return (
    <Container>
      <Elements stripe={stripeTestPromise}>
        <PaymentForm />
      </Elements>
    </Container>
  );
};

export default StripePaymentGateway;

const Container = styled.div`
    width: 500px;
`;
