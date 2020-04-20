import React from "react";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import s from "./Dialogs.module.scss";

export const Dialogs = () => {
  const dialogsData = [
    { id: 1, name: "Oleg" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Nastya" },
    { id: 4, name: "Andrew" },
    { id: 5, name: "Nick" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Igor" }
  ];

  const messagesData = [
    {
      id: 1,
      text: "Hello, Kate, are you coming to my party today?"
    },
    { id: 2, text: "Hello, on what occasion is the party?" },
    {
      id: 3,
      text: "On the occasion of my arrival from Spain."
    },
    {
      id: 4,
      text: "Oh, my God, I completely forgot, sorry, of course, I’ll be there!",
      likesCout: 9
    },
    { id: 5, text: "And who else is invited" },
    {
      id: 6,
      text:
        "Lily, Marry, Jenny – you know them, and a couple of good-looking guys!"
    },
    {
      id: 7,
      text: "Оh, it ‘ll be fun! What shall I bring with me?"
    },
    {
      id: 8,
      text:
        "Please, take a few bottles of Cola and some snacks: crisps, for example."
    }
  ];

  return (
    <div className={s.container}>
      <div className={s.listDialogs}>
        {dialogsData.map(dialog => (
          <Dialog id={dialog.id} name={dialog.name} />
        ))}
      </div>
      <div className={s.listMessages}>
        {messagesData.map(message => (
          <Message message={message.text} />
        ))}
      </div>
    </div>
  );
};
