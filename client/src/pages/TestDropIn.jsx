import React, { useEffect, useState } from "react";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";

const TestDropIn = () => {
  const [clientToken, setClientToken] = useState(null);
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const { data } = await axios.get("/api/v1/product/braintree/token");
        console.log("✅ Received Token:", data?.clientToken);
        setClientToken(data?.clientToken);
      } catch (err) {
        console.error("❌ Error getting client token", err);
      }
    };

    getToken();
  }, []);

  const handlePayment = async () => {
    try {
      const { nonce } = await instance.requestPaymentMethod();
      console.log("💳 Nonce received:", nonce);
    } catch (err) {
      console.error("❌ Payment error:", err);
    }
  };

  return (
    <div className="container mt-5">
      <h1>🧪 DropIn Test</h1>
      {clientToken ? (
        <>
          <DropIn
            options={{
              authorization: clientToken,
              paypal: { flow: "vault" },
            }}
            onInstance={(instance) => {
              console.log("✅ DropIn instance set:", instance);
              setInstance(instance);
            }}
          />
          <button
            className="btn btn-primary mt-3"
            disabled={!instance}
            onClick={handlePayment}
          >
            Make Test Payment
          </button>
        </>
      ) : (
        <p>Loading Braintree...</p>
      )}
    </div>
  );
};

export default TestDropIn;
