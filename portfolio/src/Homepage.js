import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleTryItOutClick = () => {
    navigate('/build');
  };

  return (
    <div className="bg-[url('\layered-waves-haikei.svg')]" id = "1234">
    <div className="flex flex-col items-center justify-center h-screen ">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Make and update professional resumes for your next job.</h1>
        <p className="text-lg">Use the power of generative AI to standout in the interview process.</p>
      </header>
      <section className="max-w-md text-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Features</h2>
        <ul className="list-disc">
          <li className="mb-2">Convert documents to PDF</li>
          <li className="mb-2">Merge multiple PDFs into one</li>
          <li className="mb-2">Split PDFs into individual pages</li>
          <li className="mb-2">Compress PDFs for easy sharing</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center justify-center" onClick={handleTryItOutClick}>
          Try it out 
        </button>
      </section>
    </div>
    <div className="max-w-7xl mx-auto py-8 px-4 h-screen">
  <h2 className="text-3xl font-semibold mb-4">Features</h2>
  <div className="flex flex-wrap justify-between">
    <div className="w-full sm:w-1/2 md:w-1/3 p-4 shadow-xl shadow-cyan-500/50 bg-teal-100">
      <img src="feature1.jpg" alt="Feature 1" className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
      <p className="text-gray-600">Choose from a variety of professionally designed templates to create your resume.</p>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 p-4 shadow-xl shadow-cyan-500/50 bg-teal-100">
      <img src="feature2.jpg" alt="Feature 2" className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Easy Customization</h3>
      <p className="text-gray-600">Customize your resume with ease using our intuitive editor and drag-and-drop interface.</p>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 p-4 shadow-xl shadow-cyan-500/50 bg-teal-100">
      <img src="feature3.jpg" alt="Feature 3" className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Export to PDF</h3>
      <p className="text-gray-600">Export your resume as a PDF file for easy sharing and printing.</p>
    </div>
  </div>
</div>

    </div>
    
  );
};

export default Home;
