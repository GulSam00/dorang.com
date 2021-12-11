import { Link } from 'react-router-dom';
import { Divider, Grid, Segment, Header, Icon } from 'semantic-ui-react';

const WebHeader = () => {
  return (
    <Segment>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <Link to=".">
            <Header as="h2" icon>
              <Icon name="home" link size="small" />
              메인화면
              <Header.Subheader>그를 영접하러</Header.Subheader>
            </Header>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="./legend">
            <Header as="h2" icon>
              <Icon name="address card" link size="small" />
              일화
              <Header.Subheader>믿기지 않는 사실들</Header.Subheader>
            </Header>
          </Link>
        </Grid.Column>
      </Grid>

      <Divider clearing />
    </Segment>
  );
};

export default WebHeader;
