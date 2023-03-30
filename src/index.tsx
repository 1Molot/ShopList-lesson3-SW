import React from 'react';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from './render';
import state from './components/redux/State';


rerenderEntireTree(state);

reportWebVitals();
