type GameSaving = {
  "id": Number, // id сохранения
  "created": Number, // timestamp создания
  "userInfo": {
    "id": Number, // user id
    "name": String, // user name
    "level": Number, // user level
    "points": Number // user points
  }
};

export default GameSaving;