import FindInfo from "../components/signin/findInfo/FindInfo";

const FindInfoPage = ({ route }) => {
  return <FindInfo id={route.params.id} />;
};

export default FindInfoPage;
