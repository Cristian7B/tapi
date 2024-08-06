// TransitionWrapper.js
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './transitions.css'; // Asegúrate de definir las clases CSS aquí

function TransitionWrapper({ children }) {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={300}
        classNames="fade"
        key={window.location.pathname}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
}

export default TransitionWrapper;
