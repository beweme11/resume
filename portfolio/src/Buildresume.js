import React, { useState } from 'react';

const BuildPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    objective: '',
    github:'',
    linkedin : '',


    experiences: [
      {
        company: '',
        periodOfWork: '',
        position: '',
        description: ''
      }
    ],
    projects: [
      {
        title: '',
        description: '',
        technologiesUsed: []
      }
    ],
    skills: '',
    education: '',
    certifications: ''
  });

  const [activeSection, setActiveSection] = useState('Profile');



  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [name]: value };
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const handleChangeProject = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...formData.projects];
    updatedProjects[index] = { ...updatedProjects[index], [name]: value };
    setFormData({ ...formData, projects: updatedProjects });
  };


  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { company: '', periodOfWork: '', position: '', description: '' }
      ]
    });
  };
  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        { title: '', description: '',  technologiesUsed: '' }
      ]
    });
  };

  const removeExperience = (index) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences.splice(index, 1);
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const removeProject = (index) => {
    const updatedProjects = [...formData.projects];
    updatedProjects.splice(index, 1);
    setFormData({ ...formData, projects: updatedProjects });
  };


  const handleClick = () => {
    console.log(formData); // Log the form data when button is clicked
  };

  return (  
    <div className="flex flex-col md:flex-row bg-[url('./stacked-waves-haikei-build.svg')] h-screen overflow-hidden">
      <div className="md:w-1/7 bg-gray-200 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Sections:</h2>
        <ul>
          <li>
            <button onClick={() => setActiveSection('Profile')} className={`block text-left w-full py-2 px-4 ${activeSection === 'Profile' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-200'}`}>
              Profile
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection('Experience')} className={`block text-left w-full py-2 px-4 ${activeSection === 'Experience' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-200'}`}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection('Projects')} className={`block text-left w-full py-2 px-4 ${activeSection === 'Projects' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-200'}`}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection('Skills')} className={`block text-left w-full py-2 px-4 ${activeSection === 'Skills' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-200'}`}>
              Skills
            </button>
          </li>

          <li>
            <button onClick={() => setActiveSection('Education')} className={`block text-left w-full py-2 px-4 ${activeSection === 'Education' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-200'}`}>
              Education
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection('Certifications')} className={`block text-left w-full py-2 px-4 ${activeSection === 'Certifications' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-200'}`}>
              Certifications
            </button>
          </li>
        </ul>
      </div>
      <div className="md:w-2/5 p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8">Tell us about you</h1>
        {activeSection === 'Profile' && (
          <div className="grid grid-cols-1  gap-8">
            <div>
            <h1 className="text-2xl font-bold mb-8">General Profile</h1>

              <label className="block mb-4">
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="border rounded-md px-4 py-2 w-full"
                  placeholder="Enter your full name or however you want it to be displayed on the resume"
                />
              </label>
              <label className="block mb-4">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border rounded-md px-4 py-2 w-full"
                  placeholder="Enter your email address"
                />
              </label>
              <label className="block mb-4">
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border rounded-md px-4 py-2 w-full"
                  placeholder="Enter your phone number"
                />
              </label>
              <label className="block mb-4">
                Github:
                <input
                  type="link"
                  name="Github link"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="border rounded-md px-4 py-2 w-full"
                  placeholder="Enter your github profile link"
                />
              </label>
              <label className="block mb-4">
                Linkedin:
                <input
                  type="link"
                  name="linkedin link"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="border rounded-md px-4 py-2 w-full"
                  placeholder="Enter your linkedin profile link"
                />
              </label>
              <label className="block mb-4">
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="border rounded-md px-4 py-2 w-full"
                  placeholder="Enter your address"
                />
              </label>
              <label className="block mb-4">
                Objective:
                <textarea
                  name="objective"
                  value={formData.objective}
                  onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                  className="border rounded-md px-4 py-2 w-full"
                  rows="4"
                  placeholder="Write your career objective"
                ></textarea>
              </label>
            </div>
          </div>
        )}
        {activeSection === 'Experience' && (
          <div className="grid grid-cols-1  gap-8">
            <div>
            <h1 className="text-2xl font-bold mb-8">Experience</h1>
              {formData.experiences.map((experience, index) => (
                <div key={index} className="border-gray-400 border-b-8 py-4">
                  <label className="block mb-4">
                    Company:
                    <input
                      type="text"
                      name="company"
                      value={experience.company}
                      onChange={(e) => handleChange(e, index)}
                      className="border rounded-md px-4 py-2 w-full"
                      placeholder="Enter company name"
                    />
                  </label>
                  <label className="block mb-4">
                    Period of Work:
                    <input
                      type="text"
                      name="periodOfWork"
                      value={experience.periodOfWork}
                      onChange={(e) => handleChange(e, index)}
                      className="border rounded-md px-4 py-2 w-full"
                      placeholder="Enter period of work"
                    />
                  </label>
                  <label className="block mb-4">
                    Position:
                    <input
                      type="text"
                      name="position"
                      value={experience.position}
                      onChange={(e) => handleChange(e, index)}
                      className="border rounded-md px-4 py-2 w-full"
                      placeholder="Enter your position"
                    />
                  </label>
                  <label className="block mb-4">
                    Description:
                    <textarea
                      name="description"
                      value={experience.description}
                      onChange={(e) => handleChange(e, index)}
                      className="border rounded-md px-4 py-2 w-full"
                      rows="4"
                      placeholder="Enter job description"
                    ></textarea>
                  </label>
                  {index > 0 && (
                    <button type="button" onClick={() => removeExperience(index)} className="text-white bg-red-500 py-1 px-2 rounded">
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addExperience} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Experience
              </button>
            </div>
          </div>
        )}
        {activeSection === 'Projects' && (
          <div className="grid grid-cols-1 gap-8">
            <div>
            <h1 className="text-2xl font-bold mb-8">Projects</h1>

              {formData.projects.map((project, index) => (
                <div key={index} className="relative">
                  <div className="border-gray-400 border-b-8 py-4">
                    <label className="block mb-4">
                      Title:
                      <input
                        type="text"
                        name="title"
                        value={project.title}
                        onChange={(e) => handleChangeProject(e, index)}
                        className="border rounded-md px-4 py-2 w-full"
                        placeholder="Enter project title"
                      />
                    </label>
                    <label className="block mb-4">
                      Description:
                      <textarea
                        name="description"
                        value={project.description}
                        onChange={(e) => handleChangeProject(e, index)}
                        className="border rounded-md px-4 py-2 w-full"
                        rows="4"
                        placeholder="Enter project description"
                      ></textarea>
                    </label>
                    <label className="block mb-4">
                      Technologies Used:
                      <input
                        type="text"
                        name="technologiesUsed"
                        value={project.technologiesUsed}
                        onChange={(e) => handleChangeProject(e, index)}
                        className="border rounded-md px-4 py-2 w-full"
                        placeholder="Enter technologies used"
                      />
                    </label>
                    {index > 0 && (
                      <div className=" "></div>
                    )}
                    {index > 0 && (
                      <button type="button" onClick={() => removeProject(index)} className="text-white bg-red-500 py-1 px-2 rounded">
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button type="button" onClick={addProject} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Project
              </button>
            </div>
          </div>
        )}
        {activeSection === 'Skills' && (
          <div>
            <h1 className="text-2xl font-bold mb-8">Skills</h1>
            <label className="block mt-8 w-full max-w-4xl">
              Skills:
              <textarea
                name="skills"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                className="border rounded-md px-4 py-2 w-full"
                rows="4"
                placeholder="Enter your skills"
              ></textarea>
            </label>
          </div>
        )}
        {activeSection === 'Education' && (
          <div>
          <h1 className="text-2xl font-bold mb-8">Education</h1>
            <label className="block mt-8 w-full max-w-4xl">
              Education:
              <textarea
                name="education"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                className="border rounded-md px-4 py-2 w-full"
                rows="4"
                placeholder="Enter your education details"
              ></textarea>
            </label>
          </div>
        )}
        {activeSection === 'Certifications' && (
          <div>
            <h1 className="text-2xl font-bold mb-8">Certifications</h1>
            <label className="block mt-8 w-full max-w-4xl">
              Certifications:
              <textarea
                name="certifications"
                value={formData.certifications}
                onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                className="border rounded-md px-4 py-2 w-full"
                rows="4"
                placeholder="Enter your certifications"
              ></textarea>
            </label>
          </div>
        )}
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
          Log Information
        </button>
      </div>
    </div>
  );
};

export default BuildPage;
