import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menuPrincipal: { defaultOptions: any[], accessLink: any[] } = { defaultOptions: [], accessLink: [] }
  public opciones!: any[];

  constructor() { }

  ngOnInit(): void{

    this.menuPrincipal.defaultOptions = [
      { name: 'Canciones', icon: 'uil-music', router: './canciones' },
      { name: 'Buscar', icon: 'uil-search', router: './historial' },
      { name: 'Biblioteca', icon: 'uil-chart', router: './favoritos' }
    ];

    this.menuPrincipal.accessLink = [
      { name: 'Crear lista', icon: 'uil-plus-square'},
      { name: 'Canciones que te gustan', icon: 'uil-heart-medical' }
    ];

    this.opciones = [
      { name: 'Mi lista °1', router: './' },
      { name: 'Mi lista °2', router: './' },
      { name: 'Mi lista °3', router: './' },
      { name: 'Mi lista °4', router: './' }
    ]

  }

}
