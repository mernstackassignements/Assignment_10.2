/// Javascript code 

// JS Class
class Airplane{
    constructor(name , occupancy , speed){
        if(typeof name != 'string' || name.Length == 0){
            throw 'Invalid Name';
        }

        if(typeof occupancy != 'number' || occupancy < 0 || occupancy > 180){
            throw 'Invalid occupancy';
        }

        if(typeof speed != 'number' || speed < 0 || speed > 900){
            throw 'Invalid Speed';
        }
        this.Name = name;
        this.Capacity = occupancy;
        this.Speed = speed;
    }

    status(){
        return 'Airplane : '+this.Name+' with '+this.Capacity+' occupancy, is moving at '+this.Speed+' km/hr';
    }

    increaseSpeed(speed){
        if(typeof speed != 'number' || (this.Speed+ speed) > 900){
            throw 'Speed cannot cross Max Speed';
        }
        this.Speed+= speed;
    }

    decreaseSpeed(speed){
        if(typeof speed != 'number' || (this.Speed - speed) < 0){
            throw 'Speed cannot be below Min Speed';
        }
        this.Speed -= speed;
    }
}

// Class object
var boeing = new Airplane('Boeing 777',100 , 500);
var rafale = new Airplane('Rafale',2 , 700);
var airbus = new Airplane('Airbus',150 , 400);

console.log(boeing.status());
console.log(rafale.status());
console.log(airbus.status());

boeing.increaseSpeed(200);
rafale.increaseSpeed(200);
airbus.increaseSpeed(200);

console.log(boeing.status());
console.log(rafale.status());
console.log(airbus.status());
