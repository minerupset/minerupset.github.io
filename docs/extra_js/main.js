const quotes = [
  {
    author: "Anonymous",
    quote: "Hard work beats talent when talent fails to work hard",
  },
  {
    author: "Richard Feynman",
    quote:
      "You can know the name of a bird in every language and still know nothing of the bird",
  },
  {
    author: "'Jewish' Proverb",
    quote:
      "One man calls you a horse, you punch him in the mouth. Second man calls you a horse, you call him a jerk. Third man calls you a horse, maybe it’s time to buy a saddle",
  },
  {
    author: "Archilochus",
    quote: "The fox knows many things, but the porcupine knows one big thing",
  },
  {
    author: "George Bernard Shaw",
    quote:
      "Most people think once or twice a year. I have made an international name for myself by thinking once or twice a week",
  },
  {
    author: "Anonymous",
    quote: "Be honest, then be kind",
  },
  {
    author: "Anonymous",
    quote: "Don't be surprised by the rising of the sun",
  },
  {
    author: "Anonymous",
    quote:
      "Go slow to go fast. Do it slowly, correctly, and then learn to do it faster",
  },
  {
    author: "Anonymous",
    quote: "It's hard to feel good when you feel bad",
  },
  {
    author: "Anonymous",
    quote:
      "If everyone is working 60 hours a week, that stops being your added value. What differentiates you?",
  },
  {
    author: "Anonymous",
    quote: "You are your own best advocate",
  },
  {
    author: "Steve Miner",
    quote:
      "If something is easy for you but hard for others, that's your added value",
  },
  {
    author: "Anonymous",
    quote:
      "Every hard problem is made up of a series of simple problems. Organize and solve the simple problems",
  },
  {
    author: "Anonymous",
    quote:
      'Few people wake up and say to themselves, "How can I be an asshole today?" Set people up to be a protagonist and they will help you',
  },
  {
    author: "Benjamin Franklin",
    quote: "An ounce of prevention is worth a pound of cure",
  },
  {
    author: "Anonymous",
    quote:
      "Logical extremes can give you a bearing, but logic can break down at the extremes",
  },
  {
    author: "Krista Perry",
    quote: "If someone else can do it 70% as well as you can, delegate it",
  },
  {
    author: "Ray Dalio",
    quote: "You can't take it with you, so make sure the journey is a good one",
  },
  {
    author: "Rick Dicker",
    quote:
      "If you want to get out of the hole, first you have to put down the shovel",
  },
  {
    author: "Anonymous",
    quote:
      "Economic specialization is a thing for a reason. The time to learn vs the number of times to implement should be a healthy ratio",
  },
  {
    author: "Anonymous",
    quote: "You can't improve (or reduce) what you don't measure",
  },
  {
    author: "James Clear",
    quote:
      "Just because you did some activity doesn't mean you made progress. Progress assumes you have a goal",
  },
  {
    author: "Anonymous",
    quote:
      "If you're too busy or stressed to take a deep breath and meditate, that's the exact time you need to take a deep breath and meditate",
  },
  {
    author: "Anonymous",
    quote:
      "When you want to go fast, go alone. When you want to go far, go together",
  },
  {
    author: "Benjamin Franklin (Anonymous)",
    quote:
      "In for a penny, in for a pound (but don't throw good money after bad)",
  },
  {
    author: "Ray Dalio",
    quote:
      "Don't change your qualities: redirect your qualities to where they're useful",
  },
  {
    author: "James Clear",
    quote:
      "Missing one day of a habit is a mistake. Missing two days is a new habit",
  },
  {
    author: "Anonymous",
    quote: "An open book in your hand is worth 10 books on the shelf",
  },
  {
    author: "Anonymous",
    quote:
      "Survivorship bias is everywhere: don't assume that because someone succeeded that it was their own doing and not luck's doing",
  },
  {
    author: "Ray Dalio",
    quote:
      "Reality is untroubled by your opinion. The sooner you can face reality, the sooner you can address it, and that is most important when reality is unpleasant",
  },
  {
    author: "Gautama Buddha",
    quote: "Anger has a honeyed tip but a poison root",
  },
  {
    author: "Ray Dalio",
    quote:
      "Pain and discomfort are inevitable. Don't focus on minimizing them, but instead on learning from them",
  },
  {
    author: "Anonymous",
    quote:
      "If you and I each have an apple and we trade, we each have one apple. But if you and I each have an idea and we trade, we both have two ideas",
  },
  {
    author: "Anonymous",
    quote: "You are under no obligation to be who you were 5 minutes ago",
  },
  {
    author: "Anonymous",
    quote:
      "Some tasks require your Leadership, your Management, or your Staff capabilites. Don't bring the wrong brain to a task",
  },
  {
    author: "Vivian DeWoskin",
    quote:
      "We're all juggling: the trick is figuring out which balls are glass and which are rubber",
  },
  {
    author: "Anonymous",
    quote: "How do you eat an elephant? One bite at a time",
  },
  {
    author: "Niehls Bohr",
    quote: "Predictions are hard, especially predictions about the future",
  },
  {
    author: "Steve Miner",
    quote:
      "You are in control of your own emotions. Someone else may do something good or bad to you but in the end, it’s you who decides how you feel and respond",
  },
  {
    author: "Anonymous",
    quote: "Even Hitler drank water",
  },
  {
    author: "Anonymous",
    quote:
      "Wisdom is not knowing your proverbs, but knowing when to apply them",
  },
  {
    author: "Anonymous",
    quote: "Perfect is the enemy of good",
  },
  {
    author: "Alejandro Villageliu",
    quote:
      "If someone grew up in Kansas eating burgers medium rare, and goes to El Pollo Loco and asks for a chicken burger medium rare, don't give them salmonella. Tell them that's not how you cook chicken and give them a chicken burger well done",
  },
  {
    author: "Steve Miner",
    quote:
      "Not all years of experience are the same: someone may have “20 years of experience”, but it’s the same year repeated again. If you’re not learning from your mistakes, it’s not a new experience ",
  },
  {
    author: "Anonymous",
    quote: "If you see a catastrophe, think Chernobyl, not an asteroid",
  },
  {
    author: "Charlotte Browning",
    quote:
      "If you lend someone $50 and you never see them again, it was worth $50 to find out who they really are",
  },
  {
    author: "Anonymous",
    quote:
      "Meditation isn’t about getting quiet time to solve your problems: it’s about learning to trust yourself to solve your problems when they come up",
  },
  {
    author: "Carl Jung",
    quote:
      "Until you make the unconscious conscious, it will direct your life and you will call it fate",
  },
  {
    author: "Ray Dalio",
    quote:
      "It is better to not have the time for unimportant things than it is to not have the time for important things ",
  },
  {
    author: "Anonymous",
    quote:
      "We are not rational beings who emote: we are emotional beings who rationalize",
  },
  {
    author: "Mike DeGregorio",
    quote: "When it comes to fees and contracts, let them cry once",
  },
  {
    author: "Jesse Schouboe",
    quote:
      "It’s not about not feeling the emotion, it’s about gracefully expressing it",
  },
  {
    author: "Anonymous",
    quote:
      "Don’t schedule the things you do when you’re bored: schedule the time to get bored so you can do those things",
  },
  {
    author: "Anonymous",
    quote:
      "It's easier to have self control in the grocery store than in the pantry",
  },
  {
    author: "Anonymous",
    quote: "Don't tolerate brilliant jerks",
  },
  {
    author: "Anonymous",
    quote:
      "The baby rattlesnake is far more deadly than the adult because it hasn't learned its own power&nbsp;",
  },
  {
    author: "Anonymous",
    quote:
      "People can be infinitely stupid or infinitely evil, but rarely both&nbsp;",
  },
  {
    author: "Tim Wohlgemut",
    quote: "The best way to get promoted is to train your replacement",
  },
  {
    author: "Winston Churchill",
    quote:
      "Success consists of going from failure to failure without loss of enthusiasm",
  },
  {
    author: "Anonymous",
    quote: "Lead with your ugly",
  },
  {
    author: "Jaqi Saleem",
    quote: "The 6 o&rsquo;clock news starts at 6, not when we&rsquo;re ready",
  },
  {
    author: "Karl Weick",
    quote: "Argue like you&rsquo;re right, listen like you&rsquo;re wrong",
  },
  {
    author: "Lowell Kahn",
    quote:
      "As a business owner, the work I do until 5 or 6 o&rsquo;clock doesn&rsquo;t make me any money: that keeps the lights on. It&rsquo;s the 2 hours of work I do afterwards that make me money",
  },
  {
    author: "Anonymous",
    quote:
      "Once you've decided to be angry about a problem, stop being angry and start doing something about the problem",
  },
  {
    author: "Robert Fulghum",
    quote:
      "A lump in the oatmeal, a lump in the throat, and a lump in the breast are not the same lump. One should learn the difference",
  },
  {
    author: "Anonymous",
    quote:
      "The brain is great at processing and poor at remembering. Let it play to its strengths",
  },
  {
    author: "Mo Orechwa",
    quote: "You can't turn chicken shit into chicken soup",
  },
  {
    author: "Anonymous",
    quote:
      "If you&rsquo;re not doing prehab, you&rsquo;re going to end up doing rehab",
  },
  {
    author: "Lindsey Morgan",
    quote: "If you know better, do better&nbsp;",
  },
  {
    author: "Vivian DeWoskin",
    quote: "It's only called politics when it's dirty",
  },
  {
    author: "Zimbabwean Proverb",
    quote: "The axe forgets; the tree remembers",
  },
  {
    author: "Anonymous",
    quote: "If you weren't afraid, it wasn't courage",
  },
  {
    author: "Anonymous",
    quote:
      "Time will pass whether you want it to or not: how do you want to look back on it?",
  },
  {
    author: "Carl Sagan",
    quote:
      "Once you give a charlatan power over you, you almost never get it back",
  },
  {
    author: "Anonymous",
    quote:
      "The first principle is to remember that you must not fool yourself, and you are the easiest person to fool",
  },
  {
    author: "Islamic Proverb",
    quote: "Pray to God, but tie your camel to the post",
  },
  {
    author: "Anonymous",
    quote:
      "Resentment is like taking poison and waiting for the other person to die",
  },
  {
    author: "Yul Brynner",
    quote:
      "Never argue with stupid people: they will drag you down to their level and then beat you with experience",
  },
  {
    author: "Robert Frost",
    quote:
      "By working faithfully 8 hours a day you may eventually get to be a boss and work 12 hours a day",
  },
  {
    author: "Benjamin Franklin",
    quote:
      "Many people die at twenty-five and aren't buried until they are seventy-five",
  },
  {
    author: "Dalai Lama",
    quote:
      "Man lives as if he is never going to die, and then he dies having never really lived",
  },
  {
    author: "Frank Herbert",
    quote:
      "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear, I will permit it to pass over me and through me...Where the fear has gone there will be nothing, only I will remain",
  },
  {
    author: "Kurt Vonnegut Jr.",
    quote:
      "I urge you to please notice when you are happy, and exclaim or murmur or think at some point: 'if this isn't nice I don't know what is'",
  },
  {
    author: "Sydney Smith",
    quote:
      "It is the greatest of all mistakes to do nothing because you can only do little. Do what you can",
  },
  {
    author: "Bruce Lee",
    quote:
      "Empty your mind. Be formless, shapeless, like water. You put water into a cup, it becomes the cup. Put it in a teapot, it becomes the teapot. Water can flow or creep or drip or crash. Be water, my friend",
  },
  {
    author: "Shantideva",
    quote:
      "If you can solve your problem, then what is the need of worrying? If you cannot solve it, then what is the use of worrying?",
  },
  {
    author: "Gautama Buddha",
    quote:
      "Thousands of candles can be lit from a single candle, and the life of the candle will not be shortened. Happiness never decreases from being shared",
  },
  {
    author: "Neil Gaiman",
    quote: "Do what only you can do best. Make good art",
  },
  {
    author: "Albert Einstein",
    quote:
      "The important thing is not to stop questioning. Curiosity has its own reason for existing",
  },
  {
    author: "Shel Silverstein",
    quote:
      "All the woulda-coulda-shouldas layin' in the sun, talking 'bout the things they woulda-coulda-shoulda done. But all those woulda-coulda-shouldas all ran away and hid, from one little did",
  },
  {
    author: "Richard Feynman",
    quote:
      "It's much more interesting to live not knowing than to have answers which might be wrong",
  },
  {
    author: "Oswald Chambers",
    quote:
      "We are not made for mountains. For sunrises, or for other beautiful attractions in life. Those are simply intended to be moments of inspiration. We are made for the valley and the ordinary things of life. That is where we have to prove our stamina and strength",
  },
  {
    author: "Neil Armstrong",
    quote:
      "It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn't feel like a giant. I felt very, very small",
  },
  {
    author: "T.E. Lawrence",
    quote:
      "All men dream, but not equally. Those who dream by night in the dusty recesses of their minds wake in the day to find that it was vanity. But the dreamers of the day are dangerous men for they may act their dreams with open eyes, to make it possible. This I did",
  },
  {
    author: "Stephen Fry",
    quote:
      'Self pity will destroy relationships. It will destroy anything good. It will fulfill all the prophecies it makes and leave only itself...I almost wanted once to publish a self-help book saying, "How to be happy"...and the first page would just say, "Stop feeling sorry for yourself and you will be happy." And it would be true. It sounds like, "Oh that\'s so simple." But, of course, it\'s not simple to stop feeling sorry for yourself. It\'s bloody hard',
  },
  {
    author: "Antoine de Saint-Exupery",
    quote:
      "If you want to build a ship, don't drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea",
  },
  {
    author: "Seneca (Lauren Morgan)",
    quote: "All cruelty springs from weakness - (Hurt people hurt people)",
  },
  {
    author: "Taylor Mali",
    quote: "Show all your work in math, hide all your work in writing",
  },
  {
    author: "Tim Ferriss",
    quote:
      "Someday is a disease that will take your dreams to the grave with you",
  },
  {
    author: "Kevin Smith",
    quote:
      "Remember, it costs nothing to encourage an artist, and the potential benefits are staggering. Discourage an artist, and you get absolutely nothing in return, ever",
  },
  {
    author: "Marcus Aurelius",
    quote:
      "Begin each day by telling yourself: 'Today I shall be meeting with interference, ingratitude, insolence, disloyalty, ill-will, and selfishness. All of them due to the offenders' ignorance of what is good or evil'",
  },
  {
    author: "Jacob Riis",
    quote:
      "When nothing seems to help, I would go and look at a stonecutter hammering away at his rock perhaps a hundred times without as much as a crack showing in it. Yet at the hundred and first blow it would split in two. And I know it was not that blow that did it, but all that had gone before",
  },
  {
    author: "Chuck Jones' Uncle",
    quote:
      "You can't make a racehorse out of a pig. But you can make a very fast pig",
  },
  {
    author: "Anonymous",
    quote:
      "If God gives you lemons and you don't like lemonade, it's time to find a new God",
  },
  {
    author: "Carl Sagan",
    quote:
      "If you want to make an apple pie from scratch, you must first create the universe",
  },
  {
    author: "Anonymous",
    quote:
      "You're in an old house: the floorboards are warped, the ceiling is sagging, paint is coming off the walls, the electrical is shoddy, and some pipes have burst. Which should you fix first? None of them: you call the fire department, because the house is on fire",
  },
  {
    author: "Anonymous",
    quote:
      "If you're stuck staring at the laundry and dishes and taxes and this repair or that emergency, just start. Immobile is far worse than inefficient",
  },
  {
    author: "Eleanor Lew",
    quote:
      "The best way to build healthy boundaries is to first respect the boundaries of others",
  },
  {
    author: "Anonymous",
    quote:
      "Incomplete people do not make complete employees, friends, etc. How can you be present for someone else if you can't be present for yourself?",
  },
  {
    author: "Anonymous",
    quote:
      "10 projects at 10% each is not the same effort as 2 projects at 50% each",
  },
  {
    author: "Warren Buffet",
    quote:
      "Be greedy when others are fearful and fearful when others are greedy",
  },
  {
    author: "Anonymous",
    quote:
      "Software you don't sell is a hobby. Which is of course fine, but don't delude yourself",
  },
  {
    author: "Chinese Proverb",
    quote:
      "A man who wakes before the sun 360 days a year will not fail to make his family wealthy",
  },
  {
    author: "Anonymous",
    quote:
      "Stop trying to be liked by everybody. You don&rsquo;t even like everybody",
  },
  {
    author: "Anonymous",
    quote:
      "Kindness: It doesn&rsquo;t cost a thing. Sprinkle that sh*t everywhere",
  },
  {
    author: "Anonymous",
    quote:
      "For that decision you&rsquo;re about to make, pretend future you is looking back on it as the best / worst decision you&rsquo;ve ever made. Why?",
  },
  {
    author: "Voltaire",
    quote: "Judge someone by their questions rather than their answers",
  },
  {
    author: "Eleanor Lew",
    quote:
      "Doesn't matter if it's your first day doing something or your 10,000 hour, there is no shame in being incompetent. Maybe you shouldn't do that task, but don't for one moment be ashamed of it",
  },
  {
    author: "Jaqi Saleem",
    quote: "Be decisive, not willing",
  },
  {
    author: "W. H. Auden",
    quote: "Routine, in an intelligent person, is a sign of ambition",
  },
  {
    author: "FAA Regulations",
    quote: "Secure your mask before helping others",
  },
  {
    author: "Upton Sinclair",
    quote:
      "It&rsquo;s difficult to get a man to understand something when his salary depends on him not understanding it",
  },
  {
    author: "Mark Watney",
    quote:
      "That's all it is. You just begin. You do the math. You solve one problem, and you solve the next one, and the next. And if you solve enough problems, you get to come home",
  },
  {
    author: "Marcus Aurelius",
    quote: "The best revenge is not to be like that",
  },
  {
    author: "Albus Percival Wulfric Brian Dumbledore",
    quote: "It does not do to dwell on dreams and forget to live",
  },
  {
    author: "William Ernest Henley",
    quote:
      "Out of the night that covers me, black as the pit from pole to pole, I thank whatever gods may be for my unconquerable soul",
  },
  {
    author: "Albus Percival Wulfric Brian Dumbledore",
    quote:
      "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
  },
  {
    author: "Anonymous",
    quote:
      "Remember: if you can't be replaced, you can't be promoted. So train your replacement and prove you can be a good manager",
  },
];

function refreshQuote() {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  let currentIndex = document
    .getElementById("random-quote-block")
    .getAttribute("data-quote-index");
  while (quoteIndex === currentIndex) {
    quoteIndex = Math.floor(Math.random() * quotes.length);
  }
  let currentQuote = quotes[quoteIndex];
  document.getElementById("quotes-quote").innerHTML =
    '"' + currentQuote.quote + '"';
  document.getElementById("quotes-author").innerHTML = currentQuote.author;
}

function hideNextPageNav() {
  // Very rough, shouldn't be rendered in the first place, but we can deal with that later
  const bottomNavBar = document.querySelector("footer > nav");
  console.log(bottomNavBar);
  if (bottomNavBar) {
    bottomNavBar.setAttribute("hidden", "true");
  }
}

refreshQuote();
hideNextPageNav();
