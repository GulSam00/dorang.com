import { Link } from 'react-router-dom';
import { Divider, Grid, Segment, Header, Icon } from 'semantic-ui-react';

const WebHeader = () => {
  return (
    <Segment>
      <Grid columns="equal" relaxed="very" textAlign="center">
        <Grid.Column>
          <Link to=".">
            <Header as="h2" icon size="medium">
              <Icon name="home" link />
              메인화면
              <Header.Subheader>그를 영접하러</Header.Subheader>
            </Header>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="./about">
            <Header as="h2" icon size="medium">
              <Icon name="address card" link />
              김도랑
              <Header.Subheader>그는 누구인가?</Header.Subheader>
            </Header>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="./legend">
            <Header as="h2" icon size="medium">
              <Icon name="address file outline" link />
              일화
              <Header.Subheader>믿기지 않는 사실들</Header.Subheader>
            </Header>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="./picture">
            <Header as="h2" icon size="medium">
              <Icon name="address building" link />
              김도랑 박물관
              <Header.Subheader>기리기리 기억되리</Header.Subheader>
            </Header>
          </Link>
        </Grid.Column>
      </Grid>

      <Divider clearing />
    </Segment>
  );
};

export default WebHeader;
