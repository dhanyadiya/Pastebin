function createPaste() {
  const content = document.getElementById("content").value;

  fetch("/api/paste", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerHTML =
        `<a href="/view.html?id=${data.id}" target="_blank">
          View Paste
        </a>`;
    });
}
