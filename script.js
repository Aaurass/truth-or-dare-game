const truths = [
    "What’s the craziest thing you’ve ever done while under the influence?",
    "Have you ever broken into somewhere you shouldn’t have?",
    "What’s the most illegal thing you’ve ever done?",
    "Have you ever snuck into a place you weren’t allowed to be?",
    "What’s the most scandalous photo you have on your phone?",
    "What’s the wildest party you’ve ever attended?",
    "Have you ever done something so dangerous it could have killed you?",
    "What’s the biggest lie you’ve told that no one knows about?",
    "Have you ever hooked up with someone you shouldn’t have?",
    "What’s the most inappropriate place you’ve ever fallen asleep?",
    "What’s the wildest dare you’ve accepted that you regret?",
    "What’s the worst decision you’ve made after a night out?",
    "What’s the biggest secret you’ve kept from your family?",
    "Have you ever stolen a car or driven one without permission?",
    "What’s the most outlandish thing you’ve done to impress someone?",
    "What’s the most extreme thing you’ve done for money?",
    "What’s the craziest thing you’ve done in front of a stranger?",
    "What’s the wildest thing you’ve ever eaten?",
    "Have you ever sent a message to the wrong person and it was embarrassing?",
    "What’s the most bizarre thing you’ve witnessed in real life?",
    "What’s the most daring thing you’ve done while traveling?",
    "What’s the most impulsive thing you’ve ever done?",
    "Have you ever sneaked into an event or concert without a ticket?",
    "What’s the craziest rumor you’ve started?",
    "What’s the most insane prank you’ve pulled off or been a part of?",
    "Have you ever made a life-changing decision in a split second?",
    "What’s the most risky thing you’ve done just for the thrill?",
    "What’s the biggest secret you’ve kept from your friends?",
    "What’s the wildest thing you’ve done on a dare that was borderline dangerous?",
    "Have you ever been chased or pursued by someone or something?",
    "What’s the weirdest thing you’ve ever done in public?",
    "What’s the most absurd thing you’ve done to avoid work or school?",
    "What’s the biggest scandal you were a part of or witnessed?",
    "Have you ever lied to get out of a dangerous situation?",
    "What’s the most outrageous story you’ve never told anyone?",
    "What’s the most shocking thing you’ve done for a thrill?",
    "Have you ever been caught doing something really bad and denied it?",
    "What’s the most outrageous thing you’ve ever worn out in public?",
    "What’s the weirdest place you’ve ever slept?",
    "Have you ever seen or experienced something that made you question reality?",
    "What’s the biggest embarrassment you’ve ever faced in a group of people?",
    "What’s the craziest thing you’ve done just because you were bored?",
    "What’s the wildest thing you’ve ever done with a complete stranger?",
    "Have you ever taken a huge risk and lost everything?",
    "What’s the most spontaneous thing you’ve done without thinking?",
    "What’s the most shocking thing you’ve done at a family gathering?",
    "What’s the most rebellious thing you’ve ever done?",
    "Have you ever made a big bet that you regretted later?",
    "What’s the most risky activity you’ve done without proper training?",
    "Have you ever made a life-threatening decision for a thrill?",
    "What’s the most unusual thing you’ve ever done for love?",
    "Have you ever snuck out of the house and done something wild?",
    "What’s the most intense adventure you’ve been on?",
    "What’s the most scandalous thing you’ve overheard?",
    "What’s the most reckless thing you’ve ever done while trying to impress someone?",
    "What’s the most intense physical challenge you’ve attempted?",
    "What’s the most foolish thing you’ve done for a dare?",
    "Have you ever damaged something important and lied about it?",
    "What’s the craziest thing you’ve ever done in your sleep?",
    "What’s the biggest secret you know that you haven't shared?",
    "What’s the wildest thing you’ve ever seen someone else do?",
    "What’s the most absurd thing you’ve ever believed as true?",
    "What’s the scariest thing you’ve done alone?",
    "Have you ever stolen something that was priceless?",
    "What’s the most out-of-control thing you’ve done at a party?",
    "What’s the most wild thing you’ve done as a joke?",
    "What’s the craziest challenge you’ve ever attempted?",
    "What’s the most extreme sport you’ve done?",
    "What’s the biggest risk you’ve taken that actually paid off?",
    "What’s the most surreal thing you’ve experienced?",
    "What’s the most shocking thing you’ve said or done to get revenge?",
    "What’s the most impulsive thing you’ve done and regretted instantly?",
    "What’s the most secretive thing you’ve done to avoid trouble?",
    "What’s the scariest experience you’ve ever had while on vacation?",
    "What’s the wildest lie you’ve told to cover up a mistake?",
    "What’s the weirdest thing you’ve done that people still don’t know about?",
    "Have you ever faced a life-or-death situation and won?",
    "What’s the craziest outfit you’ve worn for attention?",
    "What’s the most daring thing you’ve done with a friend that you won’t admit?",
    "What’s the weirdest thing you’ve done at work or school?",
    "What’s the most extreme prank you’ve witnessed?",
    "What’s the most reckless thing you’ve done that no one else knows about?",
    "What’s the most dangerous stunt you’ve ever pulled?",
    "What’s the most outrageous thing you’ve ever been dared to do?",
    "What’s the most outlandish bet you’ve made?",
    "What’s the most reckless thing you’ve done while angry?",
    "Have you ever gotten away with something really bad?",
    "What’s the scariest encounter you’ve had while exploring somewhere new?",
    "What’s the most surprising thing you’ve ever found?",
    "What’s the wildest thing you’ve ever done at a concert?",
    "What’s the most disturbing thing you’ve ever seen?",
    "What’s the craziest night out you’ve ever had?",
    "What’s the most surprising thing you’ve done without any planning?",
    "What’s the most wild thing you’ve ever witnessed someone do in public?",
    "What’s the biggest lie you’ve ever told that worked?",
    "What’s the most shocking or surprising thing you’ve ever done for fun?",
    "What’s the most intense experience you’ve had that you still don’t talk about?",
    "What’s the craziest thing you did on vacation that no one else knows about?",
    "What’s the most risky thing you’ve done while bored at home?"
];

