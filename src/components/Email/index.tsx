import React, { useEffect, useState } from "react";
import { send } from 'emailjs-com';
import "./index.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Email = () => {
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID as string
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID as string
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY as string
    
    const [revealed, setRevealed] = useState(false)
    const [blink, setBlink] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setBlink(!blink);
        }, 700)
        return () => clearInterval(interval);
    })

    const [toSend, setToSend] = useState({
        from_email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
        e.preventDefault();
        if (toSend.from_email === "" || toSend.message === "" || toSend.subject === "") {
            alert("Please fill out every field.")
        } else {
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
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return revealed ? (
        
        <div className="email-container">
            <div className="header-bar">
                <div className="write-me">
                    Send me a short message! 
                </div>
                <div className="minimize">
                    <AiOutlineDown onClick={() => setRevealed(!revealed)} />
                </div>
            </div>
            <form className="form">
                <div className="input">
                    <label htmlFor="from_email">&gt;&nbsp;&nbsp;your email address:</label>
                    <input
                        type="text"
                        name="from_email"
                        placeholder={blink ? "__" : ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="input">
                    <label htmlFor="name">&gt;&nbsp;&nbsp;subject:</label>
                    <input
                        placeholder={blink ? "__" : ""}
                        type="text"
                        name="subject"
                        onChange={handleChange}
                    />
                </div>
                <div className="input message">
                    <label htmlFor="message">&gt;&nbsp;&nbsp;your message:</label>
                    <textarea
                        placeholder={blink ? "__" : ""}
                        name="message"
                        onChange={handleChange}
                    />
                </div>
                <button className="submit" onClick={(e) => handleSubmit(e)} >Send Message</button>
            </form>
        </div>
    ) : (
            <div className="header-bar">
                <div className="write-me">
                    Send me a short message!
                </div>
                <div className="minimize">
                    <AiOutlineUp onClick={() => setRevealed(!revealed)} />
                </div>
            </div>
    )
};

export default Email;