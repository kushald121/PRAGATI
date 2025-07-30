// src/hooks/useSubmitForm.js
import { useState } from "react";

const useSubmitContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const submitForm = async (url, data) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

    console.log(data);

      if (!res.ok) {
        throw new Error(json.message || "Submission failed");
      }

      setResponse(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading, response, error };
};

export default useSubmitContactForm;
