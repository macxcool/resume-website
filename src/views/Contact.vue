<template>
  <div class="contact">
    <h1>Contact</h1>
    <form>
      <div>
        <label for="email">Email address:</label><br>
        <input v-model="email" type="email" id="email" name="email" placeholder="johndoe@gmail.com" required><br>
      </div>
      <div>
        <label for="subject">Subject:</label><br>
        <input v-model="subject" type="text" id="subject" name="subject" placeholder="Type your subject here" required>
      </div>
      <div>
        <label for="message">Message:</label><br>
        <textarea v-model="message" id="message" name="message" placeholder="Type your message here"></textarea>
      </div>
      <p v-show="showBadRequest">{{ badRequest }}</p>
      <p v-show="showServerError">{{ serverError }}</p>
      <input @click="sendMessage" class="submit" type="submit" value="Submit">
    </form>
  </div>
</template>

<style lang="scss" scoped>
h1 {
    text-align: center;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    font-size: 50px;
}
form {
    width: 700px;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
label {
    font-size: 25px;
    align-self: flex-start;
}
form>div {
    width: 100%;
}
.field {
    width: 666px;
    margin: 15px 0px 20px 0px;
    outline: none;
    background-color: transparent;
    border: 2px solid black;
    font-size: 18px;
}
input {
    @extend .field;
    height: 50px;
    padding: 0 15px;
}
textarea {
    @extend .field;
    height: 250px;
    padding: 15px;
    resize: none;
    font-size: 16px;
}
.submit {
    width: 200px;
    align-self: flex-end;
    cursor: pointer;
}
.contact {
    margin: $page-margin;
    display: flex;
    flex-direction: column;
}
</style>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            email: "",
            subject: "",
            message: "",
            badRequest: "Every field are required and your email must be valid for the message to be proceed",
            showBadRequest: false,
            serverError: "Something went wrong please try again later",
            showServerError: false,
            success: false
        }
    },
    methods: {
        sendMessage(event) {
            event.preventDefault()
            let xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
            xmlhttp.open("POST", "https://achille.garin.xyz:8000/");
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200){
                        this.showServerError = false
                        this.showBadRequest = false
                        this.success = true
                    }
                    else if (xmlhttp.status == 400){
                        this.showBadRequest = true
                    }
                    else if (xmlhttp.status == 500){
                        this.showServerError = true
                    }
                }
            };
            xmlhttp.send(JSON.stringify({Contact:this.email, Subject:this.subject, Body:this.message}));
        }
    }
}
</script>
