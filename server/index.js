import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PythonShell } from "python-shell";

/* run "node index.js" in the server directory. Make sure to change the openAI API key. and make shanges to the 
relative path for the json files. 

*/

PythonShell.run(
  "/Users/lukeleeai/scenario2/server/questions/generatorScript.py",
  null,
  function (err, results) {
    if (err) throw err;
    console.log("finished");
  }
);
