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
  let who = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pinecone"];
  let action = [
    "punched my",
    "threw my",
    "crumbled up my",
    "stole my",
    "bit my",
  ];
  let what = ["homework", "toe", "car", "shoe"];
  let where = ["in the closet", "under the bed", "in the pool"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    who[whoIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    where[whereIndex]
  );
};
