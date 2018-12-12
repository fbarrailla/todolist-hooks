import React from 'react';
import Filter from './Filter';

const Filters = () => {
  return (
    <section className="Filters">
      <Filter label="ALL" value="*" />
      <Filter label="ACTIVE" value="active" />
      <Filter label="DONE" value="done" />
    </section>
  );
};

export default Filters;
