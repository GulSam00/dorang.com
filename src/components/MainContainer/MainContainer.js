import { Container, Header, Message, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const MainContainer = () => {
  return (
    <>
      <Container style={{ margin: 20 }}>
        <Header as="h1" dividing>
          우리는 도랑의 시대에 살고 있다!
        </Header>
        <Message info>이 문서의 내용은 한치의 거짓도 없는 사실입니다!</Message>
      </Container>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={9}></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={9}></Grid.Column>
        </Grid.Row>
      </Grid>
      <Link to="about">about</Link>
      <Link to="picture">picture</Link>
    </>
  );
};

export default MainContainer;
