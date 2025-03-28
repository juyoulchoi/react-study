// import ReactDOM from 'react-dom/client';

// import App from './App.jsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

import MillionLint from "@million/lint";
 
const cracoConfig = {
  plugins: [MillionLint.craco()],
};
 
export default cracoConfig;