export const navbar = {
    ".navbar": { height: "100%", backgroundColor: "#4169e1" },
    ".nav-wrapper": {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    ".logo": {
        display: "flex",
        width: "100px",
        height: "100px",
        overflow: "hidden",
        borderRadius: "50%",
        marginRight: "1rem"
    },
    ".company": {
        display: "flex",
    },
    ".h1": {
        margin: "32px 0",
        color: "whitesmoke",
        fontSize: "24px",
        fontWeight: "bolder"
    },
    "h1:hover": {
        color: "black",
        background: "transparent",
        textDecoration: "none"
    },
    ".list-wrapper": { display: "flex", alignItems: "center" },
    ".list-wrapper ul": {
        top: "0",
        left: ["0", "-100vw"],
        zIndex: 3,
        width: "100%",
        height: "86vh",
        paddingTop: "140px",
        textAlign: "center",
        position: "absolute",
        transition: "all 0.5s ease-in-out",
        backgroundColor: "rgb(0, 0, 0, 0.8)"
    },
    ".list-wrapper ul li": { listStyle: "none", marginBottom: "15px" },
    ".list-wrapper ul li a": {
        fontSize: "24px",
        padding: "10px 0",
        color: "whitesmoke",
        textDecoration: "none",
        transition: "all 0.3s ease-in-out"
    },
    ".list-wrapper ul li a:hover": {
        color: "whitesmoke",
        backgroundColor: "#dddddd"
    },
    ".list-wrapper i": {
        opacity: 0,
        zIndex: 4,
        right: "20px",
        padding: "18px",
        position: "absolute",
        borderRadius: "30px",
        backgroundColor: "#dddddd",
        transition: "all 0.5s ease-in-out"
    },
    "@media (min-width: 800px)": {
        ".list-wrapper i": { display: "none" },
        ".list-wrapper ul": {
            padding: "0",
            width: "100%",
            height: "100%",
            textAlign: "left",
            position: "relative",
            backgroundColor: "transparent"
        },
        ".list-wrapper ul li": { display: "inline-block", marginBottom: "0" },
        ".list-wrapper ul li:not(:last-child)": { marginRight: "10px" },
        ".list-wrapper ul li a": { padding: "5px", color: "whitesmoke" },
        ".list-wrapper ul li a:hover": {
            padding: "5px",
            color: "#333333",
            transform: "scale(0.8)",
            background: "transparent"
        }
    }
};
