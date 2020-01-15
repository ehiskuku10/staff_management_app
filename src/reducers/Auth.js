const defaultUserInfo = {
  name: 'Kuku',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDSCEebgYlZgnPWdrXLcj9FZlhdYLwiR35dvgtvjVuEarPyNy'
}

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}