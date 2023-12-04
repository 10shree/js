//advanced array
//const array = [1,2,10,16];
//const double = []
//const newarray = array.forEach((num)=> {
  //  double.push(num *2);
//})
//console.log('forEach', double);

//map,filter,reduce

//const mapArray = array.map((num) =>{
  //  return num * 2;
//});
//console.log('map', mapArray);

//advanced array
//const array = [1,2,10,16];

//const double = []
//const newarray = array.forEach((num)=> {
  //  double.push(num *2);
//})
//console.log('forEach', double);

//map,filter,reduce

//const mapArray = array.map((num) => num * 2);

//console.log('map', mapArray);

//filter

//const filterArray = array.filter(num => num > 5);
//console.log('filter', filterArray);

//reduce

//const reduceArray = array.reduce((accumulator, num) =>{
  //  return accumulator + num
//} ,0);
//console.log('reduce', reduceArray);

//ADVANCE OBJECT
//reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

//context vs scope

const object4 = {
  a: function() {
    console.log(this);
  }
}

//instantiation

class player {
  constructor(name,type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log('Hi I am ${this,name}, I\'m a ${this,type}');
  }
}
class wizard extends player {
  constructor (name, type){
    super(name, type)
    console.log('wizard' , this);
  }
  play() {
    console.log('WEEEEE I\'m a ${this.type');
  }
}
const wizard1 = new wizard('shally', 'healer');
const wizard2 = new wizard('handry', 'dark maggic');