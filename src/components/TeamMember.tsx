import React from 'react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role }) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-purple-400">{role}</p>
    </div>
  );
};

export default TeamMember;