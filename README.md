- [overview](#overview);
- [things i learned about js](#things-i-learned-about-js);
- [things i learned about tailwind](#things-i-learned-about-tailwind);
- [things i learned about github](#things-i-learned-about-using-github-from-terminal); 

[website link](https://tortaruga.github.io/ten-thousandth-day-calculator/)

# overview

simple project as an excuse to practice tailwind. 

it calculates the ten thousandth day after a given date. apparently people over the world celebrate their ten thousandth day as an important milestone (or just because it is fun).

i vaguely remember reading somewhere that in certain cultures there was this idea that the ten thousandth day (or night?) was a magical time, a day where things could happen that would have been impossible any other day, a day in which something extraordinary was bound to take place, whether for the good or the bad.
but as i dont remember where i got this information from, for all i know im remembering it wrong and i have no way to check, but it was a nice story so i still used it as introduction. 

(maybe it was from an analysis of the poem [Go and catch a falling star by john donne](https://www.poetryfoundation.org/poems/44127/song-go-and-catch-a-falling-star), which by the way is also the source of the subtitle "ride ten thousand days and nights, til age snow white hairs on thee", or it might have been a review of the movie [diez mil noches en ninguna parte](https://www.imdb.com/title/tt1680303/). my searches have been unsuccessful, so it might have been deleted, or it may never have existed. reality usually slips from my fingers. wherever the information came form, however, it filled me with dread and anticipation for that cursed day when, i am sure, some terrible truth will be shown to my heart.)

# things i learned about js 

- use e.preventDefault() in callback function for submit event on a form.

- .getTime() returns the date as number of milliseconds from unix epoch

- new Date(number of milliseconds) returns the date as string

# things i learned about tailwind

- on live preview the background image worked when the  path was absolute (/assets/stars.jpg), but it wouldn't work when deployed. in that case the path was being trated as ralative to the output.css file, not the html, so the only way to make it work was writing it as such '../assets/stars.jpg'. finding out what the issue was and how to fix it was a pain in the ribs, but im thankful for it, because it gave me the opportunity to learn a bit more how to work with the browser's developer's tools.

# things i learned about using github from terminal

- you can remove something you added to the repo with this line:
git rm -r --cached node_modules
(i kept accidentally addind the whole node_modules to the repository, which my computer apparently vehemently disliked, since it kept crashing every five seconds whenever it happened).

- you can commit directly with the message with the line:
git commit -m "commit message" (i used to wait for the editor to open, write the message, and close the editor)