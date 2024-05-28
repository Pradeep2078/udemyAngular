import React, { useEffect, useState } from "react";
import {Navbar} from "./components/Navbar"
import {Filters} from "./components/Filters"
import {Cards} from "./components/Cards"

const App = () => {

  return <div>
      <Navbar />
      <Filters />
      <Cards />
  </div>;
};

export default App;
