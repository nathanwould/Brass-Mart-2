import { useEffect, useState } from "react";

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e: any) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  function resetForm() {
    setInputs(initial);
  };

  function clearForm() {
    const blankSlate = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankSlate);
  };

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
};