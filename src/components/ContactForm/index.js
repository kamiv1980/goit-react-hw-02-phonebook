import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = evt => {
        const {name, value} = evt.currentTarget;

        this.setState({[name]: value});
    };

    handleSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state);

        this.setState({name: '', number: ''});
    };

    render() {
        const {name, number} = this.state;
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <label className={styles.label}>Name:
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label className={styles.label}>Number:
                    <input
                        className={styles.input}
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                </label>
                <button className={styles.button} type="submit">Add contact</button>
            </form>
        );
    };
}

ContactForm.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
