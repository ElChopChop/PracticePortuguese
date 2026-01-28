// Michel Thomas Portuguese Practice App
// Main application logic

class PortuguesePracticeApp {
    constructor() {
        this.currentCourse = 'foundation';
        this.currentCD = 1;
        this.currentTrack = 1;
        this.init();
    }

    init() {
        this.loadProgressFromStorage();
        this.setupEventListeners();
        this.populateSelectors();
        this.updateContent();
    }

    // Local Storage Management
    loadProgressFromStorage() {
        const saved = localStorage.getItem('portugueseProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.currentCourse = progress.course || 'foundation';
            this.currentCD = progress.cd || 1;
            this.currentTrack = progress.track || 1;
        }
    }

    saveProgressToStorage() {
        localStorage.setItem('portugueseProgress', JSON.stringify({
            course: this.currentCourse,
            cd: this.currentCD,
            track: this.currentTrack
        }));
    }

    // Event Listeners
    setupEventListeners() {
        document.getElementById('course-select').addEventListener('change', (e) => {
            this.currentCourse = e.target.value;
            this.currentCD = 1;
            this.currentTrack = 1;
            this.populateSelectors();
            this.updateContent();
            this.saveProgressToStorage();
        });

        document.getElementById('cd-select').addEventListener('change', (e) => {
            this.currentCD = parseInt(e.target.value);
            this.currentTrack = 1;
            this.populateTracks();
            this.updateContent();
            this.saveProgressToStorage();
        });

        document.getElementById('track-select').addEventListener('change', (e) => {
            this.currentTrack = parseInt(e.target.value);
            this.updateContent();
            this.saveProgressToStorage();
        });

        document.getElementById('refresh-btn').addEventListener('click', () => {
            this.generatePracticeContent();
        });
    }

    // Populate Dropdowns
    populateSelectors() {
        const courseData = this.getCurrentCourseData();
        this.populateCDs(courseData);
        this.populateTracks();

        // Set current values
        document.getElementById('course-select').value = this.currentCourse;
        document.getElementById('cd-select').value = this.currentCD;
    }

    populateCDs(courseData) {
        const cdSelect = document.getElementById('cd-select');
        cdSelect.innerHTML = '';

        courseData.forEach((cd, index) => {
            const option = document.createElement('option');
            option.value = cd.cd;
            option.textContent = `CD ${cd.cd}`;
            cdSelect.appendChild(option);
        });
    }

    populateTracks() {
        const trackSelect = document.getElementById('track-select');
        trackSelect.innerHTML = '';

        const cd = this.getCurrentCDData();
        if (!cd || !cd.tracks) return;

        cd.tracks.forEach((track, index) => {
            const option = document.createElement('option');
            option.value = track.number;
            option.textContent = `Track ${track.number}${track.title ? ': ' + track.title : ''}`;
            trackSelect.appendChild(option);
        });

        trackSelect.value = this.currentTrack;
    }

    // Data Retrieval
    getCurrentCourseData() {
        return this.currentCourse === 'foundation' ? courseData.foundation : courseData.advanced;
    }

    getCurrentCDData() {
        const courseDataArray = this.getCurrentCourseData();
        return courseDataArray.find(cd => cd.cd === this.currentCD);
    }

    getCurrentTrackData() {
        const cd = this.getCurrentCDData();
        if (!cd || !cd.tracks) return null;
        return cd.tracks.find(track => track.number === this.currentTrack);
    }

    // Content Collection (up to current track)
    getAllLearnedContent() {
        const courseDataArray = this.getCurrentCourseData();
        const rules = [];
        const verbs = [];
        const phrases = [];

        for (const cd of courseDataArray) {
            if (cd.cd > this.currentCD) break;

            for (const track of cd.tracks) {
                if (cd.cd === this.currentCD && track.number > this.currentTrack) break;

                rules.push(...(track.rules || []));
                verbs.push(...(track.verbs || []));
                phrases.push(...(track.phrases || []));
            }
        }

        return { rules, verbs, phrases };
    }

    getRecentTracks(count = 3) {
        const courseDataArray = this.getCurrentCourseData();
        const allTracks = [];

        for (const cd of courseDataArray) {
            if (cd.cd > this.currentCD) break;

            for (const track of cd.tracks) {
                if (cd.cd === this.currentCD && track.number > this.currentTrack) break;
                allTracks.push({ cd: cd.cd, track });
            }
        }

        return allTracks.slice(-count);
    }

