import React from 'react';
import ReactDOM from 'react-dom/client';``

const parent = React.createElement("div", {id: "parent"},
 [ React.createElement("div", {id: "child"},
  [React.createElement("h1",{id:"h1tag"}, "Namaste JavaScript From Vikram Madankar"), 
  React.createElement("h2", {id:"h2tag"}, "I'm h2 tag")]),
  React.createElement("div", {id: "child2"},
  [React.createElement("h1",{id:"h1tag"}, "I'm h1 tag"), 
  React.createElement("h2", {id:"h2tag"}, "I'm h2 tag")])])

console.log(parent); //Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);