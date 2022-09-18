import React from "react";
import { useQuery } from "@apollo/client";
import Auth from '../utils/auth';
import { GET_DOCTOR_EMAIL_BY_ID } from '../utils/queries';
import "../css/style.css";

import appointments from "../assets/appointments.png";
import addappointments from "../assets/add_appointments.png";
// import history from "../assets/history.png";
// import edit from "../assets/edit.png";

const styles = {
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
    row: {
        display: "flex",
        flexWrap: "wrap",
        marginRight: "-15px",
        marginLeft: "-15px",
        justifyContent: "center",
        marginTop: "200px",
        marginBottom: "200px",
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
};

const DashboardDoctors = (props) => {
    const userData = Auth.getProfile();
    const { loading: l, error: e, data: d } = useQuery(GET_DOCTOR_EMAIL_BY_ID, { variables: { _id: userData.data._id } });
    console.log(d, e, l, "ELLIOTT");
    if (l) {
        return <h2>LOADING...</h2>;
    }

    let doctorFirstName;
    let doctorLastName;
    let concern;
    let status;
    // 👇️ Check if undefined or null
    if (d === undefined || d === null) {
        doctorFirstName = d.getDoctorEmailByID.firstName;
        doctorLastName = d.getDoctorEmailByID.lastName;
        concern = d.getDoctorEmailByID.appointments[0].concern;
        status = d.getDoctorEmailByID.appointments[0].status;
        // console.log('✅ variable is undefined or null');
    } else {
        doctorFirstName = "DoctorFirstName";
        doctorLastName = "DoctorLastName";
        concern = "Test concern!";
        status = "Test status!";
        // console.log('⛔️ variable is NOT undefined or null');
    }

    return (
        <div style={styles.container}>
            {/* HELP WITH THE GRAPHQL </div> */}
            <h2>
                Welcome Dr. <strong>{doctorFirstName} {doctorLastName}</strong>
            </h2>
            <br></br>
            <p>
                This is a secure medical portal to help connect you to your patients and
                support them with their needs.
            </p>
            <div style={styles.row}>
                <div className="col-sm col-xs-12">
                    <div style={styles.card}>
                        <img
                            src={appointments}
                            alt="image_of_appointments"
                            className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                            width="200px"
                        />
                        <h5 className="card-title">
                            Upcoming Appointments
                            <a href="/appointments/signup" className="edit-history-link-text">
                                <img
                                    style={styles.img}
                                    alt="upcoming_appointments"
                                    className="edit-history-link"
                                    src={addappointments}
                                ></img>
                                Add{" "}
                            </a>
                        </h5>

                        {/* Appointments  */}
                        {/* <strong>FOR EACH APPOINTMENT</strong> */}
                        <div className="col-sm col-xs-12 appointmentcard" style={styles.card}>
                            <p className="card-text">
                                With <strong>TEST</strong>
                                <br></br>                    <br></br>
                                at{" "}<strong>Tuesday September 13th 4:30 PM</strong>
                            </p>
                            <p className="card-text">
                                Reason for visit: <strong>{concern}</strong>
                            </p>
                            <p className="card-text">
                                Status: <strong>{status}</strong>
                            </p>
                        </div>

                        {/* Patient History */}
                        {/* <div className="col-sm col-xs-12">
              <div className="card" style={styles.card}>
                <img
                  src={history}
                  alt="history alt"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                ></img>
                <h5 className="card-title">
                  Patient History{" "}
                  <a href="/history" className="edit-history-link-text">
                    <img style={styles.img} src={edit} alt="edit img" />
                  </a>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Height: <strong>PATIENT HISTORY HEIGHT</strong>
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Weight: <strong>PATIENT HISTORY WEIGHT</strong>
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Allergies: <strong>PATIENT HISTORY ALLERGIES</strong>
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Current Medications:{" "}
                  <strong>PATIENT HISTORY MEDICATIONS</strong>
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Prior History Data: <strong>PATIENT HISTORY DATA</strong>
                </h6>
              </div>
            </div> */}
                        <div style={styles.row} className="row">
                            <div className="col-sm col-xs-12">
                                <div className="card" style={styles.card}>
                                    <h5 className="card-title">Chat Here!</h5>
                                    <div className="col-sm col-xs-12">
                                        <p className="card-text">
                                            <strong>CHAT LOGIN</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default DashboardDoctors;