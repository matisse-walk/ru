# -*- coding: utf-8 -*-
"""Build the Russian site from the English one: merges ru_texts.py onto content.js, localises the interface
strings in index.html, app.js, dinner.html, credits.html and swaps fonts for Cyrillic ones. Idempotent: it
always starts from tools/en/ (a pristine copy of the English files)."""
import json, re, subprocess, os, sys, shutil
sys.path.insert(0, os.path.dirname(__file__))
from ru_texts import STATIONS, DINNER, POIS, UI_JS

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EN = os.path.join(ROOT, 'tools', 'en')
MINUTES = json.load(open(os.path.join(ROOT, 'tools', 'minutes.json'))) if os.path.exists(os.path.join(ROOT, 'tools', 'minutes.json')) else {}

def rd(p): return open(p, encoding='utf-8').read()
def wr(p, s): open(p, 'w', encoding='utf-8').write(s)

# 1. content.js ------------------------------------------------------------------------------------------
js = subprocess.run(['node', '-e', "global.window={};require(process.argv[1]);console.log(JSON.stringify(window.WALK))", os.path.join(EN, 'content.js')],
                    capture_output=True, text=True, encoding='utf-8', check=True).stdout
W = json.loads(js)
for s in W['stations']:
    ru = STATIONS[s['id']]
    mins = MINUTES.get(s['id'], 4)
    for k in ('title', 'place', 'leg', 'stand', 'story', 'fact', 'time'):
        if k in ru: s[k] = ru[k]
    s['audioLabel'] = ru['audioLabel'].replace('{m}', str(mins))
    s['captions'] = ru['captions']; s['quiz'] = ru['quiz']
    s['then']['credit'] = ru['then']
    for m, cr in zip(s.get('more', []), ru.get('more', [])): m['credit'] = cr
    assert len(s['captions']) == 6, s['id']
    assert len(s.get('more', [])) == len(ru.get('more', [])), s['id']
for p in W['pois']:
    name, sub, text, credit = POIS[p['id']]
    p['name'], p['sub'], p['text'] = name, sub, text
    if 'credit' in p:
        p['credit'] = credit
        # keep every Latin-script name of the English credit (photographers, collections) intact
        for w in re.findall(r'[A-Za-z][A-Za-z0-9]{4,}', p['credit']):
            pass
W['dinner'] = [{'q': q, 'a': a} for q, a in DINNER]
W['title'] = 'Монпарнас Матисса'; W['date'] = 'Среда, 21 октября 2026'
head = rd(os.path.join(EN, 'content.js')).split('window.WALK =')[0]
wr(os.path.join(ROOT, 'content.js'), "/* Русская версия: тексты для детей, те же факты. Собрано tools/build_ru.py. */\nwindow.WALK = " + json.dumps(W, ensure_ascii=False, indent=1) + ";\n")

# 2. app.js ------------------------------------------------------------------------------------------------
a = rd(os.path.join(EN, 'app.js'))
for en, ru in UI_JS.items():
    if en not in a: print('WARN not in app.js:', en)
    a = a.replace(en, ru)
wr(os.path.join(ROOT, 'app.js'), a)

# 3. index.html --------------------------------------------------------------------------------------------
h = rd(os.path.join(EN, 'index.html'))
pairs = [
 ('<html lang="en">', '<html lang="ru">'),
 ("<title>Matisse's Montparnasse</title>", '<title>Монпарнас Матисса</title>'),
 ('A walk through the Paris of Henri Matisse and his friends, as a comic book you walk through. Montparnasse, 21 October 2026.', 'Прогулка по Парижу Анри Матисса и его друзей: комикс, по которому можно пройти пешком. Монпарнас, 21 октября 2026.'),
 ("Matisse's<br>Montparnasse</a>", 'Монпарнас<br>Матисса</a>'),
 ('aria-label="Stickers collected"', 'aria-label="Собранные наклейки"'),
 ('aria-controls="menu">Menu</button>', 'aria-controls="menu">Меню</button>'),
 ('<a href="#" data-open="0">Matisse in sixty seconds</a>', '<a href="#" data-open="0">Матисс за одну минуту</a>'),
 ('<a href="#" id="locateLink">Where am I?</a>', '<a href="#" id="locateLink">Где я?</a>'),
 ("<a href=\"#\" id=\"allParis\">All of Matisse's Paris</a>", '<a href="#" id="allParis">Весь Париж Матисса</a>'),
 ('<a href="dinner.html">The dinner quiz</a>', '<a href="dinner.html">Викторина за ужином</a>'),
 ('  <a href="reading.html">Reading version (no map)</a>\n', ''),
 ('<a href="credits.html">Credits</a>', '<a href="credits.html">Кто это сделал</a>'),
 ('  <a href="booklet/matisse-montparnasse.pdf">The booklet (PDF, 21 MB)</a>\n', '  <a href="https://matisse-walk.github.io/">English version</a>\n'),
 ('aria-label="Map of the walk"', 'aria-label="Карта прогулки"'),
 ('Wednesday 21 October 2026 · a comic book you walk through', 'Среда, 21 октября 2026 · комикс, по которому можно пройти'),
 ("<h1>Matisse's<br>Montparnasse</h1>", '<h1>Монпарнас<br>Матисса</h1>'),
 ('Five stops, five stories, ninety minutes. The map follows you; tap the sticker nearest you, press play, and read the strip as you stand there.', 'Пять остановок, пять историй, полтора часа. Карта идёт за тобой: нажми на ближайшую наклейку, включи рассказ и читай комикс прямо на месте.'),
 ('>Open the map</button>', '>Открыть карту</button>'),
 ('>Who was Matisse?</button>', '>Кто такой Матисс?</button>'),
 ('aria-label="Close">×</button>', 'aria-label="Закрыть">×</button>'),
 ('aria-label="Previous panel">‹</button>', 'aria-label="Прошлая картинка">‹</button>'),
 ('aria-label="Next panel">›</button>', 'aria-label="Следующая картинка">›</button>'),
 ('Look up</button>', 'Смотри</button>'),
 ('aria-label="Then and now"', 'aria-label="Тогда и сейчас"'),
 ('‹ Back to the strip', '‹ Назад к комиксу'),
 ('aria-label="Play">▶</button>', 'aria-label="Играть">▶</button>'),
 ('id="pLabel">Listen</div>', 'id="pLabel">Слушай</div>'),
 ('aria-label="Skip 15 seconds">+15</button>', 'aria-label="Вперёд на 15 секунд">+15</button>'),
 ('<span class="eyebrow">Fun fact</span>', '<span class="eyebrow">А знаешь ли ты</span>'),
 ('‹ Previous</button>', '‹ Назад</button>'),
 ('Next stop ›</button>', 'Дальше ›</button>'),
 ('family=Fraunces:opsz,wght@9..144,900&family=Karla:wght@400;700&family=Patrick+Hand&display=swap', 'family=Playfair+Display:wght@900&family=Source+Sans+3:wght@400;700&family=Neucha&display=swap&subset=cyrillic'),
]
for old, new in pairs:
    if old not in h: print('WARN not in index.html:', old[:60])
    h = h.replace(old, new)
