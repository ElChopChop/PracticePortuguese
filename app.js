// Michel Thomas Portuguese Practice App
// Main application logic

class PortuguesePracticeApp {
    constructor() {
        this.currentCourse = 'foundation';
        this.currentCD = 1;
        this.currentTrack = 1;
        this.initSpeech();
        this.init();
    }

    // Initialize Web Speech API
    initSpeech() {
        this.synth = window.speechSynthesis;
        this.portugueseVoice = null;

        // Try to get Portuguese voice
        if (this.synth) {
            const loadVoices = () => {
                const voices = this.synth.getVoices();
                // Prefer pt-PT (European Portuguese) voice, fallback to any pt voice
                this.portugueseVoice = voices.find(voice => voice.lang === 'pt-PT') ||
                    voices.find(voice => voice.lang.startsWith('pt'));
            };

            loadVoices();
            if (this.synth.onvoiceschanged !== undefined) {
                this.synth.onvoiceschanged = loadVoices;
            }
        }
    }

    // Speak Portuguese text
    speak(text) {
        if (!this.synth) {
            console.warn('Speech synthesis not supported');
            return;
        }

        // Cancel any ongoing speech
        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-PT'; // European Portuguese
        utterance.rate = 0.9; // Slightly slower for learning

        if (this.portugueseVoice) {
            utterance.voice = this.portugueseVoice;
        }

        this.synth.speak(utterance);
    }

