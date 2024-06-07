/* 리액트 기초 개념 (실무에서는 거의 안 씀. createElement) */
const h3 = React.createElement(
  "h3",
  { onMouseEnter: () => console.log("mouse enter") },
  "Hello I am a span."
);

/*  */
const btn = React.createElement(
  "button",
  {
    onClick: () => console.log("im clicked"),
    style: { backgroundColor: "tomato" },
  },
  "Click me"
);

/*  */
const container = React.createElement("div", null, [Title, Button]);
ReactDOM.render(container, root); //React element를 가지고 HTML로 랜더링.

/* 실제로 많이 쓰는 편한 방법 */
const Title = () => (
  <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
    Hello I am a span.
  </h3>
);

const Button = () => (
  <button
    style={{ backgroundColor: "tomato" }}
    onClick={() => console.log("im clicked")}
  >
    Click me
  </button>
);

const Container = () => (
  <div>
    <Title />
    <Button />
  </div>
);
ReactDOM.render(<Container />, root);
