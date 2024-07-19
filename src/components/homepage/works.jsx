import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Resume from './Resume.png';
import Resumepdf from './styles/Resume.pdf';
import "./styles/works.css";

const Card = ({ icon, title, body, onClick }) => (
    <div 
        onClick={onClick} 
        style={{ 
            cursor: 'pointer', 
            border: '1px solid #ccc', 
            padding: '16px', 
            borderRadius: '8px', 
            textAlign: 'center', 
            position: 'relative',
            overflow: 'hidden',
        }}
    >
        <FontAwesomeIcon icon={icon} size="3x" />
        <h3>{title}</h3>
        {body}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}></div>
    </div>
);

const Works = () => {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = Resumepdf; 
		link.download = 'Moulitharan Resume.pdf'; 
		link.click();
	};
	

    return (
        <div className='work'>
            <h1>Resume</h1>
            <Card 
               
                body={
                    <div style={{ height: '1000px' }}>
                        <img src={Resume} alt="Resume" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                }
                onClick={handleDownload}
            />
        </div>
    );
};

export default Works;
