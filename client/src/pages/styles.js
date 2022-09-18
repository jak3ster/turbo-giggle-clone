import LoginPatientImage from "../assets/login_patient.png";
import SignupPatientImage from "../assets/signup_patient.png";
import LoginDoctorImage from "../assets/login_doctor.png";
import SignupDoctorImage from "../assets/signup_doctor.png";
import AppointmentsImage from "../assets/appointments.png";
import AddAppointmentsImage from "../assets/add_appointments.png";
import HistoryImage from "../assets/history.png";
import EditImage from "../assets/edit.png";
import ChatLoginImage from "../assets/images/chat/chat3.png";
import DoctorProfileImage from "../assets/login_doctor.png";

export const loginpatient = LoginPatientImage;
export const singuppatient = SignupPatientImage;
export const logindoctor = LoginDoctorImage;
export const singupdoctor = SignupDoctorImage;
export const appointments = AppointmentsImage;
export const addappointments = AddAppointmentsImage;
export const history = HistoryImage;
export const edit = EditImage;
export const chatlogin = ChatLoginImage;
export const doctorProfile = DoctorProfileImage;


export const main = {
    login: {
        display: 'flex',
        margin: '5rem 0 5rem 0 !important',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        display: "flex",
        flexWrap: "wrap",
        // marginRight: "-15px",
        // marginLeft: "-15px",
        justifyContent: "center",
        marginTop: "5rem",
        marginBottom: "5rem",
    },
    card: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        backgroundColor: "#9fafdf",
        backgroundClip: "border-box",
        borderRadius: ".25rem",
        width: '600px'
    },
    cardbody: {
        backgroundColor: "#9fafdf",
        padding: "15px 15px 15px 15px",
    },
    form: {
        padding: "2rem"
    },
    epbutton: {
        display: "block",
        width: "100%",
        height: "calc(1.5em + .75rem + 2px)",
        padding: "0.375rem .75rem",
        fontsize: "1rem",
        fontWeight: "400",
        lineHeight: "1.5",
        backgroundClip: "padding-box",
        borderRadius: ".25rem",
        transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        marginTop: "1rem"
    },
};

export const dashboard = {
    container: {
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    ".chat-image-pic": {
        height: "200px",
        width: "200px",
        objectFit: "cover",
    },
    header: {
        // color:"LightSlateGray",
        textAlign: "center"
    },
    row: {
        display: "flex",
        flexWrap: "wrap",
        // marginRight: "-15px",
        // marginLeft: "-15px",
        justifyContent: "center",
        // marginTop: "200px",
        // marginBottom: "200px",
    },
    card: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        backgroundColor: "#9fafdf",
        backgroundClip: "border-box",
        borderRadius: ".25rem",

    },
    cardbody: {
        backgroundColor: "#9fafdf",
        padding: "15px 15px 15px 15px",
    },
    img: {
        height: "20px",
        width: "20px",
    },
    alignment: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
};

export const chat = {
    "@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap')": true,
    "*": { boxSizing: "border-box", margin: "0", padding: "0" },
    body: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: "16px",
        background: "#e6e9ff",
        margin: "20px"
    },
    ul: { listStyle: "none" },
    a: { textDecoration: "none" },
    h2: {
        fontSize: "1rem"
    },
    ".btn": {
        cursor: "pointer",
        padding: "5px 15px",
        background: "#28a745",
        color: "whitesmoke",
        border: "0",
        fontSize: "17px"
    },
    ".form-control": {
        backgroundColor: "transparent",
        border: "none !important",
        marginBottom: "1rem"
    },
    ".chat-container": {
        maxWidth: "1100px",
        background: "#fff",
        margin: "30px auto",
        overflow: "hidden"
    },
    ".chat-header": {
        background: "#667aff",
        color: "#fff",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    ".chat-main": { display: "grid", gridTemplateColumns: "1fr 3fr" },
    ".chat-room-selection": {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "stretch"
    },
    ".chat-sidebar": {
        background: "#4169e1",
        color: "#fff",
        padding: "20px 20px 60px",
        overflowY: "scroll"
    },
    ".chat-sidebar h2": {
        fontSize: '20px',
        background: "rgba(0, 0, 0, 0.1)",
        padding: "10px",
        marginBottom: "20px"
    },
    ".chat-sidebar h3": { marginBottom: "15px" },
    ".chat-sidebar ul li": { padding: "10px 0" },
    ".chat-messages": {
        padding: "30px",
        maxHeight: "500px",
        overflowY: "scroll"
    },
    ".chat-messages .message": {
        padding: "10px",
        marginBottom: "15px",
        backgroundColor: "#e6e9ff",
        borderRadius: "5px",
        overflowWrap: "break-word"
    },
    ".chat-messages .message .meta": {
        fontSize: "15px",
        fontWeight: "bold",
        color: "#4169e1",
        opacity: 0.7,
        marginBottom: "7px"
    },
    ".chat-messages .message .meta span": { color: "#777" },
    ".chat-form-container": {
        padding: "20px 30px",
        backgroundColor: "#667aff"
    },
    ".chat-form-container form": { display: "flex" },
    ".chat-form-container input[type='text']": {
        fontSize: "16px",
        padding: "5px",
        height: "40px",
        flex: 1
    },
    ".join-container": {
        // maxWidth: "500px", 
        // margin: "80px auto", 
        color: "#fff"
    },
    ".join-header": {
        textAlign: "center",
        // padding: "20px",
        margin: "1rem 0 1rem 0",
        background: "#9fafdf",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px"
    },
    ".join-main": {
        padding: "1rem",
        background: "#4169e1"
    },
    ".join-main p": { marginBottom: "20px" },
    ".join-main .form-control": { marginBottom: "20px" },
    ".join-main label": { display: "block", marginBottom: "5px" },
    ".join-main input[type='text']": {
        fontSize: "16px",
        padding: "5px",
        height: "40px",
        width: "100%"
    },
    ".join-main select": {
        fontSize: "16px",
        padding: "5px",
        height: "40px",
        width: "100%"
    },
    ".join-main .btn": { marginTop: "20px", width: "100%" },
    "@media (max-width: 700px)": {
        ".chat-main": { display: "block" },
        ".chat-sidebar": { display: "none" }
    }
};
