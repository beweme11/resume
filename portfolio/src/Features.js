import React from 'react';

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 h-screen">
      <h2 className="text-3xl font-semibold mb-4">Features</h2>
      <div className="flex justify-between">
        <div className="w-full sm:w-screen p-4 shadow-md">
          <img src="feature1.jpg" alt="Feature 1" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
          <p className="text-gray-600">Choose from a variety of professionally designed templates to create your resume.</p>
        </div>
        <div className="w-full sm:w-screen p-4 shadow-md">
          <img src="feature2.jpg" alt="Feature 2" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Customization</h3>
          <p className="text-gray-600">Customize your resume with ease using our intuitive editor and drag-and-drop interface.</p>
        </div>
        <div className="w-full sm:screen p-4 shadow-md">
          <img src="feature3.jpg" alt="Feature 3" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Export to PDF</h3>
          <p className="text-gray-600">Export your resume as a PDF file wow for easy sharing and printing.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
