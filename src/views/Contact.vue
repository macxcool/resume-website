<template>
  <div class="contact">
    <h1>Contact</h1>
    <form>
      <div>
        <label for="email">Email address:</label><br>
        <input v-model="email" type="email" id="email" name="email" placeholder="johndoe@gmail.com"><br>
      </div>
      <div>
        <label for="subject">Subject:</label><br>
        <input v-model="subject" type="text" id="subject" name="subject" placeholder="Type your subject here">
      </div>
      <div>
        <label for="message">Message:</label><br>
        <textarea v-model="message" id="message" name="message" placeholder="Type your message here"></textarea>
      </div>
      <p v-show="showBadRequest">{{ badRequest }}</p>
      <p v-show="showServerError">{{ serverError }}</p>
      <img v-show="spinning" class="loading" alt="" src="../assets/icons/sync.svg"/>
      <p v-show="success" class="success">{{ successMessage }}</p>
      <input v-show="!success && !spinning" @click="sendMessage" class="submit" type="submit" value="Submit">
    </form>
  </div>
</template>

<style lang="scss" scoped>
@keyframes spinning {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
.loading {
    height: 30px;
    margin: 10px 0;
    animation-name: spinning;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}
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
.success {
    color: #32CD32;
    border-color: #32CD32;
}
p {
    @extend .field;
    color: #FF0134;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding: 15px;
    border: 2px solid #FF0134;
}
@media all and (max-width: 900px)
{
    form {
        width: 500px;
    }
    .field {
        width: 476px;
    }
    input {
        padding: 0 10px;
    }
    textarea, p {
        padding: 10px;
    }
}
@media all and (max-width: 550px)
{
    form {
        width: 100%;
    }
    form>div {
        width: 90%;
    }
    .field {
        width: calc(100% - 24px);
    }
    .submit {
        align-self: center;
        width: 90%;
    }
    p {
        width: calc(90% - 24px);
    }
}
</style>

<script>
import axios from "axios";

export default {
    name: 'Contact',
    data() {
        return {
            email: "",
            subject: "",
            message: "",
            spinning: false,
            badRequest: "Every fields are required and your email must be valid for the message to be proceed",
            showBadRequest: false,
            serverError: "Something went wrong please try again later",
            showServerError: false,
            successMessage: "Your message has been successfully sent",
            success: false
        }
    },
    methods: {
        sendMessage(event) {
            event.preventDefault()
            this.spinning = true
            axios.post('https://achille.garin.xyz:8000/', {
                Contact: this.email,
                Subject: this.subject,
                Body: this.message
            }).then(() => {
                this.showServerError = false
                this.showBadRequest = false
                this.spinning = false
                this.success = true
            }).catch((error) => {
                if (error.response.status == 400){
                    this.showBadRequest = true
                }
                else if (error.response.status == 500){
                    this.showServerError = true
                }
                else {
                    console.log(error)
                }
                this.spinning = false
            });
        }
    }
}
</script>
