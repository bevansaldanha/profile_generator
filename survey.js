const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const paraInfo = {};

rl.question('What\'s your name? Nicknames are also acceptable ? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  paraInfo.name = answer;

  rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    paraInfo.activity = answer;

    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      paraInfo.music = answer;


      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        paraInfo.meal = answer;


        rl.question('What\'s your favourite thing to eat for that meal?? ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          paraInfo.food = answer;
          
          rl.question('Which sport is your absolute favourite?', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            paraInfo.sport = answer;


            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              paraInfo.superpower = answer;

              process.stdout.write(`${JSON.stringify(paraInfo.name)} loves listening to ${JSON.stringify(paraInfo.music)} while ${JSON.stringify(paraInfo.activity)}, devouring ${JSON.stringify(paraInfo.food)} for ${JSON.stringify(paraInfo.meal)} , prefers ${JSON.stringify(paraInfo.sport)} over any other sport, and is amazing at ${JSON.stringify(paraInfo.superpower)}.\n`);





              rl.close();
            });


          });


        });
      });
    });
  });
});