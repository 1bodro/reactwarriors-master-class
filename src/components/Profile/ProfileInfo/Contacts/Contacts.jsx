import React from "react";
import s from "./Contacts.module.scss";

const Contact = ({contactName, contactValue}) => {
    return contactValue && (
        <a className={s.contact} href={contactValue} target='_blank'>
            <svg viewBox="0 0 24 24" xmlnsXlink="http://www.w3.org/2000/xlink">
                <use  xlinkHref={`#${contactName}`} x={0} y={0}/>
            </svg>
            <span>{contactName}</span>
        </a>
    )
}

export const Contacts = data => {
    return (
        Object.keys(data.contacts)
            .map((contact, i) =>
                <Contact key={i}
                         contactName={contact}
                         contactValue={data.contacts[contact]}
                />)
    )
}