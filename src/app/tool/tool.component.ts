import { Component, OnInit } from '@angular/core';
import { ServicesComponent, Tools } from '../services/services.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
/**
 * El componente ToolComponent se encarga de mostrar la lista de todas las herramientas disponibles
 * en la aplicación y permitir la navegación hacia la vista detallada de una herramienta en particular.
 */
export class ToolComponent implements OnInit {
  /**
   * Una lista de objetos "Tools" que representan las herramientas disponibles en la aplicación.
   */
  listOfTools:Tools[] = []

  /**
   * Constructor del componente ToolComponent.
   * @param _toolService Servicio que maneja las operaciones relacionadas con las herramientas.
   * @param router Servicio de enrutamiento para la navegación entre vistas.
   */
  constructor ( private _toolService:ServicesComponent, private router:Router) {
  }

  /**
   * Método que se ejecuta al inicializarse el componente.
   * Obtiene la lista de herramientas disponibles y la asigna a la propiedad "listOfTools".
   */
  ngOnInit() {
    this.listOfTools = this._toolService.getAllTools();
  }

  /**
   * Método que se encarga de navegar hacia la vista detallada de una herramienta en particular.
   * @param idx Índice de la herramienta seleccionada dentro de la lista de herramientas.
   */
  seeTool(idx: number) {
    this.router.navigate(['/tool', idx]);
  }
}
