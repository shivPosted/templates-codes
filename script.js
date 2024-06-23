'use-strict';
// const getJSON = async function (url) {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error('Country not found or url wrong');
//     const data = await res.json();
//     const [countryData] = data;
//     return countryData;
//   } catch (err) {
//     console.error(err.message);
//     throw err;
//   }
// };

// const get3Count = async (c1, c2, c3) => {
//   try {
//     // const country1 = await fetch(`https://restcountries.com/v3.1/name/${c1}`);
//     // const country1_Data = await country1.json();
//     // const country2 = await fetch(`https://restcountries.com/v3.1/name/${c2}`);
//     // const country2_Data = await country2.json();
//     // const country3 = await fetch(`https://restcountries.com/v3.1/name/${c3}`);
//     // const country3_Data = await country3.json();

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);

//     console.log(data.map(data => data.capital[0]));
//     if (!(country1.ok && country2.ok && country3.ok))
//       throw new Error('Cannot find country');
//     const [{ capital: cap1 }] = country1_Data;
//     const [{ capital: cap2 }] = country2_Data;
//     const [{ capital: cap3 }] = country3_Data;
//     return `Three capitals are ${cap1[0]}, ${cap2[0]} and ${cap3[0]}`;
//   } catch (err) {
//     console.error(err.message);
//     throw err;
//   }
// };

// get3Count('usa', 'brazil', 'australia')
//   .then(res => console.log(res))
//   .catch(err => console.error(err.message));

// const randomProm = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Timeout Error'));
//     }, sec * 1000);
//   });
// };

// //Promise.race()
// (async function () {
//   const won = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/usa`),
//     getJSON(`https://restcountries.com/v3.1/name/canada`),
//     randomProm(0.35),
//   ]);
//   console.log(won);
// })();

// const wait = sec => {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, sec * 1000);
//   });
// };

// const loadNPause = function (imgPath) {
//   const img = document.createElement('img');
//   img.src = imgPath;

//   img.addEventListener('load', function () {
//     imgContainer.append(img);
//   });
//   return new Promise(function (resolve) {
//     resolve(img);
//   });
// };

// let curImage;

// (async function () {
//   curImage = await loadNPause('./img/img-1.jpg');
//   await wait(2);
//   curImage.style.display = 'none';

//   curImage = await loadNPause('./img/img-2.jpg');
//   await wait(2);
//   curImage.style.opacity = 'none';
// })();

// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(img => loadNPause(img)); //loadNPause already returning a promise
//     const images = await Promise.all(imgs);
//     images.forEach(img => {
//       img.classList.add('parallel');
//     });
//   } catch (err) {
//     console.error(err.message);
//     throw err;
//   }
// };

// loadAll(['/img/img-1.jpg', '/img/img-2.jpg', '/img/img-3.jpg']);

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese-Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//switching vairables with destructuring

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// const [starterDish, mainDish] = restaurant.order(
//   restaurant.starterMenu.length - 1,
//   1
// );
// console.log(starterDish, mainDish);

// const arr = [4, 5, 6, [7, 8]];
// const [i, , , [j, k]] = arr;
// console.log(i, j, k);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStarRating, oneStarRating, threeStarRating = 0] = ratingStars;
// console.log(fiveStarRating, oneStarRating, threeStarRating);

// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;

// console.log(o, c);

// const arr01 = [7, 8, 9];
// const newArr = [1, 2, 3, 4, 5, 6, ...arr01];
// console.log(newArr);

// const speelWord = word => {
//   console.log(...word);
// };

// speelWord('Javascript');
// // console.log(...restaurant);

// const shiv = {
//   firstName: 'Shiv',
//   lastName: 'Pratap',
//   age: 23,
//   pin: 302012,
//   address: 'Shivam Vihar-11, plot no:107',
//   district: 'Jaipur',
//   state: 'Raj',
//   Country: 'India',
// };

// const { firstName: myName, age: myAge, ...rest } = shiv;
// console.log(myName, myAge, rest);

// const findCountryRegion = async function (region) {
//   try {
//     const response = await fetch(
//       `https://restcountries.com/v3.1/region/${region}`
//     );
//     if (!response.ok)
//       throw new Error('Something is wrong with region name or connectoin down');
//     const result = await response.json();
//     console.log(result);
//     return 'Data Successfully loaded';
//   } catch (err) {
//     console.error(err.message);
//     throw err;
//   }
// };

// (async function () {
//   const result = await findCountryRegion('asia');
//   console.log(result);
// })();

let binarySearch = function (arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = parseInt((low + high) / 2);
    if (arr[mid] === key) return mid;
    else if (key > arr[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

let arr = [3, 4, 16, 17, 21, 32, 43, 56, 67, 72, 89, 90];
const key = 90;
const keyIndex = binarySearch(arr, key);
const result =
  keyIndex === -1
    ? 'element not present'
    : `Element is at the index ${keyIndex}`;

console.log(result);

const queue = {
  front: 0,
  rear: 0,
  count: 0,
  arr: new Array(5),
  top: function () {
    if (this.count === 0 || !this.front) console.log('The queue is empty');
    else console.log(this.arr[this.front % this.arr.length]);
  },
  push: function (elem) {
    if (this.count >= this.arr.length) {
      console.log('Queue is full');
      return;
    }
    this.arr[this.rear++ % this.arr.length] = elem;
    this.count++;
    console.log(this.count);
  },
  pop: function () {
    if (this.count == 0) {
      console.log('Queue is already empty');
      return;
    }
    this.count--;
    console.log(this.count);
    arr[this.front % this.arr.length] = -1;
    return this.arr[this.front++ % this.arr.length];
  },
};
