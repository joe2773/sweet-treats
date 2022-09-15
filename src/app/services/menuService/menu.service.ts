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
      Cakes.ChocolateCake,
      Cakes.VanillaCake,
      Cakes.RibbonCake,
      Cakes.CaramelCake,
      Cakes.LemonCake,
      Cakes.CoffeeCake,
      Cakes.PassionfruitCake
    ]
  }

  GetSignatureCakes() : MenuItem[] {
    return [
      Cakes.PistachioCake,
      Cakes.HazelnutCake,
      Cakes.RedVelvetCake,
      Cakes.WhiteChocolateRasberryCake,
      Cakes.DarkChocolateRasberryCake,
      Cakes.BattenbergCake
    ]
  }

  GetDessertCakes() : MenuItem[]{
    return [
      Cakes.FerreroRocherMouseCake,
      Cakes.TiramasuCake,
      Cakes.DateCake,
      Cakes.CheeseCake
    ]
  }

  GetCakeSlabs() : MenuItem[]{
    return [];
  }

  GetCupCakes(): MenuItem[]{
    return [];
  }
}
