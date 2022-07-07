import { FoodType } from "./FoodTypeEnum";

export class MenuItem { 
    name : string;
    description: string;
    price : number;
    imageUrl : string;
    shouldDisplay : boolean;
    type : FoodType;

    constructor( name : string, description : string, price : number, imageUrl : string, shouldDisplay : boolean, type: FoodType){
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.shouldDisplay = shouldDisplay;
        this.type = type;
    }
}