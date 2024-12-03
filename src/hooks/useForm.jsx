import { useEffect, useMemo, useState } from "react";

export const useForm = (initForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  const onInputChange = (event) => {
    const { target } = event;
    const { name, value } = target; // "name" reference of input

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => setFormState(initForm);

  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  const isFormValid = useMemo(() => {
    for (const textValid of Object.keys(formValidation)) {
      if (formValidation[textValid] !== null) return false;
    }
    return true;
  }, [formValidation]);

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};
