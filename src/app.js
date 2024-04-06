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
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pinecone"];
  let action = [
    "punched my",
    "threw my",
    "crumbled up my",
    "stole my",
    "bit my",
  ];
  let posession = ["homework", "toe", "car", "shoe"];
  let where = ["in the closet", "under the bed", "in the pool"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let posessionIndex = Math.floor(Math.random() * posession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    posession[posessionIndex] +
    " " +
    where[whereIndex]
  );
};
