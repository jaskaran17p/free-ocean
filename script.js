const tools = [
  {
    name: "Leonardo AI",
    description: "AI image generator for creatives and designers.",
    url: "https://leonardo.ai",
    logo: "https://logo.clearbit.com/leonardo.ai",
    trending: true
  },
  {
    name: "ChatGPT",
    description: "Powerful chatbot for conversation, writing, coding, and more.",
    url: "https://chat.openai.com",
    logo: "https://logo.clearbit.com/openai.com",
    trending: true
  },
  {
    name: "Runway ML",
    description: "Create AI videos and edit media using advanced AI tools.",
    url: "https://runwayml.com",
    logo: "https://logo.clearbit.com/runwayml.com",
    trending: false
  },
  {
    name: "Copy.ai",
    description: "AI-powered content writing tool for marketing and sales.",
    url: "https://copy.ai",
    logo: "https://logo.clearbit.com/copy.ai",
    trending: true
  },
  {
    name: "Durable",
    description: "Build websites in 30 seconds using AI.",
    url: "https://durable.co",
    logo: "https://logo.clearbit.com/durable.co",
    trending: false
  }
];

function renderTools(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  data.forEach(tool => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${tool.logo}" alt="${tool.name}" />
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <button onclick="window.open('${tool.url}')">Open</button>
    `;
    container.appendChild(card);
  });
}

renderTools(tools.filter(t => t.trending), "trendingTools");
renderTools(tools, "toolGrid");

document.getElementById("searchBar").addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = tools.filter(tool =>
    tool.name.toLowerCase().includes(keyword) ||
    tool.description.toLowerCase().includes(keyword)
  );
  renderTools(filtered, "toolGrid");
});