// Michel Thomas Portuguese Course Data
// Extracted from Foundation course PDF

const courseData = {
  foundation: [
    { // CD1
      cd: 1,
      tracks: [
        {
          number: 1,
          title: "Introduction",
          rules: [],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 2,
          title: "Words ending in -ible/-able",
          rules: [
            {
              pattern: "Words ending in '-ible' and '-able' in English end in '-ível' or '-ável' in Portuguese",
              examples: [
                { english: "possible", portuguese: "possível" },
                { english: "horrible", portuguese: "horrível" },
                { english: "terrible", portuguese: "terrível" },
                { english: "comfortable", portuguese: "confortável" },
                { english: "probable", portuguese: "provável" },
                { english: "acceptable", portuguese: "aceitável" }
              ],
              englishPattern: "(\\w+)(ible|able)$",
              portuguesePattern: "$1ível"
            }
          ],
          verbs: [],
          phrases: [
            { portuguese: "é", english: "is / it is" }
          ],
          vocabulary: []
        },
        {
          number: 3,
          title: "Basic phrases",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "para", english: "for" },
            { portuguese: "para mim", english: "for me" },
            { portuguese: "o senhor", english: "you (speaking to a man)" },
            { portuguese: "a senhora", english: "you (speaking to a woman)" }
          ],
          vocabulary: []
        },
        {
          number: 4,
          title: "Negation and questions",
          rules: [
            {
              pattern: "To make something negative, use 'não' before the verb",
              examples: [
                { english: "it is not possible", portuguese: "não é possível" }
              ]
            },
            {
              pattern: "To ask a question, raise your voice at the end",
              examples: [
                { english: "Is it possible?", portuguese: "É possível?" }
              ]
            }
          ],
          verbs: [],
          phrases: [
            { portuguese: "não", english: "not / no" }
          ],
          vocabulary: []
        },
        {
          number: 5,
          title: "Question words",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "porque?", english: "why?" },
            { portuguese: "porque é que", english: "why is it that" },
            { portuguese: "assim", english: "like that / that way" }
          ],
          vocabulary: []
        },
        {
          number: 6,
          title: "First verbs and words ending in -ent/-ant",
          rules: [
            {
              pattern: "Words ending in '-ent' and '-ant' in English end in '-ente' or '-ante' in Portuguese",
              examples: [
                { english: "different", portuguese: "diferente" },
                { english: "important", portuguese: "importante" }
              ],
              englishPattern: "(\\w+)(ent|ant)$",
              portuguesePattern: "$1ente"
            }
          ],
          verbs: [
            { infinitive: "lamentar", conjugation: "lamento", meaning: "I'm sorry / I lament", form: "I" }
          ],
          phrases: [
            { portuguese: "lamento", english: "I'm sorry" },
            { portuguese: "desculpe", english: "excuse me" },
            { portuguese: "mas", english: "but" },
            { portuguese: "sim", english: "yes" },
            { portuguese: "eu", english: "I" }
          ],
          vocabulary: []
        },
        {
          number: 7,
          title: "Words ending in -ence/-ance",
          rules: [
            {
              pattern: "Words ending in '-ence' and '-ance' in English end in '-ência' or '-ância' in Portuguese",
              examples: [
                { english: "difference", portuguese: "diferença" },
                { english: "distance", portuguese: "distância" },
                { english: "importance", portuguese: "importância" }
              ],
              englishPattern: "(\\w+)(ence|ance)$",
              portuguesePattern: "$1ência"
            }
          ],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 8,
          title: "More verbs",
          rules: [],
          verbs: [
            { infinitive: "pensar", conjugation: "penso", meaning: "I think", form: "I" }
          ],
          phrases: [
            { portuguese: "o que", english: "what / that which" }
          ],
          vocabulary: []
        },
        {
          number: 9,
          title: "Words ending in -tion",
          rules: [
            {
              pattern: "Words ending in '-tion' in English end in '-ção' in Portuguese (feminine)",
              examples: [
                { english: "action", portuguese: "ação" },
                { english: "section", portuguese: "seção" },
                { english: "station", portuguese: "estação" }
              ],
              englishPattern: "(\\w+)tion$",
              portuguesePattern: "$1ção"
            }
          ],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 10,
          title: "More vocabulary",
          rules: [],
          verbs: [
            { infinitive: "fazer", conjugation: "faço", meaning: "I do / I make", form: "I" }
          ],
          phrases: [
            { portuguese: "agora", english: "now" },
            { portuguese: "muito", english: "very / much / a lot" }
          ],
          vocabulary: []
        },
        {
          number: 11,
          title: "Object pronouns",
          rules: [
            {
              pattern: "Direct object pronouns: o (him/it masc), a (her/it fem)",
              examples: [
                { english: "I do it", portuguese: "faço-o / o faço" }
              ]
            }
          ],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 12,
          title: "More verbs and vocabulary",
          rules: [],
          verbs: [
            { infinitive: "querer", conjugation: "quero", meaning: "I want", form: "I" },
            { infinitive: "poder", conjugation: "posso", meaning: "I can", form: "I" }
          ],
          phrases: [
            { portuguese: "isso", english: "that" },
            { portuguese: "aqui", english: "here" }
          ],
          vocabulary: []
        }
      ]
    },
    { // CD2
      cd: 2,
      tracks: [
        {
          number: 1,
          title: "Words ending in -ary",
          rules: [
            {
              pattern: "English words ending in '-ary' end in -ário in Portuguese",
              examples: [
                { english: "necessary", portuguese: "necessário" },
                { english: "contrary", portuguese: "contrário" },
                { english: "vocabulary", portuguese: "vocabulário" }
              ]
            }
          ],
          verbs: [
            { infinitive: "precisar", conjugation: "preciso de", meaning: "I need", form: "I" }
          ],
          phrases: [
            { portuguese: "e", english: "and" }
          ],
          vocabulary: []
        },
        {
          number: 2,
          title: "To see",
          rules: [
            {
              pattern: "When you attach 'it' to the infinitive, drop the final r and o/a turns into lo/la",
              examples: [
                { english: "to see it", portuguese: "vê-lo / vê-la" },
                { english: "to do it", portuguese: "fazê-lo / fazê-la" }
              ]
            }
          ],
          verbs: [
            { infinitive: "ver", conjugation: "vejo", meaning: "I see", form: "I" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 3,
          title: "Words ending in -ence/-ance",
          rules: [
            {
              pattern: "Words ending in '-ence' and '-ance' end in -ência/-ença and -ância in Portuguese",
              examples: [
                { english: "influence", portuguese: "influência" },
                { english: "preference", portuguese: "preferência" },
                { english: "difference", portuguese: "diferença" },
                { english: "importance", portuguese: "importância" }
              ]
            }
          ],
          verbs: [],
          phrases: [
            { portuguese: "a diferença", english: "the difference" },
            { portuguese: "uma diferença", english: "a difference" },
            { portuguese: "que", english: "what" },
            { portuguese: "por que", english: "for what" },
            { portuguese: "esta noite", english: "this night / tonight" }
          ],
          vocabulary: []
        },
        {
          number: 4,
          title: "Where, to dine",
          rules: [
            {
              pattern: "Words ending in '-tion' end in -ção in Portuguese",
              examples: [
                { english: "condition", portuguese: "condição" },
                { english: "nation", portuguese: "nação" },
                { english: "situation", portuguese: "situação" },
                { english: "organization", portuguese: "organização" },
                { english: "position", portuguese: "posição" }
              ]
            }
          ],
          verbs: [
            { infinitive: "jantar", conjugation: "janto", meaning: "I dine / I have dinner", form: "I" }
          ],
          phrases: [
            { portuguese: "onde", english: "where" },
            { portuguese: "reserva", english: "reservation" },
            { portuguese: "a", english: "the (feminine)" },
            { portuguese: "uma", english: "a (feminine)" },
            { portuguese: "o", english: "the (masculine)" },
            { portuguese: "um", english: "a (masculine)" }
          ],
          vocabulary: []
        },
        {
          number: 5,
          title: "Of, of the",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "de", english: "of" },
            { portuguese: "do", english: "of the (masculine)" },
            { portuguese: "da", english: "of the (feminine)" },
            { portuguese: "dum", english: "of a (masculine)" },
            { portuguese: "duma", english: "of a (feminine)" },
            { portuguese: "confirmação", english: "confirmation" },
            { portuguese: "tipo", english: "kind / type" },
            { portuguese: "que tipo de", english: "what type of" }
          ],
          vocabulary: []
        },
        {
          number: 6,
          title: "Translation, explanation",
          rules: [
            {
              pattern: "Some '-tion' words are slightly different: translation = tradução, explanation = explicação",
              examples: [
                { english: "translation", portuguese: "tradução" },
                { english: "explanation", portuguese: "explicação" }
              ]
            }
          ],
          verbs: [
            { infinitive: "dar", conjugation: "dou", meaning: "I give", form: "I" }
          ],
          phrases: [
            { portuguese: "por favor", english: "please" }
          ],
          vocabulary: []
        },
        {
          number: 7,
          title: "Verb formation",
          rules: [
            {
              pattern: "Verbs from similar nouns: add -ar to make the verb (e.g., formação → formar)",
              examples: [
                { english: "to form", portuguese: "formar" },
                { english: "to confirm", portuguese: "confirmar" }
              ]
            },
            {
              pattern: "Four verb endings: -ar (falar), -er (comer), -ir (sair), -or (pôr)",
              examples: [
                { english: "to speak", portuguese: "falar" },
                { english: "to eat", portuguese: "comer" },
                { english: "to leave / to go out", portuguese: "sair" },
                { english: "to put", portuguese: "pôr" }
              ]
            }
          ],
          verbs: [],
          phrases: [
            { portuguese: "impressão", english: "impression" }
          ],
          vocabulary: []
        },
        {
          number: 8,
          title: "Here, plural",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "aqui", english: "here" },
            { portuguese: "os", english: "them (masculine)" },
            { portuguese: "as", english: "them (feminine)" },
            { portuguese: "vê-los", english: "to see them (masculine)" },
            { portuguese: "vê-las", english: "to see them (feminine)" },
            { portuguese: "me", english: "me" },
            { portuguese: "ver-me", english: "to see me" }
          ],
          vocabulary: []
        },
        {
          number: 9,
          title: "To understand, to say",
          rules: [],
          verbs: [
            { infinitive: "compreender", conjugation: "compreendo", meaning: "I understand", form: "I" },
            { infinitive: "dizer", conjugation: "digo", meaning: "I say / I tell", form: "I" }
          ],
          phrases: [
            { portuguese: "lhe", english: "(to) you" },
            { portuguese: "dizer-lhe", english: "to tell you" }
          ],
          vocabulary: []
        },
        {
          number: 10,
          title: "This, to buy",
          rules: [],
          verbs: [
            { infinitive: "comprar", conjugation: "compro", meaning: "I buy", form: "I" }
          ],
          phrases: [
            { portuguese: "isto", english: "this (in general)" }
          ],
          vocabulary: []
        }
      ]
    },
    { // CD3
      cd: 3,
      tracks: [
        {
          number: 1,
          title: "Countries and prepositions",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "Portugal", english: "Portugal" },
            { portuguese: "em", english: "in" },
            { portuguese: "em Portugal", english: "in Portugal" }
          ],
          vocabulary: []
        },
        {
          number: 2,
          title: "More countries",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "Brasil", english: "Brazil" },
            { portuguese: "Inglaterra", english: "England" },
            { portuguese: "Espanha", english: "Spain" }
          ],
          vocabulary: []
        },
        {
          number: 3,
          title: "To speak",
          rules: [],
          verbs: [
            { infinitive: "falar", conjugation: "falo", meaning: "I speak", form: "I" }
          ],
          phrases: [
            { portuguese: "português", english: "Portuguese (language)" },
            { portuguese: "inglês", english: "English (language)" }
          ],
          vocabulary: []
        },
        {
          number: 4,
          title: "Days and time",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "hoje", english: "today" },
            { portuguese: "ontem", english: "yesterday" },
            { portuguese: "dia", english: "day" }
          ],
          vocabulary: []
        },
        {
          number: 5,
          title: "Contractions",
          rules: [
            {
              pattern: "em + o/a = no/na (in the)",
              examples: [
                { english: "in the hotel", portuguese: "no hotel" },
                { english: "in Italy", portuguese: "na Itália" }
              ]
            }
          ],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 6,
          title: "Questions and if",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "quanto?", english: "how much?" },
            { portuguese: "se", english: "if" },
            { portuguese: "estou", english: "I am" }
          ],
          vocabulary: []
        },
        {
          number: 7,
          title: "Adjectives - busy and tired",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "ocupado/ocupada", english: "busy/occupied" },
            { portuguese: "cansado/cansada", english: "tired" }
          ],
          vocabulary: []
        },
        {
          number: 8,
          title: "To be (estar) and house",
          rules: [],
          verbs: [
            { infinitive: "estar", conjugation: "estou", meaning: "I am", form: "I" },
            { infinitive: "estar", conjugation: "está", meaning: "you are / he/she/it is", form: "you/he/she/it" }
          ],
          phrases: [
            { portuguese: "casa", english: "house" },
            { portuguese: "esta casa", english: "this house" },
            { portuguese: "como", english: "how" },
            { portuguese: "Como está?", english: "How are you?" },
            { portuguese: "dia", english: "day" },
            { portuguese: "bom dia", english: "good day / hello" }
          ],
          vocabulary: []
        },
        {
          number: 9,
          title: "Going to (future)",
          rules: [
            {
              pattern: "Use 'vou' + infinitive to express future (going to)",
              examples: [
                { english: "I am going to be", portuguese: "vou estar" },
                { english: "I am not going to buy it", portuguese: "não vou comprá-lo" }
              ]
            }
          ],
          verbs: [
            { infinitive: "ir", conjugation: "vou", meaning: "I go / I am going", form: "I" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 10,
          title: "Time expressions",
          rules: [],
          verbs: [
            { infinitive: "ligar", conjugation: "ligo", meaning: "I call / I ring", form: "I" }
          ],
          phrases: [
            { portuguese: "tarde", english: "late / afternoon / evening" },
            { portuguese: "mais ou menos", english: "more or less" },
            { portuguese: "mais tarde", english: "later" },
            { portuguese: "boa tarde", english: "good afternoon/evening" },
            { portuguese: "a que horas?", english: "at what time?" },
            { portuguese: "hora", english: "hour" }
          ],
          vocabulary: []
        }
      ]
    },
    { // CD4
      cd: 4,
      tracks: [
        {
          number: 1,
          title: "Third person (he/she/it)",
          rules: [
            {
              pattern: "The form for 'you' is the same as for 'he/she/it'",
              examples: [
                { english: "you are going to / he is going to", portuguese: "vai" }
              ]
            }
          ],
          verbs: [
            { infinitive: "ir", conjugation: "vai", meaning: "you/he/she/it go(es)", form: "you/he/she/it" }
          ],
          phrases: [
            { portuguese: "ele", english: "he" },
            { portuguese: "ela", english: "she" }
          ],
          vocabulary: []
        },
        {
          number: 2,
          title: "Ready and tomorrow",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "pronto/pronta", english: "ready" },
            { portuguese: "tudo", english: "all / everything" },
            { portuguese: "amanhã", english: "tomorrow" }
          ],
          vocabulary: []
        },
        {
          number: 3,
          title: "Ser vs Estar",
          rules: [
            {
              pattern: "Estar = temporary state, location. Ser = permanent characteristics, identity",
              examples: [
                { english: "it is ready (temporary)", portuguese: "está pronto" },
                { english: "it is possible (permanent)", portuguese: "é possível" }
              ]
            }
          ],
          verbs: [
            { infinitive: "ser", conjugation: "sou", meaning: "I am", form: "I" },
            { infinitive: "saber", conjugation: "sei", meaning: "I know", form: "I" }
          ],
          phrases: [
            { portuguese: "inglês/inglesa", english: "English" },
            { portuguese: "português/portuguesa", english: "Portuguese" }
          ],
          vocabulary: []
        },
        {
          number: 4,
          title: "Adjectives and thank you",
          rules: [],
          verbs: [
            { infinitive: "preparar", conjugation: "preparo", meaning: "I prepare", form: "I" }
          ],
          phrases: [
            { portuguese: "doente", english: "ill" },
            { portuguese: "bonito/bonita", english: "pretty" },
            { portuguese: "preparação", english: "preparation" },
            { portuguese: "obrigado/obrigada", english: "thank you" },
            { portuguese: "muito obrigado", english: "thank you very much" }
          ],
          vocabulary: []
        },
        {
          number: 5,
          title: "To come",
          rules: [],
          verbs: [
            { infinitive: "vir", conjugation: "venho", meaning: "I come", form: "I" }
          ],
          phrases: [
            { portuguese: "com", english: "with" },
            { portuguese: "comigo", english: "with me" }
          ],
          vocabulary: []
        },
        {
          number: 6,
          title: "Present tense patterns",
          rules: [
            {
              pattern: "Present tense 'I' form: remove -ar/-er/-ir, add -o",
              examples: [
                { english: "I prepare", portuguese: "preparo" },
                { english: "I buy", portuguese: "compro" },
                { english: "I understand", portuguese: "compreendo" }
              ]
            }
          ],
          verbs: [
            { infinitive: "vender", conjugation: "vendo", meaning: "I sell", form: "I" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 7,
          title: "Object pronouns review",
          rules: [],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 8,
          title: "Present tense you/he/she/it",
          rules: [
            {
              pattern: "-ar verbs: you/he/she/it ends in -a",
              examples: [
                { english: "you/he/she/it buys", portuguese: "compra" },
                { english: "you/he/she/it speaks", portuguese: "fala" }
              ]
            },
            {
              pattern: "-er/-ir verbs: you/he/she/it ends in -e",
              examples: [
                { english: "you/he/she/it sells", portuguese: "vende" },
                { english: "you/he/she/it understands", portuguese: "compreende" }
              ]
            }
          ],
          verbs: [
            { infinitive: "escrever", conjugation: "escrevo", meaning: "I write", form: "I" },
            { infinitive: "escrever", conjugation: "escreve", meaning: "you/he/she/it write(s)", form: "you/he/she/it" }
          ],
          phrases: [
            { portuguese: "todos os dias", english: "every day" }
          ],
          vocabulary: []
        },
        {
          number: 9,
          title: "Irregular present tense",
          rules: [],
          verbs: [
            { infinitive: "saber", conjugation: "sabe", meaning: "you/he/she/it know(s)", form: "you/he/she/it" },
            { infinitive: "fazer", conjugation: "faz", meaning: "you/he/she/it do(es)", form: "you/he/she/it" },
            { infinitive: "querer", conjugation: "quer", meaning: "you/he/she/it want(s)", form: "you/he/she/it" },
            { infinitive: "ter", conjugation: "tem", meaning: "you/he/she/it have/has", form: "you/he/she/it" },
            { infinitive: "sair", conjugation: "sai", meaning: "you/he/she/it leave(s)", form: "you/he/she/it" }
          ],
          phrases: [],
          vocabulary: []
        }
      ]
    },
    { // CD5
      cd: 5,
      tracks: [
        {
          number: 1,
          title: "Present continuous (-ing)",
          rules: [
            {
              pattern: "Present continuous: estar + a + infinitive",
              examples: [
                { english: "I am going out", portuguese: "estou a sair" },
                { english: "I am writing", portuguese: "estou a escrever" }
              ]
            }
          ],
          verbs: [],
          phrases: [
            { portuguese: "O que está a fazer?", english: "What are you doing?" },
            { portuguese: "diz", english: "you/he/she/it say(s)" },
            { portuguese: "querer dizer", english: "to mean / to want to say" },
            { portuguese: "isto", english: "this" }
          ],
          vocabulary: []
        },
        {
          number: 2,
          title: "Verb review",
          rules: [],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 3,
          title: "To like",
          rules: [],
          verbs: [
            { infinitive: "gostar de", conjugation: "gosto de", meaning: "I like", form: "I" },
            { infinitive: "gostar de", conjugation: "gosta de", meaning: "you/he/she/it like(s)", form: "you/he/she/it" }
          ],
          phrases: [
            { portuguese: "quem?", english: "who?" },
            { portuguese: "toda a gente", english: "everyone / everybody" },
            { portuguese: "gosto muito", english: "I like it very much" }
          ],
          vocabulary: []
        },
        {
          number: 4,
          title: "They form of verbs",
          rules: [
            {
              pattern: "For 'they' add -m after the -a or -e of you/he/she/it form",
              examples: [
                { english: "they speak", portuguese: "falam" },
                { english: "they buy", portuguese: "compram" },
                { english: "they can", portuguese: "podem" },
                { english: "they understand", portuguese: "compreendem" }
              ]
            }
          ],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 5,
          title: "They form - irregular",
          rules: [
            {
              pattern: "Verbs that lost -e: add -e back before -m",
              examples: [
                { english: "they do", portuguese: "fazem" },
                { english: "they say", portuguese: "dizem" }
              ]
            }
          ],
          verbs: [
            { infinitive: "querer", conjugation: "querem", meaning: "they want", form: "they" },
            { infinitive: "sair", conjugation: "saiem", meaning: "they leave", form: "they" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 6,
          title: "To know (conhecer)",
          rules: [],
          verbs: [
            { infinitive: "conhecer", conjugation: "conheço", meaning: "I know (be acquainted with)", form: "I" }
          ],
          phrases: [
            { portuguese: "pessoa", english: "person" },
            { portuguese: "pessoas", english: "people" }
          ],
          vocabulary: []
        },
        {
          number: 7,
          title: "To eat and drink",
          rules: [],
          verbs: [
            { infinitive: "comer", conjugation: "como", meaning: "I eat", form: "I" },
            { infinitive: "beber", conjugation: "bebo", meaning: "I drink", form: "I" }
          ],
          phrases: [
            { portuguese: "comida", english: "food" },
            { portuguese: "bebida", english: "drink" }
          ],
          vocabulary: []
        },
        {
          number: 8,
          title: "Restaurants and menus",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "restaurante", english: "restaurant" },
            { portuguese: "menu", english: "menu" },
            { portuguese: "peixe", english: "fish" },
            { portuguese: "carne", english: "meat" }
          ],
          vocabulary: []
        },
        {
          number: 9,
          title: "More food vocabulary",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "vinho", english: "wine" },
            { portuguese: "água", english: "water" },
            { portuguese: "café", english: "coffee" },
            { portuguese: "chá", english: "tea" }
          ],
          vocabulary: []
        },
        {
          number: 10,
          title: "Numbers",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "um/uma", english: "one" },
            { portuguese: "dois/duas", english: "two" },
            { portuguese: "três", english: "three" },
            { portuguese: "quatro", english: "four" },
            { portuguese: "cinco", english: "five" }
          ],
          vocabulary: []
        },
        {
          number: 11,
          title: "More numbers",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "seis", english: "six" },
            { portuguese: "sete", english: "seven" },
            { portuguese: "oito", english: "eight" },
            { portuguese: "nove", english: "nine" },
            { portuguese: "dez", english: "ten" }
          ],
          vocabulary: []
        }
      ]
    },
    { // CD6
      cd: 6,
      tracks: [
        {
          number: 1,
          title: "Past tense introduction",
          rules: [],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 2,
          title: "Past tense - I form",
          rules: [
            {
              pattern: "Past tense 'I': -ar verbs end in -ei, -er/-ir verbs end in -i",
              examples: [
                { english: "I bought", portuguese: "comprei" },
                { english: "I saw", portuguese: "vi" }
              ]
            }
          ],
          verbs: [
            { infinitive: "comprar", conjugation: "comprei", meaning: "I bought", form: "I (past)" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 3,
          title: "More past tense",
          rules: [],
          verbs: [
            { infinitive: "falar", conjugation: "falei", meaning: "I spoke", form: "I (past)" },
            { infinitive: "comer", conjugation: "comi", meaning: "I ate", form: "I (past)" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 4,
          title: "Yesterday and last",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "ontem", english: "yesterday" },
            { portuguese: "último/última", english: "last" },
            { portuguese: "semana", english: "week" }
          ],
          vocabulary: []
        },
        {
          number: 5,
          title: "Past tense you/he/she/it",
          rules: [
            {
              pattern: "Past 'you/he/she/it': -ar = -ou, -er/-ir = -eu",
              examples: [
                { english: "you/he bought", portuguese: "comprou" },
                { english: "you/he saw", portuguese: "veu" }
              ]
            }
          ],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 6,
          title: "Irregular past - ser/ir",
          rules: [],
          verbs: [
            { infinitive: "ser/ir", conjugation: "fui", meaning: "I was / I went", form: "I (past)" },
            { infinitive: "ser/ir", conjugation: "foi", meaning: "you/he/she was/were / went", form: "you/he/she/it (past)" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 7,
          title: "More irregular past tense",
          rules: [],
          verbs: [
            { infinitive: "fazer", conjugation: "fiz", meaning: "I did/made", form: "I (past)" },
            { infinitive: "ter", conjugation: "tive", meaning: "I had", form: "I (past)" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 8,
          title: "Past tense they",
          rules: [
            {
              pattern: "Past 'they': -ar = -aram, -er/-ir = -eram",
              examples: [
                { english: "they bought", portuguese: "compraram" },
                { english: "they saw", portuguese: "viram" }
              ]
            }
          ],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 9,
          title: "Time expressions",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "ano", english: "year" },
            { portuguese: "mês", english: "month" },
            { portuguese: "há", english: "ago" }
          ],
          vocabulary: []
        },
        {
          number: 10,
          title: "Review and practice",
          rules: [],
          verbs: [],
          phrases: [],
          vocabulary: []
        }
      ]
    },
    { // CD7
      cd: 7,
      tracks: [
        {
          number: 1,
          title: "Would like",
          rules: [
            {
              pattern: "Conditional 'I would': -ar = -aria, -er/-ir = -eria",
              examples: [
                { english: "I would like", portuguese: "gostaria" },
                { english: "I would buy", portuguese: "compraria" }
              ]
            }
          ],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 2,
          title: "Conditional you/he/she/it",
          rules: [],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 3,
          title: "Could and should",
          rules: [],
          verbs: [
            { infinitive: "poder", conjugation: "poderia", meaning: "I could / would be able", form: "I (conditional)" },
            { infinitive: "dever", conjugation: "deveria", meaning: "I should / ought to", form: "I (conditional)" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 4,
          title: "More vocabulary",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "talvez", english: "perhaps / maybe" },
            { portuguese: "certamente", english: "certainly" }
          ],
          vocabulary: []
        },
        {
          number: 5,
          title: "Reflexive verbs",
          rules: [],
          verbs: [
            { infinitive: "chamar-se", conjugation: "chamo-me", meaning: "I call myself / my name is", form: "I" }
          ],
          phrases: [
            { portuguese: "Como se chama?", english: "What is your name?" }
          ],
          vocabulary: []
        },
        {
          number: 6,
          title: "More reflexive verbs",
          rules: [],
          verbs: [
            { infinitive: "levantar-se", conjugation: "levanto-me", meaning: "I get up", form: "I" },
            { infinitive: "deitar-se", conjugation: "deito-me", meaning: "I go to bed", form: "I" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 7,
          title: "Family vocabulary",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "mãe", english: "mother" },
            { portuguese: "pai", english: "father" },
            { portuguese: "filho/filha", english: "son/daughter" },
            { portuguese: "irmão/irmã", english: "brother/sister" }
          ],
          vocabulary: []
        },
        {
          number: 8,
          title: "Possessives",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "meu/minha", english: "my" },
            { portuguese: "seu/sua", english: "your/his/her" },
            { portuguese: "nosso/nossa", english: "our" }
          ],
          vocabulary: []
        },
        {
          number: 9,
          title: "More time expressions",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "cedo", english: "early" },
            { portuguese: "manhã", english: "morning" },
            { portuguese: "noite", english: "night" },
            { portuguese: "boa noite", english: "good evening/night" }
          ],
          vocabulary: []
        },
        {
          number: 10,
          title: "Weather expressions",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "Está calor", english: "It's hot" },
            { portuguese: "Está frio", english: "It's cold" },
            { portuguese: "sol", english: "sun" },
            { portuguese: "chuva", english: "rain" }
          ],
          vocabulary: []
        },
        {
          number: 11,
          title: "Directions",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "direita", english: "right" },
            { portuguese: "esquerda", english: "left" },
            { portuguese: "rua", english: "street" },
            { portuguese: "perto", english: "near" },
            { portuguese: "longe", english: "far" }
          ],
          vocabulary: []
        },
        {
          number: 12,
          title: "Review",
          rules: [],
          verbs: [],
          phrases: [],
          vocabulary: []
        }
      ]
    },
    { // CD8
      cd: 8,
      tracks: [
        {
          number: 1,
          title: "Imperfect tense introduction",
          rules: [
            {
              pattern: "Imperfect (was doing): -ar = -ava, -er/-ir = -ia",
              examples: [
                { english: "I was buying", portuguese: "comprava" },
                { english: "I was seeing", portuguese: "via" }
              ]
            }
          ],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 2,
          title: "Imperfect you/he/she/it",
          rules: [],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 3,
          title: "Imperfect vs past",
          rules: [
            {
              pattern: "Use imperfect for repeated/habitual past actions",
              examples: [
                { english: "I used to buy", portuguese: "comprava" },
                { english: "I bought (once)", portuguese: "comprei" }
              ]
            }
          ],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 4,
          title: "More vocabulary",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "sempre", english: "always" },
            { portuguese: "nunca", english: "never" },
            { portuguese: "às vezes", english: "sometimes" }
          ],
          vocabulary: []
        },
        {
          number: 5,
          title: "Subjunctive introduction",
          rules: [],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 6,
          title: "Commands",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "Fale!", english: "Speak!" },
            { portuguese: "Venha!", english: "Come!" }
          ],
          vocabulary: []
        },
        {
          number: 7,
          title: "European vs Brazilian Portuguese",
          rules: [
            {
              pattern: "Pronunciation and usage differences",
              examples: [
                { english: "I don't understand you (European)", portuguese: "não te compreendo" },
                { english: "I don't understand you (Brazilian)", portuguese: "não compreendo você" }
              ]
            }
          ],
          verbs: [],
          phrases: [],
          vocabulary: []
        },
        {
          number: 8,
          title: "Final review",
          rules: [],
          verbs: [],
          phrases: [],
          vocabulary: []
        }
      ]
    }
  ],
  advanced: [
    // Placeholder for Advanced course CDs 9-12
    { cd: 9, tracks: [] },
    { cd: 10, tracks: [] },
    { cd: 11, tracks: [] },
    { cd: 12, tracks: [] }
  ],
  advanced: [
    { // Advanced CD1
      cd: 9,
      tracks: [
        {
          number: 1,
          title: "Command tense introduction",
          rules: [
            {
              pattern: "Command tense: switch tracks (-ar verbs use -e, -er/-ir verbs use -a)",
              examples: [
                { english: "buy the house! (polite)", portuguese: "compre a casa!" },
                { english: "don't buy it!", portuguese: "não o compre!" }
              ]
            }
          ],
          verbs: [
            { infinitive: "ligar", conjugation: "ligue", meaning: "call/ring! (command)", form: "you-command" }
          ],
          phrases: [
            { portuguese: "ligue-me", english: "call me!" },
            { portuguese: "não me ligue", english: "don't call me!" }
          ],
          vocabulary: []
        },
        {
          number: 2,
          title: "More command forms",
          rules: [],
          verbs: [
            { infinitive: "trazer", conjugation: "trago", meaning: "I bring", form: "I" },
            { infinitive: "trazer", conjugation: "traz", meaning: "you/he/she brings", form: "you/he/she/it" }
          ],
          phrases: [
            { portuguese: "algo", english: "something" },
            { portuguese: "trazes algo para mim?", english: "are you bringing something for me?" }
          ],
          vocabulary: []
        },
        {
          number: 3,
          title: "Irregular command forms",
          rules: [],
          verbs: [
            { infinitive: "fazer", conjugation: "faça", meaning: "do/make! (command)", form: "you-command" },
            { infinitive: "dizer", conjugation: "diga", meaning: "say/tell! (command)", form: "you-command" }
          ],
          phrases: [
            { portuguese: "faça-o agora!", english: "do it now!" },
            { portuguese: "diga-lhe", english: "tell him/her" }
          ],
          vocabulary: []
        },
        {
          number: 4,
          title: "To know (saber)",
          rules: [],
          verbs: [
            { infinitive: "saber", conjugation: "sei", meaning: "I know", form: "I" },
            { infinitive: "saber", conjugation: "sabe", meaning: "you/he/she knows", form: "you/he/she/it" },
            { infinitive: "saber", conjugation: "sabem", meaning: "they know", form: "they" }
          ],
          phrases: [
            { portuguese: "sabe-o", english: "you know it" },
            { portuguese: "sabe-lo?", english: "do you know it?" }
          ],
          vocabulary: []
        },
        {
          number: 5,
          title: "All and everything",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "todo", english: "all/every" },
            { portuguese: "tudo", english: "everything" },
            { portuguese: "sabem tudo", english: "they know everything" },
            { portuguese: "não sei nada", english: "I know nothing" }
          ],
          vocabulary: []
        },
        {
          number: 6,
          title: "To know - conhecer",
          rules: [],
          verbs: [
            { infinitive: "conhecer", conjugation: "conheço", meaning: "I know (person/place)", form: "I" }
          ],
          phrases: [
            { portuguese: "não o conheço", english: "I don't know him" },
            { portuguese: "não a conheço", english: "I don't know her" }
          ],
          vocabulary: []
        },
        {
          number: 7,
          title: "To stay",
          rules: [],
          verbs: [
            { infinitive: "ficar", conjugation: "fica", meaning: "you/he/she stays", form: "you/he/she/it" },
            { infinitive: "ficar", conjugation: "ficam", english: "they stay", form: "they" }
          ],
          phrases: [
            { portuguese: "em casa", english: "at home" },
            { portuguese: "uma semana", english: "a week" }
          ],
          vocabulary: []
        },
        {
          number: 8,
          title: "Possessive pronouns - my",
          rules: [
            {
              pattern: "Possessive pronouns agree with the noun: o meu (masc), a minha (fem)",
              examples: [
                { english: "my friend (male)", portuguese: "o meu amigo" },
                { english: "my friends (female)", portuguese: "as minhas amigas" }
              ]
            }
          ],
          verbs: [],
          phrases: [
            { portuguese: "o meu amigo", english: "my friend (male)" },
            { portuguese: "os meus amigos", english: "my friends" }
          ],
          vocabulary: []
        },
        {
          number: 9,
          title: "More command forms (nho verbs)",
          rules: [],
          verbs: [
            { infinitive: "pôr", conjugation: "ponho", meaning: "I put", form: "I" },
            { infinitive: "pôr", conjugation: "põe", meaning: "you/he/she puts", form: "you/he/she/it" }
          ],
          phrases: [
            { portuguese: "ponha-o aqui!", english: "put it here!" },
            { portuguese: "não o ponha aqui!", english: "don't put it here!" }
          ],
          vocabulary: []
        },
        {
          number: 10,
          title: "Can you?",
          rules: [],
          verbs: [
            { infinitive: "poder", conjugation: "pode", meaning: "you/he/she can", form: "you/he/she/it" },
            { infinitive: "poder", conjugation: "posso", meaning: "I can", form: "I" }
          ],
          phrases: [
            { portuguese: "pode?", english: "can you?" },
            { portuguese: "pode tê-lo pronto?", english: "can you have it ready?" }
          ],
          vocabulary: []
        }
      ]
    },
    { // Advanced CD2
      cd: 10,
      tracks: [
        {
          number: 1,
          title: "Your/his/her/their",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "o seu / a sua", english: "your/his/her/their" },
            { portuguese: "até", english: "until" },
            { portuguese: "até amanhã", english: "see you tomorrow" },
            { portuguese: "até à semana que vem", english: "until next week" }
          ],
          vocabulary: []
        },
        {
          number: 2,
          title: "Clarifiers (dele/dela)",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "o amigo dela", english: "her friend" },
            { portuguese: "os amigos deles", english: "their friends (male)" }
          ],
          vocabulary: []
        },
        {
          number: 3,
          title: "Your (informal - teu/tua)",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "o teu / a tua", english: "your (informal)" },
            { portuguese: "onde fica a tua casa?", english: "where is your house?" }
          ],
          vocabulary: []
        },
        {
          number: 4,
          title: "To go out",
          rules: [],
          verbs: [
            { infinitive: "sair", conjugation: "saio", meaning: "I leave/go out", form: "I" },
            { infinitive: "sair", conjugation: "sai", meaning: "you/he/she leaves", form: "you/he/she/it" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 5,
          title: "To put (põe/pões)",
          rules: [],
          verbs: [
            { infinitive: "pôr", conjugation: "pões", meaning: "you put (informal)", form: "you-informal" },
            { infinitive: "pôr", conjugation: "põem", meaning: "they put", form: "they" }
          ],
          phrases: [
            { portuguese: "porque que é que não o pões aqui?", english: "why don't you put it here?" }
          ],
          vocabulary: []
        },
        {
          number: 6,
          title: "Roberto commands",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "diz-me agora!", english: "tell me now! (informal)" },
            { portuguese: "vem comigo!", english: "come with me!" },
            { portuguese: "põe-no aqui!", english: "put it here!" }
          ],
          vocabulary: []
        },
        {
          number: 7,
          title: "Future tense introduction",
          rules: [
            {
              pattern: "Future tense: infinitive + -ei, -ás, -á, -emos, -ão",
              examples: [
                { english: "I will speak", portuguese: "falarei" },
                { english: "they will eat", portuguese: "comerão" },
                { english: "we will leave", portuguese: "partiremos" }
              ]
            }
          ],
          verbs: [
            { infinitive: "falar", conjugation: "falarei", meaning: "I will speak", form: "I-future" },
            { infinitive: "comer", conjugation: "comerão", meaning: "they will eat", form: "they-future" }
          ],
          phrases: [
            { portuguese: "para casa", english: "home/towards home" }
          ],
          vocabulary: []
        },
        {
          number: 8,
          title: "Future - irregular (fazer, dizer, trazer)",
          rules: [
            {
              pattern: "Irregular future: fazer/dizer/trazer drop -zer, add -rei, -rás, -rá",
              examples: [
                { english: "I will do", portuguese: "farei" },
                { english: "I will say", portuguese: "direi" },
                { english: "you will do (informal)", portuguese: "farás" }
              ]
            }
          ],
          verbs: [
            { infinitive: "fazer", conjugation: "farei", meaning: "I will do", form: "I-future" },
            { infinitive: "dizer", conjugation: "dirá", meaning: "he/she will say", form: "he/she/it-future" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 9,
          title: "Future - to have and to be",
          rules: [],
          verbs: [
            { infinitive: "ter", conjugation: "terão", meaning: "they will have", form: "they-future" },
            { infinitive: "ser", conjugation: "será", meaning: "it will be", form: "it-future" }
          ],
          phrases: [
            { portuguese: "será necessário", english: "it will be necessary" },
            { portuguese: "não o terão pronto", english: "they won't have it ready" }
          ],
          vocabulary: []
        },
        {
          number: 10,
          title: "To hope/wait",
          rules: [],
          verbs: [
            { infinitive: "esperar", conjugation: "esperarei", meaning: "I will wait", form: "I-future" }
          ],
          phrases: [
            { portuguese: "esperarei os teus amigos aqui", english: "I will wait for your friends here" }
          ],
          vocabulary: []
        }
      ]
    },
    { // Advanced CD3
      cd: 11,
      tracks: [
        {
          number: 1,
          title: "Conditional introduction",
          rules: [
            {
              pattern: "Conditional: infinitive + -ia, -ias, -ia, -íamos, -iam",
              examples: [
                { english: "I would speak", portuguese: "falaria" },
                { english: "you would buy", portuguese: "compraria" }
              ]
            }
          ],
          verbs: [
            { infinitive: "falar", conjugation: "falaria", meaning: "I would speak", form: "I-conditional" },
            { infinitive: "comprar", conjugation: "compraria", meaning: "I would buy", form: "I-conditional" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 2,
          title: "Conditional - irregular",
          rules: [],
          verbs: [
            { infinitive: "fazer", conjugation: "faria", meaning: "I would do", form: "I-conditional" },
            { infinitive: "dizer", conjugation: "diria", meaning: "I would say", form: "I-conditional" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 3,
          title: "Past tense introduction",
          rules: [
            {
              pattern: "Past tense: -ar verbs = -ei, -ou, -aram / -er/-ir verbs = -i, -eu, -eram",
              examples: [
                { english: "I spoke", portuguese: "falei" },
                { english: "he spoke", portuguese: "falou" },
                { english: "they spoke", portuguese: "falaram" }
              ]
            }
          ],
          verbs: [
            { infinitive: "falar", conjugation: "falei", meaning: "I spoke", form: "I-past" },
            { infinitive: "falar", conjugation: "falou", meaning: "he/she spoke", form: "he/she/it-past" }
          ],
          phrases: [
            { portuguese: "ontem", english: "yesterday" },
            { portuguese: "na semana passada", english: "last week" }
          ],
          vocabulary: []
        },
        {
          number: 4,
          title: "Past tense -er/-ir verbs",
          rules: [],
          verbs: [
            { infinitive: "comer", conjugation: "comi", meaning: "I ate", form: "I-past" },
            { infinitive: "comer", conjugation: "comeu", meaning: "he/she ate", form: "he/she/it-past" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 5,
          title: "Irregular past tense",
          rules: [],
          verbs: [
            { infinitive: "fazer", conjugation: "fiz", meaning: "I did", form: "I-past" },
            { infinitive: "fazer", conjugation: "fez", meaning: "he/she did", form: "he/she/it-past" },
            { infinitive: "ir", conjugation: "fui", meaning: "I went", form: "I-past" },
            { infinitive: "ir", conjugation: "foi", meaning: "he/she went", form: "he/she/it-past" }
          ],
          phrases: [],
          vocabulary: []
        }
      ]
    },
    { // Advanced CD4  
      cd: 12,
      tracks: [
        {
          number: 1,
          title: "Imperfect tense",
          rules: [
            {
              pattern: "Imperfect (was doing): -ar = -ava / -er/-ir = -ia",
              examples: [
                { english: "I was speaking", portuguese: "falava" },
                { english: "I was eating", portuguese: "comia" }
              ]
            }
          ],
          verbs: [
            { infinitive: "falar", conjugation: "falava", meaning: "I was speaking", form: "I-imperfect" },
            { infinitive: "comer", conjugation: "comia", meaning: "I was eating", form: "I-imperfect" }
          ],
          phrases: [],
          vocabulary: []
        },
        {
          number: 2,
          title: "Perfect vs Imperfect",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "quando era jovem", english: "when I was young" },
            { portuguese: "todos os dias", english: "every day" }
          ],
          vocabulary: []
        },
        {
          number: 3,
          title: "Reflexive verbs",
          rules: [],
          verbs: [
            { infinitive: "chamar-se", conjugation: "chamo-me", meaning: "I am called / my name is", form: "I" }
          ],
          phrases: [
            { portuguese: "como se chama?", english: "what's your name?" }
          ],
          vocabulary: []
        },
        {
          number: 4,
          title: "Advanced pronouns",
          rules: [],
          verbs: [],
          phrases: [
            { portuguese: "consigo", english: "with you(formal)/him/her/it" },
            { portuguese: "connosco", english: "with us" }
          ],
          vocabulary: []
        }
      ]
    }
  ]
};

// Word generation patterns for rule-based practice
const wordGenerationPatterns = {
  "ible_able": {
    englishSuffix: /(\w+)(ible|able)$/,
    portugueseSuffix: "ível",
    englishWords: [
      "visible", "invisible", "divisible", "flexible", "accessible", "responsible",
      "incredible", "edible", "legible", "intelligible", "reversible", "plausible",
      "capable", "notable", "remarkable", "suitable", "valuable", "reasonable",
      "agreeable", "preferable", "variable", "comparable", "tolerable", "adorable"
    ]
  },
  "ent_ant": {
    englishSuffix: /(\w+)(ent|ant)$/,
    portugueseSuffix: "ente",
    englishWords: [
      "evident", "urgent", "patient", "violent", "permanent", "present",
      "absent", "convenient", "intelligent", "excellent", "sufficient",
      "elegant", "arrogant", "brilliant", "constant", "distant", "instant",
      "pleasant", "relevant", "significant", "tolerant", "abundant"
    ]
  },
  "ence_ance": {
    englishSuffix: /(\w+)(ence|ance)$/,
    portugueseSuffix: "ência",
    englishWords: [
      "evidence", "patience", "violence", "permanence", "presence",
      "absence", "convenience", "intelligence", "excellence", "elegance",
      "arrogance", "brilliance", "constance", "instance", "relevance",
      "significance", "tolerance", "abundance", "experience", "conference"
    ]
  },
  "tion": {
    englishSuffix: /(\w+)tion$/,
    portugueseSuffix: "ção",
    englishWords: [
      "direction", "position", "situation", "condition", "relation",
      "observation", "conversation", "reservation", "operation", "information",
      "education", "solution", "nation", "creation", "declaration", "preparation"
    ]
  },
  "ly": {
    englishSuffix: /(\w+)ly$/,
    portugueseSuffix: "mente",
    englishWords: [
      "completely", "directly", "exactly", "finally", "generally",
      "normally", "personally", "possibly", "probably", "recently",
      "simply", "specially", "totally", "usually", "absolutely"
    ]
  }
};
