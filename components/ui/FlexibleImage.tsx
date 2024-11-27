import React from "react";

interface FlexibleImageProps {
  imageURL: string;
  width: number;
  height: number;
  subtitle?: string;
}

const FlexibleImage = ({
  imageURL,
  width,
  height,
  subtitle,
}: FlexibleImageProps) => {
  return (
    <div className="flex">
      <img
        className="image px-2 pt-2 pb-2"
        src={imageURL}
        width={width}
        height={height}
      />
      <h1>{subtitle}</h1>
    </div>
  );
};

export default FlexibleImage;
