import React from "react";

type MenuProps = {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
};

const Menu: React.FC<MenuProps> = ({ setActive, children }) => {
  return (
    <nav className="relative flex justify-center space-x-6">
      {children}
    </nav>
  );
};

export default Menu;
