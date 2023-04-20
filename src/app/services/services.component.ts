import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';

/**
 * Componente que representa los servicios disponibles.
 * @export
 * @class ServicesComponent
 */
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

/**
 * Servicio que maneja la información de las herramientas disponibles.
 * @export
 * @class ServicesComponent
 */
@Injectable()
export class ServicesComponent {

  /**
   * Arreglo que contiene todas las herramientas disponibles.
   * @private
   * @type {Tools[]}
   */
  private tools:Tools[] = [
    {
      name: 'Herramienta 1',
      imageURL: 'https://homecenterco.scene7.com/is/image/SodimacCO/97957',
      brand: new Brand('Marca 1'),
      description: 'Descripción de la herramienta 1',
    },
    {
      name: 'Herramienta 2',
      imageURL: 'assets/tool-hammer.png',
      brand: new Brand('Marca 2'),
      description: 'Descripción de la herramienta 2',
    },
    {
      name: 'Herramienta 3',
      imageURL: 'https://via.placeholder.com/300x200',
      brand: new Brand('Marca 3'),
      description: 'Descripción de la herramienta 3',
    },
    {
      name: 'Herramienta 4',
      imageURL: 'https://via.placeholder.com/300x200',
      brand: new Brand('Marca 4'),
      description: 'Descripción de la herramienta 4',
    }
];

  constructor() {}

  /**
   * Método que retorna todas las herramientas disponibles.
   * @returns {Tools[]} Arreglo con todas las herramientas disponibles.
   */
  getAllTools():Tools[] {
    return this.tools;
  }

  /**
   * Método que retorna una herramienta en particular.
   * @param {number} idx Índice de la herramienta a obtener.
   * @returns {Tools} Herramienta que se desea obtener.
   */
  getTool (idx: number): Tools {
    return this.tools[idx];
  }

  /**
   * Método que busca las herramientas que contengan un término específico.
   * @param {string} term Término de búsqueda.
   * @returns {Tools[]} Arreglo con las herramientas que contienen el término de búsqueda.
   */
  searchTools(term:string):Tools[] {
    let toolsArr: Tools[] = [];
    term = term.toLowerCase();

    for (let t of this.tools) {
      let name = t.name.toLowerCase();
      let brand = t.brand.name.toLowerCase();
      if (name.indexOf(term) >= 0 || brand.indexOf(term) >= 0) {
        toolsArr.push(t);
      }
    }

    return toolsArr
  }
}

/**
 * Interfaz que define la estructura de una herramienta.
 * @interface Tools
 */
export interface Tools {
  name: string;
  imageURL: string;
  brand: Brand;
  description: string;
};
