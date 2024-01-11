import React, { ChangeEvent,useState } from 'react';

const FileUpload: React.FC = () => {
  const [fileName, setFileName] = useState<string>('No File Chosen');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFileName = event.target.files?.[0]?.name || 'No File Chosen';
    setFileName(uploadedFileName);
  };

  return (
    <div className="flex items-center justify-center py-2 bg-white">
      <label
        className="flex items-center px-4 py-2 bg-white text-sm font-medium leading-4 text-gray-700 border border-gray-300 rounded-l-md cursor-pointer hover:bg-gray-50 focus:outline-none"
        htmlFor="file-upload"
      >
        Choose file
        <input
          className="sr-only"
          id="file-upload"
          name="file-upload"
          type="file"
          onChange={handleFileChange}
        />
      </label>
      <div className="px-4 py-2 bg-white text-sm font-medium leading-4 text-gray-700 border border-l-0 border-gray-300 rounded-r-md">
        {fileName}
      </div>
    </div>
  );
};

export default FileUpload;