import React from "react";

interface PictureCardProps {
  src: string;
  alt: string;
  caption?: string;
}

const PictureCard: React.FC<PictureCardProps> = ({ src, alt, caption }) => {
  return (
    <div className="border-2 border-brown-dark rounded-lg overflow-hidden bg-brown-light text-center shadow-md hover:shadow-lg transition duration-300">
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover border-b-2 border-brown-dark"
      />
      {caption && <p className="text-yellow-dark font-bold p-2">{caption}</p>}
    </div>
  );
};

export default PictureCard;
