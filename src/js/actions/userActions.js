
export function fetchUser() {
  let people = [{id: 1, name: "John Smith", age: 35, picture: "https://s3-us-west-1.amazonaws.com/image-music/accord.jpeg"},
                {id: 1, name: "Patrick Luu", age: 36, picture: "https://s3-us-west-1.amazonaws.com/image-music/bmw325i.jpeg"}];
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
