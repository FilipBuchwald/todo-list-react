import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => (
  <Container>
    <Header
      title="O autorze"
    />
    <Section
      title="Filip Buchwald"
      body={<>I graduated from automation and robotics, but during my
        studies I became interested in programming. Currently, I
        find myself best in frontend technologies such as React.
        Now I am motivated to develop my career as a frontend
        developer.</>}
    />
  </Container>
);

export default Author;