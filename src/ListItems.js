import React from "react";
import { useDB, useFind } from "react-pouchdb/cjs";
import { DBNAME } from "./db";
import Item from "./Item";

function ListItems() {
  const items = useFind(DBNAME, {
    selector: {
      title: { $gte: null }
    },
    sort: ["title"]
  })
  const db = useDB(DBNAME);

  const addTodoItem = (e) => {
    e.preventDefault();
    const { target: { elements }} = e;
    const todo = elements.todo;
    db.post({
      title: todo.value
    }).then(function(response) {
      todo.value = ''
    });
  };

  return <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
          <div className="relative px-6 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-300/50">
                <div className="py-8 text-base leading-7 space-y-6 text-gray-600">
                  <form onSubmit={addTodoItem}>
                    <input type="text" name="todo" id="todo" placeholder="What's need to be done?" className="w-full px-3 py-2 rounded border-2" />
                  </form>
                  <ul className="space-y-4">
                    {items.map(item => <Item key={item._id} item={item} />)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>;
}

export default ListItems;
