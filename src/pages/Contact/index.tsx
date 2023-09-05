import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './index.css'

const Contact = () => {

    const CODE = `
    {
        "contact_details": {
            "name": "Giorgi Samushia",
            "address": "3660 Oxford Ave, Bronx, NY, 10463",
            "reach_at": {
                "mail": "giorgisamu.gs@gmail.com",
                "phone": "(347) 865-4800"
            },
            "links": {
                "linkedin": "linkedin.com/in/giorgisamushia",
                "github": "github.com/umasshia",
                "portfolio": "umasshia.github.io/portfolio"
            }
        }
    }`

    return (
        <div className="code">
            <SyntaxHighlighter
                showLineNumbers={true}
                language="json"
                style={railscasts}>
                {CODE}   
            </SyntaxHighlighter>
        </div>
    );
};

export default Contact;