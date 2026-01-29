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
        const recentTracks = this.getRecentTracks(5); // Increased to 5 for richer content
        const practiceDiv = document.getElementById('practice-content');

        if (recentTracks.length === 0) {
            practiceDiv.innerHTML = '<p class="placeholder">Start the course to get practice sentences!</p>';
            return;
        }

        // Collect all content from recent tracks
        const allPhrases = [];
        const allVerbs = [];
        const ruleWords = []; // New: collect words from rules

        recentTracks.forEach(({ cd, track }) => {
            allPhrases.push(...(track.phrases || []));
            allVerbs.push(...(track.verbs || []));

            // Add words from rules as additional practice vocabulary
            if (track.rules) {
                track.rules.forEach(rule => {
                    if (rule.examples) {
                        rule.examples.forEach(ex => {
                            ruleWords.push({
                                portuguese: ex.portuguese,
                                english: ex.english
                            });
                        });
                    }
                });
            }
        });

        // Combine rule words with phrases for richer vocabulary
        const allVocab = [...allPhrases, ...ruleWords];

        // Add "é" as a verb if it exists in phrases but not in verbs
        const hasEPhrase = allPhrases.find(p => p.portuguese === 'é');
        const hasEVerb = allVerbs.find(v => v.conjugation === 'é');
        if (hasEPhrase && !hasEVerb) {
            allVerbs.push({
                infinitive: 'ser',
                conjugation: 'é',
                meaning: 'it is',
                form: 'it'
            });
        }

        // Generate practice sentences with enriched vocabulary
        const sentences = this.createPracticeSentences(allVocab, allVerbs);

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

        // Helper to get a random item from an array
        const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

        // Helper to clean English text
        const cleanEnglish = (text) => {
            return text
                .replace(/\s*\/\s*/g, ' or ') // Remove slashes
                .replace(/\(speaking to a (man|woman)\)/g, '') // Remove gender notes
                .replace(/\s+/g, ' ') // Normalize spaces
                .trim();
        };

        // Categorize phrases
        const questionWords = phrases.filter(p =>
            p.portuguese.includes('?') ||
            ['porque', 'quando', 'onde', 'como'].some(q => p.portuguese.toLowerCase().includes(q))
        );

        const connectors = phrases.filter(p =>
            ['para', 'com', 'mas', 'se', 'assim', 'também', 'e'].some(c => p.portuguese.toLowerCase() === c)
        );

        const negation = phrases.find(p => p.portuguese.toLowerCase() === 'não');

        // Whitelist: Only allow phrases that work well in simple verb+phrase sentences
        // These are mainly adverbs, time expressions, and location phrases
        const allowedPhrasesPatterns = [
            // Adverbs
            'muito', 'bem', 'mal', 'sempre', 'nunca', 'também', 'só',
            'very', 'much', 'well', 'badly', 'always', 'never', 'also', 'too', 'only',
            // Time expressions
            'agora', 'hoje', 'amanhã', 'ontem', 'tarde', 'cedo',
            'now', 'today', 'tomorrow', 'yesterday', 'late', 'early', 'afternoon', 'evening',
            'mais tarde', 'todos os dias',
            'later', 'every day',
            // Location expressions
            'aqui', 'ali', 'lá', 'aqui', 'em portugal', 'no brasil', 'em casa',
            'here', 'there',
            'in portugal', 'in brazil', 'at home',
            // Prepositional phrases that work
            'para mim', 'comigo',
            'for me', 'with me',
            // Natural expressions
            'tudo bem', 'naturalmente', 'imediatamente', 'perfeitamente',
            'all well', 'naturally', 'immediately', 'perfectly'
        ];

        const regularPhrases = phrases.filter(p => {
            if (questionWords.includes(p) || connectors.includes(p) || p === negation) {
                return false;
            }
            if (p.portuguese.includes('?') || p.portuguese.includes('/')) {
                return false;
            }

            const ptLower = p.portuguese.toLowerCase();
            const enLower = p.english.toLowerCase();

            // Only allow phrases that match our whitelist
            const isAllowed = allowedPhrasesPatterns.some(pattern =>
                ptLower.includes(pattern) || enLower.includes(pattern)
            );

            return isAllowed;
        });

        // 1. Simple Verb + Phrase combinations (main source of practice)
        for (let i = 0; i < 6; i++) {
            if (verbs.length > 0 && regularPhrases.length > 0) {
                const verb = getRandom(verbs);
                const phrase = getRandom(regularPhrases);
                sentences.push({
                    portuguese: `${verb.conjugation} ${phrase.portuguese}`,
                    english: `${verb.meaning} ${cleanEnglish(phrase.english)}`
                });
            }
        }

        // 2. Negative statements
        if (negation && verbs.length > 0 && regularPhrases.length > 0) {
            for (let i = 0; i < 2; i++) {
                const verb = getRandom(verbs);
                const phrase = getRandom(regularPhrases);

                const ptSentence = `${negation.portuguese} ${verb.conjugation} ${phrase.portuguese}`;

                // Build proper negative English
                let enSentence;
                if (verb.infinitive === 'ser' || verb.conjugation === 'é') {
                    enSentence = `it is not ${cleanEnglish(phrase.english)}`;
                } else if (verb.meaning.startsWith('I ')) {
                    const verbBase = verb.meaning.replace('I ', '');
                    enSentence = `I don't ${verbBase} ${cleanEnglish(phrase.english)}`;
                } else {
                    enSentence = `not ${verb.meaning} ${cleanEnglish(phrase.english)}`;
                }

                sentences.push({ portuguese: ptSentence, english: enSentence });
            }
        }

        // 3. Questions
        if (questionWords.length > 0 && verbs.length > 0 && regularPhrases.length > 0) {
            for (let i = 0; i < 2; i++) {
                const qWord = getRandom(questionWords);
                const verb = getRandom(verbs);
                const phrase = getRandom(regularPhrases);

                // Simple questions like "Why is it X?"
                if (qWord.portuguese.toLowerCase().includes('porque')) {
                    const ptSentence = `${qWord.portuguese} ${verb.conjugation} ${phrase.portuguese}?`;
                    const enSentence = `why is it ${cleanEnglish(phrase.english)}?`;
                    sentences.push({ portuguese: ptSentence, english: enSentence });
                }
            }
        }

        // Fallback: Use existing phrases if not enough generated
        if (sentences.length < 3) {
            phrases.slice(0, 5).forEach(phrase => {
                sentences.push({
                    portuguese: phrase.portuguese,
                    english: cleanEnglish(phrase.english)
                });
            });
        }

        // Remove duplicates and return unique sentences
        const uniqueSentences = [];
        const seen = new Set();

        this.shuffleArray(sentences).forEach(s => {
            if (!seen.has(s.portuguese) && uniqueSentences.length < 10) {
                seen.add(s.portuguese);
                uniqueSentences.push(s);
            }
        });

        return uniqueSentences;
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
