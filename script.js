
document.getElementById("tracker-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const datum = document.getElementById("datum").value;
  const trening = document.getElementById("trening").checked;
  const post = document.getElementById("post").checked;
  const komentar = document.getElementById("komentar").value;

  const statusDiv = document.getElementById("status");

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwP6eIcNMWPB3r50gs73czGrvJSXtfKFWX0s6Z4JQvK4UxGYDAhBbUE7giUFISNOKvd/exec",
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ datum, trening, post, komentar }),
      }
    );

    if (!response.ok) throw new Error("Greška u mreži");

    const result = await response.text();
    statusDiv.textContent = "Uspješno spremljeno ✔";
    statusDiv.className = "success";
  } catch (error) {
    console.error(error);
    statusDiv.textContent = "Greška pri spremanju ✖";
    statusDiv.className = "error";
  }
});
