import { Contacto, contactos} from "../src/contactos";
import { editarEmails } from "../src/editarEmails";

describe("editar emails", () => {
    test("editar los emails para actualizar sus datos de contacto.", () => {
      const idAEditar = 1;
      const nuevosEmails = "eve2@gmail.com";
      const actualizado: Contacto[] = editarEmails(idAEditar, nuevosEmails);
      const emailActualizado = actualizado[1];
      expect(emailActualizado.email).toBe(nuevosEmails);
    });
});