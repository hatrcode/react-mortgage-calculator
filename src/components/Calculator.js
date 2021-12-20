import React, { useState, useEffect, useCallback } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import useSlider from "../utils/useSlider";

const Calculator = () => {
  const [payment, setPayment] = useState(0);
  const purchase = useSlider(0, 1000000, 100, 0, "purchase", "purchase");
  const down = useSlider(0, 1000000, 100, 0, "payment", "payment");
  const time = useSlider(0, 30, 1, 0, "time", "time");
  const interest = useSlider(0, 10, 0.1, 0, "interest", "interest");
  const loan = purchase.value - down.value;

  const r = (interest.value * 0.01) / 12;
  const n = time.value * 12;

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      const monthlyPayment = Math.round(
        loan * [(r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)]
      );
      setPayment(monthlyPayment);
    },
    [loan, n, r]
  );

  useEffect(() => {
    setPayment(0);
  }, [loan, n, r]);

  return (
    <div className="container">
      <Typography variant="h6" component="h1" mb="1.5rem">
        Mortgage calculator
      </Typography>
      <Grid container spacing={4} mb="2rem">
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Purchase price:{" "}
            <span className="info">${purchase.value.toLocaleString()}</span>
          </p>
          <Slider aria-label="Purchase price" {...purchase} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Down payment:{" "}
            <span className="info">${down.value.toLocaleString()}</span>
          </p>
          <Slider aria-label="Down payment" {...down} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Repayment time:{" "}
            <span className="info">
              {time.value} {time.value > 1 ? "years" : "year"}
            </span>
          </p>
          <Slider aria-label="Repayment" {...time} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Interest rate: <span className="info">{interest.value}%</span>
          </p>
          <Slider aria-label="Interest" {...interest} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>Loan amount</p>
          <p>
            <span className="info" style={{ fontSize: "1.2rem" }}>
              ${loan.toLocaleString()}
            </span>
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>Estimated pr. month</p>
          {time.value === 0 || interest.value === 0 ? (
            <p style={{ color: "#eb6059" }}>Please fill in information</p>
          ) : payment < 0 ? (
            <p style={{ color: "#eb6059" }}>
              Down payment should be smaller than the Purchase price!
            </p>
          ) : payment > 0 ? (
            <p>
              <span className="info" style={{ fontSize: "1.2rem" }}>
                ${payment.toLocaleString()}
              </span>
            </p>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
      <Button
        variant="contained"
        onClick={handleClick}
        style={{ textTransform: "none" }}>
        Get a mortage quote
      </Button>
    </div>
  );
};

export default Calculator;
