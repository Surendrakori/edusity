import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './Certificate.css';  // CSS file for styling the certificate

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/header.png';  // Import the logo
import signatureImg from '../../assets/signature.png';  // Import the signature image
import tickLogo from '../../assets/tick.jpg';  // Import the tick logo
import name from '../../assets/name.jpg';

import img1 from '../../assets/user-1.png'
import img2 from '../../assets/user-2.png'
import img3 from '../../assets/user-3.png'


const certificates = {
  '1': {
    applicantName: 'Aara begum',
    fatherName: 'MD SHAKEEL',
    motherName: 'SHAHAADHA BEGUM',
    courseName: 'C++',
    courseDuration: '90 Days',
    grade: 'A+',
    date: '17-04-2024',
    image:img1
  },
  '3': {
    applicantName: 'Leela',
    fatherName: 'Rama rao',
    motherName: 'Lakshmi',
    courseName: 'Java',
    courseDuration: '90 Days',
    grade: 'A+',
    date: '17-04-2024',
    image:img3
  },
  '2': {
    applicantName: 'Mahesh',
    fatherName: 'Krishna',
    motherName: 'Viajya nirmala',
    courseName: 'AI',
    courseDuration: '90 Days',
    grade: 'A+',
    date: '05-09-2024',
    image:img2
  },
};

const Certificate = () => {
  const [certificateID, setCertificateID] = useState('');
  const [certificateData, setCertificateData] = useState(null);

  const fetchCertificate = () => {
    if (certificates[certificateID]) {
      setCertificateData(certificates[certificateID]);
    } else {
      alert('Certificate not found');
    }
  };

  const downloadCertificateAsPDF = () => {
    const certificateElement = document.getElementById('certificateDisplay');
    
    // Convert the certificate element to canvas using html2canvas
    html2canvas(certificateElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');  // Create new jsPDF instance

      // Calculate width and height for the PDF format
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);  // Add image to PDF
      pdf.save('certificate.pdf');  // Save the generated PDF
    });
  };

  return (
    <section id="certificate">
      <h2>Download Your Certificate</h2>
      <input
        type="text"
        value={certificateID}
        onChange={(e) => setCertificateID(e.target.value)}
        placeholder="Enter Certificate ID"
        className="search-bar"
      />
      <button onClick={fetchCertificate} className="view-button">View Certificate</button>

      {certificateData && (
        <div id="certificateDisplay" className="certificate">
          {/* Header section with logo and matter */}
          <div className="certificate-header">
            <div className="logo-section">
              <img src={logo} alt="Company Logo" className="logo" />
            </div>
            <div className="company-info">
              <h2 className="company-name">GATEWAY</h2>
              <p className="company-slogan">To top talent</p>
            </div>
            <div className="contact-info">
              <p>
                <FontAwesomeIcon icon={faPhone} /> 0009-01714-5687734 <br />
                <FontAwesomeIcon icon={faEnvelope} /> icw@gmail.com <br />
                <FontAwesomeIcon icon={faMapMarkerAlt} /> HitechCity,Hyderabad <br />
              </p>
            </div>
          </div>

          {/* Line below header */}
          <hr className="header-line" />

          {/* Certificate number, logos, certification title, and profile picture in the same line */}
          <div className="certificate-main-row">
            <div className="certificate-number-and-logos">
              <p className="certificate-number">Certificate No: POTCECER2345</p>
              <div className="logos">
                <img src={name} alt="Logo 1" className="logo-image" />
              </div>
            </div>
            <div className="certificate-title">
              <p className="certificate-main">Certification</p>
              <p className="certificate-sub">of Course Completion</p>
            </div>
            <div className="image-right">
              <img src={certificateData.image} alt="Profile Picture" className="profile-pic" />
            </div>
          </div>

          {/* Full-width details section */}
          <div className="certificate-details-full">
            <div className="details-left">
              <p><strong>Applicant Name:</strong> </p>
              <p><strong>Father Name:</strong> </p>
              <p><strong>Mother Name:</strong> </p>
              <p><strong>Name of the Course:</strong> </p>
              <p><strong>Course Duration:</strong> </p>
              <p><strong>Course Results:</strong> </p>
              <p><strong>Course Completed Year:</strong> </p>
            </div>
            <div className="details-right">
              <p>{certificateData.applicantName}</p>
              <p>{certificateData.fatherName}</p>
              <p>{certificateData.motherName}</p>
              <p>{certificateData.courseName}</p>
              <p>{certificateData.courseDuration}</p>
              <p>{certificateData.grade}</p>
              <p>{certificateData.date}</p>
            </div>
          </div>

          {/* Footer with signature and tick logo */}
          <div className="certificate-footer">
            <div><p><strong>We Are Issuing A Training Certificate By Our Institute.</strong></p></div>
            <div><p><strong>I wish you all the success, happiness, and a bright future.</strong></p></div>
            <div className="signature-section">
              <img src={tickLogo} alt="Tick Logo" className="tick-logo" />
              <div className='signature-section1'>
                <img src={signatureImg} alt="Signature" className="signature-image" />
                <p className="signature-text">Authorized Signature</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {certificateData && (
        <button onClick={downloadCertificateAsPDF} className="download-button">Download Certificate as PDF</button>
      )}
    </section>
  );
};

export default Certificate;
