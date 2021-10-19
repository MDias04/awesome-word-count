let inputArea = document.getElementById("input-text");
let wordCount = document.getElementById("word-count");
let charsCount = document.getElementById("chars-count");
let wordLength = document.getElementById("longest-word");
let clearBtn = document.getElementById("clear");

inputArea.addEventListener("input", () => {
  // Counts number of Characters
  charsCount.textContent = inputArea.value.length;
  //Remove the whitespace from the string
  let whitespace = inputArea.value.trim();
  // Count length of this array,
  wordCount.textContent = whitespace.split(/\s+/).filter((item) => item).length;

  // Check the longest word
 

// clearBtn.addEventListener("click", () => {
//   console.log("clicked");
// });
