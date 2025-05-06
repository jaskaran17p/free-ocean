
const tools = Array.from({ length: 200 }, (_, i) => ({
    name: "AI Tool " + (i + 1),
    description: "Description for AI Tool " + (i + 1),
    link: "https://example.com/tool" + (i + 1)
}));

function renderTools(toolList) {
    const grid = document.getElementById("tool-grid");
    grid.innerHTML = "";
    toolList.forEach(tool => {
        const card = document.createElement("div");
        card.className = "tool-card";
        card.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.link}" target="_blank">Open</a>
        `;
        grid.appendChild(card);
    });
}

document.getElementById("search").addEventListener("input", (e) => {
    const filtered = tools.filter(t =>
        t.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    renderTools(filtered);
});

window.onload = () => renderTools(tools);
