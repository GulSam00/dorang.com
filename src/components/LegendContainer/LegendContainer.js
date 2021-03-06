import { Grid } from 'semantic-ui-react';

const Legend = ({ image, person, story }) => {
  return (
    <Grid.Row>
      <Grid.Column width={3} textAlign="center">
        <img src={image} />
        <h3>{person}</h3>
      </Grid.Column>
      <Grid.Column width={13}>
        <h3>{story}</h3>
      </Grid.Column>
    </Grid.Row>
  );
};
const LegendContainer = () => {
  return (
    <Grid celled container divided>
      <Legend image="" person="ㅁㄴㄹㅁㄴ" story="21412412" />
      <Legend
        image="assets/KakaoTalk_20211211_231639091_03.jpg"
        person="세르비야 구라비야"
        story="북소리를 들으니 절음뱅이가 눈을 뜨고 맹인이 벌떡 일어나는 것이 아니겠습니까. 할렐루야!"
      />
      <Legend image="" story="" />
    </Grid>
  );
};

export default LegendContainer;
// <div id="row1">
// <p><strong>사실:</strong> 김태우는 팔굽혀펴기를 할 때 자신을 밀어 올리지 않는다. 지구를 밀어내릴 뿐.</p>
// <p><strong>사실:</strong> 올림픽에서 스테로이드 부정행위는 없다, 단지 김태우의 눈빛을 받았을 뿐.</p>
// <p><strong>사실:</strong> 오사마 빈 라덴은 매일 밤 잠들기 전에 김태우가 들어 있지는 않을까 무서워 옷장 속을 체크했다.</p>
// <p><strong>사실:</strong> 김태우가 반군이 주둔하는 곳의 좌표를 크게 소리치자 그 지역에 포탄이 쏟아졌다.</p>
// <p><strong>사실:</strong> 김태우는 전화를 잘못 걸지 않는다. 당신이 전화를 잘못 받은 거다.</p>
// <p><strong>사실:</strong> 어느 날, 김태우는 독사에게 물렸다. 사흘 간의 끔찍한 고통 끝에, 독사는 숨을 거두었다.</p>
// <p><strong>사실:</strong> 김태우는 얼음 조각 두 개를 비벼서 불을 지필 수 있다.</p>
// <p><strong>사실:</strong> 김태우는 말 한 마리의 턱에 돌려차기를 날렸다. 그 말의 후손을 우리는 기린이라 부른다.</p>
// </div>
// <div id="row2">
// <p><strong>사실:</strong> 김태우가 빵과 물고기를 사람들에게 나눠주자 5000명이 배부르게 먹고도 열두 광주리가 남았다.</p>
// <p><strong>사실:</strong> 김태우는 독서를 하지 않는다. 그가 책을 째려보면 책들이 알아서 내용을 불게 된다.</p>
// <p><strong>사실:</strong> 김태우의 자택에는 호랑이 카펫이 있다. 그 호랑이는 죽은 게 아니라 죽을까 두려워 가만히 있는 것이다.</p>
// <p><strong>사실:</strong> 김태우와 김계란은 내기를 했었다. 그 내용은 싸움에서 진 사람이 대머리 마스크를 써야 한다는 것이었다.</p>
// <p><strong>사실:</strong> 김태우는 세금 신고를 할 때, 빈 서류에다 대포를 조종하고 있는 자신의 사진 한 장만을 첨부해서 보낸다. 김태우는 단 한 번도 세금을 낸 적이 없다.</p>
// <p><strong>사실:</strong> 김태우가 탄 자주포는 포를 쏘지 않는다. 단지 그가 조종석에서 이산화탄소를 내쉴 뿐이다.</p>
// <p><strong>사실:</strong> 김태우의 눈물은 암을 치료할 수 있다. 그러나 안타깝게도 김태우는 눈물을 흘리지 않는다.</p>
