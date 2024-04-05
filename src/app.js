/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector("#ExcuseBtn").addEventListener("click", () => {
    document.querySelector("#excuseLine").innerHTML = generateExcuse();
  });
  console.log("Excuse");
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let who = ["jogger", "racoon", "dog", "driver", "comedian", "pinecone"];
  let action = [
    "punched my",
    "threw my",
    "crumbled up my",
    "stole my",
    "bit my"
  ];
  let what = ["homework", "toe", "car", "shoe"];
  let where = ["in the closet", "under the bed", "in the pool"];

  function selectArrayElement(arrayName, arrayLength) {
    let randomnumber = Math.floor(Math.random() * arrayLength);
    let selectedElement = arrayName[randomNumber];
    return selectedElement;
  }
  let randomPronoun = selectArrayElement(pronoun, pronoun.length);
  let randomWho = selectArrayElement(who, who.length);
  let randomAction = selectArrayElement(action, action.length);
  let randomWhat = selectArrayElement(what, what.length);
  let randomWhere = selectArrayElement(where, where.length);

  let excuse =
    "${randomPronoun} ${randomWho} ${randomAction} ${randomWhat} ${randomWhere}";
  // let pronounIndex = Math.floor(Math.random() * pronoun.length);
  // let whoIndex = Math.floor(Math.random() * who.length);
  // let actionIndex = Math.floor(Math.random() * action.length);
  // let whatIndex = Math.floor(Math.random() * what.length);
  // let whereIndex = Math.floor(Math.random() * where.length);

  // return (
  //   pronoun[pronounIndex] +
  //   " " +
  //   who[whoIndex] +
  //   " " +
  //   action[actionIndex] +
  //   " " +
  //   what[whatIndex] +
  //   " " +
  //   where[whereIndex]
  // );
};
