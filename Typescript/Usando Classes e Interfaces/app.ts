//Primeiro Exemplo
let message: string = "Help me, Obi-wWan Kenobi. You're my only hope!" 
console.log(message); 
 
let episode: number = 4 
console.log("This is episode "+ 4); 
episode = episode + 1 
console.log("Next episode is "+episode); 
 
let faviteDroid 
faviteDroid = 'BB-8' 
console.log("My Favorite droid is " + faviteDroid)



// Usando Funcoes
let isEnoughToBeatMF = function (parsecs: number): boolean { 
    return parsecs < 12 
}  
 
let distance = 11 
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon ? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`) 
 
let call = (name: string) => console.log(`Do you copy, ${name}?`) 
call("R2") 
 
function inc (speed: number, inc: number = 1): number { 
    return speed+inc 
} 
 
console.log(`inc (5, 1) = ${inc(5,1)}`) 
console.log(`inc (5) = ${inc(5)}`)

//Usando Classes e Interfaces

class SpaceCraft{


    constructor (public propulsor: string){}

    jumpIntoHyperSpace(){
        console.log(`Entering hyperspace witg ${this.propulsor}`)
    }
}

let ship = new SpaceCraft('hyperDrive')
ship.jumpIntoHyperSpace()

class MilleniumFalcon extends SpaceCraft implements ContainerSchip{

    cargoContainers : number

    constructor(){
        super('hyperDrive')
        this.cargoContainers = 4
    }

    jumpIntoHyperSpace(){
        if (Math.random() >= 0.5){
            super.jumpIntoHyperSpace()
        }else{
           console.log("Failed to jump into hyperspace") 
        }
    }

}


let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperSpace()

interface ContainerSchip{

    cargoContainers: number

}

let goodForTheJob = (ship: ContainerSchip) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob( falcon ) ? 'YES' : 'NO' }`)

