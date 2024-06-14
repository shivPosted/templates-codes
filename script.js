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

const wait = sec => {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

const loadNPause = function (imgPath) {
  const img = document.createElement('img');
  img.src = imgPath;

  img.addEventListener('load', function () {
    imgContainer.append(img);
  });
  return new Promise(function (resolve) {
    resolve(img);
  });
};

let curImage;

(async function () {
  curImage = await loadNPause('./img/img-1.jpg');
  await wait(2);
  curImage.style.display = 'none';

  curImage = await loadNPause('./img/img-2.jpg');
  await wait(2);
  curImage.style.opacity = 'none';
})();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(img => loadNPause(img)); //loadNPause already returning a promise
    const images = await Promise.all(imgs);
    images.forEach(img => {
      img.classList.add('parallel');
    });
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

loadAll(['/img/img-1.jpg', '/img/img-2.jpg', '/img/img-3.jpg']);
