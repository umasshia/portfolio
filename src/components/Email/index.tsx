import React, { FormEvent, useState } from "react";
import { send } from 'emailjs-com';
import "./index.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import terminal from "../../icons/terminal.png"

const Email = () => {
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID as string
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID as string
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY as string
    
    const [revealed, setRevealed] = useState(false)
    const [count, setCount] = useState(0)


    const [toSend, setToSend] = useState({
        from_email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: FormEvent) => {
        console.log('event')
        const temp = toSend
        if (temp.from_email === "" || temp.message === "" || temp.subject === "") {
            if (temp.from_email !== "") setCount(1)
            if (temp.subject !== "") setCount(2)
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
                setCount(0)
                setToSend({
                    from_email: "",
                    subject: "",
                    message: ""
                }
                )
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert("Something went wrong :(")
            });
        }
        e.preventDefault()
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return revealed ? (
        
        <div className="email-container">
            <div className="header-bar">
                <div className="write-me">
                    <img src={terminal} alt='terminal img' />
                    send me a short message!
                </div>
                <div className="minimize">
                    <AiOutlineDown onClick={() => setRevealed(!revealed)} />
                </div>
            </div>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <div className="input">
                    <label htmlFor="from_email"><span className="o">o</span><span className="ugs">u@gs</span>:<span className="squiggle">~</span>$&nbsp;your email address:</label>
                    <input
                        className="input field"
                        type="text"
                        name="from_email"
                        onChange={handleChange}
                        autoComplete="off"
                        autoFocus={count === 0}
                    />
                </div>
            </form>
            {count > 0 && (
                <form className="form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="input">
                        <label htmlFor="name"><span className="o">o</span><span className="ugs">u@gs</span>:<span className="squiggle">~</span>$&nbsp;subject:</label>
                        <input
                            className="input field"
                            type="text"
                            name="subject"
                            onChange={handleChange}
                            autoComplete="off"
                            autoFocus={count > 0}
                        />
                    </div>
                </form>
                )}
            {count > 1 && (
                <>
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="input message">
                            <label htmlFor="message"><span className="o">o</span><span className="ugs">u@gs</span>:<span className="squiggle">~</span>$&nbsp;your message:</label>
                            <textarea
                                className="input field"
                                name="message"
                                onChange={handleChange}
                                autoComplete="off"
                                autoFocus={count > 1}
                            />
                        </div>
                    </form>
                    <button className="submit" onClick={(e) => handleSubmit(e)} >Send Message</button>
                </>
                )}
        </div>
    ) : (
            <div className="header-bar">
                <div className="write-me">
                    <img src={terminal} alt='terminal img' />
                    send me a short message!
                </div>
                <div className="minimize">
                    <AiOutlineUp onClick={() => setRevealed(!revealed)} />
                </div>
            </div>
    )
};

export default Email;