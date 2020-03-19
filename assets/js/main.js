const lang = 'en';
const FAQs = {
  en: [
    {
      question: 'How to Register?',
      answer:
        'The weekly challenge starts on Sunday and ends on Saturday every week, you will get notification when the challenge is started, and with your results when it’s ended'
    },
    {
      question: 'How to Register?',
      answer:
        'The weekly challenge starts on Sunday and ends on Saturday every week, you will get notification when the challenge is started, and with your results when it’s ended'
    },
    {
      question: 'How to Register?',
      answer:
        'The weekly challenge starts on Sunday and ends on Saturday every week, you will get notification when the challenge is started, and with your results when it’s ended'
    }
  ]
};
const FAQsListContainer = document.querySelector('.FAQs-list');

// Render FAQs list
function render() {
  FAQsListContainer.innerHTML = FAQs[lang]
    .map(li => {
      return `
            <li>
                <div class="question" onclick="toggleExpandingPanels(event)">
                    ${li.question}
                    <div class="arrow-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF375E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>
                <p class="answer">${li.answer}</p>
            </li>
            `;
    })
    .join('');
}
render();

function toggleExpandingPanels(e) {
  e.target.closest('li').classList.toggle('expand');
}
