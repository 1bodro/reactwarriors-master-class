import profileReducer, {addPostCreator} from "./profile_reducer";

let state = {
  posts: [
    {
      id: 100,
      text: "Hello, Kate, are you coming to my party today?",
      likesCout: 11
    },
    {id: 101, text: "Hello, on what occasion is the party?", likesCout: 3},
    {
      id: 102,
      text: "On the occasion of my arrival from Spain.",
      likesCout: 7
    },
    {
      id: 103,
      text: "Oh, my God, I completely forgot, sorry, of course, I’ll be there!",
      likesCout: 9
    },
    {id: 104, text: "And who else is invited", likesCout: 18},
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
  ]
}

it ("length of posts should be incremented", ()=> {
  //test data
  let action = addPostCreator ("New post text");
  //action
  let newState = profileReducer(state, action);
  // expectation
  expect(newState.posts.length).toBe(9);
})

it ("length of posts should be unicremented", ()=> {
  //test data
  let action = addPostCreator ("New post text");
  //action
  let newState = profileReducer(state, action);
  // expectation
  expect(newState.posts.length).toBe(9);
})

it ("msg of new post should be correct", ()=> {
  //test data
  let action = addPostCreator ("New post text");
  //action
  let newState = profileReducer(state, action);
  // expectation
  expect(newState.posts[8]).toBe("New post text");
})