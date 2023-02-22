import { useState, useEffect } from 'react';

export function useFetchText(txt: string) {
    const [text, setText] = useState("");

    useEffect(() => {
        async function getText() {
        const response = await fetch(txt);
        const text = await response.text();
        setText(text);
        }
        getText();
    }, [txt]);

    return text;
}