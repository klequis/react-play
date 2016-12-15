import React from 'react';
import Auto01 from "./Auto01";
import Auto02 from "./Auto02";
import Auto03 from "./Auto03";
import Auto04 from "./Auto04";

const Home = function home() {
    return(
      <section>
        <h1>Sample project: react-play.props.01</h1>
        <h2>You can use the same component multiple times</h2><hr></hr>
        <Auto01 make="Toyota" />
        <Auto01 make="Mazda" />
        <Auto01 make="Infiniti" />
        <h2>You can pass multiple variables</h2><hr></hr>
        <Auto02 make="Toyota" model="Highlander" type="SUV" />
        <h2>You can psss arrays and objects</h2><hr></hr>
        <Auto03 car={{make: "Inifinti", model: "Q60", type: "Coupe"}} />
        <Auto04 clientName={["Infiniti", "Q60", "Coupe"]} />
      </section>
    );
  }

export default Home;
