<script lang="ts">
  import { SendMessage } from "../apis/ContactsService";
  import { contactMessage } from "../models/contactMessage";
  import { pageurl } from "../store";
  var Name:string;
  var Email:string;
  var Message:string;
  function ValidateEmail() 
  {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email))
      {
        return (true);
      }
    return (false);
  }

  const Home = () => {
    pageurl.set("landing");
  }

  async function ValidateInfo() {
    if (Name.trim() === "" || Email.trim() === "" || Message.trim() === "") {
      alert("You need to fill in all the information");
      return;
    } else {
      if (ValidateEmail()) {
        var newMessage = new contactMessage(Name, Email, Message);
        Name = "";
        Email = "";
        Message = "";
        try {
          await SendMessage(newMessage);
        }
        catch (err) {
          alert("There's some problem with the server. Please try again later.");
          return;
        }
      } else {
        alert("Your email is invalid");
        return;
      }
    }
  }
</script>

<div class="body">
  <img src="./img/home.png" alt="home" style="width: 25px; height: 25px; margin-top: 2.5px; margin-left: 1.5px; cursor: pointer; position: fixed; top: 0; left: 0;" on:click={Home}/>
  <div class="holder">
    <h2>Contact info</h2>
    <input bind:value={Name} type="text" placeholder="Your name" /><br />
    <input bind:value={Email} type="text" placeholder="Your email" /><br />
    <textarea bind:value={Message} type="text" placeholder="Your messages"></textarea><br />
    <button on:click={ValidateInfo}>Send Message</button>
  </div>
</div>


<style>
.body {
	height: 100%;
	width: 100%;
	background-color: #4d9ceb;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  color: #424242;
}

.holder {
  border-radius: 10px;
  background-color: #ffffff;
  text-align: center;
  padding-bottom: 5ch;
  padding-left: 5ch;
  padding-right: 5ch;
  padding-top: 2ch;
  box-shadow: 0 22px 45px -20px rgb(59 41 221 / 40%),
    0 5px 5px -3px rgb(0 0 0 / 6%), 0 8px 10px 1px rgb(0 0 0 / 4%),
    0 3px 14px 2px rgb(0 0 0 / 4%);
}

input {
  border-radius: 5px;
  border: 1.8px solid #00a0ef;
  outline: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 30ch;
  margin-bottom: 5ch;
}

input:focus-within {
  border: 1.8px solid #0073df;
}

textarea {
  resize: none;
  border-radius: 5px;
  outline: none;
  border: 1.8px solid #00a0ef;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 3ch;
  padding: 1px 2.74px;
  width: 30ch;
  height: 10ch;
}

textarea:focus-within {
  border: 1.8px solid #0073df;
}

button {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
  cursor: pointer;
  color: #ffffff;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #0073df;
  padding: 2ch;
}

button:hover {
  background-color: #00a0ef;
}
</style>