import React from "react";
import { Link } from "react-router-dom";

export const PublicHeader = () => (
  <header className="header">
    <Link className="header__title" to="/">
      <h1>Todo app</h1>
    </Link>
  </header>
);

export default PublicHeader;
