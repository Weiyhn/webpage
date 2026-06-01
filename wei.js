(function () {

    if (document.body.classList.contains('welcome-only-body')) return;

    var knowledgeBase = [
        {
            keywords: ['who', 'herwin', 'tell', 'about', 'yourself', 'name', 'are you'],
            question: 'Who is Herwin?',
            answer: "Herwin D. Datinguinoo is a 19-year-old web developer from Dupax Del Norte, currently studying Web Mobile Development at NVSU (Nueva Vizcaya State University). He's passionate about turning ideas into functional designs using HTML, CSS, JavaScript, and Java."
        },
        {
            keywords: ['age', 'how old', 'years old'],
            question: 'How old is Herwin?',
            answer: 'Herwin is 19 years old.'
        },
        {
            keywords: ['birthday', 'birthdate', 'born', 'july'],
            question: 'When is Herwin\'s birthday?',
            answer: 'He was born on July 23, 2006.'
        },
        {
            keywords: ['place', 'birth', 'born', 'dupax', 'where from', 'hometown'],
            question: 'Where was Herwin born?',
            answer: 'He was born in Dupax Del Norte, Nueva Vizcaya.'
        },
        {
            keywords: ['status', 'single', 'relationship', 'girlfriend'],
            question: 'What is Herwin\'s status?',
            answer: 'Herwin is currently Single.'
        },
        {
            keywords: ['study', 'school', 'university', 'college', 'nvsu', 'education', 'student'],
            question: 'Where does Herwin study?',
            answer: 'He is currently in his 2nd year at NVSU (Nueva Vizcaya State University).'
        },
        {
            keywords: ['course', 'major', 'web', 'mobile', 'development'],
            question: 'What course is Herwin taking?',
            answer: 'He is majoring in Web Mobile Development.'
        },
        {
            keywords: ['rotc', 'military', 'graduate', 'army', 'training'],
            question: 'Did Herwin join ROTC?',
            answer: 'Yes! Herwin is an ROTC Graduate. 🎖️'
        },
        {
            keywords: ['athlete', 'sports', 'high school', 'soccer', 'football'],
            question: 'Was Herwin an athlete?',
            answer: 'Yes, he was an athlete during his high school years! He enjoys playing soccer.'
        },
        {
            keywords: ['skill', 'skills', 'java', 'javascript', 'html', 'json', 'know', 'technologies'],
            question: 'What are Herwin\'s skills?',
            answer: 'His technical skills include: Java, JavaScript, JSON, and HTML. He also has experience with CSS and is continuously learning new tools and frameworks.'
        },
        {
            keywords: ['certificate', 'certification', 'cert', 'iot', 'emerging', 'trends', 'machines'],
            question: 'What certificates does Herwin have?',
            answer: 'He has completed certificates in: Internet of Things (IoT), Emerging Technologies, Current Trends in IT Research, and The Rise of the Machines.'
        },
        {
            keywords: ['goal', 'dream', 'career', 'future', 'system engineer', 'developer', 'aspire', 'ambition'],
            question: 'What are Herwin\'s career goals?',
            answer: 'His goal is to become a versatile System Engineer or Web Developer, turning innovative ideas into real, user-friendly applications.'
        },
        {
            keywords: ['motto', 'quote', 'ablaze', 'heart', 'set'],
            question: 'What is Herwin\'s motto?',
            answer: '"Set your heart ablaze." — a quote he lives by. 🔥'
        },
        {
            keywords: ['hobby', 'hobbies', 'interest', 'free time', 'music', 'guitar', 'sing', 'instrument'],
            question: 'What are Herwin\'s hobbies?',
            answer: 'He enjoys playing guitar, singing, and playing soccer. He has a hidden talent for music and loves covering songs!'
        },
        {
            keywords: ['project', 'build', 'made', 'create', 'tictactoe', 'map', 'prototype'],
            question: 'What projects has Herwin built?',
            answer: 'He has built: (1) TicTacToe — a game built with HTML, CSS, and JavaScript during Senior High School, and (2) Interactive Map — a webpage prototype showcasing the INTE and CS Building map.'
        },
        {
            keywords: ['family', 'father', 'mother', 'sister', 'parent', 'papa', 'mama', 'francess', 'sibling'],
            question: 'Tell me about Herwin\'s family',
            answer: 'Herwin\'s father works abroad, his mother is at home, and he has a younger sister named Francess. He cherishes his family deeply.'
        },
        {
            keywords: ['friend', 'friends', 'cof', 'childhood', 'bff', 'circle', 'bond'],
            question: 'Who are Herwin\'s friends?',
            answer: 'Herwin has a close childhood best friend, his COF (Circle of Friends) from college, and his ROTC family. They\'ve shared many memorable moments together — from grand balls to Christmas bonding!'
        },
        {
            keywords: ['contact', 'email', 'reach', 'message', 'mail'],
            question: 'How can I contact Herwin?',
            answer: 'You can email him at winstido@gmail.com or reach out through his GitHub.'
        },
        {
            keywords: ['github', 'git', 'code', 'profile', 'repository'],
            question: 'What is Herwin\'s GitHub?',
            answer: 'His GitHub username is win-stdio. Check out his projects at github.com/win-stdio.'
        },
        {
            keywords: ['hello', 'hi', 'hey', 'wei', 'sup', 'yo'],
            question: 'Say hello!',
            answer: 'Hey there! 👋 I\'m Wei, your personal guide to everything about Herwin. Ask me anything — his skills, projects, hobbies, or fun facts!'
        },
        {
            keywords: ['thank', 'thanks', 'appreciate', 'ty'],
            question: '',
            answer: 'You\'re welcome! 😊 If you have more questions about Herwin, just ask!'
        },
        {
            keywords: ['bye', 'goodbye', 'see you', 'later', 'farewell', 'exit'],
            question: '',
            answer: 'Goodbye! 👋 Thanks for stopping by. Come back anytime if you want to know more about Herwin!'
        },
        {
            keywords: ['fun', 'fact', 'interesting', 'random'],
            question: 'Tell me a fun fact!',
            answer: 'Did you know? Herwin\'s motto "Set your heart ablaze" is inspired by Kyojuro Rengoku from Demon Slayer! He also has a hidden talent for playing guitar and singing. 🎸'
        },
        {
            keywords: ['dance', 'contest', 'grand ball', 'win', 'wil'],
            question: 'Did Herwin join any dance contests?',
            answer: 'Yes! Herwin and his friend Wil joined a dance contest and won 3rd place! Their COF was there to support them all the way. 🕺'
        },
        {
            keywords: ['album', 'picture', 'photo', 'favorite', 'polaroid'],
            question: 'Does Herwin have a photo album?',
            answer: 'Yes! Check out the FAVORITE page to see his polaroid-style album with pictures of his family and friends. It even has a cool lightbox viewer! 📸'
        }
    ];

    var defaultResponse = "Hmm, I don't have an answer for that yet. Try asking about his skills, projects, hobbies, or click one of the suggestions below!";

    function findBestMatch(input) {
        input = input.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
        if (!input) return null;

        var inputWords = input.split(/\s+/);
        var best = null;
        var bestScore = 0;

        for (var i = 0; i < knowledgeBase.length; i++) {
            var entry = knowledgeBase[i];
            var score = 0;

            for (var j = 0; j < entry.keywords.length; j++) {
                var kw = entry.keywords[j].toLowerCase();
                if (input.indexOf(kw) !== -1) {
                    score += kw.split(/\s+/).length;
                }
            }

            for (var k = 0; k < inputWords.length; k++) {
                var word = inputWords[k];
                if (word.length < 3) continue;
                for (var l = 0; l < entry.keywords.length; l++) {
                    var kw2 = entry.keywords[l].toLowerCase();
                    if (kw2.indexOf(word) !== -1 || word.indexOf(kw2) !== -1) {
                        score += 1;
                    }
                }
            }

            if (score > bestScore) {
                bestScore = score;
                best = entry;
            }
        }

        return bestScore >= 2 ? best : null;
    }

    function createChatUI() {
        if (document.getElementById('wei-btn')) return;

        var btn = document.createElement('button');
        btn.id = 'wei-btn';
        btn.innerHTML = '<i class="bx bx-message-dots"></i>';
        btn.setAttribute('aria-label', 'Ask Wei about Herwin');
        document.body.appendChild(btn);

        var popup = document.createElement('div');
        popup.id = 'wei-popup';
        popup.innerHTML =
            '<div id="wei-header">' +
                '<span><i class="bx bx-bot"></i> Ask Wei</span>' +
                '<button id="wei-close" aria-label="Close chat">&times;</button>' +
            '</div>' +
            '<div id="wei-messages"></div>' +
            '<div id="wei-suggestions"></div>' +
            '<div id="wei-input-area">' +
                '<input id="wei-input" type="text" placeholder="Ask about Herwin..." autocomplete="off">' +
                '<button id="wei-send" aria-label="Send"><i class="bx bx-send"></i></button>' +
            '</div>';

        document.body.appendChild(popup);

        var messages = document.getElementById('wei-messages');
        var suggestions = document.getElementById('wei-suggestions');
        var input = document.getElementById('wei-input');
        var sendBtn = document.getElementById('wei-send');
        var closeBtn = document.getElementById('wei-close');

        var initialSuggestions = [
            'Who is Herwin?',
            'What are his skills?',
            'What are his hobbies?',
            'Tell me about his family',
            'What projects has he made?'
        ];

        function addMessage(text, sender) {
            var div = document.createElement('div');
            div.className = 'wei-msg ' + sender;
            div.textContent = text;
            messages.appendChild(div);
            messages.scrollTop = messages.scrollHeight;
        }

        function showTyping() {
            var typing = document.createElement('div');
            typing.className = 'wei-typing';
            typing.id = 'wei-typing';
            typing.innerHTML = '<span></span><span></span><span></span>';
            messages.appendChild(typing);
            messages.scrollTop = messages.scrollHeight;
        }

        function hideTyping() {
            var typing = document.getElementById('wei-typing');
            if (typing) typing.remove();
        }

        function showSuggestions(list) {
            suggestions.innerHTML = '';
            for (var i = 0; i < list.length; i++) {
                var chip = document.createElement('button');
                chip.className = 'wei-chip';
                chip.textContent = list[i];
                chip.addEventListener('click', function () {
                    var text = this.textContent;
                    handleUserMessage(text);
                });
                suggestions.appendChild(chip);
            }
        }

        function handleUserMessage(text) {
            if (!text.trim()) return;
            input.value = '';
            suggestions.innerHTML = '';
            addMessage(text, 'user');
            showTyping();

            setTimeout(function () {
                hideTyping();
                var match = findBestMatch(text);
                var reply = match ? match.answer : defaultResponse;
                addMessage(reply, 'bot');

                if (match && match.question) {
                    var related = [];
                    for (var i = 0; i < initialSuggestions.length; i++) {
                        if (initialSuggestions[i] !== match.question && related.length < 3) {
                            related.push(initialSuggestions[i]);
                        }
                    }
                    if (related.length > 0) showSuggestions(related);
                } else {
                    showSuggestions(initialSuggestions);
                }
            }, 600 + Math.random() * 400);
        }

        function toggleChat(open) {
            if (open === undefined) {
                popup.classList.toggle('open');
            } else if (open) {
                popup.classList.add('open');
            } else {
                popup.classList.remove('open');
            }

            if (popup.classList.contains('open')) {
                input.focus();
                if (!messages.hasChildNodes()) {
                    addMessage('Hey there! 👋 I\'m Wei. Ask me anything about Herwin — his skills, projects, hobbies, or fun facts!', 'bot');
                    showSuggestions(initialSuggestions);
                }
            }
        }

        btn.addEventListener('click', function () { toggleChat(); });
        closeBtn.addEventListener('click', function () { toggleChat(false); });

        sendBtn.addEventListener('click', function () {
            handleUserMessage(input.value);
        });

        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleUserMessage(input.value);
            }
        });

        popup.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createChatUI);
    } else {
        createChatUI();
    }

})();
