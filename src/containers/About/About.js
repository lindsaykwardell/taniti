import React from "react";
import { Jumbotron, Container, Card, CardImg } from "reactstrap";
import placeholder from "../../placeholder.jpg";

export default function Home() {
  return (
    <div>
      <Jumbotron
        style={{ height: "400px", background: `url(${placeholder})` }}
      />
      <Container>
        <h1>About Taniti</h1>
        <Card className="float-left m-3" style={{ width: "175px" }}>
          <CardImg src={placeholder} alt="Placeholder" />
        </Card>
        <p style={{fontSize: "1.3rem"}}>
          Taniti is a small, tropical island in the Pacific. While the island
          has an area of less than 500 square miles, the terrain is varied and
          includes both sandy and rocky beaches, a small but safe harbor, lush
          tropical rainforests, and a mountainous interior that includes a
          small, active volcano. Taniti has an indigenous population of about
          20,000. Until a recent increase in tourism, most the Tanitian economy
          was dominated by fishing or agriculture.
        </p>
        <div style={{clear: "both"}}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Q: What voltage are the power outlets? <br />
            A: Power outlets are 120 volts (the same as in the United States)
          </p>
          <p>
            Q: What is the drinking age?
            <br />
            A: The drinking age on Taniti is 18, but it is not strictly enforced.
          </p>
          <p>
            Q: When can alcohol be purchased?
            <br />
            A: Alcohol is not allowed to be served or sold between the hours of
            midnight at 9:00 AM
          </p>
          <p>
            Q: Is English commonly spoken?
            <br />
            A: Many younger Tanitians speak fluent English. Very little English is
            spoken in rural areas, especially by the older residents.
          </p>
          <p>
            Q: What health services are available?
            <br />
            A: There is one hospital and several clinics. The hospital has many
            multilingual employees.
          </p>
          <p>
            Q: What is the crime rate?
            <br />
            A: Violent crime is very rare on Taniti, but as tourism increases,
            there are more reports of pickpocketing and other petty crimes.
          </p>
          <p>
            Q: Are there any local holidays to plan around? <br />
            A: Taniti enjoys a large number of national holidays, and many tourist
            attractions and restaurants will be closed on holidays, so visitors
            should plan accordingly.
          </p>
          <p>
            Q: What currency is used?
            <br />
            A: Taniti uses the U.S. dollar as its currency, but many businesses
            will also accept euros and yen. Several banks facilitate currency
            exchange, and many businesses accept major credit cards.
          </p>
        </div>
      </Container>
    </div>
  );
}
