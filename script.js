document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("treningForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const date = document.getElementById("date").value;
    const trening = document.getElementById("trening").value;
    const post = document.getElementById("post").value;

    const formData = new URLSearchParams();
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
        alert("Podaci su uspješno spremljeni!");
        form.reset();
      } else {
        alert("Došlo je do greške: " + result.message);
      }
    } catch (error) {
      console.error("Greška pri slanju:", error);
      alert("Greška pri slanju podataka.");
    }
  });
});
