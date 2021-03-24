import React from 'react';
import styles from './Contacts.module.css';
import Button from '../Button/Button';
import BlockTitle from '../Blocktitle/BlockTitle';
import axios from 'axios';

class Contacts extends React.Component {

	state = {
		name: "",
		contacts: "",
		message: "",
		sended: false,
		buttonText: 'send',
		errorMessage: false,
		beckButton: false
	};

	onChangeName = (event) => {
		this.setState({ name: event.currentTarget.value });
	};

	onChangeContacts = (event) => {
		this.setState({ contacts: event.currentTarget.value });
	};

	onChangeMessage = (event) => {
		this.setState({ message: event.currentTarget.value });
	};

	submitForm = () => {
		const { name, contacts, message } = this.state;
		if (name && contacts && message) {
			if (!this.state.sended) {
				axios.post("https://portfolio-smtp-server-nodejs.herokuapp.com/sendMessage", {
					name: this.state.name,
					contacts: this.state.contacts,
					message: this.state.message
				});
				this.setState({ name: "", contacts: "", message: "", sended: true, errorMessage: false, buttonText: 'back' });
			}
		} else {
			 this.state.sended || this.state.errorMessage ? this.setState({ errorMessage: false, sended: false, buttonText: 'send' }) : this.setState({ errorMessage: true, sended: false, buttonText: 'back' });
		}
	};

	render() {
		return (
			<section className={styles.contacts}>
				<div className={styles.container}>
					<BlockTitle title="Leave your contacts" />
					{this.state.sended ?
						<h1 className={`animated bounceInLeft ${styles.modalBorder}`}>Thank you for leaving your contacts!</h1> :
						this.state.errorMessage ?
						<h1 className={`animated bounceInLeft ${styles.errorMessage} ${styles.modalBorder}`}>Please check all inputs!</h1> :

						<form className={styles.contactsForm}>
							<input type="text" placeholder={"Name"} value={this.state.name} onChange={this.onChangeName} />
							<input type="text" placeholder={"e-mail"} value={this.state.contacts} onChange={this.onChangeContacts} />
							<textarea rows="10" placeholder={"Message"} value={this.state.message} onChange={this.onChangeMessage}></textarea>
						</form>}
					<Button titleButton={this.state.buttonText} onClickForm={this.submitForm} />
				</div>
			</section>
		);
	};
};

export default Contacts;