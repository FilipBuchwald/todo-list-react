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
      body={<>Test</>}
    />
  </Container>
);

export default Author;