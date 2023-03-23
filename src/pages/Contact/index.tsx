import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './index.css'

const Contact = () => {

    const CODE = `
    {
        "contact_details": 
        {
            "name": "Giorgi Samushia",
            "address": "3640 Tibbett Ave, Bronx, NY, 10463",
            "reach_at": 
            {
                "mail": "giorgisamu.gs@gmail.com",
                "phone": "+1 (929) 486 - 9343"
            },
            "links": 
            {
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