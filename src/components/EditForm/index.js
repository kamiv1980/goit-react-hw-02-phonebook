import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from './styles.module.css';


    const EditForm = ({name,number,handleModal,handleSubmit,handleChange}) => {

        return (
            <form onSubmit={handleSubmit} className={styles.modal} >
                <label >Name:
                    <input
                        type="text"
                        name="name"
                        defaultValue={name}
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label >Number:
                    <input
                        type="tel"
                        name="number"
                        defaultValue={number}
                        onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                </label>
                <button  type="submit">Ok</button>
                <button
                         type="button"
                         onClick={() =>handleModal()}>Cancel</button>
            </form>
        );
    };


EditForm.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default EditForm;
