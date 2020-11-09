# Tic-Tac-Toe README.md

This Tic Tac Toe application was created with HTML, CSS/Sass, JavaScript, and Bootstrap. It allows users to sign up for an account, sign into their account with a password, change the password of their account, play Tic Tac Toe against the computer, track the number of games played, and sign out. The application notifies the user about successful and failed actions, and updates the page when their game results in a win for O or X, or a tie.

My planning process was to adhere as much as possible to the suggested schedule, which I found very helpful. I dedicated much of the first two days to creating functional requests to the API, and from there began to plan for game-play. My initial approach to the game was to create an array containing 3-item arrays of all the winning combinations' index values, based on the 0 - 8 array of cells provided in the API's response. I would then push the index values of Xs and Os on the board into new, blank arrays for each player, and test them against any of the possible winning combos. I was coming up short with this solution and struggling to find array methods that could parse through and compare the arrays, when a issue comment from Mike Finneran showed me that this was overly complicated, and there was an easier way. From his suggestion, I began to push X's and Os into a blank array signifying the state of the board, and ran the array through a function using conditionals to check if there was a win. This was more efficient for a number of reasons, but especially because it would test for both Xs and Os at once, and did not rely on mutiple array methods combining to check arrays (in different order and with extra items) against one another.

Other problems that I was able to solve include implementing a way to notify the user of wins, losses, or ties at the correct time. At first, the order of operations I had created was such that the only array I was testing was the one being returned from the API. This meant that notifications of the game result came a turn late, after the array went through the test again. I solved this by creating a "local" array in my code that I could test before a call to the API was sent, and update the board simultaneously with the update to the API. Another problem solved was finding out which player one the game after a win notification. I solved this by filtering any blank cells from the array, and testing whether the array length was odd or even -- X always wins on odd numbered moves, O on even.

In the future, I would like to improve the styling of the UI to be mobile friendly and with more consistent spacing. I would also like to improve the separation of concerns in my code, because I believe there are times when certain functions are doing far too much in and in a confusing location, and so become difficult to follow. If I could add more features, I'd like to add a "scoreboard" that tracks the wins of X and O as they are played, and add some sound and visual cues to the UI that make gameplay more immersive.


Wireframes: (https://imgur.com/gallery/ib0BBx5)

User Stories:

As a user who isn't used to video games, I want it to be clear when I change from Xs to Os so I know when to make the next move and who I am playing as.

As a user who likes keeping score, I want to easily see my game history all together so I know who I play better as.

As a user who loses attention easily, I want a fun YOU WIN notification so I will keep playing.

As a user who is not used to computers, I want it to be clear what the next step is so I don't get frustrated.

As a an impatient user, I want to move onto the next game quickly so I don't lose momentum.

As a user who has never played before, I would like an option for a quick tutorial so that I know how to play.

As an impatient user, I want the game to end right when its a tie and no one can win so I don't waste my time.

As a user who gets bored easily, I want to game to have sounds and visuals that keep me immersed in the game.
