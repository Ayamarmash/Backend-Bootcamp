import express from "express";
import { body, validationResult } from "express-validator";

const app = express();
app.use(express.json())

const operations = ['+', '-', '*', '/']
app.post("/calculate", 
[
    body('x').exists().withMessage("Please insert x value").isInt().withMessage("Invalid value"),
    body('y').exists().withMessage("Please insert y value").isInt().withMessage("Invalid value"),
    body('operation').exists().withMessage("Please insert an operation").bail().isIn(operations).withMessage("invalid operation")
]
,(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) res.status(422).jsonp(errors.array())
    const operation = req.body.operation;
    const firstNum = req.body.x;
    const secondNum = req.body.y;
    let result = 0;
    if(operation === "+") result = (firstNum + secondNum)
    if(operation === "-") result = (firstNum - secondNum)
    if(operation === "*") result = (firstNum * secondNum)
    if(operation === "/") result = (firstNum / secondNum)
    res.send({"Result" : result})
})


app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);