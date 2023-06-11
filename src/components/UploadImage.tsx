import React, { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import Button from "./Button";

const UploadImage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor="upload-input" className="mb-4">
        <BsCardImage className="text-5xl text-gray" />
      </label>
      <input
        id="upload-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      <label htmlFor="upload-input">
        <Button className="border border-blue !py-1 text-blue" title="upload" />
      </label>
      {selectedImage && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Image"
            className="mx-auto max-w-xs"
          />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
