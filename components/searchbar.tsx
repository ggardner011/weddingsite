import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface SearchProps {
  intialCode: string;
  handleToggle: () => void;
}

const SearchBar: React.FC<SearchProps> = ({ intialCode, handleToggle }) => {
  const [code, setCode] = useState<string>(intialCode) || "";
  const router = useRouter();
  const currentPath = usePathname();

  const handleSearch = () => {
    router.push(`${currentPath}?code=${code}`);
    //if code is the same then toggle as we want to force the use effect to trigger, but only once
    if (code === intialCode) {
      handleToggle();
    }
  };

  return (
    <div className="flex items-center space-x-2 p-4">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value.toLowerCase())}
        placeholder="Enter Code..."
        className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown-light px-4 py-2 rounded focus:outline-none w-64"
      />
      <button
        onClick={handleSearch}
        className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown px-6 py-2 rounded-lg hover:bg-yellow-dark hover:text-brown-dark transition"
      >
        Enter
      </button>
    </div>
  );
};

export default SearchBar;
