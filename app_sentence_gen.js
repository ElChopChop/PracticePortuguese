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

    const regularPhrases = phrases.filter(p =>
        !questionWords.includes(p) &&
        !connectors.includes(p) &&
        p !== negation &&
        !p.portuguese.includes('?') &&
        !p.portuguese.includes('/')  // Exclude descriptors with slashes
    );

    // 1. Simple Verb + Phrase combinations
    for (let i = 0; i < 4; i++) {
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

    // 4. Verb + Phrase + Connector + Phrase combinations
    if (verbs.length > 0 && regularPhrases.length >= 2 && connectors.length > 0) {
        for (let i = 0; i < 2; i++) {
            const verb = getRandom(verbs);
            const phrase1 = getRandom(regularPhrases);
            const connector = getRandom(connectors);
            const phrase2 = getRandom(regularPhrases.filter(p => p !== phrase1));

            if (phrase2) {
                const ptSentence = `${verb.conjugation} ${phrase1.portuguese} ${connector.portuguese} ${phrase2.portuguese}`;
                const enSentence = `${verb.meaning} ${cleanEnglish(phrase1.english)} ${cleanEnglish(connector.english)} ${cleanEnglish(phrase2.english)}`;
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
