import React from 'react';

import image1 from '../assets/images/Screenshot 2024-12-24 225656.png';
import image2 from '../assets/images/1723468189219.jpeg';
import image3 from '../assets/images/Screenshot 2024-12-24 225827.png';


const MeetTheHelm: React.FC = () => {
    const members = [
        {
            name: 'Astha Shetty',
            role: 'Secretary',
            description: 'A visionary leader with a knack for strategic thinking and innovation.',
            image: image1,
        },
        {
            name: 'Aryan Sharma',
            role: 'General Secretary',
            description: 'Passionate about fostering teamwork and ensuring smooth operations.',
            image: image2,
        },
        {
            name: 'Hrishit Yelchuri',
            role: 'General Secretary',
            description: 'Committed to driving growth and creating impactful initiatives.',
            image: image3,
        },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Meet the Helm</h1>
            <p className="text-lg text-center mb-12 text-gray-600">
                Meet the visionary minds driving the Business Club IIT (BHU). Our team comprises dynamic leaders with a passion for fostering innovation, teamwork, and growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="bg-gradient-to-tr from-blue-50 to-gray-100">
                            <div className="w-40 h-40 mx-auto rounded-full border-4 border-white overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="object-cover w-full h-full"
                                    style={{ aspectRatio: '1 / 1' }}
                                />
                            </div>

                        </div>
                        {/* <h2 className="text-xl font-semibold text-gray-800 text-center">{member.name}</h2>
            <p className="text-sm text-gray-600 text-center italic mb-4">{member.role}</p>
            <p className="text-gray-700 text-center">{member.description}</p> */}
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                            <p className="text-sm font-semibold mb-4">{member.role}</p>
                            <p className="text-gray-600">{member.description}</p>
                        </div>
                        <div className="p-4 bg-gray-100 flex justify-center gap-4">
                            <a
                                href="#"
                                className=":text-indigo-800 transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="#"
                                className="hover:text-indigo-800 transition-colors"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeetTheHelm;