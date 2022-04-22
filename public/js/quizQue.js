let quiz = [
    {
        q: "Q. What is the square root of 144?",
        option: ["12", "7", "11", "16"],
        ans: 0,
        theme: "img/math.png",
        learn: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        q: "Q. What is Earth’s only natural satellite?",
        option: ["Sun", "Mars", "Moon", "Venus"],
        ans: 2,
        theme: "img/earth.png",
        learn: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        q: "Q. What star shines in the day and provides light?",
        option: ["Neptune", "Mars", "Sun", "Jupiter"],
        ans: 2,
        theme: "img/solar.png",
        learn: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        q: "Q. What tissue connects muscles to bones?",
        option: ["Skin", "Blood vessels", "Fat", "Tendon"],
        ans: 3,
        theme: "img/connect.png",
        learn: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        q: "Q. Which nutrient plays an essential role in muscle-building?",
        option: ["Proteins", "Carbohydrates", "Iron", "Fat"],
        ans: 1,
        theme: "img/muscle.png",
        learn: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        q: "Q. Name the acid that is secreted in the stomach?",
        option: ["Sulphric acid", "Nitric Acid", "Hydrochloric acid", "Phosphoric acid"],
        ans: 2,
        theme: "img/stomach.png",
        learn: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        q: "Q. Which system of the body controls the senses?",
        option: ["Circulatory system", "Digestive system", "Skeletal system", "Nervous system"],
        ans: 3,
        theme: "img/sense.png",
        learn: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        q: "Q. Which scientist proposed the three laws of motion?",
        option: ["Isaac Newton", "Thomas Alva Edison", "Albert Einstein", "Stephen Hawking"],
        ans: 0,
        theme: "img/scientist.png",
        learn: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        q: "Q. Which is the largest animal on earth?",
        option: ["Shark", "Elephant", "Giraffe", "Blue Whale"],
        ans: 3,
        theme: "img/animal.png",
        learn: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    }
];

function curtain() {
    const curtain = document.querySelector("section");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    setTimeout(() => {
        footer.style.display = "block";
        main.style.display = "block";
        header.style.display = "block";
    }, 2800);
    setTimeout(() => {
        footer.style.opacity = "100";
        main.style.opacity = "100";
        header.style.opacity = "100";
        curtain.style.display = "none";
    }, 3000);
    curtain.style.top = "-100%";
}

let toggle = true;

function learnSection() {
//     // const main = document.querySelector("main");
//     // const footer = document.querySelector("footer");

//     // const menu = document.querySelector("nav");
//     // const header = document.querySelector("header");
    const queBox = document.querySelector('.que');
    const question = document.querySelector(".question");
    const options = document.querySelector(".options");
    const learnBox = document.querySelector(".learn-box");

    const learnBtn = document.querySelector('.learn-btn');
    const crossBtn = document.querySelector('.crossBtn');
    const nextBtn = document.querySelector('button');
//     // const menuContent = document.querySelector(".menuContent");

    if (toggle == true) {
//         // header.style.height = "6vh";
//         // menu.style.position = "absolute";
//         // menu.style.top = "0%";
//         // menu.style.zIndex = "1000";
//         // menu.style.width = "100%";
//         // menu.style.height = "100vh";

//         // footer.style.opacity = "0";
//         // main.style.opacity = "0";

//         // question.style.background = "rgba(0,0,0,0)";
//         learnBox.style.display = 'block';
//         optContainer.removeChild(option);
//         // options.style.height = "25vh";
//         setTimeout(() => {
//             learnBox.style.opacity = '100'
//             // menuContent.style.opacity = "100";
//             // menuContent.style.zIndex = "1000";
//         }, 1000);
//         // menu.style.background = "rgba(0,0,0,0.5)";
        question.style.opacity = '0';
        options.style.opacity = '0';

        queBox.style.height = '60vh';
        // setTimeout(() => {
        //     nextBtn.style.transform = 'translateY(-50vh)';
        // }, 500);

        learnBox.style.display = 'block';
        crossBtn.style.display= 'block';
        nextBtn.style.opacity = '0';
        setTimeout(() => {
            learnBtn.style.display = 'none';
            options.style.display = 'none';
            learnBox.style.opacity = '100';
            crossBtn.style.opacity = '100';
        }, 200);
        return toggle = false;
    } else {
//         // menu.style.position = "none";
//         // menu.style.top = "none";
//         // menu.style.zIndex = "none";
//         // menu.style.width = "100%";
//         // menu.style.height = "6vh";
//         // menu.style.background = "rgba(0,0,0,0)";

//         // menuContent.style.opacity = "0";
//         // menuContent.style.zIndex = "-1";
//         learnBox.style.opacity = '0';
//         learnBox.style.display = 'none';
//         setTimeout(() => {
//             // question.style.background = "rgba(0,0,0,0.2)";
//             // options.style.height = "17.5vh";
//             optContainer.appendChild(option);
//         }, 1000);
//         // setTimeout(() => {
//         //     footer.style.opacity = "1";
//         //     main.style.opacity = "1";
//         // }, 1500);
        options.style.display = 'block';

        question.style.opacity = '1';
        options.style.opacity = '1';

        queBox.style.height = '17.6vh';

        learnBox.style.opacity = '0';
        learnBtn.style.display = 'block';
        crossBtn.style.opacity = '0';
        nextBtn.style.opacity = '1';
        setTimeout(() => {
            crossBtn.style.display= 'none';
            learnBox.style.display = 'none';
        }, 800);
        return toggle = true;
    }
}