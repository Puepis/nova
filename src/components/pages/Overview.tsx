import React, { useEffect } from "react";
import { fetchAndStoreData } from "../../utils/data";

const Overview = () => {
  useEffect(() => {
    fetchAndStoreData("bipolar disorder", 10);
  }, []);
  return <div>WIP</div>;
};

export default Overview;
