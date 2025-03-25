import { useState } from "react";
import "./Contacts.css";
import ArrowDownIcon from "./icons/ArrowDownIcon";

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openContacts = () => setIsOpen(true);
  const closeContacts = () => setIsOpen(false);

  return (
    <div className="contacts-container">
      <h3>Tel Aviv</h3>
      <a href="tel:+972-00-000-0000">+972-00-000-0000</a>
      <button className="contacts-btn-open" onClick={openContacts}>
        Our Contacts <ArrowDownIcon />
      </button>
      {isOpen && (
        <div className="contacts-box">
          <div className="contacts-content">
            <h2>Contacts</h2>
            <p>Adress: Tel Aviv</p>
            <p>Number: +972-00-000-0000</p>
            <p>Work Time: from 10:00 to 21:00</p>
            <p>Mail: mail@mail.mail</p>
            <button className="contacts-btn-close" onClick={closeContacts}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
