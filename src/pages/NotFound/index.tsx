import { Link, useLocation } from "react-router-dom";
import "./index.css";

const NotFound = () => {
    const location = useLocation();

    return (
        <div className="not-found">
            <h1 className="not-found-title">Unable to open file</h1>
            <pre className="not-found-error">
{`Error: ENOENT: no such file or directory
  at Object.openSync (fs.js:498:3)
  at readFileSync (fs.js:394:35)
  path: '${location.pathname}'`}
            </pre>
            <Link to="/" className="not-found-link">
                &larr; Return to workspace
            </Link>
        </div>
    );
};

export default NotFound;
