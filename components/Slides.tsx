import React from 'react';
import { SlideProps } from '../types';
import { SectionTitle, Card, SlideHeader, MetricCard, WDLogo, Tag } from './UI';
import {
  Brain, Terminal, FolderOpen, Zap, Plug,
  Search, Settings, BarChart3,
  ArrowRight, CheckCircle2, MessageSquare, FileText,
  Calendar, Globe, Database, Sparkles,
  Monitor, Coffee, Table2, TrendingUp,
  BookOpen, Lightbulb, Bot, Layers, Users, Target
} from 'lucide-react';

const TOTAL = 16;

/* ═══════════════════════════════════════════════════════════
   SLIDE 1: Title
   ═══════════════════════════════════════════════════════════ */
const SlideTitle: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full lime-gradient-bg flex flex-col p-10 md:p-14 pb-24 overflow-hidden">
    {isActive && (
      <>
        <div className="anim-fade-up">
          <WDLogo className="h-8 md:h-10" />
        </div>

        <div className="flex-1 flex items-center">
          <h1 className="font-display text-[5.5rem] md:text-[10rem] leading-[0.85] uppercase text-wd-dark tracking-tight anim-fade-up-d1 w-full">
            ИИ-агенты<br/>и автоматизация
          </h1>
        </div>

        <div className="flex gap-12 text-sm anim-fade-up-d3 mt-4">
          <div><span className="text-black/40 text-xs">Программа:</span><br/><span className="font-bold">Обучение для операционного офиса</span></div>
          <div><span className="text-black/40 text-xs">Для:</span><br/><span className="font-bold">TashkentCity Mall</span></div>
          <div><span className="text-black/40 text-xs">Спикер:</span><br/><span className="font-bold">Павел Панферов, CDTO</span></div>
          <div><span className="text-black/40 text-xs">Дата:</span><br/><span className="font-bold">9 апреля 2026</span></div>
        </div>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 2: Давайте знакомиться
   ═══════════════════════════════════════════════════════════ */
const SlideIntro: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col px-14 md:px-20 pb-20 pt-10 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Знакомство" slideNum={2} total={TOTAL} />
        <SectionTitle className="mb-8 anim-fade-up">Давайте<br/>знакомиться</SectionTitle>

        <div className="flex gap-10 flex-1">
          {/* Left: Photo + Info */}
          <div className="w-[340px] flex flex-col flex-shrink-0 anim-fade-left">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-[280px] h-[320px] relative mx-auto">
              <img src={`${import.meta.env.BASE_URL}pavel-photo.jpg`} alt="Павел Панферов" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                <h3 className="text-2xl font-bold text-white">Павел Панферов</h3>
                <p className="text-sm text-white/80 font-bold mt-1">CDTO WE DIGITAL</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {[
                "CDTO We Digital — топ-1 агентство ЦА",
                "Сооснователь AI Lab",
                "Тренер ALPHA по AI",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-lg text-wd-gray">
                  <ArrowRight size={18} className="text-wd-dark flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Audience interaction */}
          <div className="flex-1 flex flex-col gap-6 anim-fade-right">
            <Card className="bg-wd-lime/15 border-wd-lime/30 flex-shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <Target size={24} className="text-wd-dark" />
                <h3 className="text-xl font-bold text-wd-dark">Цель на сегодня</h3>
              </div>
              <p className="text-lg text-wd-gray leading-relaxed">Понять разницу между AI-чатом и AI-агентом. Научиться использовать агентов для автоматизации рабочих задач.</p>
            </Card>

            <Card className="bg-violet-50 border-violet-200 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <Users size={24} className="text-violet-600" />
                <h3 className="text-xl font-bold text-wd-dark">А теперь про вас</h3>
              </div>
              <div className="space-y-4 flex-1">
                {[
                  "Кто вы? Чем занимаетесь?",
                  "Какими AI-инструментами пользуетесь?",
                  "Что хотите автоматизировать первым?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-violet-100">
                    <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center text-lg text-violet-600 font-bold flex-shrink-0">{i+1}</div>
                    <p className="text-lg text-wd-dark font-medium mt-1">{q}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 3: Зачем это вам
   ═══════════════════════════════════════════════════════════ */
const SlideWhy: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center px-14 md:px-20 pb-20 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Контекст" slideNum={2} total={TOTAL} />
        <SectionTitle className="mb-10 anim-fade-up">Почему это<br/>важно сейчас</SectionTitle>

        <div className="grid grid-cols-3 gap-8 mb-10">
          <MetricCard value="80%" label="рутинных задач можно автоматизировать" accent delay="0.1s" />
          <MetricCard value="x3" label="ускорение работы с документами и данными" delay="0.2s" />
          <MetricCard value="2026" label="год, когда AI стал рабочим инструментом" delay="0.3s" />
        </div>

        <div className="p-6 bg-wd-dark text-white rounded-2xl anim-fade-up-d4">
          <p className="text-xl font-medium leading-relaxed">
            <Sparkles size={22} className="inline mr-3 text-wd-lime" />
            AI перешёл от «поболтать в чате» к полноценному рабочему помощнику, который читает файлы, работает с таблицами и подключается к вашим системам.
          </p>
        </div>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 3: Чат vs Агент
   ═══════════════════════════════════════════════════════════ */
const SlideChatVsAgent: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col px-14 md:px-20 pb-20 pt-10 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Ключевое" slideNum={3} total={TOTAL} lime />
        <SectionTitle className="mb-10 anim-fade-up">Чат vs Агент</SectionTitle>

        <div className="flex gap-8 flex-1">
          {/* Chat */}
          <div className="flex-1 anim-fade-left">
            <div className="h-full rounded-2xl border-2 border-gray-200 p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <MessageSquare size={28} className="text-gray-500" />
                </div>
                <h3 className="font-display text-4xl uppercase text-wd-dark">Чат</h3>
              </div>
              <div className="space-y-5 flex-1">
                {[
                  "Забывает всё после закрытия окна",
                  "Живёт только внутри браузера",
                  "Не видит ваши файлы и папки",
                  "Одна задача за раз",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-500 text-sm font-bold">-</span>
                    </div>
                    <p className="text-lg text-wd-gray leading-snug">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-base text-wd-muted italic">ChatGPT, Claude.ai, Gemini в браузере</p>
              </div>
            </div>
          </div>

          {/* Agent */}
          <div className="flex-1 anim-fade-right">
            <div className="h-full rounded-2xl border-2 border-wd-dark p-8 flex flex-col bg-wd-dark text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-wd-lime/20 flex items-center justify-center">
                  <Bot size={28} className="text-wd-lime" />
                </div>
                <h3 className="font-display text-4xl uppercase text-white">Агент</h3>
              </div>
              <div className="space-y-5 flex-1">
                {[
                  "Помнит контекст между сессиями",
                  "Работает с файлами на вашем ПК",
                  "Создаёт папки, документы, таблицы",
                  "Выполняет сложные задачи автономно",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-wd-lime/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={16} className="text-wd-lime" />
                    </div>
                    <p className="text-lg text-gray-200 leading-snug">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-xl">
                <p className="text-base text-wd-lime font-semibold">Claude Code / Cowork / Codex</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 4: Возможности агента
   ═══════════════════════════════════════════════════════════ */
const SlideAgentPowers: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col px-14 md:px-20 pb-20 pt-10 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Возможности" slideNum={4} total={TOTAL} />
        <SectionTitle className="mb-10 anim-fade-up">Что умеет агент</SectionTitle>

        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: <FolderOpen size={32} />, title: "Файлы и папки", desc: "Читает, создаёт и редактирует документы прямо на вашем компьютере", bg: "bg-blue-50", border: "border-blue-200", iconColor: "text-blue-600" },
            { icon: <Globe size={32} />, title: "Управляет браузером", desc: "Открывает сайты, заполняет формы, собирает данные", bg: "bg-green-50", border: "border-green-200", iconColor: "text-green-600" },
            { icon: <Layers size={32} />, title: "Долгие задачи", desc: "Работает автономно 10-30 минут над сложными проектами", bg: "bg-violet-50", border: "border-violet-200", iconColor: "text-violet-600" },
            { icon: <Plug size={32} />, title: "Интеграции", desc: "Подключается к Bitrix, Google Sheets, Calendar, Telegram", bg: "bg-orange-50", border: "border-orange-200", iconColor: "text-orange-600" },
            { icon: <Brain size={32} />, title: "Помнит контекст", desc: "CLAUDE.md — файл с вашими данными, ролью и задачами", bg: "bg-pink-50", border: "border-pink-200", iconColor: "text-pink-600" },
            { icon: <Zap size={32} />, title: "Параллельная работа", desc: "Запускает несколько подзадач одновременно", bg: "bg-cyan-50", border: "border-cyan-200", iconColor: "text-cyan-600" },
          ].map((item, i) => (
            <div key={i} className={`${item.bg} ${item.border} border rounded-2xl p-7 anim-fade-up`} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className={`${item.iconColor} mb-4`}>{item.icon}</div>
              <h3 className="font-bold text-xl text-wd-dark mb-2">{item.title}</h3>
              <p className="text-base text-wd-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 5: CLAUDE.md — персональная память
   ═══════════════════════════════════════════════════════════ */
const SlideClaudeMd: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col px-14 md:px-20 pb-20 pt-10 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Память" slideNum={5} total={TOTAL} lime />
        <SectionTitle className="mb-2 anim-fade-up">CLAUDE.md</SectionTitle>
        <p className="text-wd-gray text-xl mb-8 anim-fade-up-d1">Персональная память AI-агента</p>

        <div className="flex gap-10 flex-1">
          <div className="flex-1 anim-fade-left">
            <div className="code-block p-6 h-full text-base leading-relaxed">
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-700">
                <FileText size={18} className="text-wd-lime" />
                <span className="font-bold text-white text-lg">CLAUDE.md</span>
              </div>
              <pre className="whitespace-pre-wrap text-[15px] leading-7">
<span className="code-comment"># Мой профиль</span>
{'\n\n'}
<span className="code-keyword">## Кто я</span>
{'\n'}Менеджер операционного офиса TCM
{'\n'}Отвечаю за аренду и работу с арендаторами
{'\n\n'}
<span className="code-keyword">## Мои задачи</span>
{'\n'}<span className="code-string">- Еженедельные отчёты по заполняемости</span>
{'\n'}<span className="code-string">- Коммуникация с арендаторами</span>
{'\n'}<span className="code-string">- Подготовка договоров и КП</span>
{'\n\n'}
<span className="code-keyword">## Стиль</span>
{'\n'}Кратко, по делу, таблицами
              </pre>
            </div>
          </div>

          <div className="w-[420px] space-y-6 anim-fade-right">
            <Card accent>
              <h3 className="font-bold text-xl mb-2">Что это даёт?</h3>
              <p className="text-base text-wd-gray leading-relaxed">AI читает этот файл при каждом запуске. Знает вашу роль, задачи, контекст. Отвечает сразу по делу.</p>
            </Card>
            <Card>
              <h3 className="font-bold text-lg mb-3 text-red-500">Без CLAUDE.md</h3>
              <p className="text-base text-wd-gray italic">"Подготовь отчёт по заполняемости"</p>
              <p className="text-base text-red-500 mt-2">Общий шаблон из интернета</p>
            </Card>
            <Card>
              <h3 className="font-bold text-lg mb-3 text-green-600">С CLAUDE.md</h3>
              <p className="text-base text-wd-gray italic">"Подготовь отчёт по заполняемости"</p>
              <p className="text-base text-green-600 mt-2">Отчёт по вашему формату, с нужными метриками и данными за неделю</p>
            </Card>
          </div>
        </div>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 6: Skills — /команды
   ═══════════════════════════════════════════════════════════ */
const SlideSkills: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col px-14 md:px-20 pb-20 pt-10 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Автоматизация" slideNum={6} total={TOTAL} />
        <SectionTitle className="mb-2 anim-fade-up">Skills — /команды</SectionTitle>
        <p className="text-wd-gray text-xl mb-8 anim-fade-up-d1">Повторяющиеся задачи в одно действие</p>

        <div className="flex gap-10 flex-1">
          <div className="flex-1 anim-fade-left">
            <div className="terminal h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="text-xs text-gray-500 ml-2">Claude Code</span>
              </div>
              <div className="p-6 space-y-5">
                {[
                  { cmd: "/weekly-report", desc: "Еженедельный отчёт по шаблону", color: "text-wd-lime" },
                  { cmd: "/prep-meeting", desc: "Подготовка к встрече за 30 секунд", color: "text-blue-400" },
                  { cmd: "/analyze-data", desc: "Анализ таблицы с визуализацией", color: "text-purple-400" },
                  { cmd: "/draft-email", desc: "Черновик письма в нужном тоне", color: "text-pink-400" },
                  { cmd: "/research [тема]", desc: "Быстрый ресерч с источниками", color: "text-cyan-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gray-500 select-none text-lg">$</span>
                    <div>
                      <span className={`font-bold text-lg ${item.color}`}>{item.cmd}</span>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[420px] space-y-6 anim-fade-right">
            <Card accent>
              <div className="flex items-start gap-4">
                <Zap size={28} className="text-wd-dark flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Skill vs Промпт</h3>
                  <p className="text-base text-wd-gray leading-relaxed">Промпт — каждый раз пишете заново. Skill — написали один раз, используете всегда. Стандартный результат каждый раз.</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-4">
                <Settings size={28} className="text-wd-gray flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Можно создавать свои</h3>
                  <p className="text-base text-wd-gray leading-relaxed">Любой повторяющийся процесс превращается в skill. Пишете /команду — получаете результат.</p>
                </div>
              </div>
            </Card>
            <div className="p-5 bg-wd-dark text-white rounded-2xl">
              <p className="text-base leading-relaxed">
                <span className="text-wd-lime font-bold">Пример:</span> Skill <code className="text-wd-lime bg-white/10 px-2 py-0.5 rounded">/tenant-report</code> — вводите имя арендатора, получаете полную сводку за 30 секунд.
              </p>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 7: MCP — интеграции
   ═══════════════════════════════════════════════════════════ */
const SlideMCP: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center px-14 md:px-20 pb-20 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Интеграции" slideNum={7} total={TOTAL} lime />
        <SectionTitle className="mb-10 anim-fade-up">Подключение<br/>к вашим системам</SectionTitle>

        <div className="grid grid-cols-4 gap-6 mb-10">
          {[
            { icon: <Database size={32} />, name: "Bitrix24", desc: "CRM, задачи, сделки", color: "bg-blue-50 border-blue-200" },
            { icon: <Table2 size={32} />, name: "Google Sheets", desc: "Таблицы и данные", color: "bg-green-50 border-green-200" },
            { icon: <Calendar size={32} />, name: "Google Calendar", desc: "Расписание и встречи", color: "bg-violet-50 border-violet-200" },
            { icon: <Globe size={32} />, name: "Браузер", desc: "Веб-страницы и формы", color: "bg-orange-50 border-orange-200" },
          ].map((item, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${item.color} text-center anim-fade-up`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-wd-dark mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2">{item.name}</h3>
              <p className="text-base text-wd-gray">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-6 anim-fade-up-d5">
          <div className="flex-1 p-6 bg-wd-dark text-white rounded-2xl">
            <h3 className="font-bold text-lg mb-4 text-wd-lime">Как это работает</h3>
            <div className="flex items-center gap-4 text-base">
              <span className="px-4 py-2 bg-white/10 rounded-xl font-semibold">Claude</span>
              <ArrowRight size={20} className="text-wd-lime" />
              <span className="px-4 py-2 bg-white/10 rounded-xl font-semibold">MCP</span>
              <ArrowRight size={20} className="text-wd-lime" />
              <span className="px-4 py-2 bg-white/10 rounded-xl font-semibold">Bitrix / Sheets / Calendar</span>
            </div>
            <p className="text-sm text-gray-400 mt-4">AI не хранит пароли — безопасное подключение с вашего компьютера</p>
          </div>
        </div>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 8: Перерыв
   ═══════════════════════════════════════════════════════════ */
const SlideBreak: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full dark-slide flex flex-col justify-center items-center px-16 pb-16">
    {isActive && (
      <div className="text-center">
        <div className="anim-fade-up mb-8">
          <Coffee size={64} className="text-wd-lime mx-auto" />
        </div>
        <h1 className="font-display text-[5rem] md:text-[8rem] leading-[0.85] uppercase text-white tracking-tight anim-fade-up-d1">
          Перерыв
        </h1>
        <div className="accent-line w-32 mx-auto my-8 anim-fade-up-d2" />
        <p className="text-2xl text-gray-400 anim-fade-up-d3">10 минут</p>
      </div>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 9: Таблицы + AI
   ═══════════════════════════════════════════════════════════ */
const SlideTables: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col px-14 md:px-20 pb-20 pt-10 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Данные" slideNum={9} total={TOTAL} />
        <SectionTitle className="mb-10 anim-fade-up">Таблицы + AI</SectionTitle>

        <div className="flex gap-10 flex-1">
          <div className="flex-1 space-y-6 anim-fade-left">
            <Card className="!p-7 bg-blue-50 border-blue-200">
              <div className="flex items-center gap-4 mb-3">
                <Monitor size={28} className="text-blue-600" />
                <h3 className="font-bold text-xl text-wd-dark">Расширение для Excel</h3>
              </div>
              <p className="text-lg text-wd-gray leading-relaxed">Claude работает прямо внутри Excel/Google Sheets. Анализирует данные, пишет формулы, строит графики — не выходя из таблицы.</p>
            </Card>
            <Card className="!p-7 bg-green-50 border-green-200">
              <div className="flex items-center gap-4 mb-3">
                <FolderOpen size={28} className="text-green-600" />
                <h3 className="font-bold text-xl text-wd-dark">Локальная работа</h3>
              </div>
              <p className="text-lg text-wd-gray leading-relaxed">Скачиваете таблицу на ПК — агент работает с ней локально. Создаёт визуализации на нескольких страницах, сводные таблицы, дашборды.</p>
            </Card>
          </div>

          <div className="flex-1 anim-fade-right">
            <div className="h-full bg-wd-dark rounded-2xl p-7 text-white">
              <h3 className="font-bold text-xl text-wd-lime mb-6">Что AI делает с данными</h3>
              <div className="space-y-5">
                {[
                  { icon: <BarChart3 size={24} />, text: "Графики и визуализация" },
                  { icon: <Table2 size={24} />, text: "Сводные таблицы и группировки" },
                  { icon: <TrendingUp size={24} />, text: "Анализ трендов и аномалий" },
                  { icon: <Settings size={24} />, text: "Формулы Excel любой сложности" },
                  { icon: <Search size={24} />, text: "Очистка данных и дедупликация" },
                  { icon: <FileText size={24} />, text: "Финансовые отчёты и P&L" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="text-wd-lime flex-shrink-0">{item.icon}</div>
                    <p className="text-lg text-gray-200">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 10: Промпт для таблиц
   ═══════════════════════════════════════════════════════════ */
const SlideTablesPrompt: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col px-14 md:px-20 pb-20 pt-10 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Практика" slideNum={10} total={TOTAL} lime />
        <SectionTitle className="mb-8 anim-fade-up">Как работать<br/>с таблицами</SectionTitle>

        <div className="flex gap-10 flex-1">
          <div className="flex-1 anim-fade-left">
            <Card className="!p-7 bg-wd-light border-gray-200 h-full">
              <h3 className="text-lg font-bold text-wd-dark mb-4"><Sparkles size={20} className="inline mr-2 text-wd-purple" />Промпт для анализа</h3>
              <div className="bg-white p-6 rounded-xl border border-gray-100 font-mono text-base text-wd-dark leading-8">
                «Вот таблица с данными по заполняемости за Q1.<br/><br/>
                Сделай:<br/>
                1. Сводную таблицу по этажам<br/>
                2. График динамики по месяцам<br/>
                3. Топ-5 арендаторов по площади<br/>
                4. Выводы и рекомендации<br/><br/>
                Формат: несколько страниц с визуализацией.»
              </div>
            </Card>
          </div>

          <div className="w-[380px] space-y-6 anim-fade-right">
            <Card accent>
              <h3 className="font-bold text-xl mb-3">Шаг 1</h3>
              <p className="text-base text-wd-gray">Скачайте таблицу (CSV или XLSX) в папку на компьютере</p>
            </Card>
            <Card>
              <h3 className="font-bold text-xl mb-3">Шаг 2</h3>
              <p className="text-base text-wd-gray">Откройте Claude Code в этой папке и попросите проанализировать</p>
            </Card>
            <Card>
              <h3 className="font-bold text-xl mb-3">Шаг 3</h3>
              <p className="text-base text-wd-gray">Получите готовый отчёт с графиками, таблицами и выводами</p>
            </Card>
            <div className="p-5 bg-wd-lime/20 rounded-2xl border border-wd-lime/40">
              <p className="text-base font-medium text-wd-dark">
                <Lightbulb size={18} className="inline mr-2" />
                AI отлично работает с финансами — формулы, P&L, unit-экономика
              </p>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 11: Deep Research
   ═══════════════════════════════════════════════════════════ */
const SlideDeepResearch: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col px-14 md:px-20 pb-20 pt-10 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Исследования" slideNum={11} total={TOTAL} />
        <SectionTitle className="mb-10 anim-fade-up">Deep Research</SectionTitle>

        <div className="grid grid-cols-3 gap-6 mb-8 anim-fade-up-d1">
          {[
            { name: "Perplexity", desc: "Поиск с источниками и ссылками", highlight: "Бесплатный", color: "bg-blue-50 border-blue-200", tagColor: "text-blue-600 bg-blue-100" },
            { name: "ChatGPT", desc: "Deep Research в Pro-режиме", highlight: "Работа с файлами", color: "bg-green-50 border-green-200", tagColor: "text-green-600 bg-green-100" },
            { name: "Gemini", desc: "Google Deep Research, связь с Docs", highlight: "2M контекста", color: "bg-violet-50 border-violet-200", tagColor: "text-violet-600 bg-violet-100" },
          ].map((tool, i) => (
            <Card key={i} className={`!p-7 ${tool.color}`}>
              <div className={`inline-block px-3 py-1.5 rounded-lg text-lg font-bold ${tool.tagColor} mb-4`}>{tool.name}</div>
              <p className="text-lg text-wd-gray mb-3">{tool.desc}</p>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <p className="text-base font-semibold text-wd-dark">{tool.highlight}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="!p-7 bg-wd-light border-gray-200 anim-fade-up-d2">
          <h3 className="text-lg font-bold text-wd-dark mb-4"><Search size={20} className="inline mr-2 text-wd-purple" />Промпт для исследования</h3>
          <div className="bg-white p-5 rounded-xl border border-gray-100 font-mono text-base text-wd-dark leading-8">
            «Проведи глубокое исследование рынка торговых центров в Узбекистане за 2025-2026. Найди: объём рынка, ключевых игроков, тренды, заполняемость. Все данные с источниками.»
          </div>
        </Card>

        <div className="mt-5 p-4 bg-wd-dark text-white rounded-xl anim-fade-up-d3">
          <p className="text-base"><Lightbulb size={18} className="inline text-wd-lime mr-2" /><strong>Совет:</strong> Используйте 2-3 инструмента параллельно и сравнивайте результаты для достоверности</p>
        </div>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 12: Когда какой инструмент
   ═══════════════════════════════════════════════════════════ */
const SlideToolsMatrix: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col px-14 md:px-20 pb-20 pt-10 bg-white">
    {isActive && (
      <>
        <SlideHeader tag="Карта" slideNum={12} total={TOTAL} lime />
        <SectionTitle className="mb-10 anim-fade-up">Когда какой<br/>инструмент</SectionTitle>

        <div className="flex gap-8 flex-1">
          <div className="flex-1 space-y-4 anim-fade-left">
            <h3 className="text-base font-mono font-bold text-wd-muted mb-2">ТЕКСТ И ДАННЫЕ</h3>
            {[
              { task: "Тексты, письма, КП", tools: "ChatGPT / Claude", color: "bg-blue-50 border-blue-200", icon: <FileText size={22} /> },
              { task: "Анализ таблиц и данных", tools: "Claude Code / Excel AI", color: "bg-green-50 border-green-200", icon: <BarChart3 size={22} /> },
              { task: "Исследования рынка", tools: "Perplexity / Deep Research", color: "bg-violet-50 border-violet-200", icon: <Search size={22} /> },
              { task: "Работа с документами", tools: "Claude / Gemini", color: "bg-orange-50 border-orange-200", icon: <BookOpen size={22} /> },
            ].map((row, i) => (
              <div key={i} className={`${row.color} border rounded-xl p-5 flex items-center gap-4`}>
                <div className="text-wd-dark flex-shrink-0">{row.icon}</div>
                <div>
                  <p className="text-lg font-bold text-wd-dark">{row.task}</p>
                  <p className="text-base text-wd-purple font-mono font-semibold">{row.tools}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 space-y-4 anim-fade-right">
            <h3 className="text-base font-mono font-bold text-wd-muted mb-2">АВТОМАТИЗАЦИЯ</h3>
            {[
              { task: "Отчёты по расписанию", tools: "Claude Code + Skills", color: "bg-pink-50 border-pink-200", icon: <Calendar size={22} /> },
              { task: "Интеграция с CRM", tools: "Claude Code + MCP", color: "bg-cyan-50 border-cyan-200", icon: <Database size={22} /> },
              { task: "Сбор данных из интернета", tools: "Claude Code + браузер", color: "bg-emerald-50 border-emerald-200", icon: <Globe size={22} /> },
              { task: "Долгие аналитические задачи", tools: "Claude Code / Codex", color: "bg-amber-50 border-amber-200", icon: <Bot size={22} /> },
            ].map((row, i) => (
              <div key={i} className={`${row.color} border rounded-xl p-5 flex items-center gap-4`}>
                <div className="text-wd-dark flex-shrink-0">{row.icon}</div>
                <div>
                  <p className="text-lg font-bold text-wd-dark">{row.task}</p>
                  <p className="text-base text-wd-purple font-mono font-semibold">{row.tools}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 13: Итоги + Что дальше
   ═══════════════════════════════════════════════════════════ */
const SlideSummary: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full dark-slide flex flex-col justify-center px-14 md:px-20 pb-20">
    {isActive && (
      <>
        <div className="anim-fade-up mb-6">
          <Tag lime>Итоги</Tag>
        </div>
        <h1 className="font-display text-[4rem] md:text-[6rem] leading-[0.85] uppercase text-white tracking-tight anim-fade-up-d1 mb-12">
          Что запомнить
        </h1>

        <div className="grid grid-cols-2 gap-8 max-w-5xl">
          {[
            { num: "01", text: "AI-агент — не чат. Он работает с вашими файлами, таблицами и системами" },
            { num: "02", text: "CLAUDE.md — персональная память. Чем больше контекста, тем точнее результат" },
            { num: "03", text: "Skills стандартизируют рутину. Написали один раз — используете всегда" },
            { num: "04", text: "Deep Research экономит дни работы. Исследование за минуты, а не недели" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-5 anim-fade-up" style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
              <span className="font-display text-5xl text-wd-lime">{item.num}</span>
              <p className="text-xl text-gray-300 leading-relaxed mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="accent-line w-24 mt-12 anim-fade-up-d5" />
        <p className="text-xl text-gray-500 mt-6 anim-fade-up-d6">
          Начните с малого: создайте CLAUDE.md и попробуйте один skill на реальной задаче
        </p>
      </>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 14: Финал — Спасибо + QR обратная связь
   ═══════════════════════════════════════════════════════════ */
const SlideEnd: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full lime-gradient-bg flex flex-col justify-center items-center pb-16 px-16">
    {isActive && (
      <div className="flex items-center gap-20">
        <div className="text-left anim-fade-left">
          <h1 className="font-display text-[5rem] md:text-[8rem] leading-[0.85] uppercase text-wd-dark tracking-tight mb-6">
            Спасибо!
          </h1>
          <p className="text-2xl text-wd-dark/60 mb-2">Павел Панферов, CDTO</p>
          <div className="accent-line w-20 my-6" />
          <p className="text-xl text-wd-dark/80 font-medium max-w-md leading-relaxed">
            Буду благодарен за обратную связь — отсканируйте QR-код и оставьте свой отзыв
          </p>
        </div>
        <div className="anim-fade-right flex flex-col items-center">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-black/10">
            <img src={`${import.meta.env.BASE_URL}qr-feedback.jpg`} alt="QR для обратной связи" className="w-56 h-56 object-contain" />
          </div>
          <p className="mt-4 text-lg font-bold text-wd-dark/50">Обратная связь</p>
        </div>
      </div>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   SLIDE 15: Консультации — QR Telegram
   ═══════════════════════════════════════════════════════════ */
const SlideConsulting: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full dark-slide flex flex-col justify-center items-center px-16 pb-16">
    {isActive && (
      <div className="flex items-center gap-20">
        <div className="text-left anim-fade-left max-w-lg">
          <div className="mb-6">
            <Tag lime>Консультации</Tag>
          </div>
          <h1 className="font-display text-[3.5rem] md:text-[5rem] leading-[0.85] uppercase text-white tracking-tight mb-6">
            Настройка AI<br/>для вашего<br/>бизнеса
          </h1>
          <div className="accent-line w-20 mb-8" />
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={22} className="text-wd-lime flex-shrink-0" />
              <p className="text-xl text-gray-300">Персональная настройка AI-агента под ваши задачи</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={22} className="text-wd-lime flex-shrink-0" />
              <p className="text-xl text-gray-300">Интеграции с вашими рабочими системами</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={22} className="text-wd-lime flex-shrink-0" />
              <p className="text-xl text-gray-300">Обучение команды работе с AI</p>
            </div>
          </div>
        </div>
        <div className="anim-fade-right flex flex-col items-center">
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <img src={`${import.meta.env.BASE_URL}qr-telegram.png`} alt="Telegram Павла" className="w-56 h-56 object-contain" />
          </div>
          <p className="mt-5 text-lg font-bold text-wd-lime">@panferovp</p>
          <p className="mt-1 text-base text-gray-500">Напишите в Telegram</p>
        </div>
      </div>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   EXPORT
   ═══════════════════════════════════════════════════════════ */
export const ALL_SLIDES: React.FC<SlideProps>[] = [
  SlideTitle,       // 1
  SlideIntro,       // 2
  SlideWhy,         // 3
  SlideChatVsAgent, // 3
  SlideAgentPowers, // 4
  SlideClaudeMd,    // 5
  SlideSkills,      // 6
  SlideMCP,         // 7
  SlideBreak,       // 8
  SlideTables,      // 9
  SlideTablesPrompt,// 10
  SlideDeepResearch,// 11
  SlideToolsMatrix, // 12
  SlideSummary,     // 13
  SlideEnd,         // 14
  SlideConsulting,  // 15
];