wr(os.path.join(ROOT, 'index.html'), h)

# 4. app.css, style.css: Cyrillic fonts --------------------------------------------------------------------
for f in ('app.css', 'style.css'):
    c = rd(os.path.join(EN, f))
    c = c.replace('"Fraunces", Georgia, serif', '"Playfair Display", Georgia, serif').replace('"Fraunces", "Playfair Display", Georgia, serif', '"Playfair Display", Georgia, serif')
    c = c.replace('"Karla", "Segoe UI", Helvetica, Arial, sans-serif', '"Source Sans 3", "Segoe UI", Helvetica, Arial, sans-serif')
    c = c.replace('"Patrick Hand", "Segoe Print", cursive', '"Neucha", "Segoe Print", cursive').replace('"Patrick Hand", "Comic Neue", "Segoe Print", cursive', '"Neucha", "Segoe Print", cursive')
    wr(os.path.join(ROOT, f), c)

# 5. dinner.html --------------------------------------------------------------------------------------------
d = rd(os.path.join(EN, 'dinner.html'))
pairs = [
 ('mm.stickers.v2', 'mm.stickers.ru'), ('<html lang="en">', '<html lang="ru">'), ('<title>The dinner quiz</title>', '<title>Викторина за ужином</title>'),
 ('Six questions from the walk, for the tables at dinner.', 'Шесть вопросов о прогулке, для столов за ужином.'),
 ('family=Fraunces:opsz,wght@9..144,900&family=Karla:wght@400;700&family=Patrick+Hand&display=swap', 'family=Playfair+Display:wght@900&family=Source+Sans+3:wght@400;700&family=Neucha&display=swap&subset=cyrillic'),
 ('>Dinner</div><h1>The quiz, by table</h1><p class="meta">Six questions from the walk. Answers hide under each question; agree at the table first.</p>', '>Ужин</div><h1>Викторина по столам</h1><p class="meta">Шесть вопросов о прогулке. Ответ спрятан под каждым вопросом: сначала договоритесь за столом.</p>'),
 ("Open each stop's strip to the last panel to collect its sticker. Five stickers unlock the answers here.", 'Дочитай комикс на каждой остановке до последней картинки, чтобы получить наклейку. Пять наклеек открывают ответы.'),
 ('<h2>Draw with scissors</h2>', '<h2>Рисуем ножницами</h2>'),
 ('An idea for another evening, when there are enough scissors to go round: coloured paper on every table, ten minutes, one cut-out per table, no pencils, vote by applause. Pin the winner on the wall, over a stain if you can find one.', 'Идея для другого вечера, когда хватит ножниц на всех: цветная бумага на каждом столе, десять минут, одна вырезка на стол, никаких карандашей. Выбираем лучшую аплодисментами и прикалываем на стену, лучше всего на пятно.'),
 ('Back to the map', 'Назад к карте'),
 ("'All five stickers collected. Answers are open.'", "'Все пять наклеек собраны. Ответы открыты.'"),
 ("' You have ' + n + ' of 5.'", "' У тебя ' + n + ' из 5.'"),
 ("'Collect all five stickers to see the answer.'", "'Собери все пять наклеек, чтобы увидеть ответ.'"),
 ('A walk for the MATISSE project. Concept, direction and validation: Andrey Sadovykh. <a href="credits.html">Credits</a>.', 'Прогулка для проекта MATISSE. Идея, концепция и проверка: Андрей Садовых. <a href="credits.html">Кто это сделал</a>.'),
]
for old, new in pairs:
    if old not in d: print('WARN not in dinner.html:', old[:60])
    d = d.replace(old, new)
wr(os.path.join(ROOT, 'dinner.html'), d)
print('built; minutes:', MINUTES)
