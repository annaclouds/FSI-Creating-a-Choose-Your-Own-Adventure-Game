//Your Code here

// 1. ask the user a question.
    // window.prompt('Do you head left or right?');

// 2. get the user's answer.
    // let answer = window.prompt('Do you head left or right?')
    // let firstAnswer = window.prompt('Do you head left or right?');
    // console.log(firstAnswer);

// 3. check the user's answer.
    // console.log(firstAnswer === 'left');

// 4. respond to the user's answer using an if statement.
    // let firstAnswer = window.prompt('Do you head left or right?');
    // if(firstAnswer === 'left') {
    //     let secondAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your parth?');
    // } else if(firstAnswer === 'right') {
    //     let secondAnswer = window.prompt('You can come across a snoring dragon. On the other side of him, you see a shiny chest of treature. Another path would lead you away from the dragon altogether. Which path do you take?')
    // }

// 5. Build a tree of questions.
let firstAnswer = window.prompt('Do you head left or right?');
if(firstAnswer === 'left') {
    console.log(firstAnswer);

    let secondAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?');
    console.log(secondAnswer);

    if (secondAnswer === 'follow') {
        let thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.');
        console.log(thirdAnswer)

        if(thirdAnswer === 'stay') {
            let fourthAnswer = window.alert('You live happily amongst the cats for the rest of your days.');
            // console.log(fourthAnswer);
        } else if (thirdAnswer === 'spread the word') {
            let fourthAnswer = window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.');
            // console.log(fourthAnswer);
        }
    } else if (secondAnswer === 'continue') {
        let thirdAnswer = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?');
        console.log(thirdAnswer)

        if (thirdAnswer === 'ladder') {
            let fourthAnswer = window.alert('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.');
            // console.log(fourthAnswer);
        } else if (thirdAnswer === 'staircase') {
            let fourthAnswer = window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.');
            // console.log(fourthAnswer);
        }
    }
}

if(firstAnswer === 'right') {
    console.log(firstAnswer);

    let secondAnswer = window.prompt('You can come across a snoring dragon. On the other side of him, you see a shiny chest of treature. Another path would lead you away from the dragon altogether. Which path do you take?');
    console.log(secondAnswer);

    if (secondAnswer === 'past the dragon') {
        let thirdAnswer = window.prompt('The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:');
        console.log(thirdAnswer);

        if (thirdAnswer === 'stay') {
            let fourthAnswer = window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.');
            // console.log(fourthAnswer);
        } else if (thirdAnswer === 'run') {
            let fourthAnswer = window.alert("Quickly, you run back to the cave's entrance. Sheepish, you return home.");
            // console.log(fourthAnswer);
        }
    } else if (secondAnswer === 'away from the dragon') {
        let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?');
        console.log(thirdAnswer);

        if (thirdAnswer === 'draw it') {
            let fourthAnswer = window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.');
            // console.log(fourthAnswer);
        } else if (thirdAnswer === 'pick it') {
            let fourthAnswer = window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.');
            // console.log(fourthAnswer);
        }
    }
}