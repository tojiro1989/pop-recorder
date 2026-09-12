let recording = null;
const file = document.querySelector("#file"), steps = document.querySelector("#steps"), empty = document.querySelector("#empty"), exportButton = document.querySelector("#export");
function render() {
  steps.innerHTML = "";
  recording.steps.forEach((step, index) => {
    const card = document.createElement("article"); card.className = "step";
    card.innerHTML = `<button class="remove">Excluir</button><h2>Passo ${index + 1}</h2><textarea>${step.description}</textarea>${step.screenshot ? `<img alt="Captura do passo ${index + 1}" src="${step.screenshot}">` : "<p>Captura indisponível nesta página.</p>"}`;
    card.querySelector("textarea").addEventListener("input", e => step.description = e.target.value);
    card.querySelector(".remove").addEventListener("click", () => { recording.steps.splice(index, 1); render(); });
    steps.append(card);
  });
}
file.addEventListener("change", async e => { recording = JSON.parse(await e.target.files[0].text()); empty.hidden = true; steps.hidden = false; exportButton.disabled = false; render(); });
exportButton.addEventListener("click", () => { const url = URL.createObjectURL(new Blob([JSON.stringify(recording, null, 2)], { type:"application/json" })); const a = Object.assign(document.createElement("a"), { href:url, download:"pop-revisado.json" }); a.click(); URL.revokeObjectURL(url); });
