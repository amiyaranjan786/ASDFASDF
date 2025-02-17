function generate(){
    var quotes ={
      "- Matsumoto Rangiku (Bleach)" : '"To know sorrow is not terrifying. What is terrifying is to know you cannot go back to the happiness you could have." ',
      "-Naruto Uzumaki (Naruto)":'"If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be."',
      "-Saitama (One-Punch Man)":'"I’ll leave tomorrow’s problems to tomorrow’s me."',
      "-Jiraiya":'"Knowing what it feels to be in pain, is exactly why we try to be kind "',
      "-Nagato":'" If you donot share someone’s pain, you can never understand them."',
      "-Goku":'"Power comes in response to a need, not a desire. You have to create that need."',
      "-Monkey D. Luffy (One Piece)":'" If you don’t take risks, you can’t create a future!"',
      "-Itachi Uchiha":'"People’s lives don’t end when they die, it ends when they lose faith."',
      "-Tanjiro":' " My repetitive motion is to first picture the faces of my loved ones" ',
      "- Sabito":'"There is no other way to go but forward "',
      "- Monkey D. Luffy":'" No matter how hard or impossible it is, never lose sight of your goal."',
      "-Naruto":'"Somebody told me I’m a failure, I’ll prove them wrong. "',
      


    }
     var authors=Object.keys(quotes);

    var author=authors[Math.floor(Math.random() * authors.length)];
     var quote = quotes[author];
    document.getElementById("quote").innerHTML =quote;
    document.getElementById("author").innerHTML =author;
}