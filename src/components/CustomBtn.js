import * as React from "react";
import Button from "@mui/material/Button";

export function CustomBtn(props) {
  return (
    <Button variant="contained" onClick={() => console.log("hi")}>
      {props.txt}
    </Button>
  );
}
