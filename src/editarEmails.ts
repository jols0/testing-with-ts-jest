import { contactos, Contacto } from "../src/contactos";

const editarEmails = (_ids: number, nuevosEmails: string) => {
     contactos.forEach(contacto => {
        if (contacto.id === _ids) {

            contacto.email = nuevosEmails
        }
    })
    return contactos
}

export { editarEmails };