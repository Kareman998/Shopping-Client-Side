import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import "./ToastMessage.css";

function Message({ bg, title, body }) {
    const [showing, setShow] = useState(true);
    return (
        <ToastContainer position="bottom-right" className="toast-container">
            <Toast bg={bg} onClose={() => setShow(false)} show={showing} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">{title}</strong>
                    <small>now</small>
                </Toast.Header>
                <Toast.Body>{body}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default Message;
