
fetch('tools.json')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('tools-container');
        const trending = document.getElementById('trending-tools');
        const search = document.getElementById('search');
        const render = (tools) => {
            container.innerHTML = '';
            tools.forEach(tool => {
                const card = document.createElement('div');
                card.className = 'tool-card';
                card.innerHTML = `<h3>${tool.name}</h3><p>${tool.description}</p><a href="${tool.link}" target="_blank">Open</a>`;
                container.appendChild(card);
            });
        };
        const trendingTools = data.slice(0, 5);
        trendingTools.forEach(tool => {
            const card = document.createElement('div');
            card.className = 'tool-card';
            card.innerHTML = `<h3>${tool.name}</h3><a href="${tool.link}" target="_blank">Open</a>`;
            trending.appendChild(card);
        });
        render(data);
        search.addEventListener('input', (e) => {
            const filtered = data.filter(tool => tool.name.toLowerCase().includes(e.target.value.toLowerCase()));
            render(filtered);
        });
    });
