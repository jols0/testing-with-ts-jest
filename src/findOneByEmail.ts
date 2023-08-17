import { Contacto, contactos } from "./contactos";

const findOneByEmail = (email: string): Contacto => {
  return contactos.filter((contacto) => contacto.email === email)[0];
};

export { findOneByEmail };
