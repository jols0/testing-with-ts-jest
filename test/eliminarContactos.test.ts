import { Contacto, contactos } from "../src/contactos";
import { eliminarContactos } from "../src/eliminarContactos";
describe("eliminarContactos", () => {
  test("deberia de poder eliminar contactos de mi lista para reducir el tamaño de la misma", () => {
    const cantidadInicial = contactos.length;
    const contactosDespuesDeEliminar: Contacto[] = eliminarContactos([1]);
    expect(contactosDespuesDeEliminar).toHaveLength(cantidadInicial - 1);
  });
});

describe("eliminarContactos", () => {
  test("deberia de poder eliminar dos contactos", () => {
    const cantidadInicial = contactos.length;
    const contactosDespuesDeEliminar: Contacto[] = eliminarContactos([1, 3]);
    expect(contactosDespuesDeEliminar).toHaveLength(cantidadInicial - 2);
  });
});