    // Update UI Content
    updateContent() {
        this.updateProgressText();
        this.updateRules();
        this.updateVerbs();
        this.updatePhrases();
        this.generatePracticeContent();
    }

    updateProgressText() {
        const track = this.getCurrentTrackData();
        const text = track
            ? `Currently on ${this.currentCourse === 'foundation' ? 'Foundation' : 'Advanced'} CD ${this.currentCD}, Track ${this.currentTrack}: ${track.title || 'Track ' + this.currentTrack}`
            : 'Select a valid track to continue';
        document.getElementById('progress-text').textContent = text;
    }

    updateRules() {
        const content = this.getAllLearnedContent();
        const rulesDiv = document.getElementById('rules-content');

        if (content.rules.length === 0) {
            rulesDiv.innerHTML = '<p class="placeholder">No rules learned yet. Start with CD 1, Track 2!</p>';
            return;
        }

        rulesDiv.innerHTML = '';
        content.rules.forEach(rule => {
            const ruleElement = this.createRuleElement(rule);
            rulesDiv.appendChild(ruleElement);
        });
    }

    createRuleElement(rule) {
        const div = document.createElement('div');
        div.className = 'rule-item';

        const pattern = document.createElement('div');
        pattern.className = 'rule-pattern';
        pattern.textContent = rule.pattern;
        div.appendChild(pattern);

        if (rule.examples && rule.examples.length > 0) {
            const examplesDiv = document.createElement('div');
            examplesDiv.className = 'rule-examples';

            // Show PDF examples
            rule.examples.forEach(ex => {
                const exampleDiv = document.createElement('div');
                exampleDiv.className = 'example';
                exampleDiv.innerHTML = `
                    <span class="english">${ex.english}</span>
                    <span class="portuguese">${ex.portuguese}</span>
                `;
                examplesDiv.appendChild(exampleDiv);
            });

            // Generate additional examples using word patterns
            if (rule.englishPattern) {
                const additionalExamples = this.generateRuleExamples(rule);
                additionalExamples.slice(0, 5).forEach(ex => {
                    const exampleDiv = document.createElement('div');
                    exampleDiv.className = 'example';
                    exampleDiv.innerHTML = `
                        <span class="english">${ex.english}</span>
                        <span class="portuguese">${ex.portuguese}</span>
                    `;
                    examplesDiv.appendChild(exampleDiv);
                });
            }

            div.appendChild(examplesDiv);
        }

        return div;
    }

    generateRuleExamples(rule) {
        // Map rule patterns to word generation patterns
        const patternKey = this.getPatternKey(rule.pattern);
        if (!patternKey || !wordGenerationPatterns[patternKey]) return [];

        const pattern = wordGenerationPatterns[patternKey];
        const examples = [];

        pattern.englishWords.forEach(word => {
            const portuguese = this.applyPattern(word, rule);
            if (portuguese && !rule.examples.some(ex => ex.english.toLowerCase() === word.toLowerCase())) {
                examples.push({ english: word, portuguese });
            }
        });

        return this.shuffleArray(examples);
    }

    getPatternKey(patternText) {
        const lower = patternText.toLowerCase();
        if (lower.includes('-ible') || lower.includes('-able')) return 'ible_able';
        if (lower.includes('-ent') || lower.includes('-ant')) return 'ent_ant';
        if (lower.includes('-ence') || lower.includes('-ance')) return 'ence_ance';
        if (lower.includes('-tion')) return 'tion';
        if (lower.includes('-ly')) return 'ly';
        return null;
    }

    applyPattern(word, rule) {
        const lower = word.toLowerCase();

        // -ible/-able → -ível/-ável
        if (lower.endsWith('ible')) {
            return lower.replace(/ible$/, 'ível');
        } else if (lower.endsWith('able')) {
            return lower.replace(/able$/, 'ável');
        }
        // -ent/-ant → -ente/-ante
        else if (lower.endsWith('ent')) {
            return lower.replace(/ent$/, 'ente');
        } else if (lower.endsWith('ant')) {
            return lower.replace(/ant$/, 'ante');
        }
        // -ence/-ance → -ência/-ância
        else if (lower.endsWith('ence')) {
            return lower.replace(/ence$/, 'ência');
        } else if (lower.endsWith('ance')) {
            return lower.replace(/ance$/, 'ância');
        }
        // -tion → -ção
        else if (lower.endsWith('tion')) {
            return lower.replace(/tion$/, 'ção');
        }
        // -ly → -mente
        else if (lower.endsWith('ly')) {
            return lower.replace(/ly$/, 'mente');
        }

        return null;
    }

