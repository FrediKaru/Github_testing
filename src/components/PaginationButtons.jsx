import React from "react";
import { Button } from "./Button";

export const PaginationButtons = ({
  page,
  setPage,
  lastPage = 20,
  ...rest
}) => {
  return (
    <div>
      <p>{page}</p>
      {page > 1 && (
        <Button
          onClick={() => setPage((page) => page - 1)}
          additionalClasses={"btn--small"}
        >
          Prev
        </Button>
      )}
      {page < lastPage && (
        <Button
          onClick={() => setPage((page) => page + 1)}
          additionalClasses={"btn--small"}
        >
          Next
        </Button>
      )}
    </div>
  );
};
