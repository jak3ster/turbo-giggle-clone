import React from "react";
import { useQuery } from "@apollo/client";
import Auth from '../utils/auth';
import { GET_PATIENT_EMAIL_BY_ID } from '../utils/queries';
import "../css/style.css";

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
};

const History = (props) => {
    const userData = Auth.getProfile();
    const { loading: l, data: d } = useQuery(GET_PATIENT_EMAIL_BY_ID, { variables: { _id: userData.data._id } });

    if (l) {
        return <h2>LOADING...</h2>;
    }

    return (
        <div style={styles.container}>
            <br></br>
            <div className="col-md-8">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            <strong>{d.getPatientEmailByID.firstName} {d.getPatientEmailByID.lastName}'s</strong> History
                        </h4>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>
                                Height: <strong>6' 2"</strong>
                            </li>
                            <li>
                                Weight: <strong>150 lbs</strong>
                            </li>
                            <li>
                                Allergies: <strong>Diphenhydramine</strong>
                            </li>
                            <li>
                                Medications: <strong>Benadryl</strong>
                            </li>
                        </ul>
                        {/* Can the button edit the history for height, weight, allergies and medication or should we not since its previous history? */}
                        <button
                            type="button"
                            className="btn btn-lg btn-block btn-outline-primary"
                        >
                            Click to Edit
                        </button>
                    </div>
                </div>
            </div>{" "}
        </div>
    );
};

export default History;
