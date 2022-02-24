import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import {
  decrement,
  DECREMENT_COUNTER,
  increment,
  INCREMENT_COUNTER,
} from "./testReducer";

export default function Sandbox() {
  const data = useSelector((state) => state.test.data);
  const dispath = useDispatch();
  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button
        onClick={() => dispath(increment(20))}
        content="Increment"
        color="green"
      />
      <Button
        onClick={() => dispath(decrement(10))}
        content="Decrement"
        color="red"
      />
    </>
  );
}
