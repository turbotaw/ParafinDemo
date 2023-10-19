import React from 'react';
import { useNavigate } from 'react-router-dom';
import financingImage from '../../img/Access_financing.webp';
import './FinancingSection.css';

const FinancingSection: React.FC = () => {
const navigate = useNavigate();

  const handleGetOffer = () => {
    navigate('/BusinessSubmission');
  };
    return (
        <div className="financing-container">
            <div className="text-section">
                <h2>Access financing</h2>
                <p>
                    Take your business to the next level by expanding with GrubDash Capital. Easy, accessible financing
                    can help eligible merchants invest in new equipment, open a new location, hire more employees,
                    and much more. 
                </p>
                <button onClick={handleGetOffer} className="button">Get financing now</button>
            </div>
            <img src={financingImage} alt="Description" className="financing-image" />

        </div>
    );
}

export default FinancingSection;
