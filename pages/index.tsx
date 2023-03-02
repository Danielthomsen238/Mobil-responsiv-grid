import { GridAutoColumnContainer } from "../src/styles/grid/AutoGridColumns";
import HtmlHead from "../components/Head";

const Home = () => {
  return (
    <>
      <HtmlHead title={"forside"} description={"Forside"} />
      <GridAutoColumnContainer>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </GridAutoColumnContainer>
    </>
  );
};

export default Home;
