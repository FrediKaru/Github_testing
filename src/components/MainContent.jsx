import React from "react";

// components
import { Cards } from "./Cards";
import { Content } from "./Content";

//hooks
import { useTodos } from "../hooks/useTodos";
import { PaginationButtons } from "./PaginationButtons";
import { Button } from "./Button";

export const MainContent = () => {
  const { todos, page, setPage } = useTodos();

  return (
    <Content>
      <main>
        <h1 className="site-title">
          A Workspace for the World's Largest Companies
        </h1>
        <p className="sub-title">
          A global network for collaborative workspaces where individuals and
          small companies can grow
        </p>
        <Button additionalClasses={"btn--large"}>Sign up</Button>
        <PaginationButtons page={page} setPage={setPage} />
        <Cards data={todos} />
      </main>
    </Content>
  );
};
