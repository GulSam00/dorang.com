import { createMedia } from '@artsy/fresnel';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import './MainContainer.scss';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const MainHeader = () => {
  return (
    <div className="main-header">
      <img src="assets/KakaoTalk_20211211_231639091_01.jpg" />
      <img src="assets/KakaoTalk_20211211_232647185_13.jpg" />
      <img src="assets/KakaoTalk_20211211_232647185_02.jpg" />
      <img src="assets/KakaoTalk_20211211_231639091_16.jpg" />
      <img src="assets/KakaoTalk_20211211_231639091_05.jpg" />
    </div>
  );
};
const DesktopContainer = ({ children }) => {
  return (
    <Media greaterThan="mobile">
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
        <MainHeader />
      </Segment>

      {children}
    </Media>
  );
};
const MobileContainer = ({ children }) => {
  return (
    <Media at="mobile">
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
        <MainHeader />
      </Segment>

      {children}
    </Media>
  );
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

const MainContainer = () => {
  const handlerClick = () => {
    alert('미구현!');
  };
  return (
    <ResponsiveContainer>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                도랑이 있어서 이 세상은 아름답습니다.
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                A ditch is a small to moderate divot created to channel water. A
                ditch can be used for drainage, to drain water from low-lying
                areas, alongside roadways or fields, or to channel water from a
                more distant source for plant irrigation.
              </p>
              <Header as="h3" style={{ fontSize: '2em' }}>
                도랑이 있어서 우리는 행복합니다.
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Ditches are commonly seen around farmland, especially in areas
                that have required drainage, such as The Fens in eastern England
                and much of the Netherlands.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src="/assets/KakaoTalk_20211211_231639091_18.jpg"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button
                size="huge"
                onClick={() =>
                  window.open(
                    'https://www.google.com/search?q=%EB%8F%84%EB%9E%91&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjShcaxi-j0AhW1sVYBHRWXCNMQ_AUoAXoECAIQAw&biw=1920&bih=969&dpr=1',
                    '_blank',
                  )
                }
              >
                만나러 가기
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                "대체ㅋㅋㅋㅋㅋㅋㅋ"
              </Header>
              <p style={{ fontSize: '1.33em' }}>당사자의 뜨거운 반응</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                "군자의 복수는 10년이 걸려도 늦지 않다."
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <Image
                  className="evidence"
                  avatar
                  src="assets/KakaoTalk_20211216_192620969.jpg"
                />
                마음속에 깊이 새긴 말
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <Button as="a" size="large">
            Read More
          </Button>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href="#">Case Studies</a>
          </Divider>

          <Header as="h3" style={{ fontSize: '2em' }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but it's really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <Button as="a" size="large">
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment> */}

      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Religious Ceremonies</List.Item>
                  <List.Item as="a">Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Banana Pre-Order</List.Item>
                  <List.Item as="a">DNA FAQ</List.Item>
                  <List.Item as="a">How To Access</List.Item>
                  <List.Item as="a">Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Footer Header
                </Header>
                <p>도랑께서 별빛으로 속삭이셨다</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  );
};

export default MainContainer;

// import { Container, Header, Message, Grid } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// const MainContainer = () => {
//   return (
//     <>
//       <Container style={{ margin: 20 }}>
//         <Header as="h1" dividing>
//           우리는 도랑의 시대에 살고 있다!
//         </Header>
//         <Message info>이 문서의 내용은 한치의 거짓도 없는 사실입니다!</Message>
//       </Container>
//       <Grid celled>
//         <Grid.Row>
//           <Grid.Column width={3}></Grid.Column>
//           <Grid.Column width={9}></Grid.Column>
//         </Grid.Row>
//         <Grid.Row>
//           <Grid.Column width={3}></Grid.Column>
//           <Grid.Column width={9}></Grid.Column>
//         </Grid.Row>
//       </Grid>
//       <Link to="about">about</Link>
//       <Link to="picture">picture</Link>
//     </>
//   );
// };

// export default MainContainer;
