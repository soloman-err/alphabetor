import React from 'react';
import { useUser } from '../../lib/context/user';

// const user = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   bio: 'Passionate web developer with a love for coding and creating amazing user experiences.',
//   experience: [
//     {
//       title: 'Frontend Developer',
//       company: 'Tech Solutions Inc.',
//       description:
//         'Worked on developing responsive and interactive user interfaces for web applications.',
//     },
//     {
//       title: 'Backend Developer',
//       company: 'Code Wizards Ltd.',
//       description:
//         'Implemented server-side logic, databases, and APIs for web applications.',
//     },
//   ],
//   education: [
//     {
//       degree: 'Bachelor of Science in Computer Science',
//       school: 'University of Example',
//       year: '2016 - 2020',
//     },
//   ],
//   certifications: ['Certified Web Developer', 'React Developer Certification'],
//   socialLinks: [
//     {
//       name: 'LinkedIn',
//       url: 'https://www.linkedin.com/in/johndoe/',
//     },
//     {
//       name: 'GitHub',
//       url: 'https://github.com/johndoe',
//     },
//   ],
//   profilePicture: 'https://via.placeholder.com/150',
// };

const UserProfile = () => {
  const user = useUser();
  const currentUser = user?.current;
  console.log(currentUser?.email);


  if (!user) {
    return <div>Loading...</div>;
  }

  // const {
  //   name,
  //   email,
  //   bio,
  //   skills,
  //   experience,
  //   education,
  //   certifications,
  //   socialLinks,
  // } = user;

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center">
          <img
            src={currentUser?.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">{currentUser?.name}</h1>
          <p className="text-gray-500 mb-4">{currentUser?.email}</p>
          <p className="text-gray-700">{currentUser?.bio}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Experience</h2>
          {currentUser?.experience?.map((job, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-500">{job.company}</p>
              <p className="text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Education</h2>
          {currentUser?.education?.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-gray-500">{edu.school}</p>
              <p className="text-gray-700">{edu.year}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Certifications</h2>
          <ul className="list-disc pl-6">
            {currentUser?.certifications?.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Social Links</h2>
          <ul className="flex space-x-4">
            {currentUser?.socialLinks?.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
