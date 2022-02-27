import { MainModalScreen } from "../Components";

const DEFAULT_PAGE = () => {
  return (
    <MainModalScreen
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div className="container">PAGE NOT FOUND</div>
    </MainModalScreen>
  );
};

export default DEFAULT_PAGE;
