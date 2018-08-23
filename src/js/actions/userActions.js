
export function fetchUser() {
  let people = [{id: 1, model: "Honda Accord", year: 2018, price: 123000,
                mile: 2,
                picture: "https://preview.ibb.co/exxnvz/accord.jpg"},
                {id: 2, model: "BMW 225i", year: 2015, price: 123000,
                 mile: 2,
                 picture: "https://preview.ibb.co/n3yMNe/bmw325i.jpg"},
                {id: 3, model: "BMW 225i", year: 2015, price: 123000,
                 mile: 2,
                 picture: "https://preview.ibb.co/cAhboK/brz.jpg"},
                {id: 4, model: "BMW 225i", year: 2015, price: 123000,
                 mile: 2,
                 picture: "https://preview.ibb.co/b11Eaz/civicEx.jpg"}];

  return {
    type: "FETCH_USER_FULFILLED",
    payload: people,
  }
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name
  }
}

export function setUserAge(age) {
  return {
    type: 'SET_USER_AGE',
    payload: age,
  }
}





//
//
// <a href="https://ibb.co/c9vJ2e"><img src="https://preview.ibb.co/exxnvz/accord.jpg" alt="accord" border="0"></a>
// <a href="https://ibb.co/md6moK"><img src="https://preview.ibb.co/n3yMNe/bmw325i.jpg" alt="bmw325i" border="0"></a>
// <a href="https://ibb.co/f7Akhe"><img src="https://preview.ibb.co/cAhboK/brz.jpg" alt="brz" border="0"></a>
// <a href="https://ibb.co/g2xnvz"><img src="https://preview.ibb.co/b11Eaz/civicEx.jpg" alt="civicEx" border="0"></a>
// <a href="https://ibb.co/eV7WNe"><img src="https://preview.ibb.co/g3i5he/lexus250.jpg" alt="lexus250" border="0"></a>
// <a href="https://ibb.co/cigEaz"><img src="https://preview.ibb.co/dWihTK/m3.jpg" alt="m3" border="0"></a><br /><a target='_blank' href='https://aluminumsulfate.net/aluminum-oxide'>physical properties of aluminium oxide</a><br />
//
//
