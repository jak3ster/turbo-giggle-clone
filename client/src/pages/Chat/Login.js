import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_DOCTORS } from '../../utils/queries';
import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { chat } from '../styles';
import chatMain from "../../assets/images/chat/chat3.png";
// import '../css/chat.css';

export const ChatLogin = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', room: '' });

    // const [loginPatients] = useMutation(LOGIN_PATIENTS); //TODO: get username from currentlogin
    const { loading, error, data } = useQuery(GET_ALL_DOCTORS);
    console.log(data);


    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        // console.log({ name, value })

        console.log("data: ", data);

        // // DEBUG check whos logged in
        // try {
        //     let currentUser
        //     const loggedIn = Auth.loggedIn();
        //     if (loggedIn) {
        //         currentUser = Auth.getProfile();
        //         console.log(currentUser)
        //         setUserFormData({
        //             username: currentUser.username,
        //             email: currentUser.email,
        //             _id: currentUser._id,
        //         });
        //     }
        //     console.log(loggedIn, currentUser)
        // } catch (e) {
        //     console.error(e);
        //     setShowAlert(true);
        // }
        // // DEBUG check whos logged in
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const loggedIn = Auth.loggedIn();
            if (loggedIn) {
                const currentUser = Auth.getProfile();
                console.log(currentUser);
                setUserFormData({
                    username: currentUser.username,
                    email: currentUser.email,
                    _id: currentUser._id,
                });
            }

            // change page to chat dashboard!
        } catch (e) {
            console.error(e);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            _id: '',
        });
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        (<div style={chat['.join-container']}>
            <header style={chat['.join-header']}>
                <div style={chat[".logo"]}>
                    <img src={chatMain} alt="chat_logo" />
                </div>



                <h1><i className="fas fa-smile"></i> {data.getDoctors[0].username}</h1>
            </header>
            <main style={chat['.join-main']}>
                {/* onAction="chat.html" | send to another page*/}
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                        Something went wrong with your selection!
                    </Alert>
                    <Form.Group>
                        <Form.Label htmlFor='username'>Username</Form.Label>
                        <Form.Control
                            style={chat['.form-control']}
                            type='text'
                            placeholder='Enter username...'
                            name='username'
                            id='username'
                            onChange={handleInputChange}
                            value={userFormData.username}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group style={chat['.chat-room-selection']}>
                        <Form.Label htmlFor='room'>Room</Form.Label>
                        {/* <Form.Control
                            style={chat['.form-control']}
                            onChange={handleInputChange}
                            value={userFormData.room}
                            required
                        /> */}
                        {/* <Form.Select label="room" id="room">
                            <option>Open this select menu</option>
                            <option value="DoctorRoom">DoctorRoom</option>
                            <option value="TechSupport">TechSupport</option>
                            <option value="AppointmentSupport">AppointmentSupport</option>
                        </Form.Select> */}
                        <Form.Control
                            style={chat['.form-control']}
                            type='text'
                            placeholder='Selected room...'
                            name='room'
                            id='room'
                            onChange={handleInputChange}
                            value={userFormData.room}
                            disable='true'
                            required
                        />
                        <select
                            name="room"
                            id="room"
                            onChange={handleInputChange}
                            value={userFormData.room}
                            style={{ marginBottom: "1rem" }}>
                            <option value="DoctorRoom">Doctor's Room</option>
                            <option value="TechSupport">Technical Support</option>
                            <option value="AppointmentSupport">Appointment Support</option>
                        </select>
                        <Form.Control.Feedback type='invalid'>Room selection is required!</Form.Control.Feedback>
                        <Button
                            style={chat['.btn']}
                            disabled={!(userFormData.username && userFormData.room)}
                            type='submit'
                            variant='success'>
                            Join Chat
                        </Button>
                    </Form.Group>
                </Form>
            </main>
        </div>)
    );
};

export default ChatLogin;