const dares = [
    "Run around your house screaming at the top of your lungs.",
    "Post something embarrassing on your main social media account.",
    "Do your best impression of an animal in front of everyone.",
    "Let someone draw on your face with a permanent marker.",
    "Record yourself dancing to an embarrassing song and post it online.",
    "Call a friend and sing 'Happy Birthday' as if it’s their birthday.",
    "Let someone write a silly phrase on your forehead and keep it there for an hour.",
    "Wear socks on your hands for the next 30 minutes.",
    "Pretend to be a celebrity and take selfies as if you’re at a red carpet event.",
    "Do 50 jumping jacks while singing a silly song.",
    "Send a message to your crush saying, 'I need to tell you something...'",
    "Post a selfie with a ridiculous filter and leave it up for an hour.",
    "Do your best impression of a cat for the next 3 minutes.",
    "Talk in an accent for the next 5 minutes.",
    "Wear your clothes backward for the next 30 minutes.",
    "Act out a dramatic scene from a movie in front of everyone.",
    "Go outside and dance like nobody's watching for 2 minutes.",
    "Let someone draw a silly mustache on your face with a marker.",
    "Do a cartwheel or try a flip (if you’re able).",
    "Call a friend and pretend you don’t recognize them.",
    "Post a funny and embarrassing video of yourself online.",
    "Try to lick your elbow for 30 seconds.",
    "Wear your shoes on the wrong feet for the next hour.",
    "Let someone take an unflattering picture of you and use it as their profile picture for an hour.",
    "Speak only in questions for the next 10 minutes.",
    "Act like a monkey and jump around for 1 minute.",
    "Do your best robot dance in the middle of a crowded place.",
    "Dance to an embarrassing song in front of everyone.",
    "Try to eat a spoonful of a condiment you don’t like.",
    "Run in place for 2 minutes while reciting the alphabet backward.",
    "Let someone pick a funny or silly outfit for you to wear for an hour.",
    "Try to do the splits (or close to it).",
    "Do 10 push-ups while singing 'Twinkle, Twinkle, Little Star.'",
    "Pretend to be a chef and cook a silly 'dish' using random ingredients in your kitchen.",
    "Walk backward for 1 minute while talking to someone.",
    "Let someone give you a silly nickname and use it for the next hour.",
    "Make a funny noise every time someone says a certain word.",
    "Call your parents and tell them you just won a huge lottery prize (then confess it’s a joke).",
    "Draw a silly picture on your arm and show it to everyone.",
    "Talk in a made-up language for the next 3 minutes.",
    "Wear a paper crown and pretend you’re royalty for the next 10 minutes.",
    "Pretend to be an animal of your choice and act like it for the next 5 minutes.",
    "Walk around the house in a silly pose.",
    "Dance in the middle of a busy street or crowded area for 30 seconds.",
    "Let someone else come up with a new dance move for you to do.",
    "Sing a song loudly while doing an unusual dance.",
    "Post a photo of yourself doing a silly face and leave it up for an hour.",
    "Try to juggle three objects and keep them in the air for 1 minute.",
    "Stand on one foot and try to balance for 30 seconds.",
    "Try to recite the entire alphabet in reverse as quickly as possible.",
    "Do a fake accent of a random country for the next 5 minutes.",
    "Act like a robot and pretend your battery is low.",
    "Take a funny selfie and use it as your profile picture for 2 hours.",
    "Do a 60-second freestyle dance and make up moves as you go.",
    "Try to make your friends laugh while wearing a ridiculous wig.",
    "Walk on your knees for the next 2 minutes.",
    "Make a silly dance video and send it to a group chat.",
    "Pretend to be a superhero and create an absurd backstory for yourself.",
    "Wear a funny hat for the next 30 minutes.",
    "Have someone else draw a funny face on your arm with a pen.",
    "Try to fit as many marshmallows in your mouth as you can.",
    "Do your best impression of a famous actor or singer in front of everyone.",
    "Take an unusual pose and hold it for 1 minute.",
    "Do your best impression of an animal and have everyone guess what it is.",
    "Talk like a pirate for the next 2 minutes.",
    "Put on socks and slide across the floor like you’re skating.",
    "Tell a silly story while making funny faces and gestures.",
    "Do 20 squats while trying to keep a straight face.",
    "Do an exaggerated runway walk in front of your friends.",
    "Let someone pick a funny hairstyle for you to wear for the next hour.",
    "Make a funny face and hold it for 30 seconds.",
    "Go to the window and wave at strangers as if you know them.",
    "Try to do a handstand against a wall (even if you can't hold it).",
    "Act out a scene from a movie in front of everyone with no context.",
    "Walk around the house with a book on your head for 2 minutes.",
    "Challenge someone to a staring contest until someone blinks.",
    "Post a silly, made-up fact about yourself on social media.",
    "Try to sing a song in a high-pitched voice.",
    "Create a silly dance routine with your friends and perform it together.",
    "Do a TikTok dance you’ve never tried before and film yourself.",
    "Pretend to be a famous celebrity and answer questions like them.",
    "Wear a mask or disguise and talk in a secretive voice for 3 minutes.",
    "Try to eat a whole lemon slice without making a face.",
    "Run on the spot for 1 minute and pretend you’re in a race.",
    "Try to draw a mustache on your face with a pen.",
    "Sing 'Let It Go' as loud as you can, then act like Elsa for 2 minutes.",
    "Walk around in a silly costume or outfit for 30 minutes.",
    "Talk with your mouth full of water for 2 minutes.",
    "Make an outrageous joke that everyone has to laugh at or pay a penalty.",
    "Pretend to be a famous cartoon character and reenact their catchphrase.",
    "Have someone choose a weird item and try to balance it on your head for 1 minute."
];


