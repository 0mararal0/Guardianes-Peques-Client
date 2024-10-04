import { useState } from "react";
import { FilterGuardian1 } from "../../components/FilterView/FilterGuardian/FilterGuardian1";
import { FilterGuardian2 } from "../../components/FilterView/FilterGuardian/FilterGuardian2";
import { FilterGuardian4 } from "../../components/FilterView/FilterGuardian/FilterGuardian4";
import { FilterGuardian5 } from "../../components/FilterView/FilterGuardian/FilterGuardian5";
import ProgressBar from "react-bootstrap/ProgressBar";

export const FilterGuardian = () => {
  const [componentView, setComponentView] = useState(1);
  const [progress, setProgress] = useState(100 / 4);
  const [dataGuardian, setDataGuardian] = useState({});

  console.log(dataGuardian);

  return (
    <>
      <ProgressBar
        className="w-75 mx-auto mt-3"
        variant="success"
        now={progress}
      />
      {componentView === 1 && (
        <FilterGuardian1
          setComponentView={setComponentView}
          setProgress={setProgress}
          setDataGuardian={setDataGuardian}
        />
      )}
      {componentView === 2 && (
        <FilterGuardian2
          setComponentView={setComponentView}
          setProgress={setProgress}
          setDataGuardian={setDataGuardian}
        />
      )}
      {componentView === 3 && (
        <FilterGuardian4
          setComponentView={setComponentView}
          setProgress={setProgress}
          setDataGuardian={setDataGuardian}
        />
      )}
      {componentView === 4 && (
        <FilterGuardian5
          setComponentView={setComponentView}
          setProgress={setProgress}
          dataGuardian={dataGuardian}
        />
      )}
    </>
  );
};
