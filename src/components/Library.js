import React from "react";

import Sidebar from "./Sidebar";
import Main from "./Main";
import User from "./User";
import AddNewBook from "./AddNewBook";

import Categories from "./Categories";
import Books from "./Books";
import EditBooks from "./EditBooks";
import MyBooks from "./MyBooks";

export default function Library() {
  return (
    <div className="App">
      <Sidebar>
        <User />
        <AddNewBook />
        <MyBooks />
        <Categories />
      </Sidebar>

      <Main>
        <Books />
        <EditBooks />
      </Main>
    </div>
  );
}
