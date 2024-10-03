import React, { useState } from "react";

const ImageSkeletonLoader = ({ src }) => {
  const [loading, setLoading] = useState(true);

  return (
    <img
      className={`w-full ${
        loading ? "h-32 bg-gray-200 animate-pulse" : "animate-none"
      }`}
      src={src}
      loading="lazy"
      onLoad={() => setLoading(false)}
    />
  );
};

export default ImageSkeletonLoader;
