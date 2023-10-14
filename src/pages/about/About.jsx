import React from 'react';

const imageUrls = [
  'https://www.irishtimes.com/resizer/OPbrYntjkwSvbVRdyGiPUeLfZTA=/1440x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/FWUL3PUZJNNAFMKBYFISJVLEPQ.jpg',
  'https://s01.sgp1.cdn.digitaloceanspaces.com/article/157814-dngaqrvkqw-1618826763.jpg',
  'https://www.irishtimes.com/resizer/6IK8ZjmJe9ZMNJPLaiQ0uAPm6cU=/1024x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/2D5K664SEVPAUZU5NMFDG6NGEA.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/The_Right_to_Education_-_Refugees.jpg/300px-The_Right_to_Education_-_Refugees.jpg',
  'https://education.nsw.gov.au/content/dam/main-education/teaching-and-learning/curriculum/career-learning-and-vocational-education/curriculum-support/images/students-in-group-learning-session.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fBN3pACJbdEXS-ObeR06VpaDN-az4M-aag&usqp=CAU',
  'https://naacp.org/sites/default/files/styles/hero_desktop/public/images/education-innovation.webp?itok=s4JwmOO0',
  'https://en.shafaqna.com/wp-content/uploads/2022/01/CUE_international-day-of-ed2-1-1030x541.jpg',
];

const About = () => {
  return (
    <div className="container mx-auto w-[80%] lg:w-[60%] mt-10 text-justify">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-10">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className="relative h-0"
            style={{ paddingBottom: '100%' }}
          >
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="absolute object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>

      <h1 className="text-center text-3xl font-bold mb-4">
        Welcome to Alphabetor
      </h1>
      <p className="text-lg mb-6">
        At Alphabetor, we are passionate about education and committed to
        providing high-quality learning resources for students of all ages. Our
        mission is to empower learners worldwide, fostering a love for knowledge
        and promoting lifelong learning.
      </p>
      <h2 className="text-center text-2xl font-bold mb-2">Our Vision</h2>
      <p className="text-lg mb-6">
        We envision a world where education is accessible to everyone,
        regardless of their background or location. Through our platform, we aim
        to create a supportive learning community where individuals can explore,
        discover, and achieve their full academic potential.
      </p>
      <h2 className="text-center text-2xl font-bold mb-2">
        What Sets Us Apart
      </h2>
      <ul className="list-disc ml-6 mb-6">
        <li className="mb-2">
          <strong>Comprehensive and Engaging Content:</strong> Our curated
          educational materials cover a wide range of subjects and topics,
          designed to make learning enjoyable and effective.
        </li>
        <li className="mb-2">
          <strong>Expert Educators:</strong> Our team of experienced educators
          and subject-matter experts create and review content to ensure its
          accuracy and relevance.
        </li>
        <li className="mb-2">
          <strong>Interactive Learning:</strong> We believe in interactive
          learning experiences. Our platform offers quizzes, games, and
          interactive lessons to enhance understanding and retention.
        </li>
        <li className="mb-2">
          <strong>Community Support:</strong> Join a vibrant community of
          learners where you can ask questions, share knowledge, and collaborate
          with fellow students and educators.
        </li>
        <li className="mb-2">
          <strong>Accessibility:</strong> Our resources are accessible anytime,
          anywhere. Whether you are a student, teacher, or lifelong learner, you
          can access our content on various devices.
        </li>
      </ul>
      <h2 className="text-center text-2xl font-bold mb-2">Any query?</h2>
      <p className="text-lg mb-6">
        Have questions or suggestions? We value your feedback! Feel free to
        reach out to us at{' '}
        <a
          href="mailto:contact@example.com"
          className="text-blue-500 hover:underline"
        >
          contact@example.com
        </a>{' '}
        or through our{' '}
        <a href="/contact" className="text-blue-500 hover:underline">
          contact page
        </a>
        . We appreciate your support in making education accessible to all.
      </p>
    </div>
  );
};

export default About;
