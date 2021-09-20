import styled from "styled-components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "../PaymentForm/PaymentForm";

const StripePaymentGateway = () => {
  const PUBLIC_KEY = "pk_test_51JbnlbHIe5PAtemOzeZpQObJwT0G4mVw77iaWSVU4enN0ZVjtYJYk836bKWdGnv2TU643kixoIlAbJjX4vkJMbWc00lVgyrvDw";

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
