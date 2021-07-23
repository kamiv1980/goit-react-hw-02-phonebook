import React from "react";
import styles from "./styles.module.css";
import PropTypes from 'prop-types';

const ContactList = ({deleteContact,GetId, list }) => {
  return (
  <ul className={styles.list}>
    {list.map((item) => (
        <li  className={styles.item} key={item.id}>
          <p >
            {item.name}: {item.number}
          </p>
            <button  className={styles.btnDelete}
                     type="button"
                     onClick={() => deleteContact(item.id)}>Delete</button>
            <button  className={styles.btnDelete}
                     type="button"
                     onClick={() => GetId(item.id,item.name,item.number)}>Edit</button>
        </li>
    ))}
  </ul>)
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList
