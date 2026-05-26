// Global state
let currentArea = 'ai';
let allData = {};

// Load all data modules
function loadDataModules() {
    if (typeof aiData !== 'undefined') allData.ai = aiData;
    if (typeof networkingData !== 'undefined') allData.net = networkingData;
    if (typeof hackingData !== 'undefined') allData.hack = hackingData;
    if (typeof softwareData !== 'undefined') allData.soft = softwareData;
    if (typeof cryptoData !== 'undefined') allData.crypto = cryptoData;
    if (typeof cloudData !== 'undefined') allData.cloud = cloudData;
    if (typeof mobileData !== 'undefined') allData.mobile = mobileData;
    if (typeof devsecData !== 'undefined') allData.devsec = devsecData;
    if (typeof selfdevData !== 'undefined') allData.selfdev = selfdevData;
    
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    loadDataModules();
    buildNavigation();
    renderCurrentArea();
    attachScrollSpy();
    
    // Ensure all global functions are attached to window
    attachGlobalFunctions();
});

function attachGlobalFunctions() {
    window.switchArea = switchArea;
    window.togglePhase = togglePhase;
    window.toggleTopic = toggleTopic;
    window.scrollToPhase = scrollToPhase;
    window.updateProgress = updateProgress;
    window.openExportModal = openExportModal;
    window.selectExportArea = selectExportArea;
    window.exportToPDF = exportToPDF;
    window.openCoffeeModal = openCoffeeModal;
    window.selectAmt = selectAmt;
    window.closeModal = closeModal;
    window.closeModalIfOverlay = closeModalIfOverlay;
}

function buildNavigation() {
    const navScroll = document.getElementById('navScroll');
    const areas = [
        { id: 'ai', name: 'AI / ML' },
        { id: 'net', name: 'Networking' },
        { id: 'hack', name: 'Hacking' },
        { id: 'soft', name: 'Software' },
        { id: 'crypto', name: 'Blockchain' },
        { id: 'cloud', name: 'Cloud & DevOps' },
        { id: 'mobile', name: 'Mobile' },
        { id: 'devsec', name: 'DevSecOps' },
        { id: 'selfdev', name: 'Self Development' }
    ];
    
    navScroll.innerHTML = areas.map(area => 
        `<button class="npill ${currentArea === area.id ? 'active' : ''}" data-area="${area.id}" onclick="window.switchArea('${area.id}')">${area.name}</button>`
    ).join('');
}

function switchArea(areaId) {
    currentArea = areaId;
    document.getElementById('layout').setAttribute('data-current', areaId);
    
    // Update nav active states
    document.querySelectorAll('.npill').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-area') === areaId) btn.classList.add('active');
    });
    
    renderCurrentArea();
    attachScrollSpy();
    updateProgress();
}

function renderCurrentArea() {
    const areaData = allData[currentArea];
    if (!areaData) {
        console.error('No data for area:', currentArea);
        return;
    }
    
    renderHero(areaData);
    renderSidebar(areaData);
    renderPhases(areaData);
}

function renderHero(data) {
    const main = document.getElementById('main');
    const totalTopics = data.phases.reduce((sum, phase) => sum + phase.topics.length, 0);
    const totalMasterItems = data.phases.reduce((sum, phase) => 
        sum + phase.topics.reduce((s, topic) => s + (topic.master?.length || 0), 0), 0);
    
    const heroHTML = `
        <div class="disc-hero">
            <div class="disc-eyebrow">${data.eyebrow || 'ELITE MASTERY ROADMAP'}</div>
            <div class="disc-title">${data.name}</div>
            <div class="disc-sub">${data.sub || 'Comprehensive mastery curriculum from foundations to frontier research.'}</div>
            <div class="disc-stats">
                <div class="stat"><div class="stat-val">${data.phases.length}</div><div class="stat-label">PHASES</div></div>
                <div class="stat"><div class="stat-val">${totalTopics}</div><div class="stat-label">TOPICS</div></div>
                <div class="stat"><div class="stat-val">${totalMasterItems}+</div><div class="stat-label">MASTERY TASKS</div></div>
            </div>
        </div>
        <div class="phases" id="phasesContainer"></div>
    `;
    
    main.innerHTML = heroHTML;
}