    // Create a voice button
    createVoiceButton(text) {
        const btn = document.createElement('button');
        btn.className = 'voice-btn';
        btn.innerHTML = '🔊';
        btn.title = 'Hear pronunciation';
        btn.onclick = (e) => {
            e.stopPropagation();
            this.speak(text);
        };
        return btn;
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
                const voiceBtn = this.createVoiceButton(ex.portuguese);
                exampleDiv.innerHTML = `
                    <span class="english">${ex.english}</span>
                    <span class="portuguese">${ex.portuguese}</span>
                `;
                exampleDiv.appendChild(voiceBtn);
                examplesDiv.appendChild(exampleDiv);
            });

            // Generate additional examples using word patterns
            if (rule.englishPattern) {
                const additionalExamples = this.generateRuleExamples(rule);
                additionalExamples.slice(0, 5).forEach(ex => {
                    const exampleDiv = document.createElement('div');
                    exampleDiv.className = 'example';
                    const voiceBtn = this.createVoiceButton(ex.portuguese);
                    exampleDiv.innerHTML = `
                        <span class="english">${ex.english}</span>
                        <span class="portuguese">${ex.portuguese}</span>
                    `;
                    exampleDiv.appendChild(voiceBtn);
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

            // Convert infinitive to English infinitive form
            const infinitiveTranslation = this.getInfinitiveTranslation(infinitive, forms[0]);

            const conjDiv = document.createElement('div');
            const formsText = forms.map(f => `${f.conjugation} (${f.form})`).join(', ');
            conjDiv.innerHTML = `
                <div class="verb-conj">${infinitive}</div>
                <div class="verb-meaning">${infinitiveTranslation}</div>
                <div class="verb-forms" style="font-size: 0.9em; color: #888; margin-top: 4px;">${formsText}: ${forms[0].meaning}</div>
            `;

            verbDiv.appendChild(conjDiv);
            verbsDiv.appendChild(verbDiv);
        });
    }

    // Get infinitive translation (e.g., "to lament", "to think")
    getInfinitiveTranslation(infinitive, firstForm) {
        // Map of known infinitive translations
        const infinitiveMap = {
            'lamentar': 'to lament / to be sorry',
            'pensar': 'to think',
            'fazer': 'to do / to make',
            'querer': 'to want',
            'poder': 'to be able / can',
            'ter': 'to have',
            'ver': 'to see',
            'comprar': 'to buy',
            'compreender': 'to understand',
            'dar': 'to give',
            'pôr': 'to put',
            'falar': 'to speak',
            'estar': 'to be (temporary)',
            'ir': 'to go',
            'ligar': 'to call / to ring',
            'ser': 'to be (permanent)',
            'saber': 'to know (facts)',
            'preparar': 'to prepare',
            'vir': 'to come',
            'vender': 'to sell',
            'escrever': 'to write',
            'sair': 'to leave / to go out',
            'gostar de': 'to like',
            'conhecer': 'to know (be acquainted with)',
            'comer': 'to eat',
            'beber': 'to drink',
            'chamar-se': 'to call oneself',
            'levantar-se': 'to get up',
            'deitar-se': 'to go to bed',
            'trazer': 'to bring',
            'dever': 'to ought / should',
            'ser/ir': 'to be / to go'
        };

        // Return mapped translation if it exists
        if (infinitiveMap[infinitive]) {
            return infinitiveMap[infinitive];
        }

        // Otherwise, try to construct it from the conjugated form
        // Extract the verb meaning and convert to infinitive
        const meaning = firstForm.meaning.toLowerCase();

        // Handle "I verb" patterns
        if (meaning.startsWith('i ')) {
            const verb = meaning.substring(2);
            return `to ${verb}`;
        }

        // Default: just add "to" prefix
        return `to ${infinitive}`;
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
            const voiceBtn = this.createVoiceButton(phrase.portuguese);
            phraseDiv.innerHTML = `
                <div class="phrase-pt">${phrase.portuguese}</div>
                <div class="phrase-en">${phrase.english}</div>
            `;
            phraseDiv.appendChild(voiceBtn);
            phrasesDiv.appendChild(phraseDiv);
        });
    }

    generatePracticeContent() {
        const practiceDiv = document.getElementById('practice-content');

        // Use ALL learned content, not just recent tracks
        const content = this.getAllLearnedContent();

        if (content.verbs.length === 0 && content.phrases.length === 0) {
            practiceDiv.innerHTML = '<p class="placeholder">Start the course to get practice sentences!</p>';
            return;
        }

        // Generate practice sentences using all learned content
        const sentences = this.createPracticeSentences(content.phrases, content.verbs);

        practiceDiv.innerHTML = '';
        sentences.slice(0, 5).forEach((sentence, index) => {
            const sentenceDiv = document.createElement('div');
            sentenceDiv.className = 'practice-item';

            // Randomly decide which side to show first (varied)
            const showPortugueseFirst = Math.random() > 0.5;

            const voiceBtn = this.createVoiceButton(sentence.portuguese);

            sentenceDiv.innerHTML = `
                <span class="practice-number">${index + 1}</span>
                <div class="flip-card" data-flipped="false">
                    <div class="flip-card-inner">
                        <div class="flip-card-front ${showPortugueseFirst ? 'portuguese-side' : 'english-side'}">
                            ${showPortugueseFirst ? sentence.portuguese : sentence.english}
                        </div>
                        <div class="flip-card-back ${showPortugueseFirst ? 'english-side' : 'portuguese-side'}">
                            ${showPortugueseFirst ? sentence.english : sentence.portuguese}
                        </div>
                    </div>
                </div>
            `;

            // Add voice button to Portuguese side
            const portugueseSide = sentenceDiv.querySelector('.portuguese-side');
            if (portugueseSide) {
                portugueseSide.appendChild(voiceBtn);
            }

            // Add click handler to flip the card
            const flipCard = sentenceDiv.querySelector('.flip-card');
            flipCard.addEventListener('click', () => {
                const isFlipped = flipCard.getAttribute('data-flipped') === 'true';
                flipCard.setAttribute('data-flipped', !isFlipped);
            });
            practiceDiv.appendChild(sentenceDiv);
        });
    }

    createPracticeSentences(phrases, verbs) {
        const sentences = [];
        const getRandom = (arr) => arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : null;

        const cleanEnglish = (text) => {
            return text
                .replace(/\s*\/\s*/g, ' / ')
                .trim();
        };

        // Filter out question words, connectors, and other words that don't work well in simple sentences
        const excludeWords = [
            // Question words
            'porque?', 'porque é que', 'o que', 'quando?', 'onde', 'quanto?', 'como', 'por que',
            // Connectors
            'mas', 'e', 'se', 'que',
            // Pronouns (we already have them in verbs)
            'eu', 'o senhor', 'a senhora', 'ele', 'ela', 'lhe', 'me',
            // Articles and prepositions alone
            'o', 'a', 'um', 'uma', 'os', 'as', 'do', 'da', 'no', 'na', 'dum', 'duma', 'de', 'em',
            // Other non-useful words
            'sim', 'não é', 'é', 'está', 'estou'
        ];

        // Get usable phrases - exclude questions, connectors, pronouns, articles
        const usablePhrases = phrases.filter(p => {
            const pt = p.portuguese.toLowerCase().trim();

            // Skip if it's in the exclude list
            if (excludeWords.includes(pt)) {
                return false;
            }

            // Skip if it contains a question mark
            if (pt.includes('?')) {
                return false;
            }

            // Skip very short single-letter words
            if (pt.length < 2) {
                return false;
            }

            return true;
        });

        // Get first-person verbs
        const firstPersonVerbs = verbs.filter(v =>
            v.form === 'I' || v.meaning.toLowerCase().startsWith('i ')
        );

        // Get negation word if available
        const negation = phrases.find(p => p.portuguese.toLowerCase() === 'não');

        if (firstPersonVerbs.length === 0) {
            return [{ portuguese: 'Continue aprendendo', english: 'Keep learning' }];
        }

        // Generate sentences by combining verbs with usable phrases
        const maxSentences = 10;
        let attempts = 0;
        const maxAttempts = 100;

        while (sentences.length < maxSentences && attempts < maxAttempts) {
            attempts++;

            const verb = getRandom(firstPersonVerbs);

            // 70% chance to add a phrase if available
            if (usablePhrases.length > 0 && Math.random() > 0.3) {
                const phrase = getRandom(usablePhrases);

                // 20% chance to make it negative if negation is available
                if (negation && Math.random() > 0.8) {
                    const ptSentence = `${negation.portuguese} ${verb.conjugation} ${phrase.portuguese}`;
                    const verbPart = verb.meaning.toLowerCase().replace(/^i\s+/, '');
                    const enSentence = `I don't ${verbPart} ${cleanEnglish(phrase.english)}`;

                    if (!sentences.some(s => s.portuguese === ptSentence)) {
                        sentences.push({ portuguese: ptSentence, english: enSentence });
                    }
                } else {
                    const ptSentence = `${verb.conjugation} ${phrase.portuguese}`;
                    const enSentence = `${verb.meaning} ${cleanEnglish(phrase.english)}`;

                    if (!sentences.some(s => s.portuguese === ptSentence)) {
                        sentences.push({ portuguese: ptSentence, english: enSentence });
                    }
                }
            }
        }

        // If we didn't generate enough sentences with phrases, add some verb-only sentences
        while (sentences.length < Math.min(5, maxSentences) && firstPersonVerbs.length > 0) {
            const verb = getRandom(firstPersonVerbs);
            const ptSentence = verb.conjugation;
            const enSentence = verb.meaning;

            if (!sentences.some(s => s.portuguese === ptSentence)) {
                sentences.push({ portuguese: ptSentence, english: enSentence });
            } else {
                break; // Avoid infinite loop if all verbs are already used
            }
        }

        // Shuffle the sentences for variety
        this.shuffleArray(sentences);

        return sentences.length > 0 ? sentences.slice(0, maxSentences) : [
            { portuguese: 'Continue aprendendo', english: 'Keep learning' }
        ];
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
