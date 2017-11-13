import car from 'car';

const suv = car.factory({
  color: "white",
  make: "Kia",
  model: "Sorento",
  year: 2010,
  miles: 50000,
  bedliner: null,
  alarm: true
});
const truck = car.factory({
  color: "silver",
  make: "Toyota",
  model: "Tacoma",
  year: 2006,
  miles: 100000,
  bedliner: true,
  alarm: true
});
