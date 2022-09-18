import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
// import Auth from '../../utils/auth';
import { chat } from '../styles';
// import chatMain from "../../assets/images/chat/chat3.png";
import '../../css/chat.css';

export const ChatRoom = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', room: '' });

    // const [loginPatients] = useMutation(LOGIN_PATIENTS); //TODO: get username from currentlogin

    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        console.log({ name, value });

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

        <div style={chat['.chat-container']}>
            <header style={chat['.chat-header']}>
                <h3><i className="fas fa-smile"></i> Medical Portal Chat Support</h3>
                <a id="leave-btn" className="btn">Leave Room</a>
            </header>
            <main style={chat['.chat-main']}>
                <div className="chat-sidebar" >
                    <h3><i className="fas fa-comments"></i> Room Name:</h3>
                    <h2 id="room-name" style={chat['.chat-sidebar h2']}></h2>
                    <h3><i className="fas fa-users"></i> Users</h3>
                    <ul id="users"></ul>
                </div>
                <div style={chat['.chat-messages']}></div>
            </main>
            <div className="chat-form-container">
                <form id="chat-form">
                    <input id="msg" type="text" placeholder="Enter Message" required />
                    {/* <button className="btn"><i className="fas fa-paper-plane"></i> Send</button> */}
                    <button className="btn">Send</button>
                </form>
            </div>
        </div>


        // <div style={chat['.join-container']}>
        //     <header style={chat['.join-header']}>
        //         <div style={chat[".logo"]}>
        //             <img src={chatMain} alt="chat_logo" />
        //         </div>



        //         <h1><i classNameName="fas fa-smile"></i> Chat-Med</h1>
        //     </header>
        //     <main style={chat['.join-main']}>
        //         {/* onAction="chat.html" | send to another page*/}
        //         <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        //             <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
        //                 Something went wrong with your selection!
        //             </Alert>
        //             <Form.Group>
        //                 <Form.Label htmlFor='username'>Username</Form.Label>
        //                 <Form.Control
        //                     style={chat['.form-control']}
        //                     type='text'
        //                     placeholder='Enter username...'
        //                     name='username'
        //                     id='username'
        //                     onChange={handleInputChange}
        //                     value={userFormData.username}
        //                     required
        //                 />
        //                 <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        //             </Form.Group>
        //             <Form.Group style={chat['.chat-room-selection']}>
        //                 <Form.Label htmlFor='room'>Room</Form.Label>
        //                 {/* <Form.Control
        //                     style={chat['.form-control']}
        //                     onChange={handleInputChange}
        //                     value={userFormData.room}
        //                     required
        //                 /> */}
        //                 {/* <Form.Select label="room" id="room">
        //                     <option>Open this select menu</option>
        //                     <option value="DoctorRoom">DoctorRoom</option>
        //                     <option value="TechSupport">TechSupport</option>
        //                     <option value="AppointmentSupport">AppointmentSupport</option>
        //                 </Form.Select> */}
        //                 <Form.Control
        //                     style={chat['.form-control']}
        //                     type='text'
        //                     placeholder='Selected room...'
        //                     name='room'
        //                     id='room'
        //                     onChange={handleInputChange}
        //                     value={userFormData.room}
        //                     disable='true'
        //                     required
        //                 />
        //                 <select
        //                     name="room"
        //                     id="room"
        //                     onChange={handleInputChange}
        //                     value={userFormData.room}
        //                     style={{ marginBottom: "1rem" }}>
        //                     <option value="DoctorRoom">Doctor's Room</option>
        //                     <option value="TechSupport">Technical Support</option>
        //                     <option value="AppointmentSupport">Appointment Support</option>
        //                 </select>
        //                 <Form.Control.Feedback type='invalid'>Room selection is required!</Form.Control.Feedback>
        //                 <Button
        //                     style={chat['.btn']}
        //                     disabled={!(userFormData.username && userFormData.room)}
        //                     type='submit'
        //                     variant='success'>
        //                     Join Chat
        //                 </Button>
        //             </Form.Group>
        //         </Form>
        //     </main>
        // </div>
    );
};

export default ChatRoom;
