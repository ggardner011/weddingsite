import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    const currentPath = router.pathname;
    router.push(`${currentPath}?code=${code}`);
  };

  return (
    <div className="flex items-center space-x-2 p-4">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value.toLowerCase())}
        placeholder="Enter Code..."
        className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown px-4 py-2 rounded focus:outline-none w-64"
      />
      <button
        onClick={handleSearch}
        className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown px-4 py-2 rounded"
      >
        Enter
      </button>
    </div>
  );
};

export default SearchBar;
