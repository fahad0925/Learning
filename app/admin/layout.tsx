import React, { ReactNode } from "react";
interface props {
  children: ReactNode;
}

const layout = ({ children }: props) => {
  return (
    <div>
      yele
      <aside className="bg-blue-400 h-20">yala</aside>
    </div>
  );
};

export default layout;
