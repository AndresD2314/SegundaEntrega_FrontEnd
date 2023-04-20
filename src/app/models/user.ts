/**
 * Clase que representa a un usuario.
 */
export class User {

  /**
   * Nombre del usuario.
   */
  name: string;

  /**
   * Contraseña del usuario.
   */
  password: string;

  /**
   * Constructor de la clase User.
   *
   * @param name Nombre del usuario.
   * @param password Contraseña del usuario.
   */
  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }

}
