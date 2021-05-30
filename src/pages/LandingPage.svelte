<script lang="ts">
import { pageurl } from "../store";


  const About = () => {
    pageurl.set("about");
  }
  const Contact = () => {
    pageurl.set("contact");
  }
</script>

<div class="dashboard">
  <div class="brief-info">
    <div style="max-width: 500px; margin-left: 3ch;">
      <h5 class="role">FULLSTACK WEB DEVELOPER/SOFTWARE ENGINEER</h5>
      <h1 class="name">I'm Hieu Le</h1>
      <div class="buttons">
        <button class="more" on:click={About}>
          <div style="font-size: 15px;">MORE ABOUT ME</div>
          <img style="margin-top:3px;" src="./img/right_arrow_white.png" alt="right_arrow_white" />
        </button>
        <button class="hire" on:click={Contact}>
          <div style="font-size: 15px;">CONTACT ME</div>
          <img style="margin-top:3px;" src="./img/right_arrow_blue.png" alt="right_arrow_blue" />
        </button>
      </div>
    </div>
  </div>
  <div class="profile-picture">
    <div class="wrapper">
      <div class="row1">
        <img src="./img/python.png" alt="python" />
        <img class="middle" src="./img/c_sharp.png" alt="c_sharp" />
        <img src="./img/typescript.png" alt="typescript" />
      </div>
      <div class="row2">
        <img src="./img/html.png" alt="html" />
        <img class="middle" src="./img/css.png" alt="css" />
        <img src="./img/react.png" alt="react" />
      </div>
      <div class="row3">
        <img src="./img/blazor.png" alt="blazor" />
        <img class="middle" src="./img/net_core.png" alt="net_core" />
        <img src="./img/mongodb.png" alt="mongodb" />
      </div>
    </div>
  </div>
</div>

<style>
  * {
    margin: 0;
    width: 100%;
}

.dashboard {
    height: 100%;
    display: flex;
}

.dashboard .brief-info {
    display: flex;
    justify-content: center;
    align-items: center;
}

.dashboard .profile-picture {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4D9EEF;
}

.dashboard .profile-picture img {
    max-width: 60px;
    max-height: 60px;
}

.row1 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.row2 {
    margin: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.row3 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.middle {
    margin: 0 80px;
}

@media (max-width: 800px) {
  .middle {
    margin: 0 40px;
  }

  .row2 {
    margin: 80px 0;
  }
}

@media (max-width: 700px) {
  .brief-info {
    padding: 10ch 0;
  }
  .dashboard {
    display: block;
  }
}

.dashboard .brief-info .more {
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
    border: none;
    max-width: 170px;
    background-color: #0073DF;
    color: #ffffff;
}

.dashboard .brief-info .more:hover {
    background-color: #4D9EEF;
}

.dashboard .brief-info .hire {
    max-width: 140px;
    margin-left: 10px;
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
    border: none;
    background-color: #ffffff;
    color: #449AED;
}

.dashboard .brief-info .hire:hover {
    background-color: #f4f4f4;
}

.dashboard .brief-info .buttons {
    display: flex;
}

.dashboard .brief-info .buttons button {
    outline: none;
    cursor: pointer;
    padding: 10px;
    display: flex;
    justify-content: space-around;
}

.dashboard .brief-info .buttons button img {
    width: 40px;
    height: 30px;
}

.dashboard .brief-info .buttons button div {
    padding-top: 7.6px;
}

.dashboard .brief-info .role {
    color: #449AED;
}

.dashboard .brief-info .name {
    margin-bottom: 20px;
    color: #232323;
    font-size: 60px;
}
</style>