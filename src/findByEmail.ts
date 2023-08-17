import { contactos } from "./contactos";

const findByEmail = (email: string) => {
  if (email === "") {
    return contactos;
  } else {
    return contactos.filter((contacto) => {
      return contacto.email.includes(email);
    });
  }
};

export { findByEmail };
