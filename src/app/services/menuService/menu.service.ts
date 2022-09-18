import { Injectable } from '@angular/core';
import *  as Cakes from 'src/app/Data/Cakes';
import { MenuItem } from 'src/app/model/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  CreateMenu() : MenuItem[] {
    return [
      Cakes.ChocolateCake,
      Cakes.VanillaCake,
      Cakes.LemonCake,
      Cakes.CaramelCake
    ]
  }

  GetFavouriteCakes() : MenuItem[] {
    return [
      Cakes.VanillaCake,
      Cakes.RibbonCake,
      Cakes.LemonCake,
      Cakes.CoffeeCake,
    ]
  }

  GetFavouriteCakesWithImage() : MenuItem[] {
    return [
        Cakes.ChocolateCake,
        Cakes.CaramelCake,
        Cakes.PassionfruitCake
    ]
  }


  GetSignatureCakes() : MenuItem[] {
    return [
      Cakes.RedVelvetCake,
      Cakes.DarkChocolateRasberryCake,
    ]
  }

  GetSignatureCakesWithImage() : MenuItem[] {
    return [
        Cakes.PistachioCake,
        Cakes.HazelnutCake,
        Cakes.WhiteChocolateRasberryCake,
        Cakes.BattenbergCake
    ]
  }

  GetDessertCakes() : MenuItem[]{
    return [
      Cakes.TiramasuCake,
      Cakes.DateCake,
      Cakes.CheeseCake
    ]
  }

  GetDessertCakesWithImage() : MenuItem[] {
    return [
        Cakes.FerreroRocherMouseCake
    ]
  }

  GetCakeSlabs() : MenuItem[]{
    return [];
  }

  GetCupCakes(): MenuItem[]{
    return [];
  }
}
