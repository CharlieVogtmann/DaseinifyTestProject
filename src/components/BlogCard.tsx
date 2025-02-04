import React from 'react';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, excerpt, date }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-purple-400 text-sm mb-2">{date}</p>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{excerpt}</p>
        <button className="text-purple-400 font-semibold hover:text-purple-300">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;