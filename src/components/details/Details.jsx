import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf'; // Import jsPDF
import './Details.css';

const Details = () => {
  const students = [
    { rollNumber: "111", name: "John Doe", course: "Computer Science", year: "2023" },
    { rollNumber: "222", name: "Jane Smith", course: "Mathematics", year: "2023" }
  ];

  const [rollNumber, setRollNumber] = useState('');
  const [studentDetails, setStudentDetails] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {
    const student = students.find(s => s.rollNumber === rollNumber);
    if (student) {
      setStudentDetails(student);
      setError('');
    } else {
      setStudentDetails(null);
      setError('No user found');
    }
  };

  const handleDownload = () => {
    const student = students.find(s => s.rollNumber === rollNumber);
    if (student) {
      const doc = new jsPDF(); // Create a new jsPDF instance

      // Create the content of the certificate
      const certificateText = `
        Certificate of Completion
        ----------------------------
        Name: ${student.name}
        Course: ${student.course}
        Year: ${student.year}
      `;

      // Add the text to the PDF document
      doc.text(certificateText, 10, 10);

      // Save the generated PDF document
      doc.save(`${student.name}_Certificate.pdf`);
    } else {
      alert('No user found');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="details">
      <header className="details-header">
        <h1>College Student Portal</h1>
        <button onClick={handleDownload} disabled={!rollNumber}>Download Certificate</button>
        <button onClick={handleBack} className="back-button">Back to Home</button> {/* Back button */}
      </header>
      <main className="details-main">
        <h2>Search Student Details</h2>
        <input
          type="text"
          className="details-input"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          placeholder="Enter Roll Number"
        />
        <button className="details-button" onClick={handleSearch}>Search</button>

        {error && <p className="details-error">{error}</p>}
        {studentDetails && (
          <div className="details-student">
            <h3>Student Details</h3>
            <p>Name: {studentDetails.name}</p>
            <p>Course: {studentDetails.course}</p>
            <p>Year: {studentDetails.year}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Details;
