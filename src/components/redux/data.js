const posts = [
  {
    id: 100,
    text: "Hello, Kate, are you coming to my party today?",
    likesCout: 11
  },
  { id: 101, text: "Hello, on what occasion is the party?", likesCout: 3 },
  {id: 102,
    text: "On the occasion of my arrival from Spain.",
    likesCout: 7
  },
  {
    id: 103,
    text: "Oh, my God, I completely forgot, sorry, of course, I’ll be there!",
    likesCout: 9
  },
  { id: 104, text: "And who else is invited", likesCout: 18 },
  {
    id: 105,
    text:
      "Lily, Marry, Jenny – you know them, and a couple of good-looking guys!",
    likesCout: 1
  },
  {
    id: 106,
    text: "Оh, it ‘ll be fun! What shall I bring with me?",
    likesCout: 7
  },
  {
    id: 107,
    text:
      "Please, take a few bottles of Cola and some snacks: crisps, for example.",
    likesCout: 4
  }
];

const chats = [
  {
    id: 1,
    name: "Oleg",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQFcpYKqisnRqx3SsfJjs7ME3XspbX3u81KprS2gvGUN0k9ipu&usqp=CAU"
  },
  {
    id: 5,
    name: "Mariusz",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIiP5QEbMyxe3ECk50ttuLQtxZlcEFC-IylJ1nM3XkbE_kKKjV&usqp=CAU"
  },
  {
    id: 7,
    name: "Nastya",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutulh2jefGmRfWlymj5ud4X3A5jP8n_PEgwQkg59kATxDzqiX&s"
  },
  {
    id: 14,
    name: "Andrew",
    photo:
      "https://i.pinimg.com/236x/a8/63/8a/a8638ab3fe610ee12e14793716bf4cdf--adventure-time.jpg"
  },
  {
    id: 9,
    name: "Kostya",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXqZcCaOGqS11R987XRUigBILp6F6jbM7_XtH6cZBa7Cwv84&s"
  },
  {
    id: 16,
    name: "Carl",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaE17LvgaiY6b6iOADw_VPun2nsnZb2olbi-FUmFc9iCAFMLXh&s"
  },
  {
    id: 17,
    name: "Igor",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6x7CnL6sr0E5H0g4djyb4PqmLlcgQVToF2-u_ewiszUtfxvt&s"
  }
];

const messages = [
  {
    idUser: 12,
    idMsg: 13015,
    text: "Hello, Kate, are you coming to my party today?"
  },
  { idUser: 111, idMsg: 15, text: "Hello, on what occasion is the party?" },
  {
    idUser: 12,
    idMsg: 135,
    text: "On the occasion of my arrival from Spain."
  },
  {
    idUser: 111,
    idMsg: 14,
    text: "Oh, my God, I completely forgot, sorry, of course, I’ll be there!"
  },
  { idUser: 12, idMsg: 1305, text: "And who else is invited" },
  {
    idUser: 111,
    idMsg: 175,
    text:
      "Lily, Marry, Jenny – you know them, and a couple of good-looking guys!"
  },
  {
    idUser: 12,
    idMsg: 1335,
    text: "Оh, it ‘ll be fun! What shall I bring with me?"
  },
  {
    idUser: 111,
    idMsg: 12345,
    text:
      "Please, take a few bottles of Cola and some snacks: crisps, for example."
  }
];

export const users = [
  {
    id: 1,
    fullName: "Oleg",
    followed: true,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQFcpYKqisnRqx3SsfJjs7ME3XspbX3u81KprS2gvGUN0k9ipu&usqp=CAU",
    status: "People rejoice at the Sun, and I'm dreaming of the Moon",
    location: {
      country: "Belarus",
      city: "Minsk"
    }
  },
  {
    id: 2,
    followed: false,
    photo: "",
    fullName: "Dmitry",
    status: "Illusion is the first of all pleasures",
    location: {
      country: "Belarus",
      city: "Brest"
    }
  },
  {
    id: 3,
    followed: false,
    photo: "",
    fullName: "Ann",
    status: "Forever young",
    location: {
      country: "Ukraine",
      city: "Kiyv"
    }
  },
  {
    id: 4,
    followed: false,
    photo: "",
    fullName: "Mike",
    status: "Every exit is an entry somewhere else",
    location: {
      country: "USA",
      city: "Washington"
    }
  },
  {
    id: 5,
    followed: true,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIiP5QEbMyxe3ECk50ttuLQtxZlcEFC-IylJ1nM3XkbE_kKKjV&usqp=CAU",
    fullName: "Mariusz",
    status: "Nothing is more silly than silly laughter",
    location: {
      country: "Poland",
      city: "Warszawa"
    }
  },
  {
    id: 6,
    followed: false,
    photo: "",
    fullName: "Andrew",
    status: "To find yourself, think for yourself",
    location: {
      country: "Ukraine",
      city: "Lviv"
    }
  },
  {
    id: 7,
    followed: true,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutulh2jefGmRfWlymj5ud4X3A5jP8n_PEgwQkg59kATxDzqiX&s",
    fullName: "Nastya",
    status: "i'm a boss",
    location: {
      country: "Ukraine",
      city: "Kharkov"
    }
  },
  {
    id: 8,
    followed: false,
    photo: "",
    fullName: "Sasha",
    status:
      "Fear transfers the clever into the silly, and makes the strong be the weak",
    location: {
      country: "Belarus",
      city: "Pinsk"
    }
  },
  {
    id: 9,
    followed: true,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXqZcCaOGqS11R987XRUigBILp6F6jbM7_XtH6cZBa7Cwv84&s",
    fullName: "Kostya",
    status: "begins with a single step",
    location: {
      country: "Ukraine",
      city: "Odessa"
    }
  }
];

export const dialogsPage = {
  chats: chats,
  messages: messages,
  newMesssageText: ""
};

export const findUsersPage = {
  users: []
};

export const profilePage = {
  posts: posts,
  newPostText: "",
  profile: null,
  isLoading: true,
  status: ""
};

export const profile = {
  "aboutMe": "People rejoice at the Sun, and I'm dreaming of the Moon",
  "contacts": {
    "facebook": "facebook.com",
    "website": null,
    "vk": "vk.com/dimych",
    "twitter": "https://twitter.com/@sdf",
    "instagram": "instagra.com/sds",
    "youtube": null,
    "github": "github.com",
    "mainLink": null
  },
  "lookingForAJob": true,
  "lookingForAJobDescription": "не ищу, а дурачусь",
  "fullName": "Andrew",
  "userId": 111,
  "photos": {
    "small": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz5DhqhLRNZLqOkCKuyJg5rZ_vCTrFQcUliE-T4TuhP7rAkBWD&usqp=CAU",
    "large": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz5DhqhLRNZLqOkCKuyJg5rZ_vCTrFQcUliE-T4TuhP7rAkBWD&usqp=CAU"
  }
};

export const user = {
  id: 111,
  name: "Andrew",
  desc: "Description",
  photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz5DhqhLRNZLqOkCKuyJg5rZ_vCTrFQcUliE-T4TuhP7rAkBWD&usqp=CAU"
};

export const sidebar = {};