    updateVerbs() {
        const content = this.getAllLearnedContent();
        const verbsDiv = document.getElementById('verbs-content');

        if (content.verbs.length === 0) {
            verbsDiv.innerHTML = '<p class="placeholder">No verbs learned yet. Continue with the course!</p>';
            return;
        }

        verbsDiv.innerHTML = '';

        // Group verbs by infinitive
        const verbMap = new Map();
        content.verbs.forEach(verb => {
            if (!verbMap.has(verb.infinitive)) {
                verbMap.set(verb.infinitive, []);
            }
            verbMap.get(verb.infinitive).push(verb);
        });

        verbMap.forEach((forms, infinitive) => {
            const verbDiv = document.createElement('div');
            verbDiv.className = 'verb-item';

            const conjDiv = document.createElement('div');
            const formsText = forms.map(f => `${f.conjugation} (${f.form})`).join(', ');
            conjDiv.innerHTML = `
                <div class="verb-conj">${infinitive}</div>
                <div class="verb-meaning">${forms[0].meaning}</div>
            `;

            verbDiv.appendChild(conjDiv);
            verbsDiv.appendChild(verbDiv);
        });
    }

    updatePhrases() {
        const content = this.getAllLearnedContent();
        const phrasesDiv = document.getElementById('phrases-content');

        if (content.phrases.length === 0) {
            phrasesDiv.innerHTML = '<p class="placeholder">No phrases learned yet. Start learning!</p>';
            return;
        }

        phrasesDiv.innerHTML = '';
        content.phrases.forEach(phrase => {
            const phraseDiv = document.createElement('div');
            phraseDiv.className = 'phrase-item';
            phraseDiv.innerHTML = `
                <div class="phrase-pt">${phrase.portuguese}</div>
                <div class="phrase-en">${phrase.english}</div>
            `;
            phrasesDiv.appendChild(phraseDiv);
        });
    }

    generatePracticeContent() {
        const recentTracks = this.getRecentTracks(3);
        const practiceDiv = document.getElementById('practice-content');

        if (recentTracks.length === 0) {
            practiceDiv.innerHTML = '<p class="placeholder">Start the course to get practice sentences!</p>';
            return;
        }

        // Collect all content from recent tracks
        const allPhrases = [];
        const allVerbs = [];

        recentTracks.forEach(({ cd, track }) => {
            allPhrases.push(...(track.phrases || []));
            allVerbs.push(...(track.verbs || []));
        });

        // Generate practice sentences
        const sentences = this.createPracticeSentences(allPhrases, allVerbs);

        practiceDiv.innerHTML = '';
        sentences.slice(0, 5).forEach((sentence, index) => {
            const sentenceDiv = document.createElement('div');
            sentenceDiv.className = 'practice-item';
            sentenceDiv.innerHTML = `
                <span class="practice-number">${index + 1}</span>
                <div class="practice-english">${sentence.english}</div>
                <div class="practice-portuguese">${sentence.portuguese}</div>
            `;
            practiceDiv.appendChild(sentenceDiv);
        });
    }

    createPracticeSentences(phrases, verbs) {
        const sentences = [];

        // Simple phrase combinations
        if (phrases.length > 0) {
            const shuffled = this.shuffleArray([...phrases]);
            shuffled.slice(0, 5).forEach(phrase => {
                sentences.push({
                    english: phrase.english,
                    portuguese: phrase.portuguese
                });
            });
        }

        // Verb-based sentences
        if (verbs.length > 0 && phrases.length > 0) {
            const shuffledVerbs = this.shuffleArray([...verbs]).slice(0, 3);
            const shuffledPhrases = this.shuffleArray([...phrases]);

            shuffledVerbs.forEach((verb, i) => {
                if (shuffledPhrases[i]) {
                    // Create simple sentence combining verb and phrase
                    const phrase = shuffledPhrases[i];

                    // Try to create a meaningful combination
                    if (verb.conjugation && phrase.portuguese) {
                        sentences.push({
                            english: `${verb.meaning} ${phrase.english}`,
                            portuguese: `${verb.conjugation} ${phrase.portuguese}`
                        });
                    }
                }
            });
        }

        return this.shuffleArray(sentences);
    }

    // Utility
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PortuguesePracticeApp();
});
