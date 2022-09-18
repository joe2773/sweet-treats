import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menuService/menu.service';
import { MenuItem } from 'src/app/model/MenuItem';

@Component({
  selector: 'app-favourite-cakes',
  templateUrl: './favourite-cakes.component.html',
  styleUrls: ['./favourite-cakes.component.scss']
})
export class FavouriteCakesComponent implements OnInit {
    @Input() public cakes : MenuItem[] = [];
    @Input() public cakesWithImage : MenuItem[] = [];
    constructor(
        private menuService : MenuService
    ) { }

    ngOnInit(): void {

    }

}
