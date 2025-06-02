document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("treningForm");
  const responseEl = document.getElementById("response");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const date = document.getElementById("date").value;
    const trening = document.getElementById("trening").value;
    const post = document.getElementById("post").value;

    const formData = new FormData();
    formData.append("date", date);
    formData.append("trening", trening);
    formData.append("post", post);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz4um5AkFOFHgn-lr3BvywVpcTc04VLsgcv88Ths0J5hov41cLFtrhvju2DCasrCzFs/exec", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.status === "success") {
        responseEl.textContent = "Podaci su uspješno spremljeni!";
        responseEl.style.color = "green";
        form.reset();
      } else {
        responseEl.textContent = "Greška: " + result.message;
        responseEl.style.color = "red";
      }
    } catch (error) {
      console.error("Greška:", error);
      responseEl.textContent = "Greška pri slanju podataka.";
      responseEl.style.color = "red";
    }
  });
});
