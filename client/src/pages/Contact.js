import React from 'react';
import '../css/contact.css';
import { validateEmail } from '../utils/helper';

const Card = props => (
    <div className="card" style={{ width: '600px' }}>
        <div className="message-border"></div>
        {props.children}
    </div>
);

const Form = props => (
    <form className="form">{props.children}</form>
);

const TextInput = props => (
    <div
        className="text-input">
        <label
            className={(props.focus || props.value !== '') ? 'label-focus' : ''}
            htmlFor={props.name}>{props.label}</label>
        <input
            className={(props.focus || props.value !== '') ? 'input-focus' : ''}
            type="text"
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onInput={props.onInput}
            onFocus={props.onFocus}
            onBlur={props.onBlur} />
    </div>
);

const TextArea = props => (
    <div
        className="text-area">
        <label
            className={(props.focus || props.value !== '') ? 'label-focus' : ''}
            htmlFor={props.name}>{props.label}</label>
        <textarea
            className={(props.focus || props.value !== '') ? 'input-focus' : ''}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onInput={props.onInput}
            onFocus={props.onFocus}
            onBlur={props.onBlur} />
    </div>
);

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            name: {
                name: 'name',
                label: 'Name',
                value: '',
                focus: false,
            },
            email: {
                name: 'email',
                label: 'Email',
                value: '',
                focus: false,
            },
            message: {
                name: 'message',
                label: 'Message',
                value: '',
                focus: false,
            },
        };
    }

    handleFocus(e) {
        const name = e.target.name;
        const state = Object.assign({}, this.state[name]);
        state.focus = true;
        this.setState({ [name]: state });
    }

    handleBlur(e) {
        const name = e.target.name;
        const state = Object.assign({}, this.state[name]);
        state.focus = false;
        this.setState({ [name]: state });
    }

    handleChange(e) {
        const name = e.target.name;
        const state = Object.assign({}, this.state[name]);
        state.value = e.target.value;
        this.setState({ [name]: state });
    }

    handleButtonClicked() {
        const email = this.state.email.value;
        const subject = `Message from ${ this.state.name.value }`;
        const body = this.state.message.value;
        if (validateEmail(email)) {
            window.location.href = `mailto:${ email }?&subject=${ subject }&body=${ body }`;
        } else {
            alert("Invalid email address!");
        }
    }

    render() {
        const { name, email, message } = this.state;

        return (
            <div className="contact">
                <Card>
                    <h2>Send us a message!</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <TextInput
                            {...name}
                            onFocus={this.handleFocus.bind(this)}
                            onBlur={this.handleBlur.bind(this)}
                            onChange={this.handleChange.bind(this)} />
                        <TextInput
                            {...email}
                            onFocus={this.handleFocus.bind(this)}
                            onBlur={this.handleBlur.bind(this)}
                            onChange={this.handleChange.bind(this)} />
                        <TextArea
                            {...message}
                            onFocus={this.handleFocus.bind(this)}
                            onBlur={this.handleBlur.bind(this)}
                            onChange={this.handleChange.bind(this)} />
                        <button className="button" onClick={this.handleButtonClicked.bind(this)}>
                            Send
                        </button>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Contact;

