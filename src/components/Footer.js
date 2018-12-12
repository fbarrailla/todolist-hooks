import React from 'react';
import { useStore } from '../state/store';

const Footer = () => {
  const { select } = useStore();
  const { active, total } = select.todosCount();
  return (
    <div className="Footer">
      {active} / {total}
    </div>
  );
};

export default Footer;
