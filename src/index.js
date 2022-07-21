import React from 'react';
import ReactDOM from 'react-dom/client';
import MyNotes from './pages/MyNotes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MyNotes />
    </React.StrictMode>,
);
