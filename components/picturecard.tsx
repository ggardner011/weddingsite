"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface PictureCardProps {
  src: string;
  alt: string;
  caption?: string;
}

const PictureCard: React.FC<PictureCardProps> = ({ src, alt, caption }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-brown-dark rounded-lg overflow-hidden bg-brown-light text-center shadow-md hover:shadow-lg transition duration-300">
      <img
        src={src}
        alt={alt}
        onClick={() => setIsOpen(true)}
        className="w-full h-48 object-cover border-b-2 border-brown-dark cursor-zoom-in"
      />
      {caption && <p className="text-yellow-dark font-bold p-2">{caption}</p>}

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={[{ src }]}
          controller={{
            closeOnBackdropClick: true, // Tap/click anywhere outside image to close
            closeOnPullDown: true, // (Mobile) pull down to close
          }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
        />
      )}
    </div>
  );
};

export default PictureCard;
