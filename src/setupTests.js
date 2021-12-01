// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-canvas-mock';

window.GC = require('@grapecity/spread-sheets');
require('../public/js/spreadjs/gc.spread.sheets.designer.resource.en.14.2.0.min.js');
require('../public/js/spreadjs/gc.spread.sheets.designer.all.14.2.0.min.js');