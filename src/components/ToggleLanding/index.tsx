"use client";

import { useEffect, useState } from "react";

const Toggle = ({ className }: { className?: string }) => {
  const [toggleTheme, setToggleTheme] = useState<boolean>(true);
  const [theme, setTheme] = useState<"Бизнес" | "Клиент">("Клиент");
  useEffect(() => {
    return toggleTheme ? setTheme("Клиент") : setTheme("Бизнес");
  }, [toggleTheme]);

  return (
    <div className={`toggle_wrapper text-white  ${className}`}>
      <label
        htmlFor="toggle-button"
        className="flex flex-row gap-x-2 text-white items-center"
      >
        <span>{theme}</span>
        <input
          onClick={() => setToggleTheme(!toggleTheme)}
          type="checkbox"
          className="toggle_button border-white"
        />
      </label>
    </div>
  );
};

export default Toggle;
