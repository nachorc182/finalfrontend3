import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.length < 5 || !email.includes("@")) {
      setError("Por favor verifique su información nuevamente");
      setSuccessMessage("");
    } else {
      setError("");
      setSuccessMessage(`Gracias ${fullName}, te contactaremos lo antes posible vía correo electrónico.`);
      setFullName("");
      setEmail("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>

          <input
            type="text"
            value={fullName}
            placeholder="Nombre completo"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>

          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Form;
