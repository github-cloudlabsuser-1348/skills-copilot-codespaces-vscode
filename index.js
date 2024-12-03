import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '50%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );

    const reverseSentence = (sentence) => {
        return sentence
            .split(' ')
            .reverse()
            .join(' ')
            .replace(/^\w/, (c) => c.toUpperCase());
    };

    const inputSentence = "hello world";
    const reversedSentence = reverseSentence(inputSentence);
    console.log(reversedSentence); // "World hello"

    const data = [
        [{ name: 'John' }, { name: 'Doe' }],
        [{ name: 'Jane' }, { name: 'Smith' }],
        [{ name: 'Bob' }, { name: 'Brown' }]
    ];

    const names = data.flat().map(item => item.name);
    console.log(names); // ['John', 'Doe', 'Jane', 'Smith', 'Bob', 'Brown']
}