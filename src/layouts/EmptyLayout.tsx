import { FC } from "react";
import { Outlet } from "react-router-dom";

const EmptyLayout: FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EmptyLayout;
