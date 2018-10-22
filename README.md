**Liri Application**

Liri is an easy to use application that looks for concerts, songs and movies.

**How to use**

Liri works from the command-line/terminal in your computer. Here are the steps to make it work:

1. Open *Terminal* in your computer and go to the location of the file.
2. From the main folder you will be able to run the program.
3. The format you will use on your command is the next *(node liri.js **command** **query**)*
  
  - **COMMAND** - there are four classes of commands.
    - *concert-this* - looks for concerts of inputed **artist name** on the query area of the command line.
    - *spotify-this-song* - looks for songs on the inputed **song title* on the query area of the command line.
    - *movie-this* - looks for **movie title** inputed on the query area of the command line.
    - *do-what-it-says* - this command is dependent of the file name "Random.txt". Explanation will come after examples.
  
  - **QUERY** - is the second piece of information given by the user, it represent the value the custumer is looking for.
  
**EXAMPLE**

![concert-this example](./Images/example1)

![spotify-this-song example](./Images/example2)

![movie-this example](./Images/example3)

**do-what-it-says COMMAND**
- This command is dependent of the file *random.txt*
  - Inside of random.txt, there is a line of text divided with commas. The text before the comma represents the command to 
  be used (concert-this, spotify-this-song or movie-this). The text after the comma, represent the information to be looking for.

**EXMAPLE of Responses**

![movie-this example](./Images/examplewithresponse)

![movie-this example](./Images/examplewithresponse2)
