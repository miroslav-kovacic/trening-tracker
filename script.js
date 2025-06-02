
document.getElementById("tracker-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const datum = document.getElementById("datum").value;
  const trening = document.getElementById("trening").checked;
  const post = document.getElementById("post").checked;
  const komentar = document.getElementById("komentar").value;

  const statusDiv = document.getElementById("status");

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxq1zXxlSkrE0iNoPsGvy1yUo6rwSKqWPlSnZ01YajBipRxXGKSOjwCCw0dqrjoKvvI/exec",
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
