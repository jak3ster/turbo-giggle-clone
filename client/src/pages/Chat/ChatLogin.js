import React, { useState, useEffect } from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import { GET_ALL_DOCTORS } from '../../utils/queries';
import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { chat } from '../styles';

// import '../css/chat.css';

export const ChatLogin = () => {
    // set initial form state
    const [userData, setUserData] = useState({ username: '', usertype: '' });
    const [userFormData, setUserFormData] = useState({ room: '' });

    useEffect(() => {
        try {
            const loggedIn = Auth.loggedIn();
            if (loggedIn) {
                let currentUser = Auth.getProfile();
                let userType = Auth.getEntity();

                setUserData({
                    username: currentUser.data.username,
                    usertype: userType,
                });
            }
        } catch (e) {
            console.error(e);
            setShowAlert(true);
        }
    }, []); // <-- empty dependency array



    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        // setUserFormData({ state: false });

        // console.log(userFormData)

    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        console.log("join is hit!");
        // try {
        //     const loggedIn = Auth.loggedIn();
        //     if (loggedIn) {
        //         const currentUser = Auth.getProfile();
        //         console.log(currentUser)
        //         setUserFormData({
        //             username: currentUser.username,
        //             email: currentUser.email,
        //             _id: currentUser._id,
        //         });
        //     }

        //     // change page to chat dashboard!
        // } catch (e) {
        //     console.error(e);
        //     setShowAlert(true);
        // }

        // setUserFormData({
        //     username: '',
        //     email: '',
        //     _id: '',
        // });
    };

    return (
        <div style={chat['.join-container']}>
            <header style={chat['.join-header']}>
                <h2>Chat Portal</h2>
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
                            placeholder='Username...'
                            name='username'
                            id='username'
                            disabled={true}
                            onChange={handleInputChange}
                            value={userData.username}
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
                            placeholder='Select Room...'
                            name='room'
                            id='room'
                            disabled={true}
                            onChange={handleInputChange}
                            value={userFormData.room} // TODO need to grab info pass to chat room
                            disable='true'
                            required
                        />
                        <select
                            name="room"
                            id="room"
                            onChange={handleInputChange}
                            value={userFormData.room} // TODO need to grab info pass to chat room
                            style={{ marginBottom: "1rem" }}>
                            <option value="">Select a room...</option>
                            <option value="DoctorRoom">Doctor's Room</option>
                            <option value="TechSupport">Technical Support</option>
                            <option value="AppointmentSupport">Appointment Support</option>
                        </select>
                        <Form.Control.Feedback type='invalid'>Room selection is required!</Form.Control.Feedback>
                        <Button
                            style={chat['.btn']}
                            // disabled={userFormData.state}
                            disabled={!(userFormData.room && userData.username)}
                            type='submit'
                            variant='success'>
                            Join Chat
                        </Button>
                    </Form.Group>
                </Form>
            </main>
        </div>
    );
};

export default ChatLogin;
