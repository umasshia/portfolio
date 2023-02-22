import React, { useState } from "react";
import { send } from 'emailjs-com';
import "./index.css";

const Email = () => {
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID as string
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID as string
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY  as string

    const [toSend, setToSend] = useState({
        from_email: "",
        subject: "",
        message: ""
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        send(
            SERVICE_ID,
            TEMPLATE_ID,
            toSend,
            PUBLIC_KEY
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message Sent Successfuly :)")
        })
        .catch((err) => {
            console.log('FAILED...', err);
            alert("Something went wrong :(")
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className="email-container">
            <form id="form" onSubmit={onSubmit}>
                <div>
                    <input
                        className="input"
                        type="text"
                        name="from_email"
                        placeholder="Your Email Address"
                        onChange={handleChange}
                    />
                </div>
                <div >
                    <input
                        className="input"
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <textarea
                        className="message"
                        placeholder="Message"
                        name="message"
                        onChange={handleChange}
                    />
                </div>
                <button className="submit" type="submit" >Send Message</button>
            </form>
        </div>
    );
};

export default Email;
