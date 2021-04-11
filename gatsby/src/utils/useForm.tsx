import * as React from "react";
import { useState } from "react";

const useForm = (defaults) => {
  const [values, setValues] = useState(defaults);
  function updateValue(e) {
    // check if its a number and convert
    let { value } = e.target;
    if (e.target.type === "number") {
      value = parseInt(value);
    }

    setValues({
      // copy the existing value into it
      ...values,
      // update the new value that changed
      [e.target.name]: e.target.value,
    });
  }

  return { values, updateValue };
};

export default useForm;
