import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { Store } from "../Store";

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || "PayPal"
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethodName });
    localStorage.setItem("paymentMethod", paymentMethodName);
    var login = localStorage.getItem("islogged");
    if (!login) {
      toast("Please Login", { type: "error" });
      return;
    } else {
      navigate("/placeorder");
    }
  };
  return (
    <div>
      <div className="container small-container">
        <h1 className="my-3 text-light">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethodName === "PayPal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-light"
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === "Stripe"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-light"
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="MercadoPago"
              label="Mercado Pago"
              value="MercadoPago"
              checked={paymentMethodName === "MercadoPago"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-light"
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="PagoFacil"
              label="Pago Fácil"
              value="PagoFacil"
              checked={paymentMethodName === "PagoFacil"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-light"
            />
          </div>
          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