function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('truthButton').style.display = 'none';
    document.getElementById('dareButton').style.display = 'none';
    document.getElementById('restartButton').style.display = 'none';
    const gameContent = document.getElementById('gameContent');
    const selection = document.getElementById('selection');
    const result = document.getElementById('result');
    const animationContainer = document.getElementById('animationContainer');

    gameContent.style.display = 'block';
    selection.textContent = 'Randomizing...';

    // Add visual animation for randomizing
    animationContainer.innerHTML = '<div class="spinning"></div>';

    // Display "Truth" or "Dare" after 10 seconds
    setTimeout(() => {
        animationContainer.innerHTML = ''; // Remove the spinner
        const truthOrDare = Math.random() < 0.5 ? 'Truth' : 'Dare';
        selection.textContent = truthOrDare;

        setTimeout(() => {
            let chosen;
            if (truthOrDare === 'Truth') {
                chosen = truths[Math.floor(Math.random() * truths.length)];
            } else {
                chosen = dares[Math.floor(Math.random() * dares.length)];
            }
            result.textContent = chosen;
            document.getElementById('restartButton').style.display = 'inline-block';
        }, 2000); // Delay to show the "Truth" or "Dare" for 2 seconds
    }, 5000); // Randomizing delay of 10 seconds
}

function showRandomTruth() {
    const gameContent = document.getElementById('gameContent');
    const result = document.getElementById('result');

    document.getElementById('startButton').style.display = 'none';
    document.getElementById('truthButton').style.display = 'none';
    document.getElementById('dareButton').style.display = 'none';
    document.getElementById('restartButton').style.display = 'none';

    gameContent.style.display = 'block';
    result.textContent = truths[Math.floor(Math.random() * truths.length)];
    document.getElementById('restartButton').style.display = 'inline-block';
}

function showRandomDare() {
    const gameContent = document.getElementById('gameContent');
    const result = document.getElementById('result');

    document.getElementById('startButton').style.display = 'none';
    document.getElementById('truthButton').style.display = 'none';
    document.getElementById('dareButton').style.display = 'none';
    document.getElementById('restartButton').style.display = 'none';

    gameContent.style.display = 'block';
    result.textContent = dares[Math.floor(Math.random() * dares.length)];
    document.getElementById('restartButton').style.display = 'inline-block';
}

function restartGame() {
    document.getElementById('startButton').style.display = 'inline-block';
    document.getElementById('truthButton').style.display = 'inline-block';
    document.getElementById('dareButton').style.display = 'inline-block';
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('gameContent').style.display = 'none';
    document.getElementById('selection').textContent = '';
    document.getElementById('result').textContent = '';
    document.getElementById('animationContainer').innerHTML = '';
}
