class BusData {
    //defining two items from 
    id: string;
    name: string; 
    paradero: string;

    constructor(busName: string, busParadero: string) { //class will be called with at least two parameters
        this.id = new Date().toISOString(); //giving id a unique id not that unique
        this.name = busName //setting bus the name passed when class initialized in object
        this.paradero = busParadero //setting bus with its given paradero
    }
}

export default BusData;