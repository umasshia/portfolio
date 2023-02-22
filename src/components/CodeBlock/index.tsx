import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

interface Props {
    fileUrl: string;
}


function CodeBlock({ fileUrl }: Props) {
    const [code, setCode] = useState('');

    useEffect(() => {
    fetch(fileUrl)
        .then(response => response.text())
        .then(text => setCode(text));
    }, [fileUrl]);

    return (
    <pre className="code-block">
        <code>{code}</code>
    </pre>
    );
}

CodeBlock.propTypes = {
    fileUrl: PropTypes.string.isRequired,
};


export default CodeBlock;
