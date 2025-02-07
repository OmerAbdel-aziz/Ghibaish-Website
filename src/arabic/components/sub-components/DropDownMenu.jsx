import { useState, useRef, useEffect } from "react";

function DropdownMenu({ title, item1, item2, item3 }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const detailsRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li>
      <details ref={detailsRef} open={isDropdownOpen}>
        <summary
          className="text-[14px] md:text-lg font-roboto cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          {title}
        </summary>
        <ul className="p-2 z-10 text-black min-w-[200px]">
          <li className="w-full flex">
            <a
              href="#centers"
              className="text-[10px] md:text-xs font-roboto text-end w-full hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              {item1}
            </a>
          </li>
          <li className="w-full flex justify-end">
            <a
              href="#centers"
              className="text-[14px] md:text-xs font-roboto text-end w-full hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              {item2}
            </a>
          </li>
          <li className="w-full flex justify-end">
            <a
              href="#centers"
              className="text-[14px] md:text-xs font-cairo text-end w-full hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              {item3}
            </a>
          </li>
        </ul>
      </details>
    </li>
  );
}

export default DropdownMenu;
