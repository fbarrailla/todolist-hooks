import React from 'react';
import useSelector from '../hooks/useSelector';
import { getTodosCount } from '../state/todos';

const Footer = () => {
  const { active, total } = useSelector(getTodosCount);
  return (
    <div className="Footer">
      {active} / {total}
    </div>
  );
};

export default Footer;
