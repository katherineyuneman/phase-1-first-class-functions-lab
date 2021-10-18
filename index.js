const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (){
    // const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    const driversSlice = drivers.slice(0,2);
    return drivers, driversSlice;
};
console.log(returnFirstTwoDrivers());

const returnLastTwoDrivers = function (){
    // const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    const driversSlice = drivers.slice(2);
    return drivers, driversSlice;
};
console.log(returnLastTwoDrivers());

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[0]);


function createFareMultiplier(multiplier){
    const fareMultiplier = function (fare){
       multiplier * fare;
       console.log(multiplier * fare);
      return (multiplier * fare);
}
    console.log(fareMultiplier());
    return fareMultiplier;
    
};
console.log(createFareMultiplier()());

const fareDoubler = function createFareMultiplier(fare){
    return (fare * 2);
    
};
fareDoubler();

const fareTripler = function createFareMultiplier(fare){
    return (fare * 3);
};
fareTripler();


const selectDifferentDrivers = function selectDifferentDrivers(arrayOfDrivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}
console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers));