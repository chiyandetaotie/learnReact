import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
// import App from './01_内联样式的CSS/App'
// import App from './02_普通的CSS写法/App'
// import App from './03_CSS_Modules/App'
// import App from './04_Less编写方式/App'
// import App from './05_CSS_in_js写法/App'
import App from './06_classNames库/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={{coloe: 'purple', size: 90}}>
     <App />
  </ThemeProvider>
   
  // </React.StrictMode>
);

