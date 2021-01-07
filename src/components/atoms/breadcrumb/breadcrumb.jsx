import "./breadcrumb.scss";

import React, { useEffect, useState } from "react";

const Breadcrumb = ({ list }) => {
  const [breadcrumb, setBreadcrumb] = useState([]);

  useEffect(() => {
    const breadcrumbItems = []
    list.forEach((category, index) => {
      if (index !== list.length - 1) {
        breadcrumbItems.push(<span className='a-breadcrumb__part' key={index}>{ `${category}  >  ` }</span>);
      } else {
        breadcrumbItems.push(<span className='a-breadcrumb__part a-breadcrumb__part--bold' key={index}>{ category } </span>);
      }
    });
    setBreadcrumb(breadcrumbItems);
  }, []);

  return (
    <p className='a-breadcrumb'>
      { breadcrumb }
    </p>
  );
};

export default Breadcrumb;
