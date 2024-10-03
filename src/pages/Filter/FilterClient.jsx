import { useState } from "react";
import { FilterClient1 } from "../../components/FilterView/FilterClient/FilterClient1";
import { FilterClient2 } from "../../components/FilterView/FilterClient/FilterClient2";
import { FilterClient3 } from "../../components/FilterView/FilterClient/FilterClient3";
import { FilterClient4 } from "../../components/FilterView/FilterClient/FilterClient4";
import { FilterClient5 } from "../../components/FilterView/FilterClient/FilterClient5";
import { FilterClient6 } from "../../components/FilterView/FilterClient/FilterClient6";
import ProgressBar from "react-bootstrap/ProgressBar";

export const FilterClient = () => {
  const [componentView, setComponentView] = useState(1);
  const [progress, setProgress] = useState(100 / 5);
  const [dataClient, setDataClient] = useState({});

  console.log(dataClient);

  return (
    <>
      <ProgressBar variant="success" now={progress} />
      {componentView === 1 && (
        <FilterClient1
          setComponentView={setComponentView}
          setProgress={setProgress}
          setDataClient={setDataClient}
        />
      )}
      {componentView === 2 && (
        <FilterClient2
          setComponentView={setComponentView}
          setProgress={setProgress}
          setDataClient={setDataClient}
        />
      )}
      {componentView === 3 && (
        <FilterClient3
          setComponentView={setComponentView}
          setProgress={setProgress}
          setDataClient={setDataClient}
        />
      )}
      {componentView === 4 && (
        <FilterClient4
          setComponentView={setComponentView}
          setProgress={setProgress}
          setDataClient={setDataClient}
        />
      )}
      {componentView === 5 && (
        <FilterClient5
          setComponentView={setComponentView}
          setProgress={setProgress}
          setDataClient={setDataClient}
          dataClient={dataClient}
        />
      )}
      {componentView === 6 && (
        <FilterClient6
          setComponentView={setComponentView}
          setProgress={setProgress}
          setDataClient={setDataClient}
          dataClient={dataClient}
        />
      )}
    </>
  );
};
