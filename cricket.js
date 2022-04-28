let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let wic = document.querySelector("#wic");
let dot = document.querySelector("#dot");

buttons = [dot, one, two, three, four, five, six, wic];

let t1 = document.querySelector("#t1");
let s1 = document.querySelector("#s1");
let w1 = document.querySelector("#w1");
let t2 = document.querySelector("#t2");
let s2 = document.querySelector("#s2");
let w2 = document.querySelector("#w2");
let inning = 0;
let balls = 24;
let maxballs = balls;

let start = document.querySelector("#start");
// start.addEventListener("click", inningChange);

function inningChange() {
    inning += 1;
    if (inning < 3) {
        start.innerHTML = "<h3>Match Ongoing. Inning " + inning + ".</h3>";
        balls = maxballs + 1;
        document.querySelector("#ballcount").style.visibility = "visible";
    }
    else
    {
        start.innerHTML = "<h3>Match Over</h3>";
        document.querySelector("#ballcount").style.visibility = "hidden";
    }
    document.querySelector("#balls").innerText = balls;
    if (inning > 2) {
        let team1 = document.querySelectorAll('.teams')[0];
        let team2 = document.querySelectorAll('.teams')[1];
        if (parseInt(s1.innerText) > parseInt(s2.innerText)) {
            t1.style.color = 'green';
            t2.style.color = 'red';
            fadeOutEffect(team2);
        }
        else if (parseInt(s1.innerText) < parseInt(s2.innerText)) {
            t1.style.color = 'red';
            t2.style.color = 'green';
            fadeOutEffect(team1);
        }
        else {
            t1.style.color = 'yellow';
            t2.style.color = 'yellow';
            fadeOutEffect(team1);
            fadeOutEffect(team2);
        }
    }
}

function updateScore(clicked) {
    if (balls > 0 && inning > 0 && inning < 3) {
        switch (clicked) {
            case 'one':
                if (inning == 1)
                    s1.innerText = parseInt(s1.innerHTML) + 1;
                else if (inning == 2)
                    s2.innerText = parseInt(s2.innerHTML) + 1;
                    if(parseInt(s1.innerText < parseInt(s2.innerText)) || parseInt(w2.innerText) == 10)
                    {
                        inningChange(inning);
                        break;
                    }
                break;
            case 'two':
                if (inning == 1)
                    s1.innerText = parseInt(s1.innerHTML) + 2;
                else if (inning == 2)
                    s2.innerText = parseInt(s2.innerHTML) + 2;
                    if(parseInt(s1.innerText < parseInt(s2.innerText)) || parseInt(w2.innerText) == 10)
                    {
                        inningChange(inning);
                        break;
                    }
                break;
            case 'three':
                if (inning == 1)
                    s1.innerText = parseInt(s1.innerHTML) + 3;
                else if (inning == 2)
                    s2.innerText = parseInt(s2.innerHTML) + 3;
                    if(parseInt(s1.innerText < parseInt(s2.innerText)) || parseInt(w2.innerText) == 10)
                    {
                        inningChange(inning);
                        break;
                    }
                break;
            case 'four':
                if (inning == 1)
                    s1.innerText = parseInt(s1.innerHTML) + 4;
                else if (inning == 2)
                    s2.innerText = parseInt(s2.innerHTML) + 4;
                    if(parseInt(s1.innerText < parseInt(s2.innerText)) || parseInt(w2.innerText) == 10)
                    {
                        inningChange(inning);
                        break;
                    }
                break;
            case 'five':
                if (inning == 1)
                    s1.innerText = parseInt(s1.innerHTML) + 5;
                else if (inning == 2)
                    s2.innerText = parseInt(s2.innerHTML) + 5;
                    if(parseInt(s1.innerText < parseInt(s2.innerText)) || parseInt(w2.innerText) == 10)
                    {
                        inningChange(inning);
                        break;
                    }
                break;
            case 'six':
                if (inning == 1)
                    s1.innerText = parseInt(s1.innerHTML) + 6;
                else if (inning == 2)
                    s2.innerText = parseInt(s2.innerHTML) + 6;
                    if(parseInt(s1.innerText < parseInt(s2.innerText)) || parseInt(w2.innerText) == 10)
                    {
                        inningChange(inning);
                        break;
                    }
                break;
            case 'wic':
                if (inning == 1) {

                    if (parseInt(w1.innerText) + 1 >= 10) {
                        w1.innerText = parseInt(w1.innerText) + 1;
                        inningChange(inning);
                        break;
                    }
                    w1.innerText = parseInt(w1.innerText) + 1;
                }
                if (inning == 2) {
                    if (parseInt(w2.innerText) + 1 >= 10) {
                        w2.innerText = parseInt(w2.innerText) + 1;
                        inningChange(inning);
                        break;
                    }
                    w2.innerText = parseInt(w2.innerText) + 1;
                }
                break;
            case 'dot':
                break;
            default:
            // code block
        }
    }
    if (inning > 0 && inning < 3) {
        balls = balls - 1;
        document.querySelector("#balls").innerText = balls;
    }
    if (balls ==0) {
        inningChange(inning);
    }
}

function fadeOutEffect(target) {
    var fadeTarget = target;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.05;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}
