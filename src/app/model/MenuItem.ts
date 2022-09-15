import { FoodType } from "./FoodTypeEnum";

export class MenuItem { 
    name : string;
    description?: string;
    price? : number;
    imageUrl? : string;
    shouldDisplay? : boolean = true;
    type? : FoodType;

    constructor(name : string, description : string  = "yum", price : number, imageUrl : string, shouldDisplay : boolean = false, type: FoodType = FoodType.Cake){
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.shouldDisplay = shouldDisplay;
        this.type = type;
    }
}