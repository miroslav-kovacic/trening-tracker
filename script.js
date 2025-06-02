
document.getElementById("tracker-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const datum = document.getElementById("datum").value;
  const trening = document.getElementById("trening").checked;
  const post = document.getElementById("post").checked;
  const komentar = document.getElementById("komentar").value;

  const statusDiv = document.getElementById("status");

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwm1lxjAOqtMOGTJf8mfrIyg6z2I53LxotwWYLqE4aIB44xSoKbw1SxM_rUGF0L6TsV/exec",
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
