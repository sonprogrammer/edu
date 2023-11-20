import styled from "styled-components";
import CourseCard from "./CourseCard.jsx";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <CourseCard />
    </Container>
  );
}
