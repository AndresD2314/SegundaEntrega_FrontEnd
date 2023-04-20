import { Injectable } from '@angular/core'


@Injectable()
export class ToolsService {

    private users:User[] = [
        {
          name: 'Herramienta 1',
          password: 'Descripción de la herramienta 3'

        },
        {
          name: 'Herramienta 2',
          password: 'Descripción de la herramienta 3'

        },
        {
          name: 'Herramienta 3',
          password: 'Descripción de la herramienta 3'
        }
    ];

    constructor() {
        console.log("Servicio listo!");
    }

    getUsers():User[]{
        return this.users;
    }
}

export interface User {
    name: string
    password: string
}
