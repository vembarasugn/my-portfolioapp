import React from "react";
import {InlineWidget} from "react-calendly";

function Calendly(){
  return (
      <div className="App">
      <InlineWidget url="https://calendly.com/vembarasan_n" />
    </div>
  );
};

export default Calendly;