import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";

const Board = ({ createProject, setCreateProject }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="order-2 bg-gray col-start-1 col-end-9  lg:col-start-2 lg:col-end-10 lg:row-start-1 lg:row-end-3"></div>
  );
};

export default Board;