function renderSidebar(data) {
    const sidebar = document.getElementById('sidebar');
    const phasesHTML = `
        <div class="sidebar-section">PHASES</div>
        ${data.phases.map((phase, idx) => `
            <div class="phase-nav-item" data-phase-idx="${idx}" onclick="window.scrollToPhase(${idx})">
                <span class="ph-num">${String(idx + 1).padStart(2, '0')}</span>
                <span>${phase.name}</span>
            </div>
        `).join('')}
    `;
    sidebar.innerHTML = phasesHTML;
}

function renderPhases(data) {
    const container = document.getElementById('phasesContainer');
    if (!container) return;
    
    container.innerHTML = data.phases.map((phase, phaseIdx) => `
        <div class="phase-block" data-phase-idx="${phaseIdx}" id="phase-${phaseIdx}">
            <div class="phase-header" onclick="window.togglePhase(${phaseIdx})">
                <div class="phase-num">${String(phaseIdx + 1).padStart(2, '0')}</div>
                <div class="phase-info">
                    <div class="phase-name">${phase.name}</div>
                    <div class="phase-tagline">${phase.tagline || ''}</div>
                </div>
                <div class="phase-meta">
                    <span class="level-badge lv-${phase.level || 'foundation'}">${(phase.level || 'FOUNDATION').toUpperCase()}</span>
                    <span class="phase-chevron">▶</span>
                </div>
            </div>
            <div class="phase-body">
                <div class="phase-desc">${phase.desc || ''}</div>
                <div class="topics-grid">
                    ${phase.topics.map((topic, topicIdx) => `
                        <div class="topic-card" data-phase="${phaseIdx}" data-topic="${topicIdx}" onclick="window.toggleTopic(event, ${phaseIdx}, ${topicIdx})">
                            <div class="topic-head">
                                <div class="topic-name">${topic.name}</div>
                                <span class="topic-tag tt-${topic.tag || 'core'}">${(topic.tag || 'CORE').toUpperCase()}</span>
                            </div>
                            <div class="topic-body-inner">
                                <div class="topic-section">
                                    <div class="topic-section-label">DEEP UNDERSTANDING</div>
                                    <div class="topic-desc">${topic.desc || ''}</div>
                                </div>
                                ${topic.master ? `
                                <div class="topic-section">
                                    <div class="topic-section-label">MASTERY CHECKLIST</div>
                                    <ul class="master-list">
                                        ${topic.master.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
                                    </ul>
                                </div>
                                ` : ''}
                                ${topic.deepdive ? `
                                <div class="deep-dive">
                                    <div class="deep-dive-label">🔬 DEEP DIVE</div>
                                    <p>${escapeHtml(topic.deepdive)}</p>
                                </div>
                                ` : ''}
                                ${topic.res ? `
                                <div class="topic-section">
                                    <div class="topic-section-label">ESSENTIAL RESOURCES</div>
                                    <div class="res-list">
                                        ${topic.res.map(res => `<span class="res-chip">${escapeHtml(res)}</span>`).join('')}
                                    </div>
                                </div>
                                ` : ''}
                                ${topic.warning ? `
                                <div class="warning-box">⚠️ ${escapeHtml(topic.warning)}</div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function togglePhase(phaseIdx) {
    const phaseBlock = document.querySelector(`.phase-block[data-phase-idx="${phaseIdx}"]`);
    if (phaseBlock) {
        phaseBlock.classList.toggle('open');
    }
}

function toggleTopic(event, phaseIdx, topicIdx) {
    event.stopPropagation();
    const topicCard = event.currentTarget;
    if (topicCard) {
        topicCard.classList.toggle('open');
    }
}

function scrollToPhase(phaseIdx) {
    const element = document.getElementById(`phase-${phaseIdx}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        element.classList.add('open');
        
        // Update active phase in sidebar
        document.querySelectorAll('.phase-nav-item').forEach(item => {
            item.classList.remove('active-phase');
        });
        const activeItem = document.querySelector(`.phase-nav-item[data-phase-idx="${phaseIdx}"]`);
        if (activeItem) {
            activeItem.classList.add('active-phase');
        }
    }
}

function attachScrollSpy() {
    const main = document.getElementById('main');
    const phases = document.querySelectorAll('.phase-block');
    
    if (!main || phases.length === 0) return;
    
    // Remove existing listener to avoid duplicates
    main.removeEventListener('scroll', handleScroll);
    main.addEventListener('scroll', handleScroll);
    
    function handleScroll() {
        const scrollPos = main.scrollTop;
        let activePhase = -1;
        
        phases.forEach((phase, idx) => {
            const rect = phase.getBoundingClientRect();
            const mainRect = main.getBoundingClientRect();
            const phaseTop = rect.top - mainRect.top;
            
            if (phaseTop <= 150 && phaseTop + rect.height > 100) {
                activePhase = idx;
            }
        });
        
        if (activePhase >= 0) {
            document.querySelectorAll('.phase-nav-item').forEach(item => {
                item.classList.remove('active-phase');
                if (item.getAttribute('data-phase-idx') == activePhase) {
                    item.classList.add('active-phase');
                }
            });
        }
        
        updateProgress();
    }
}

function updateProgress() {
    const main = document.getElementById('main');
    const progressFill = document.getElementById('progressFill');
    if (!main || !progressFill) return;
    
    const scrollHeight = main.scrollHeight - main.clientHeight;
    const scrollTop = main.scrollTop;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressFill.style.width = `${progress}%`;
}

// Export functionality
let selectedExportArea = 'ai';

function openExportModal() {
    const modal = document.getElementById('exportModal');
    const modalAreas = document.getElementById('modalAreas');
    
    const areas = [
        { id: 'ai', name: 'AI / Machine Learning', count: allData.ai?.phases.reduce((s,p) => s + p.topics.length, 0) || 0 },
        { id: 'net', name: 'Networking', count: allData.net?.phases.reduce((s,p) => s + p.topics.length, 0) || 0 },
        { id: 'hack', name: 'Offensive Security', count: allData.hack?.phases.reduce((s,p) => s + p.topics.length, 0) || 0 },
        { id: 'soft', name: 'Software Engineering', count: allData.soft?.phases.reduce((s,p) => s + p.topics.length, 0) || 0 },
        { id: 'crypto', name: 'Blockchain / Web3', count: allData.crypto?.phases.reduce((s,p) => s + p.topics.length, 0) || 0 },
        { id: 'cloud', name: 'Cloud & DevOps', count: allData.cloud?.phases.reduce((s,p) => s + p.topics.length, 0) || 0 },
        { id: 'mobile', name: 'Mobile Development', count: allData.mobile?.phases.reduce((s,p) => s + p.topics.length, 0) || 0 },
        { id: 'devsec', name: 'DevSecOps', count: allData.devsec?.phases.reduce((s,p) => s + p.topics.length, 0) || 0 },
        { id: 'selfdev', name: 'Self Development', count: allData.selfdev?.phases.reduce((s,p) => s + p.topics.length, 0) || 0 }
    ];
    
    modalAreas.innerHTML = areas.map(area => `
        <div class="modal-area-btn" data-color="${area.id}" data-area="${area.id}" onclick="window.selectExportArea('${area.id}')">
            <div class="modal-area-name">${area.name}</div>
            <div class="modal-area-count">${area.count} topics</div>
        </div>
    `).join('');
    
    // Select current area by default
    selectedExportArea = currentArea;
    document.querySelectorAll('.modal-area-btn').forEach(btn => {
        if (btn.getAttribute('data-area') === currentArea) {
            btn.classList.add('selected');
        }
    });
    
    if (modal) {
        modal.classList.add('show');
    }
}

function selectExportArea(areaId) {
    selectedExportArea = areaId;
    document.querySelectorAll('.modal-area-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.getAttribute('data-area') === areaId) {
            btn.classList.add('selected');
        }
    });
}

