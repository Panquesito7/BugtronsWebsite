import React from "react";
import "./Team.scss";
import Card from "./card";

function Team() {
  return (
    <div class="janta">
      <h1>Team</h1>
      <div class="alig">
        <Card
          name="Ghulam Yazdani"
          img="https://pbs.twimg.com/profile_images/1460342339310788614/96gkpqcQ_400x400.jpg"
          position="Organizer"
          github="https://github.com/ghulamyazdani"
          linkedin="https://www.linkedin.com/in/ghulamyazdani"
          mail="mailto:ghulamyazdani12@gmail.com"
          twitter="https://twitter.com/iamyazreza"
        />
        <Card
          name="Anshuman Kr Prasad"
          img="https://amino19.github.io/online-resume/assets/img/mlhlhd.png"
          position="Organizer"
          github="https://github.com/amino19"
          linkedin="https://www.linkedin.com/in/amino19"
          mail="mailto:anshumaankrprasad76@gmail.com"
          twitter="https://twitter.com/aminostwt"
        />
        <Card
          name="Aditya Sahu"
          img=" https://github.com/adityasahu252.png"
          position="Organizer"
          twitter=" https://twitter.com/AdityaSahuDev"
          github="https://github.com/adityasahu252"
          linkedin="https://www.linkedin.com/in/aditya-sahu-477a69175/"
          gmail="mailto:adityasahu252@gmail.com"
        />
        <Card
          name="Akshat Nema"
          img="https://github.com/akshatnema.png"
          position="Organizer"
          twitter="https://twitter.com/AksNema"
          github="https://github.com/akshatnema"
          linkedin="https://www.linkedin.com/in/akshat-nema-2002/"
          gmail="mailto:akshatnema.school@gmail.com"
        />
        <Card
          name="Priyanka Prasad"
          img="https://avatars.githubusercontent.com/u/59612128?v=4"
          position="Organizer"
          twitter="https://twitter.com/prykdev"
          github="https://github.com/prykdev"
          linkedin="https://www.linkedin.com/in/prykdev/"
        />
        <Card
          name="Harsha Sumanchandra"
          img="https://avatars.githubusercontent.com/u/72148261?v=4"
          position="Organizer"
          github="https://github.com/Harsha200105"
          twitter="https://twitter.com/Harsha052001"
          linkedin="https://www.linkedin.com/in/harsha-sumanchandra/"
          gmail="mailto:harshamishra05@gmail.com"
        />
      </div>
    </div>
  );
}

// ! 1st - Joshith, Ghulam bhaiya, Aminos, Akshat
// * 2nd - Harsha, Priyanka, Payal
// ? 3rd - Ashish bhaiya, Abir bhaiya
// & 4th - Aditya bhaiya

export default Team;