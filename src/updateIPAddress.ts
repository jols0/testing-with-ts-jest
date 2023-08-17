import { Contacto, contactos } from "./contactos";

const updateIPAddress = (ip_address: string) => {
  return contactos.filter(
    (contacto) => contacto.ip_address != contacto.ip_address
  );
};

export { updateIPAddress };
