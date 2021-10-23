let inputArea = document.getElementById("input-text");
let wordCount = document.getElementById("word-count");
let charsCount = document.getElementById("chars-count");
let wordLength = document.getElementById("longest-word");
let clearBtn = document.getElementById("clear");

inputArea.addEventListener("input", () => {
  const text = inputArea.value;
  // Counts number of Characters without the whitespace
  charsCount.textContent = text.replace(/\s+/g, "").length;

  // Count words
  const words = text.match(/(\w+)/g);
  wordCount.textContent = words.length;

  // Check the longest word
  const longestWord = words.sort((a, b) => b.length - a.length)[0];
  wordLength.textContent = longestWord;
});

clearBtn.addEventListener("click", () => {
  inputArea.value = "";
  charsCount.textContent = charsCount.value = 0;
  wordCount.textContent = wordCount.value = 0;
  wordLength.textContent = wordLength.value = 0;
});
