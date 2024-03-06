const output = document.getElementById('output');

// creating const

function HotWheel(name,year,color,numberOfWheels,companyName,collectionName,toyNumber,barcode,CountryMade,noOfDoors,price){
    this.name =name;
    this.year =year;
    this.color= color; 
    this.numberOfWheels = numberOfWheels;  
    this.companyName =companyName
    this.collectionName = collectionName ;
    this.toyNumber = toyNumber;
    this.barcode = barcode;
    this.CountryMade = CountryMade;
    this.noOfDoors = noOfDoors;
    this.price = price;
    this.describe = function(){
        let description =`${this.name} is a HotWheel toy produced by ${this.companyName}.
         It was released in ${this.year} as part of the ${this.collectionName} collection.
          The toy is ${this.color} in color and has ${this.numberOfWheels} wheels. 
          It was manufactured in ${this.CountryMade}. 
          It has ${this.noOfDoors} doors and is identified by toy number ${this.toyNumber}
           and barcode ${this.barcode}. The price is ${this.price}.`;
        return  description;
    }

}

const HotWheel1 = new HotWheel("punk Rod",2023,"black and orange",4,"Hot Wheeks","Rod Squad","HRY48",2708412013,"Malasiya",2,2.99)

output.textContent = album2.describe();