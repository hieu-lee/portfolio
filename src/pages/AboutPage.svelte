<script lang="ts">
    import { pageurl } from "../store";
    const Home = () => {
        pageurl.set("landing");
    }
</script>

<div class="AboutPage">
    <div id="resume-block" style="padding: 20px;">
        <div>
            <div class="resume">
                <div class="header">
                    <img src="./img/home.png" alt="home" style="width: 25px; height: 25px; margin-top:2.5px; margin-left: 1.5px; cursor: pointer" on:click={Home}/>
                </div>
                <div class="resume-header resume-edit">
                    <div class="resume-header-info">
                        <div class="profile-picture">
                            <!-- svelte-ignore a11y-img-redundant-alt -->
                            <img src="img/Hieu Le.jpg" style="width: 141px; height: 141px; border-radius: 50%;" alt="Profile picture">
                        </div>
                        <div class="info-contact">
                            <div class="fullname">Hieu Le</div>
                            <div class="info-contact-row">
                                <div class="icon-info-contact"><svg viewBox="0 0 10 10" width="20">
                                        <path class="rect" fill="#22A5F1" d="M0 0h10v10H0z"></path>
                                        <path fill="#fff"
                                            d="M5.004 5.287a1.143 1.143 0 0 1 0-2.284 1.143 1.143 0 0 1 0 2.284zm0-3.407A2.266 2.266 0 0 0 2.74 4.143c0 1.55 2.026 3.823 2.112 3.92.08.09.222.09.303 0 .086-.097 2.112-2.37 2.112-3.92A2.266 2.266 0 0 0 5.003 1.88z">
                                        </path>
                                    </svg></div><span>44 Hao Nam Street</span>
                            </div>
                            <div class="info-contact-row">
                                <div class="icon-info-contact"><svg viewBox="0 0 10 10" width="20">
                                        <path class="rect" fill="#22A5F1"
                                            d="M4.58 5.382c.62.606 1.166.801 1.366.853l.746-.73c.063-.061.168-.061.241 0l1.418 1.387c.032.031.053.072.053.113 0 .041-.01.093-.042.123l-.83.812-.02.02-.022.01c-.21.165-.483.247-.82.247-.934 0-2.237-.678-3.308-1.725-1.524-1.47-2.185-3.246-1.524-4.047l.032-.031.83-.812c.063-.061.168-.061.241 0L4.36 2.99c.031.03.052.072.052.113a.163.163 0 0 1-.052.113l-.746.73c.063.174.325.8.966 1.437zM0 0v9.768h9.99V0z">
                                        </path>
                                    </svg></div><span>(+33)768058851</span>
                            </div>
                            <div class="info-contact-row">
                                <div class="icon-info-contact"><svg viewBox="0 0 10 10" width="20">
                                        <path class="rect" fill="#22A5F1"
                                            d="M8.044 2.968v4.058c0 .073-.06.136-.131.136H1.72a.136.136 0 0 1-.13-.136V2.968c0-.074.06-.137.13-.137h6.192c.07 0 .13.063.13.137zM9.614 0H0v9.973h.161c.02.01.05.01.07.01h9.162c.03 0 .05-.01.07-.01h.151z">
                                        </path>
                                        <path class="rect" fill="#22A5F1"
                                            d="M7.592 3.475a.087.087 0 0 0-.1 0L4.88 4.898c-.04.02-.09.02-.119 0L2.138 3.475c-.03-.02-.069-.01-.099 0-.03.021-.049.052-.049.083v.515c0 .042.02.073.05.093L4.76 5.723c.02.01.03.01.05.01.02 0 .03 0 .05-.01l2.72-1.557a.11.11 0 0 0 .05-.093v-.515c.01-.031-.01-.062-.04-.083z">
                                        </path>
                                    </svg></div><span>hieu.le@polytechnique.edu</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-title"></div>
                <div class="resume-section resume-edit">
                    <div class="title">Education</div>
                    <div class="text">
                        <div class="resume-formation-item resume-section-item">
                            <div class="resume-formation-item-title">
                                <p><i><strong>Hanoi - Amsterdam Highschool for Gifted Students</strong>, Ha Noi,
                                        2020</i></p><strong>Highschool</strong>
                                <div class="resume-formation-item-text">
                                    <p>I was a student of class Mathematics 1 in 3 years, and in grade 11, I
                                        participated in the National Mathematical Olympiad and got second prize and got
                                        in the Team Selection Test for top 48 participants with the highest scores.</p>
                                </div>
                            </div>
                        </div>
                        <div class="resume-formation-item resume-section-item">
                            <div class="resume-formation-item-title">
                                <p><i><strong>École Polytechnique de Paris</strong>, Palaiseau, Paris, 2023</i></p>
                                <strong>Bachelor of Science</strong>
                                <div class="resume-formation-item-text">
                                    <p>I followed the Bachelor of Science program with double majors in Mathematics and
                                        Computer Science</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-title"></div>
                <div class="resume-section resume-edit">
                    <div class="title" id="title-competencie">Skills</div>
                    <div class="text">
                        <ul>
                            <li>Python: Advanced level</li>
                            <li>C#: Advanced level</li>
                            <li>Blazor Webassembly and Blazor Server: Advanced level</li>
                            <li>Mongodb: Advanced level</li>
                            <li>ASP.Net Core: Advanced level</li>
                            <li>Javascript: Advanced level</li>
                            <li>Typescript: Advanced level</li>
                            <li>React: Intermediate level</li>
                            <li>Winform: Advanced level</li>
                            <li>Html CSS: Advanced level</li>
                            <li>Entity Framework Core: Intermediate</li>
                            <li>Data Structures and Algorithms: Advanced level</li>
                            <li>Mathematics: Expert</li>
                        </ul>
                    </div>
                </div>
                <div class="border-title"></div>
                <div class="resume-section resume-edit">
                    <div class="title" id="title-experience">Work Experience</div>
                    <div class="text">
                        <div class="resume-section-item">
                            <div class="resume-experience-item-title">
                                <p><strong class="title">Developer</strong> Sep 2020 / In progress</p>
                                <div><strong><i>Palaiseau, Paris</i></strong></div>
                            </div>
                            <div class="resume-experience-item-text">
                                <p style="text-align: start;"><span
                                        style="color: rgb(0, 0, 0); font-size: 14px; font-family: Century Gothic, serif;">I
                                        have been learning .Net since the beginning of 2021 individually while learning Python at
                                        school and have completed 6 medium projects, being:</span></p>
                                <ul>
                                    <li><span
                                            style="color: rgb(0, 0, 0); font-size: 14px; font-family: Century Gothic, serif;">An
                                            online Chat Application (it's a desktop app), allowing to send text
                                            messages, high quality photos with encryption, emojis, detecting online and
                                            typing states, creating private/public rooms,..., created using Winform and
                                            Mongodb.<br /><a target="_blank"
                                                href="https://github.com/hieu-lee/Chat-Room"
                                                style="color: #22A5F1">Source
                                                code</a></span>
                                    </li>
                                    <li><span
                                            style="color: rgb(0, 0, 0); font-size: 14px; font-family: Century Gothic, serif;">An
                                            online quizz application (it's a web app, being hosted on Azure), allowing
                                            you to create and do exams, created using Blazor Webassembly, ASP.Net Core
                                            and Mongodb. You can access it by the link below:<br/>
                                            <a target="_blank" href="https://examaccess.azurewebsites.net"
                                                style="color: #22A5F1">ExamAccess</a><br />
                                            <a target="_blank" href="https://github.com/hieu-lee/ExamAccess"
                                                style="color: #22A5F1">Source
                                                code</a></span>

                                    </li>
                                    <li><span
                                            style="color: rgb(0, 0, 0); font-size: 14px; font-family: Century Gothic, serif;">An
                                            online Minesweeper game (it's a desktop app) created using Winform and
                                            Mongodb.<br />
                                            <a target="_blank"
                                                href="https://drive.google.com/drive/folders/1rPsWzOjeA2QMHzq3Xrtc0skuCzaeyCed?usp=sharing"
                                                style="color: #22A5F1;">Download App</a><br />
                                            <a target="_blank" href="https://github.com/hieu-lee/Minesweeper"
                                                style="color: #22A5F1;">Source code</a></span></li>
                                    <li><span
                                            style="color: rgb(0, 0, 0); font-size: 14px; font-family: Century Gothic, serif;">A
                                            todo list app, allowing you to create your todo lists, todo items, set time
                                            and details for your tasks, created using Blazor Server and Entity Framework
                                            Core with sqlite is the database, it is a web application, but I used
                                            Electron to make it become a desktop application.<br />
                                            <a target="_blank"
                                                href="https://drive.google.com/drive/folders/1dpKZAtqbZ9yPXvXMe9VRk89lcXC1uTyw?usp=sharing"
                                                style="color: #22A5F1;">Download App</a><br />
                                            <a target="_blank" href="https://github.com/hieu-lee/TodoList"
                                                style="color: #22A5F1;">Source code</a></span></li>
                                    <li><span
                                            style="color: rgb(0, 0, 0); font-size: 14px; font-family: Century Gothic, serif;">FutureMe - An app allowing you to send letters to your future self, and allowing people to read, like the public letters. I used Blazor Webassembly for this app.<br />
                                            <a target="_blank" href="https://hieu-lee.github.io/FutureMe"
                                            style="color: #22A5F1;">FutureMe</a>&nbsp;<br/>
                                            <a target="_blank" href="https://github.com/hieu-lee/FutureMe"
                                                style="color: #22A5F1;">Source
                                                code</a></span>&nbsp;</li>
                                    <li><span
                                        style="color: rgb(0, 0, 0); font-size: 14px; font-family: Century Gothic, serif;">
                                        MEDU - An online app allowing teachers to manage their classes, students' info and teaching schedules. I used Blazor Server for this app.<br/>
                                        <a target="_blank" href="https://medu-app.azurewebsites.net/"
                                            style="color: #22A5F1;">MEDU</a>&nbsp;<br/>
                                        <a target="_blank" href="https://github.com/hieu-lee/ClassManagement"
                                            style="color: #22A5F1;">Source
                                            code</a></span>&nbsp;</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-title"></div>
                <div class="resume-section resume-edit">
                    <div class="title" id="title-langues">Languages</div>
                    <div class="resume-formation-item-text">
                        <ul>
                            <li style="list-style: circle;"><strong>English</strong>: Fluent</li>
                            <li style="list-style: circle;"><strong>French</strong>: Intermediate</li>
                            <li style="list-style: circle;"><strong>Vietnamese</strong>: Native</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <footer style="background-color:#22A5F1; display: flex; justify-content: center; padding: 30px 0;">
        <div class="pics">
            <a target="_blank" href="https://github.com/hieu-lee" style="margin-right: 20px; text-decoration: none;">
                <img src="img/github.png" style="width: 48px; height: 48px;" alt="Github">
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/hieu-le-83732320b/" style="margin-left: 20px;  text-decoration: none;">
                <img src="img/linkedin.png" alt="LinkedIn">
            </a>
        </div>
    </footer>
</div>

<style>
    .AboutPage {
        text-align: left;
    }

    .resume * {
        word-break: break-word;
    }

    .resume * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .header {
        height: 30px;
        background-color: #22A5F1;
    }

    .resume {
        font-family: Century Gothic, serif;
        font-size: 18px !important;
        background: #fff;
        color: #9b9b9b;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .resume-header {
        margin: 20px 0;
    }

    .resume-header-info {
        display: flex;
    }

    .info-contact {
        margin-left: 15px;
    }

    .info-contact>.fullname {
        color: #22A5F1;
        font-size: 28px;
        margin-bottom: 15px;
        text-transform: uppercase;
        font-weight: bold;
    }

    .info-contact>.info-contact-row {
        color: black;
        display: flex;
        font-size: 15px;
        margin-bottom: 12px;
    }

    .info-contact-row>.icon-info-contact {
        min-width: 20px;
        min-height: 20px;
        margin-right: 10px;
    }

    .resume-section>.title {
        text-transform: uppercase;
        min-width: 150px;
        font-weight: bold;
        font-size: 17px;
        color: #22A5F1;
        margin-right: 50px;
    }

    .resume-section>#title-competencie,
    #title-langues {
        margin-right: 65px !important;
    }

    .resume-section>#title-experience,
    #title-langues {
        width: 150px;
        margin-right: 50px;
    }

    .resume .resume-section {
        border-top: 2px solid #22A5F1;
        display: flex;
        padding: 10px 0 20px 0;
    }

    .resume-section>.text {
        width: inherit;
        font-size: 15px;
        color: #9b9b9b;
    }

    .border-title {
        width: 150px;
        border-top: 6px solid #22A5F1;
    }

    .resume-section-item {
        padding-bottom: 20px;
        margin-bottom: 8px;
    }

    .resume-section-item:not(:last-child) {
        border-bottom: 2px dashed black;
    }

    .resume-experience-item-title .title {
        text-transform: uppercase;
    }

    .resume-section li {
        list-style: circle;
        font-size: 15px;
    }
</style>