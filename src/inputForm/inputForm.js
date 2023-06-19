import React, { useState } from 'react';
import './inputForm.css'; // Import the CSS file for styling

function MyForm() {
  const jsonData = {
    "name": "Anish Kumar Dey",
    "personalInformation": {
      "Email": "anishdey40@gmail.com",
      "Alternate email": "anishdey94@outlook.com",
      "Mobile": "7980720475",
      "Alternate mobile": null,
      "Address": "16 Raj Ballav Saha Lane, Howrah: 711101, WB"
    },
    "professionalInformation": [
      {
        "companyName": "John Deere",
        "companyLocation": "Pune, MH",
        "jobTitle": "Senior software developer",
        "jobDuration": "September 2021 to till date",
        "jobResponsibility": [
          "Developed a scalable, cloud-based multi platform application where customer can check their financial data with John Deere.",
          "Key feature which I build or was a part: payment Gateway with pay u, WhatsApp chat bot, Omni notification platform.",
          "My contribution in other important areas:  Enhanced code optimization, secure authentication, unit test coverage, automated end to end testing,  react-redux with saga implementation"
        ]
      },
      {
        "companyName": "Amdocs",
        "companyLocation": "Pune, MH",
        "jobTitle": "Software developer",
        "jobDuration": "October 2019 to september 2021",
        "jobResponsibility": [
          "Developed Application UIs via emerging Front End Technologies such as React JS with Redux, Backbone JS, Ractive JS.",
          "Designed and updated layouts to meet usability and performance requirements."
        ]
      },
      {
        "companyName": "Indus net Technologies Pvt Ltd",
        "companyLocation": "Kolkata, WB",
        "jobTitle": "Junior Software Developer",
        "jobDuration": "October 2018 to October 2019",
        "jobResponsibility": [
          "Developed UI for B2B application using React JS, HTML and CSS, integrating design, extensions according to web development plans"
        ]
      },
      {
        "companyName": "Dextrosoft Pvt. Ltd",
        "companyLocation": "Kolkata, WB",
        "jobTitle": "Software Developer Intern",
        "jobDuration": "March 2018 to Augest 2018.",
        "jobResponsibility": []
      }
    ],
    "educationInformation": [
      {
        "degree": "MCA",
        "points": "7.98",
        "institution": "Techno India",
        "address": "kolkata, WB",
        "duration": "2015 - 2018"
      },
      {
        "degree": "BCA",
        "points": "7.44",
        "institution": "Meghnad Saha Institute of Technology",
        "address": "kolkata, WB",
        "duration": "2012 - 2015"
      },
      {
        "degree": "Higher Secondary",
        "points": "61.2%",
        "institution": "Sri Ramkrishna Sikshalaya",
        "address": "Howrah, WB",
        "duration": "2010 - 2012"
      },
      {
        "degree": "Secondary",
        "points": "67.38%",
        "institution": "Sri Ramkrishna Sikshalaya",
        "address": "Howrah, WB",
        "duration": "2010"
      }
    ],
    "cvHighlights": {
      "currentRole": "Senior software developer",
      "cvSummary": [
        "Full-stack development expertise.",
        "Strong knowledge of software development methodologies (Agile, Scrum).",
        "Team leadership and collaboration.",
        "Analytical and problem-solving abilities.",
        "Excellent communication and interpersonal skills.",
        "Love to take part in cultural activities."
      ]
    },
    "skills": {
      "React JS": 5,
      "Node JS": 4,
      "AWS": {
        "EC2": 2,
        "S3": 2,
        "Lambda": 4,
        "Api Gateway": 4,
        "Cloud Watch": 4,
        "Dynao DB": 4
      },
      "Redux": 5,
      "HTML,CSS": 5
    },
    "language": {
      "English": "R W S",
      "Bengali": "R W S",
      "Hindi": "S"
    }
  };

  const initialFormData = {};

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Handle form submission or data saving logic
    console.log(formData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const renderFormFields = (data, parentKey = '') => {
    return Object.entries(data).map(([key, value]) => {
      const fieldName = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        return renderFormFields(value, fieldName);
      }

      return (
        <div key={fieldName} className="form-field">
          <label htmlFor={fieldName}>{key}</label>
          <input
            type="text"
            id={fieldName}
            name={fieldName}
            value={formData[fieldName] || ''}
            onChange={handleInputChange}
          />
        </div>
      );
    });
  };

  return (
    <div className="form-container">
      <h2>My Form</h2>

      {renderFormFields(jsonData)}

      <div className="button-container">
        <button className="save-button" onClick={handleSave}>Save</button>
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default MyForm;
