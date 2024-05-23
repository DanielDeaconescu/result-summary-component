"use strict";

async function fetchAndDisplayData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    // selecting all the images
    const allImages = document.querySelectorAll(".summary-img");
    const allTextSpans = document.querySelectorAll(".inner-text");
    const allScoreStrong = document.querySelectorAll(".the-score-inner");

    if (
      data.length !== allImages.length ||
      data.length !== allTextSpans.length ||
      data.length !== allScoreStrong.length
    ) {
      throw new Error(
        "Data length does not match the number of HTML elements."
      );
    }

    data.forEach((item, index) => {
      allImages[index].src = item.icon;
      allTextSpans[index].innerHTML = item.category;
      allScoreStrong[index].innerHTML = item.score;
    });
  } catch (error) {
    console.log("Error fetching or parsing data:", error);
    document.body.innerHTML =
      "<p>Failed to load content. Please try again later.</p>";
  }
}

fetchAndDisplayData();
