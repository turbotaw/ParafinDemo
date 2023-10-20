import React from 'react';
import { useNavigate } from 'react-router-dom';
import financingImage from '../../img/Access_financing.webp';
import './FinancingSection.css';

interface FinancingSectionProps {
    userStatus: 'no-offer' | 'has-offer' | 'offer-accepted';
}

const FinancingSection: React.FC<FinancingSectionProps> = ({ userStatus }) => {
    const navigate = useNavigate();

    const handleGetOffer = () => {
        if (userStatus === 'no-offer') {
            navigate('/BusinessSubmission');
        } else if (userStatus === 'has-offer') {
            navigate('/OfferPage');
        } else if (userStatus === 'offer-accepted') {
            navigate('/OfferPage');
        }
    };

    const getButtonLabel = () => {
        switch (userStatus) {
            case 'no-offer':
                return 'Get financing now';
            case 'has-offer':
                return 'View your offers';
            case 'offer-accepted':
                return 'View your accepted offer';
            default:
                return 'Get financing now';
        }
    };

    const getHeaderText = () => {
        switch (userStatus) {
            case 'no-offer':
                return 'Access financing';
            case 'has-offer':
                return 'Congrats! Your business is pre-approved for a loan';
            case 'offer-accepted':
                return 'Your financing offer was accepted!';
            default:
                return 'Access financing';
        }
    };
    console.log(userStatus);
    const getParagraphText = () => {
        switch (userStatus) {
            case 'no-offer':
                return 'Take your business to the next level by expanding with GrubDash Capital. Easy, accessible financing can help eligible merchants invest in new equipment, open a new location, hire more employees, and much more.';
            case 'has-offer':
                return 'Check out the financing offer available to you through GrubDash Capital and take the next step in growing your business.';
            case 'offer-accepted':
                return 'Congratulations on your accepted offer! You can view the status of your financing agreement anytime.';
            default:
                return 'Take your business to the next level by expanding with GrubDash Capital. Easy, accessible financing can help eligible merchants invest in new equipment, open a new location, hire more employees, and much more.';
        }
    };

    return (
        <div className="financing-container">
            <div className="text-section">
                <h2>{getHeaderText()}</h2>
                <p>{getParagraphText()}</p>
                <button onClick={handleGetOffer} className="button">{getButtonLabel()}</button>
            </div>
            <img src={financingImage} alt="Description" className="financing-image" />
        </div>
    );
}

export default FinancingSection;
