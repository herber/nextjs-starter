import { css } from "@emotion/css";

let Home = () => (
  <div className={css`
    height: 60vh;
    max-width: 960px;
    margin: 20vh auto 0px auto;
    background: black;
    color: white;
    border-radius: 50px;
    text-align: center;
    line-height: 60vh;
    font-size: 2em;
    transition: transform .5s;

    &:hover, &:focus {
      transform: rotate(-10deg) scale(1.1);
    }
  `}>
    <h1>Hey!</h1>
  </div>
);

export default Home;
