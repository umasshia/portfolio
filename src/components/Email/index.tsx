import React, { FormEvent, useRef, useState } from "react";
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
    const ref = useRef<HTMLTextAreaElement>(null);
    const [sent, setSent] = useState(false)

    const [toSend, setToSend] = useState({
        from_email: "",
        subject: "",
        message: "",
        send: ""
    });

    const handleTextareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e)
        }
    }

    const handleTextAreaSize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (ref.current) {
            ref.current.style.height = "auto";
            ref.current.style.height = `${e.target.scrollHeight - 16}px`;
        }
    };

    const handleSubmit = (e: FormEvent) => {
        console.log('event')
        const temp = toSend
        if (temp.from_email === "" || temp.message === "" || temp.subject === "" || temp.send === "") {
            if (temp.from_email !== "") setCount(1)
            if (temp.subject !== "") setCount(2)
            if (temp.message !== "") setCount(3)
        } else {
            if (temp.send.toLowerCase() === 'send') {
                send(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    toSend,
                    PUBLIC_KEY
                )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text); 
                    setTimeout(() => {
                        setSent(true)
                    }, 1000)
                    setCount(0)
                    setToSend({
                        from_email: "",
                        subject: "",
                        message: "",
                        send: ""
                    }
                    )
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                    alert("Something went wrong :(")
                });
            }
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
                        type="text"
                        name="from_email"
                        onChange={handleChange}
                        autoComplete="off"
                        autoFocus={count === 0}
                        disabled={sent}
                    />
                </div>
            </form>
            {count > 0 && (
                <form className="form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="input">
                        <label htmlFor="name"><span className="o">o</span><span className="ugs">u@gs</span>:<span className="squiggle">~</span>$&nbsp;subject:</label>
                        <input
                            type="text"
                            name="subject"
                            onChange={handleChange}
                            autoComplete="off"
                            autoFocus={count > 0}
                            disabled={sent}
                        />
                    </div>
                </form>
                )}
            {count > 1 && (
                <>
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="input-message">
                            <label htmlFor="message"><span className="o">o</span><span className="ugs">u@gs</span>:<span className="squiggle">~</span>$&nbsp;your message &#40;shift + enter for next line&#41;:</label>
                            <textarea
                                ref={ref}
                                name="message"
                                onChange={(e) => { handleChange(e); handleTextAreaSize(e) }}
                                onKeyDown={(e) => handleTextareaKeyDown(e)}
                                autoComplete="off"
                                autoFocus={count > 1}
                                disabled={sent}
                            />
                        </div>
                    </form>
                </>
            )}
            {count > 2 && (
                <>
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="input">
                            <label htmlFor="send"><span className="o">o</span><span className="ugs">u@gs</span>:<span className="squiggle">~</span>$&nbsp;type 'send' to send message:</label>
                            <input
                                type="text"
                                name="send"
                                onChange={handleChange}
                                autoComplete="off"
                                autoFocus={count === 3}
                                disabled={sent}
                            />
                        </div>
                    </form>
                </>
            )}
            {sent && (
                <div className="form">
                    <div className="sent">
                        <label htmlFor="sent"><span className="o">o</span><span className="ugs">u@gs</span>:<span className="squiggle">~</span>$&nbsp;message sent!</label>
                    </div>
                </div>
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