
// NavigationButton.jsx
import { useNavigate } from 'react-router-dom';

function NavigationButton({ to, text }) {
  const navigate = useNavigate();
  
  return (
    <button 
      className="newUser bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-4 right-40"
      onClick={() => navigate(to)}
    >
      {text}
    </button>
  );
}


export default NavigationButton