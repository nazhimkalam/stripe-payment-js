import styled from "styled-components";
import StripePaymentGateway from "./components/StripePaymentGateway/StripePaymentGateway";
import './App.css';

const App = () => {
  return (
    <Container>
      <h2>Stripe payment checkout</h2>
      <StripePaymentGateway />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  > h2 {
    text-transform: uppercase;
    margin: 2pc;
  }
`;
