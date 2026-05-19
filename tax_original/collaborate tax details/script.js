const sectionList = document.getElementById('sectionList');
const contentTitle = document.getElementById('contentTitle');
const contentBody = document.getElementById('contentBody');
const statusBanner = document.getElementById('statusBanner');
const searchInput = document.getElementById('searchInput');
const mobileToggle = document.getElementById('mobileToggle');
const sidebar = document.getElementById('sidebar');

let activeSectionId = TAX_SECTIONS[0].id;

// Strip the "Section 80X: " prefix so sidebar shows e.g. "Savings and Investments"
function getSidebarSubtitle(section) {
  return section.title.replace(/^Section [^:]+:\s*/i, '');
}

function createSectionItem(section) {
  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'section-item';
  item.dataset.sectionId = section.id;
  item.innerHTML = `
    <span class="icon">${section.icon}</span>
    <div>
      <h3>${section.id}</h3>
      <p>${getSidebarSubtitle(section)}</p>
    </div>
  `;
  item.addEventListener('click', () => handleSectionClick(section.id));
  return item;
}

function renderSidebar(sections) {
  sectionList.innerHTML = '';
  sections.forEach((section) => {
    const item = createSectionItem(section);
    if (section.id === activeSectionId) {
      item.classList.add('active');
    }
    sectionList.appendChild(item);
  });
}

function renderCardHeading(title, subtitle) {
  return `
    <div class="section-heading">
      <h3>${title}</h3>
      ${subtitle ? `<p>${subtitle}</p>` : ''}
    </div>
  `;
}

function renderList(title, items) {
  if (!items || !items.length) return '';
  return `
    <div class="content-section">
      ${renderCardHeading(title)}
      <ul class="bullet-list">
        ${items.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;
}

function showSection(section) {
  contentTitle.textContent = section.title;
  statusBanner.textContent = `Clear and friendly guide for ${section.id} deductions`;

  const html = `
    <div class="content-section">
      ${renderCardHeading('Introduction', section.intro)}
      <p class="section-text">${section.overview}</p>
    </div>
    <div class="content-section info-grid">
      <div class="info-card">
        <h4>Maximum deduction</h4>
        <p class="section-text">${section.maxDeduction}</p>
      </div>
      <div class="info-card">
        <h4>Who can claim</h4>
        <p class="section-text">${section.whoCanClaim}</p>
      </div>
    </div>
    ${renderList('Eligible investments / expenses', section.eligibleItems)}
    ${renderList('Eligibility conditions', section.eligibility)}
    <div class="content-section">
      ${renderCardHeading('Example explanation')}
      <p class="section-text">${section.example}</p>
    </div>
    ${renderList('Important notes', section.notes)}
    ${renderList('Key benefits', section.benefits)}
    ${renderList('Documents required', section.documents)}
    <div class="content-section">
      ${renderCardHeading('Beginner explanation')}
      <p class="section-text">${section.beginnerExplanation}</p>
    </div>
  `;

  contentBody.innerHTML = html;
}

function updateActiveSection(sectionId) {
  activeSectionId = sectionId;
  const buttons = sectionList.querySelectorAll('.section-item');
  buttons.forEach((button) => {
    button.classList.toggle('active', button.dataset.sectionId === sectionId);
  });
}

function handleSectionClick(sectionId) {
  const section = TAX_SECTIONS.find((item) => item.id === sectionId);
  if (!section) return;
  updateActiveSection(sectionId);
  showSection(section);
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }
}

function filterSections(query) {
  const normalized = query.trim().toLowerCase();
  const filtered = TAX_SECTIONS.filter((section) => {
    return section.id.toLowerCase().includes(normalized) || section.title.toLowerCase().includes(normalized);
  });
  renderSidebar(filtered);
  if (!filtered.some((section) => section.id === activeSectionId)) {
    if (filtered.length > 0) {
      activeSectionId = filtered[0].id;
      showSection(filtered[0]);
    }
  }
}

searchInput.addEventListener('input', (event) => {
  filterSections(event.target.value);
});

mobileToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    sidebar.classList.remove('open');
  }
});

function initPortal() {
  renderSidebar(TAX_SECTIONS);
  handleSectionClick(activeSectionId);
}

document.addEventListener('DOMContentLoaded', initPortal);
