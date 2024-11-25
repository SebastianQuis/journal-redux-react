import { useState } from "react";

export const useForm = (initForm = {}) => {
  const [formState, setFormState] = useState(initForm);

  const onInputChange = (event) => {
    const { target } = event;
    const { name, value } = target; // "name" reference of input

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => setFormState(initForm);

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
