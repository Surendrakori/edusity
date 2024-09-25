import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf'; // Import jsPDF
import './Details.css';
import student1 from '../../assets/user-1.png';
import student2 from '../../assets/user-2.png';
import student3 from '../../assets/user-3.png';
import student4 from '../../assets/user-4.png';

const Details = () => {
  const students = [
    {
      rollNumber: "111",
      name: "John Doe",
      course: "Computer Science",
      year: "2023",
      address: "123 Main St, Cityville",
      dob: "01/01/2000",
      yop: "2023",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      image: student1
    },
    {
      rollNumber: "222",
      name: "Jane Smith",
      course: "Mathematics",
      year: "2023",
      address: "456 Maple Ave, Townsville",
      dob: "02/02/1999",
      yop: "2023",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      image: student2
    },
    {
      rollNumber: "333",
      name: "Sam Williams",
      course: "Physics",
      year: "2023",
      address: "789 Oak St, Villageville",
      dob: "03/03/2000",
      yop: "2023",
      email: "samwilliams@example.com",
      phone: "456-789-0123",
      image: student3
    },
    {
      rollNumber: "444",
      name: "Emily Davis",
      course: "Chemistry",
      year: "2023",
      address: "101 Pine Rd, Hamletown",
      dob: "04/04/1998",
      yop: "2023",
      email: "emilydavis@example.com",
      phone: "321-654-9870",
      image: student4
    }
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

      // Add the image to the PDF document
      doc.addImage(student.image, 'JPEG', 10, 30, 50, 50); // Add image to PDF (position and size can be adjusted)

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
            <div className="student-image-container">
              <img src={studentDetails.image} alt={studentDetails.name} className="student-image" />
            </div>
            <div className="student-info">
              <h3>Student Details</h3>
              <p><strong>Name:</strong> {studentDetails.name}</p>
              <p><strong>Course:</strong> {studentDetails.course}</p>
              <p><strong>Year:</strong> {studentDetails.year}</p>
              <p><strong>Address:</strong> {studentDetails.address}</p>
              <p><strong>Date of Birth:</strong> {studentDetails.dob}</p>
              <p><strong>Year of Passing:</strong> {studentDetails.yop}</p>
              <p><strong>Email:</strong> {studentDetails.email}</p>
              <p><strong>Phone:</strong> {studentDetails.phone}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Details;
