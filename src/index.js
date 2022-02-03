import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListItems from './ListItems';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { PouchDB } from 'react-pouchdb';
import { DBNAME } from './db';

ReactDOM.render(
  <React.StrictMode>
    <PouchDB name={DBNAME}>
      <Suspense fallback="loading...">
        <ListItems items={[{id: 1, title: "this is a title"}]} />
      </Suspense>
    </PouchDB>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
