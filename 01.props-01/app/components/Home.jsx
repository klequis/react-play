import React from 'react';
import Welcome01 from "./Welcome01";
import Welcome02 from "./Welcome02";

const Home = function home() {
    return(
      <section>
        <h1>Sample project: react-play.props</h1>
        <p>This sample project shows you how to create Functional components. See README.md and comments in the code for more information.</p>
        <h2>Welcome01</h2>
        <ul>
          <li>Takes one prop: 'name'</li>
          <li>Below, Welcome01 is used 3 times so it renders 3 times. Look at the code to see this.</li>
        </ul>
        <Welcome01 name="klequis" />
        <Welcome01 name="karl" />
        <Welcome01 name="ecker" />
        <h2>Welcome02</h2>
        <ul>
          <li>Welcome02 takes 3 props: first, last & state</li>
        </ul>
        <Welcome02 first="Karl" last="Ecker" state="California" />
      </section>
    );
  }

export default Home;