function exportToPDF() {
    const areaData = allData[selectedExportArea];
    if (!areaData) return;
    
    // Create export content
    const exportContent = generateExportHTML(areaData);
    const printWindow = window.open('', '_blank');
    printWindow.document.write(exportContent);
    printWindow.document.close();
    printWindow.print();
    closeModal('exportModal');
}

function generateExportHTML(data) {
    const totalTopics = data.phases.reduce((sum, phase) => sum + phase.topics.length, 0);
    
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>${data.name} — Cortaxis Mastery Guide</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; line-height: 1.6; color: #000; background: #fff; padding: 40px; }
            h1 { font-size: 32px; margin-bottom: 8px; }
            h2 { font-size: 24px; margin-top: 24px; margin-bottom: 12px; border-bottom: 2px solid #333; padding-bottom: 6px; }
            h3 { font-size: 18px; margin-top: 16px; margin-bottom: 8px; color: #2c3e50; }
            .hero { margin-bottom: 32px; }
            .phase { margin-bottom: 32px; page-break-inside: avoid; }
            .phase-header { background: #f5f5f5; padding: 12px 16px; border-left: 4px solid #2c3e50; margin-bottom: 16px; }
            .phase-name { font-size: 20px; font-weight: bold; }
            .phase-tagline { color: #666; font-size: 14px; }
            .topic { margin-bottom: 24px; border: 1px solid #ddd; padding: 16px; border-radius: 4px; page-break-inside: avoid; }
            .topic-name { font-size: 16px; font-weight: bold; margin-bottom: 8px; }
            .topic-desc { font-size: 14px; color: #444; margin-bottom: 12px; }
            .master-list { margin: 12px 0 0 20px; }
            .master-list li { margin-bottom: 4px; }
            .deep-dive { background: #f9f9f9; padding: 12px; border-left: 3px solid #e67e22; margin-top: 12px; }
            .res-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
            .res-chip { background: #e0e0e0; padding: 4px 10px; border-radius: 4px; font-size: 12px; }
            .stats { display: flex; gap: 24px; margin: 16px 0; }
            .stat { background: #f5f5f5; padding: 8px 16px; border-radius: 4px; }
            .stat-val { font-size: 24px; font-weight: bold; }
            .footer { margin-top: 48px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px; }
            @media print {
                body { padding: 20px; }
                .topic { break-inside: avoid; }
                .phase { break-inside: avoid-page; }
            }
        </style>
    </head>
    <body>
        <div class="hero">
            <h1>${escapeHtml(data.name)}</h1>
            <p style="color: #666; margin-top: 4px;">${escapeHtml(data.eyebrow || '')}</p>
            <div class="stats">
                <div class="stat"><div class="stat-val">${data.phases.length}</div><div>Phases</div></div>
                <div class="stat"><div class="stat-val">${totalTopics}</div><div>Topics</div></div>
            </div>
            <p style="margin-top: 16px;">${escapeHtml(data.sub || '')}</p>
        </div>
        
        ${data.phases.map((phase, idx) => `
            <div class="phase">
                <div class="phase-header">
                    <div class="phase-name">Phase ${idx + 1}: ${escapeHtml(phase.name)}</div>
                    <div class="phase-tagline">${escapeHtml(phase.tagline || '')}</div>
                </div>
                <p style="margin-bottom: 16px;">${escapeHtml(phase.desc || '')}</p>
                ${phase.topics.map(topic => `
                    <div class="topic">
                        <div class="topic-name">${escapeHtml(topic.name)}</div>
                        <div class="topic-desc">${escapeHtml(topic.desc || '')}</div>
                        ${topic.master ? `
                            <strong>Mastery Checklist:</strong>
                            <ul class="master-list">
                                ${topic.master.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
                            </ul>
                        ` : ''}
                        ${topic.deepdive ? `
                            <div class="deep-dive">
                                <strong>🔬 Deep Dive</strong>
                                <p style="margin-top: 8px;">${escapeHtml(topic.deepdive)}</p>
                            </div>
                        ` : ''}
                        ${topic.res ? `
                            <div class="res-list">
                                ${topic.res.map(res => `<span class="res-chip">${escapeHtml(res)}</span>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        `).join('')}
        <div class="footer">
            Generated by Cortaxis — cortaxis.dev
        </div>
    </body>
    </html>`;
}

// Coffee modal
let selectedAmount = '$3';

function openCoffeeModal() {
    const modal = document.getElementById('coffeeModal');
    if (modal) {
        modal.classList.add('show');
    }
}

function selectAmt(amount, chipId) {
    selectedAmount = amount;
    document.querySelectorAll('.amount-chip').forEach(chip => chip.classList.remove('sel'));
    const selectedChip = document.getElementById(chipId);
    if (selectedChip) {
        selectedChip.classList.add('sel');
    }
    
    const amountNum = amount.replace('$', '');
    const paypalLink = document.getElementById('paypalLink');
    if (paypalLink) {
        paypalLink.href = `https://www.paypal.com/paypalme/samsonwiliams168/${amountNum}`;
    }
}

// Modal helpers
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
    }
}

function closeModalIfOverlay(event, modalId) {
    if (event.target === event.currentTarget) {
        closeModal(modalId);
    }
}