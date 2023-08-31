import { contactos } from "../src/contactos";

const eliminarContactos = (idsAEliminar: number[]) => {
  return contactos.filter((contacto) => {
    return !idsAEliminar.includes(contacto.id);
  });
};

export { eliminarContactos };
