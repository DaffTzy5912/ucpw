document.addEventListener('DOMContentLoaded', () => {
  const pollsContainer = document.getElementById('polls');

  // Ganti URL ini dengan link ke data.json di GitHub RAW
  fetch('https://raw.githubusercontent.com/namamu/polling-whatsapp/main/data.json')
    .then(res => res.json())
    .then(polls => {
      polls.forEach(poll => {
        const pollDiv = document.createElement('div');
        pollDiv.className = 'poll';
        pollDiv.innerHTML = `
          <h3>${poll.question}</h3>
          ${poll.options.map((opt, i) => `
            <button onclick="vote(${poll.id}, ${i})">${opt} (${poll.votes[i]})</button>
          `).join('')}
        `;
        pollsContainer.appendChild(pollDiv);
      });
    });
});

function vote(pollId, optionIndex) {
  alert("Fitur voting hanya bisa update lewat server. Coba versi online.");
}
