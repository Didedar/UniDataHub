export interface Program {
    id: string;
    name: string;
    degree: "Bachelor" | "Master" | "PhD" | "Foundation" | "Other";
    duration: string;
    tuition: number; // in KZT
    language: string;
}

export interface University {
    id: string;
    name: string;
    shortName: string;
    location: string;
    description: string;
    foundedYear: number;
    ranking: number; // National ranking
    studentCount: number;
    acceptanceRate: number; // Percentage
    tuitionRange: { min: number; max: number };
    website: string;
    logoUrl: string;
    imageUrl: string;
    type: "national" | "state" | "private" | "";
    programs: Program[];
    admissions: {
        deadline: string | string[];
        requirements: string[];
        scholarships: string[];
    };
    international: {
        partners: number;
        exchangePrograms: string[];
    };
    stats: {
        employmentRate: number;
        researchOutput: "High" | "Medium" | "Low" | "";
        studentSatisfaction: number;
    };
    virtualTourUrl?: string;
}

// Automatically generated from scraped data
export const universities: University[] = [
    {
        "id": "uni--6215527010065643221",
        "name": "Назарбаев Университеті",
        "shortName": "НУ",
        "location": "Астана",
        "description": "Руководство: Информация о руководстве доступна по ссылке \"Басқару\" (Управление).\n\nДостижения: Лидерство в Центральной Азии согласно Shanghai Subject Rankings 2025.; Поднялся на 100 позиций в мировом рейтинге университетов Times Higher Education.; Входит в 23% лучших международных исследовательских университетов по Times Higher Education World University Rankings 2026 (THE WUR).; #1 на Кавказе и в Центральной Азии в рейтинге Times Higher Education World University Rankings (THE WUR) 2026.; 150-е место в списке Times Higher Education (THE) Asia University Rankings 2025 среди 853 высших уче\n\nПоступление (требования): Для каждой программы в NU существуют свои требования, включая академическую квалификацию, соответствующий опыт и уровень владения английским языком. Подробная информация о требованиях для программ бак\n\nСроки приёма: Начался прием документов на весенний семестр.; Информация о приеме 2024 года доступна по ссылке.\n\nГранты/скидки/стипендии: Доступны образовательные гранты NU, для обладателей которых действует трехлетнее рабочее обязательство. Информация о платежах и финансировании доступна по ссылке.\n\nМеждународные партнёры (примеры): HKUST (Hong Kong University of Science and Technology), SOAS University of London",
        "foundedYear": 2000,
        "ranking": 1,
        "studentCount": 6800,
        "acceptanceRate": 68,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://nu.edu.kz",
        "logoUrl": "/logos/uni--6215527010065643221.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni--6215527010065643221-p-0",
                "name": "Foundation Year Program",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6215527010065643221-p-1",
                "name": "Undergraduate Programs (Бакалавриат)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6215527010065643221-p-2",
                "name": "Graduate Programs (Магистратура)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6215527010065643221-p-3",
                "name": "Postgraduate Programs (Докторантура)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6215527010065643221-p-4",
                "name": "Евразийская бизнес-программа (Бакалавриат, совместная с NUGSB и HKUST)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6215527010065643221-p-5",
                "name": "MA Global Affairs and Eurasian Studies (Совместная с NU SSH и SOAS)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6215527010065643221-p-6",
                "name": "Новая магистерская программа по изучению Евразии (Совместная с SOAS University of London)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": [
                "Начался прием документов на весенний семестр.",
                "Информация о приеме 2024 года доступна по ссылке."
            ],
            "requirements": [
                "Для каждой программы в NU существуют свои требования, включая академическую квалификацию, соответствующий опыт и уровень владения английским языком. Подробная информация о требованиях для программ бакалавриата, магистратуры и докторантуры доступна на странице приема."
            ],
            "scholarships": [
                "Төлемдер және қаржыландыру"
            ]
        },
        "international": {
            "partners": 150,
            "exchangePrograms": [
                "Erasmus+ Mundus",
                "Fulbright Program",
                "Обмен с University of Cambridge",
                "Обмен с University of Pennsylvania",
                "Программы двойных дипломов с топ-университетами мира"
            ]
        },
        "stats": {
            "employmentRate": 95,
            "researchOutput": "High",
            "studentSatisfaction": 4.6
        }
    },
    {
        "id": "uni--1331048252443003479",
        "name": "ӘЛ-ФАРАБИ АТЫНДАҒЫ ҚАЗАҚ ҰЛТТЫҚ УНИВЕРСИТЕТІ",
        "shortName": "ҚазҰУ",
        "location": "Алматы",
        "description": "Казахский национальный университет имени аль-Фараби (КазНУ) — ведущее многопрофильное высшее учебное заведение Казахстана, основанное в 1934 году. Расположен в городе Алматы, Казахстан. КазНУ является лидером национального рейтинга вузов Казахстана и входит в топ-300 университетов мира по качеству образования (QS World University Rankings). Университет активно интегрирован в мировое образовательное пространство, являясь членом Международной Ассоциации университетов и соучредителем Евразийской Ассоциации университетов. Обучение ведется на 14 факультетах по направлениям естественных, инженерных, гуманитарных и социальных наук, а также предлагаются программы на английском языке.",
        "foundedYear": 1934,
        "ranking": 2,
        "studentCount": 25100,
        "acceptanceRate": 77,
        "tuitionRange": {
            "min": 2300000,
            "max": 3000000
        },
        "website": "https://www.kaznu.kz",
        "logoUrl": "/logos/uni--1331048252443003479.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [
            {
                "id": "uni--1331048252443003479-p-0",
                "name": "Халықаралық білім беру бағдарламалары",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-1",
                "name": "Іскерлік әкімшілендіру мастері",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-2",
                "name": "Дистанциялық білім беру",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-3",
                "name": "Ғылым және білім беру интеграциясы",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-4",
                "name": "Білім беру бағдарламалары",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-5",
                "name": "Химия и химическая технология",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-6",
                "name": "Информатика",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-7",
                "name": "Биология және биотехнология факультеті",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-8",
                "name": "География және табиғатты пайдалану факультеті",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-9",
                "name": "Механика-математика факультеті",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-10",
                "name": "Физика-техникалық факультет",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-11",
                "name": "Химия және химиялық технология факультеті",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-12",
                "name": "Медицина және денсаулық сақтау факультеті",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-13",
                "name": "Ақпараттық технологиялар факультеті",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1331048252443003479-p-14",
                "name": "Шығыстану факультеті",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "1 августа",
            "requirements": [
                "ЕНТ (Единое национальное тестирование)",
                "Аттестат о среднем образовании",
                "Удостоверение личности",
                "Медицинская справка формы 086-У",
                "6 фотографий 3х4"
            ],
            "scholarships": [
                "Государственный образовательный грант",
                "Стипендия имени аль-Фараби",
                "Именные стипендии университета",
                "Социальная стипендия для малообеспеченных"
            ]
        },
        "international": {
            "partners": 180,
            "exchangePrograms": [
                "Академическая мобильность (более 450 соглашений)",
                "Erasmus+",
                "Обмен с МГУ и СПбГУ",
                "Программы двойных дипломов с вузами Европы и Азии",
                "Летние/зимние школы в партнерских университетах"
            ]
        },
        "stats": {
            "employmentRate": 87,
            "researchOutput": "High",
            "studentSatisfaction": 4.3
        },
        "virtualTourUrl": "http://3dtour.kaznu.kz/"
    },
    {
        "id": "uni--4247799133646007266",
        "name": "Евразийский национальный университет им. Л.Н. Гумилёва",
        "shortName": "ЕНУ",
        "location": "Астана",
        "description": "Евразийский национальный университет имени Л.Н. Гумилёва (ЕНУ) — государственное некоммерческое высшее учебное заведение, основанное в 1996 году в Астане. Университет входит в топ-320 лучших университетов мира (QS World University Rankings 2025) и является вторым в национальном рейтинге вузов Казахстана. ЕНУ предлагает широкий спектр программ бакалавриата, магистратуры и докторантуры в различных областях, включая гуманитарные, инженерные, социальные и естественные науки. Вуз является членом Европейской Ассоциации университетов и других международных организаций.",
        "foundedYear": 1996,
        "ranking": 3,
        "studentCount": 21900,
        "acceptanceRate": 75,
        "tuitionRange": {
            "min": 1300000,
            "max": 1600000
        },
        "website": "https://enu.kz",
        "logoUrl": "/logos/uni--4247799133646007266.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [
            {
                "id": "enu-p-1",
                "name": "Международные отношения",
                "degree": "Bachelor",
                "duration": "4 года",
                "tuition": 1400000,
                "language": "Русский/Казахский"
            },
            {
                "id": "enu-p-2",
                "name": "Юриспруденция",
                "degree": "Bachelor",
                "duration": "4 года",
                "tuition": 1300000,
                "language": "Русский"
            },
            {
                "id": "enu-p-3",
                "name": "Информационные системы",
                "degree": "Bachelor",
                "duration": "4 года",
                "tuition": 1500000,
                "language": "Русский/Английский"
            },
            {
                "id": "enu-p-4",
                "name": "Филология",
                "degree": "Bachelor",
                "duration": "4 года",
                "tuition": 1200000,
                "language": "Русский/Казахский"
            },
            {
                "id": "enu-p-5",
                "name": "История",
                "degree": "Bachelor",
                "duration": "4 года",
                "tuition": 1200000,
                "language": "Русский/Казахский"
            }
        ],
        "admissions": {
            "deadline": "1 августа",
            "requirements": [
                "ЕНТ",
                "Аттестат о среднем образовании",
                "Удостоверение личности",
                "Медсправка"
            ],
            "scholarships": [
                "Государственный грант",
                "Стипендия Президента РК",
                "Стипендия Гумилева"
            ]
        },
        "international": {
            "partners": 120,
            "exchangePrograms": [
                "Erasmus+",
                "Обмен с вузами России и Европы",
                "Программы двойных дипломов"
            ]
        },
        "stats": {
            "employmentRate": 82,
            "researchOutput": "High",
            "studentSatisfaction": 4.1
        }
    },
    {
        "id": "uni--653985701906844209",
        "name": "Казахский национальный исследовательский технический университет",
        "shortName": "Сатпаев Университет",
        "location": "Алматы",
        "description": "Сатбаев Университет – старейший и ведущий технический университет в Казахстане, известный своими исследованиями в горнодобывающей и нефтегазовой отраслях. Более чем девяностолетняя история. Университет основан в 1934 году (ранее Казахский горно-металлургический институт). Является одним из ведущих технических вузов Казахстана, входящим в мировые рейтинги QS.",
        "foundedYear": 1934,
        "ranking": 4,
        "studentCount": 7000,
        "acceptanceRate": 92,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://satbayev.university",
        "logoUrl": "/logos/uni--653985701906844209.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [
            {
                "id": "uni--653985701906844209-p-0",
                "name": "Бакалавриат",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-1",
                "name": "Магистратура",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-2",
                "name": "Докторантура",
                "degree": "PhD",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-3",
                "name": "Геология и нефтегазовое дело",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-4",
                "name": "Горное дело и металлургия",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-5",
                "name": "Автоматизация и информационные технологии",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-6",
                "name": "Энергетика и машиностроение",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-7",
                "name": "Архитектура и строительство",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-8",
                "name": "Транспортная инженерия и логистика",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-9",
                "name": "Проектный менеджмент",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-10",
                "name": "Управление проектами",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-11",
                "name": "Машины и оборудование цифрового мониторинга",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-12",
                "name": "Финансовая экспертиза",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-13",
                "name": "Информационные системы",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--653985701906844209-p-14",
                "name": "Математическое и компьютерное моделирование",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "16 мая – 7 июля: участие в национальном тестировании.\n8–13 июля: срок подачи документов на творческий экзамен.\n13 июля – 20 июля: подача заявки на конкурс государственных грантов.",
            "requirements": [
                "ЕНТ, документы"
            ],
            "scholarships": [
                "Государственные гранты"
            ]
        },
        "international": {
            "partners": 20,
            "exchangePrograms": [
                "Двойные дипломные программы"
            ]
        },
        "stats": {
            "employmentRate": 88,
            "researchOutput": "High",
            "studentSatisfaction": 4.4
        }
    },
    {
        "id": "uni--4070500783405386515",
        "name": "Казахский национальный педагогический университет имени Абая",
        "shortName": "КазНПУ имени Абая",
        "location": "Алматы",
        "description": "Казахский национальный педагогический университет имени Абая - первое высшее учебное заведение в Казахстане с 95-летней историей. Основан в 1928 году как Казахский государственный университет, позже преобразован в Казахский педагогический институт (КазПИ) в 1930 году. В 1935 году институту присвоено имя Абая. В 1990 году получил статус университета и стал Казахским государственным педагогическим университетом имени Абая. В 2003 году получил статус национального университета.",
        "foundedYear": 1928,
        "ranking": 5,
        "studentCount": 5000,
        "acceptanceRate": 87,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kaznpu.kz",
        "logoUrl": "/logos/uni--4070500783405386515.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [
            {
                "id": "uni--4070500783405386515-p-0",
                "name": "Сорбонна - Қазақстан институты",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-1",
                "name": "Математика, физика және информатика факультеті",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-2",
                "name": "Педагогика және психология факультеті",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-3",
                "name": "Филология факультеті",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-4",
                "name": "Жаратылыстану және география факультеті",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-5",
                "name": "Өнер факультеті",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-6",
                "name": "Тарих және құқық факультеті",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-7",
                "name": "Әскери кафедра",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-8",
                "name": "Дене шынықтыру және алғашқы әскери дайындық факультеті",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-9",
                "name": "Foundation факультеті",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-10",
                "name": "Педагогика и психология",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-11",
                "name": "Математика, физика и информатика",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-12",
                "name": "Филология",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-13",
                "name": "Искусство, культура и спорт",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--4070500783405386515-p-14",
                "name": "Естествознание и география",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "",
            "requirements": [
                "ЕНТ, документы, экзамены"
            ],
            "scholarships": [
                "Жеңілдіктер"
            ]
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Erasmus+"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        },
        "virtualTourUrl": "https://kaznpu.kz/kz/1733/page/"
    },
    {
        "id": "uni-4032705414286304612",
        "name": "Казахский национальный аграрный исследовательский университет",
        "shortName": "КазНАИУ",
        "location": "Алматы",
        "description": "Казахский национальный аграрный исследовательский университет (КазНАИУ) — одно из старейших и ведущих высших учебных заведений Казахстана, основанное в 1929 году. Университет специализируется на подготовке специалистов для агропромышленного комплекса, сельского хозяйства, ветеринарии, биотехнологий и IT. Вуз активно интегрирован в Болонский процесс и международное образовательное пространство, входит в мировые рейтинги QS (671-680 место в 2025 году).",
        "foundedYear": 1929,
        "ranking": 6,
        "studentCount": 4600,
        "acceptanceRate": 78,
        "tuitionRange": {
            "min": 800000,
            "max": 1000000
        },
        "website": "https://kaznau.kz",
        "logoUrl": "/logos/uni-4032705414286304612.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "High",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-6181242416765302281",
        "name": "Казахский агротехнический исследовательский университет им. С.Сейфуллина",
        "shortName": "ҚАТЗУ",
        "location": "Астана",
        "description": "Университет основан в 1957 году как Акмолинский сельскохозяйственный институт. Впоследствии преобразован в Казахский агротехнический университет им. С.Сейфуллина. Прошел этапы становления и динамичного развития, став исследовательским университетом и крупным научным и образовательным центром страны.",
        "foundedYear": 1957,
        "ranking": 14,
        "studentCount": 7000,
        "acceptanceRate": 69,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kazatu.edu.kz",
        "logoUrl": "/logos/uni-6181242416765302281.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni-6181242416765302281-p-0",
                "name": "Бакалавриат",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-1",
                "name": "Магистратура",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-2",
                "name": "Докторантура",
                "degree": "PhD",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-3",
                "name": "Аграрный факультет",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-4",
                "name": "Ветеринария и технология животноводства",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-5",
                "name": "Агрономия",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-6",
                "name": "Механизация сельского хозяйства",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-7",
                "name": "Землеустройство",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-8",
                "name": "Ветеринария",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-9",
                "name": "Технология производства продуктов питания",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-10",
                "name": "Образовательные программы магистратуры",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-11",
                "name": "Образовательные программы докторантуры",
                "degree": "PhD",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-12",
                "name": "Фитосанитарная безопасность",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-13",
                "name": "Селекция и семеноводство",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-6181242416765302281-p-14",
                "name": "Агротехнология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "",
            "requirements": [
                "ЕНТ, документы, экзамены (упоминаются)"
            ],
            "scholarships": [
                "Государственные образовательные гранты, Президентская стипендия"
            ]
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Erasmus+"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-4000549829194428665",
        "name": "Детский центр «Аксай» КазНМУ имени С.Д. Асфендиярова",
        "shortName": "Детский це...",
        "location": "Алматы",
        "description": "Детский центр «Аксай» КазНМУ им.С.Д. Асфендиярова является одной из старейшей медицинской организации Казахстана, она была открыта в 1954 году на 75 коек, для оказания медицинской помощи и реабилитации детей с поражением ЦНС и нарушениями опорно-двигательного аппарата, после вспышки полиомиелита в Казахстане.С 1986 года больница преобразовано в многопрофильную клинику Республиканскую детскую клиническую больницу «Аксай» на 600 коек.",
        "foundedYear": 1954,
        "ranking": 51,
        "studentCount": 14000,
        "acceptanceRate": 71,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "http://aksay.kaznmu.kz/",
        "logoUrl": "/logos/uni-4000549829194428665.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni-4000549829194428665-p-0",
                "name": "Нефрология и экстракорпоральная детоксикация (диализ)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-4000549829194428665-p-1",
                "name": "Педиатрия",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-4000549829194428665-p-2",
                "name": "Анестезиология, реанимация и интенсивная терапия",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-4000549829194428665-p-3",
                "name": "Ортопедическое детское отделение",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-4000549829194428665-p-4",
                "name": "Хирургическое детское отделение и ЧЛХ",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-4000549829194428665-p-5",
                "name": "Оториноларингология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-4000549829194428665-p-6",
                "name": "Неврологическое детское отделение",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-4000549829194428665-p-7",
                "name": "Ортопедия",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-4000549829194428665-p-8",
                "name": "Хирургия",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-4000549829194428665-p-9",
                "name": "Неврология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "",
            "requirements": [
                "Перечень анализов, необходимых для госпитализации матери или сопровождающего лица по уходу за ребенком: [https://aksay.kaznmu.edu.kz/%d0%bf%d0%b5%d1%80%d0%b5%d1%87%d0%b5%d0%bd%d1%8c-%d0%b0%d0%bd%d0%b0%d0%bb%d0%b8%d0%b7%d0%be%d0%b2-%d0%bd%d0%b5%d0%be%d0%b1%d1%85%d0%be%d0%b4%d0%b8%d0%bc%d1%8b%d1%85-%d0%b4%d0%bb%d1%8f-%d0%b3%d0%be/](https://aksay.kaznmu.edu.kz/%d0%bf%d0%b5%d1%80%d0%b5%d1%87%d0%b5%d0%bd%d1%8c-%d0%b0%d0%bd%d0%b0%d0%bb%d0%b8%d0%b7%d0%be%d0%b2-%d0%bd%d0%b5%d0%be%d0%b1%d1%85%d0%be%d0%b4%d0%b8%d0%bc%d1%8b%d1%85-%d0%b4%d0%bb%d1%8f-%d0%b3%d0%be/)",
                "Перечень документов, необходимых для госпитализации ребенка в Университетская клиника «Аксай» КазНМУ им. С.Д. Асфендиярова: [https://aksay.kaznmu.edu.kz/%d0%bf%d0%b5%d1%80%d0%b5%d1%87%d0%b5%d0%bd%d1%8c-%d0%b4%d0%be%d0%ba%d1%83%d0%bc%d0%b5%d0%bd%d1%82%d0%be%d0%b2-%d0%bd%d0%b5%d0%be%d0%b1%d1%85%d0%be%d0%b4%d0%b8%d0%bc%d1%8b%d1%85-%d0%b4%d0%bb%d1%8f/](https://aksay.kaznmu.edu.kz/%d0%bf%d0%b5%d1%80%d0%b5%d1%87%d0%b5%d0%bd%d1%8c-%d0%b4%d0%be%d0%ba%d1%83%d0%bc%d0%b5%d0%bd%d1%82%d0%be%d0%b2-%d0%bd%d0%b5%d0%be%d0%b1%d1%85%d0%be%d0%b4%d0%b8%d0%bc%d1%8b%d1%85-%d0%b4%d0%bb%d1%8f/)",
                "Перечень нозологии для госпитализации: [https://aksay.kaznmu.edu.kz/%d0%bf%d0%b5%d1%80%d0%b5%d1%87%d0%b5%d0%bd%d1%8c-%d0%bd%d0%be%d0%b7%d0%be%d0%bb%d0%be%d0%b3%d0%b8%d0%b8/](https://aksay.kaznmu.edu.kz/%d0%bf%d0%b5%d1%80%d0%b5%d1%87%d0%b5%d0%bd%d1%8c-%d0%bd%d0%be%d0%b7%d0%be%d0%bb%d0%be%d0%b3%d0%b8%d0%b8/)"
            ],
            "scholarships": []
        },
        "international": {
            "partners": 2,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--5610011387983282598",
        "name": "Казахская национальная консерватория имени Курмангазы",
        "shortName": "КазНК им. Курмангазы",
        "location": "Алматы",
        "description": "Основана в 1944 году. В 2009 году консерватория присоединилась к Болонской системе.",
        "foundedYear": 1944,
        "ranking": 42,
        "studentCount": 14000,
        "acceptanceRate": 85,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://conservatoire.edu.kz",
        "logoUrl": "/logos/uni--5610011387983282598.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [
            {
                "id": "uni--5610011387983282598-p-0",
                "name": "Инструментальное исполнительство",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-1",
                "name": "Вокальное искусство",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-2",
                "name": "Дирижирование",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-3",
                "name": "Традиционное музыкальное искусство",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-4",
                "name": "Музыковедение",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-5",
                "name": "Композиция",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-6",
                "name": "Педагогика и психология",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-7",
                "name": "Арт-менеджмент",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-8",
                "name": "Бакалавриат",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-9",
                "name": "Магистратура",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-10",
                "name": "Докторантура",
                "degree": "PhD",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-11",
                "name": "Аспапта орындаушылық",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-12",
                "name": "Вокалдық өнер",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-13",
                "name": "Дирижерлік",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--5610011387983282598-p-14",
                "name": "Дәстүрлі музыка өнері",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "Прием документов на творческие экзамены: с 20 июня по 6 июля.\nСроки проведения творческих экзаменов: с 7 по 15 июля.",
            "requirements": [
                "Для поступления на бакалавриат необходимо сдать ЕНТ и творческие экзамены."
            ],
            "scholarships": [
                "Информация о грантах: БОС ГРАНТТАР"
            ]
        },
        "international": {
            "partners": 1,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--1769193353410854537",
        "name": "Казахская национальная академия искусств имени Темирбека Жургенова",
        "shortName": "КазНАИ им. Т.К. Жургенова",
        "location": "Алматы",
        "description": "Казахская национальная академия искусств имени Темирбека Жургенова — ведущий вуз Казахстана в области подготовки творческих кадров. Академия ведет свою историю с 1955 года, когда при Алматинской консерватории был открыт театральный факультет. В 1977 году был создан Алматинский государственный театрально-художественный институт, которому в 1989 году присвоено имя Темирбека Жургенова. В 2001 году вуз получил статус национальной академии. Сегодня КазНАИ им. Т.К. Жургенова является многопрофильным учебным заведением, выпускающим специалистов в сфере театра, кино, живописи, скульптуры, хореографии, дизайна и искусствоведения.",
        "foundedYear": 1955,
        "ranking": 52,
        "studentCount": 14000,
        "acceptanceRate": 81,
        "tuitionRange": {
            "min": 700000,
            "max": 1200000
        },
        "website": "https://kaznai.kz",
        "logoUrl": "/logos/uni--1769193353410854537.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [
            {
                "id": "uni--1769193353410854537-p-0",
                "name": "Театральное искусство (Бакалавриат)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 950000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--1769193353410854537-p-1",
                "name": "Кино и ТВ (Бакалавриат)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 900000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--1769193353410854537-p-2",
                "name": "Хореография (Бакалавриат)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 800000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--1769193353410854537-p-3",
                "name": "Живопись, скульптура и дизайн (Бакалавриат)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 900000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--1769193353410854537-p-4",
                "name": "Искусствоведение (Бакалавриат)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 750000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--1769193353410854537-p-5",
                "name": "Музыкальное искусство (Бакалавриат)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 850000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--1769193353410854537-p-6",
                "name": "Театральное искусство (Магистратура)",
                "degree": "Master",
                "duration": "2 years",
                "tuition": 1000000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--1769193353410854537-p-7",
                "name": "Кино и ТВ (Магистратура)",
                "degree": "Master",
                "duration": "2 years",
                "tuition": 950000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--1769193353410854537-p-8",
                "name": "Хореография (Магистратура)",
                "degree": "Master",
                "duration": "2 years",
                "tuition": 900000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--1769193353410854537-p-9",
                "name": "Докторантура",
                "degree": "PhD",
                "duration": "3 years",
                "tuition": 1200000,
                "language": "Russian, Kazakh"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [
                "Для поступления необходимо сдать ЕНТ, пройти творческие конкурсы и предоставить аттестат о среднем образовании."
            ],
            "scholarships": []
        },
        "international": {
            "partners": 20,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-507688501153389010",
        "name": "Казахский национальный женский педагогический университет",
        "shortName": "КазНПУД",
        "location": "Алматы",
        "description": "Основан в 1944 году как Казахский государственный женский педагогический институт. Первый и единственный женский педагогический университет в Казахстане, который готовит учителей и специалистов для сферы образования. В 2018 году вуз получил статус национального университета.",
        "foundedYear": 1944,
        "ranking": 53,
        "studentCount": 5000,
        "acceptanceRate": 85,
        "tuitionRange": {
            "min": 700000,
            "max": 1000000
        },
        "website": "https://kazmkpu.kz",
        "logoUrl": "/logos/uni-507688501153389010.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [
            {
                "id": "uni-507688501153389010-p-0",
                "name": "Педагогика и психология (Бакалавриат)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 900000,
                "language": "Kazakh, Russian"
            },
            {
                "id": "uni-507688501153389010-p-1",
                "name": "Филология (Бакалавриат)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 900000,
                "language": "Kazakh, Russian"
            },
            {
                "id": "uni-507688501153389010-p-2",
                "name": "Физика, математика и цифровые технологии (Бакалавриат)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 900000,
                "language": "Kazakh, Russian"
            },
            {
                "id": "uni-507688501153389010-p-3",
                "name": "Естествознание (Бакалавриат)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 900000,
                "language": "Kazakh, Russian"
            },
            {
                "id": "uni-507688501153389010-p-4",
                "name": "Социально-гуманитарные науки и искусство (Бакалавриат)",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 900000,
                "language": "Kazakh, Russian"
            },
            {
                "id": "uni-507688501153389010-p-5",
                "name": "Магистратура",
                "degree": "Master",
                "duration": "2 years",
                "tuition": 1200000,
                "language": "Kazakh, Russian"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [
                "Необходимые документы:",
                "* Аттестат о среднем общем образовании (после 11 класса) или диплом (для выпускников колледжей) с приложениями, оригинал + копия;",
                "* Сертификат ЕНТ для выпускников школ с проходным баллом 75 или выше, для выпускников колледжей с проходным баллом 35 или выше (выпускники колледжей, не имеющие сертификата ЕНТ, принимаются на платное отделение по результатам собеседования;",
                "* Медицинская справка по форме №075 и снимок флюорографии оригинал + копия;",
                "* Паспорт здоровья или карта прививок по форме 063 2 копии;",
                "* 2 фотографии размером 3х4;",
                "* Удостоверение личности или свидетельство о рождении (оригинал + 2 копии) и удостоверение личности родителей (оригинал+копия), если абитуриент не достиг 18 лет;",
                "* Выписка из ведомости",
                "* Результат специального педагогического экзамена для поступающих на образовательные программы в области образования «Педагогические науки»;"
            ],
            "scholarships": []
        },
        "international": {
            "partners": 5,
            "exchangePrograms": [
                "Академиялық ұтқырлық, Қос дипломды білім беру бағдарламасы"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-2548293348053752146",
        "name": "Казахстанско-Британский технический университет",
        "shortName": "КБТУ",
        "location": "Алматы",
        "description": "Основан в 2001 году. КБТУ является одним из ведущих технических университетов Казахстана, специализирующимся на подготовке кадров для нефтегазовой отрасли, информационных технологий и инженерии. Сотрудничает с британскими университетами и предлагает двойные дипломные программы. Входит в мировые рейтинги QS World University Rankings и QS Asia University Rankings, занимая 230-е место в Азии в 2025 году.",
        "foundedYear": 2001,
        "ranking": 11,
        "studentCount": 7000,
        "acceptanceRate": 20,
        "tuitionRange": {
            "min": 1800000,
            "max": 3000000
        },
        "website": "https://kbtu.kz",
        "logoUrl": "/logos/uni-2548293348053752146.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [
            {
                "id": "uni-2548293348053752146-p-0",
                "name": "Бакалавриат",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-1",
                "name": "Магистратура",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-2",
                "name": "Докторантура",
                "degree": "PhD",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-3",
                "name": "Корпоративная академия образования",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-4",
                "name": "Энергетика и нефтегазовая индустрия",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-5",
                "name": "Геология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-6",
                "name": "Информационные технологии и инженерия",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-7",
                "name": "Бизнес",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-8",
                "name": "Международная экономика",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-9",
                "name": "Морская академия",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-10",
                "name": "Прикладная математика",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-11",
                "name": "Химическая инженерия",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-12",
                "name": "Материаловедение и зеленые технологии",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-13",
                "name": "Мұнай-газ ісі",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-2548293348053752146-p-14",
                "name": "Автоматтандыру және басқару",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "20 июня - 25 августа (для поступающих на платной основе), 13 - 20 июля (для участия в конкурсе на государственный грант)",
            "requirements": [
                "Для поступления на платной основе и по государственному гранту необходимо предоставить сертификат ЕНТ.",
                "Необходимые документы:",
                "1. Заявление",
                "2. Анкета",
                "3. Удостоверение личности",
                "4. Аттестат и приложение",
                "5. Сертификат ЕНТ",
                "6. Сертификат английского языка (IELTS 5.5 / TOEFL iBT 46 / STEP KBTU B1)",
                "7. Фото 3x4",
                "8. Медицинская справка 075-У",
                "9. Флюорография",
                "10. Форма 063/у (карта прививок)",
                "11. Военный билет (для юношей)",
                "12. Документы, подтверждающие льготы",
                "13. Договор об обучении",
                "14. Регистрация в Egov",
                "15. Чек об оплате Student fee (40 000 KZT)",
                "16. Чек об оплате за 1 семестр (для поступающих на платное отделение)"
            ],
            "scholarships": [
                "KAZENERGY грант"
            ]
        },
        "international": {
            "partners": 7,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "High",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-5774996796084143496",
        "name": "Университет КИМЭП",
        "shortName": "КИМЭП",
        "location": "Алматы",
        "description": "Университет КИМЭП (Kazakhstan Institute of Management, Economics and Forecasting) — частное некоммерческое высшее учебное заведение в Алматы, основанное в 1992 году. Является одним из ведущих частных университетов в Казахстане, специализирующимся на подготовке специалистов в области бизнеса, экономики, социальных и гуманитарных наук. Университет имеет международную аккредитацию и предлагает программы бакалавриата, магистратуры и докторантуры на английском языке. Входит в мировые рейтинги QS World University Rankings (1001-1200 место в 2025 году) и QS Asia University Rankings (269 место в 2025 году).",
        "foundedYear": 1992,
        "ranking": 12,
        "studentCount": 14000,
        "acceptanceRate": 35,
        "tuitionRange": {
            "min": 4300000,
            "max": 5300000
        },
        "website": "https://kimep.kz",
        "logoUrl": "/logos/uni-5774996796084143496.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [
            {
                "id": "uni-5774996796084143496-p-0",
                "name": "Факультет Бизнеса имени Бэнга",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5774996796084143496-p-1",
                "name": "Факультет Социальных Наук",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5774996796084143496-p-2",
                "name": "Факультет гуманитарных наук и образования",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5774996796084143496-p-3",
                "name": "Школа Права",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5774996796084143496-p-4",
                "name": "Факультет компьютерных наук и математики",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5774996796084143496-p-5",
                "name": "Образовательный центр для руководящих кадров",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "",
            "requirements": [
                "Для поступления необходимо предоставить аттестат о среднем образовании и сертификат IELTS/TOEFL."
            ],
            "scholarships": [
                "Гранты: https://www.kimep.kz/prospective-students/ru/financial-aid/",
                "Скидки: Доступны скидки за высокую успеваемость, а также стипендии от различных фондов."
            ]
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--6587150839111909576",
        "name": "Международный казахско-турецкий университет имени Ходжи Ахмеда Ясави",
        "shortName": "МКТУ",
        "location": "Туркестан",
        "description": "Международный казахско-турецкий университет имени Ходжи Ахмеда Ясави (МКТУ им. Х. А. Ясави) — первое международное высшее учебное заведение в Казахстане, расположенное в духовном центре тюркского мира, городе Туркестан. Основан в 1991 году по инициативе Президента Республики Казахстан Н.А.Назарбаева и на основе Межправительственного соглашения между Казахстаном и Турцией. Университет готовит высококвалифицированных специалистов для тюркоязычных стран, предлагая многоуровневую систему образования (бакалавриат, магистратура, докторантура) и обучение на казахском, турецком, русском и английском языках. Входит в рейтинг QS Asia University Rankings (239 место в 2023 году).",
        "foundedYear": 1991,
        "ranking": 239,
        "studentCount": 6000,
        "acceptanceRate": 68,
        "tuitionRange": {
            "min": 500000,
            "max": 800000
        },
        "website": "https://ayu.edu.kz",
        "logoUrl": "/logos/uni--6587150839111909576.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [
            {
                "id": "uni--6587150839111909576-p-0",
                "name": "Стоматология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-1",
                "name": "Естественные науки",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-2",
                "name": "Филология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-3",
                "name": "Экономика и управление",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-4",
                "name": "Теология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-5",
                "name": "Подготовительный центр",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-6",
                "name": "Юриспруденция",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-7",
                "name": "Образование и гуманитарные исследования",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-8",
                "name": "Медицина",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-9",
                "name": "Инженерия",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-10",
                "name": "Медицинское образование",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-11",
                "name": "Спорт",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-12",
                "name": "Бакалавриат",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-13",
                "name": "Магистратура",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6587150839111909576-p-14",
                "name": "Резидентура",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [
                "ЕНТ, документы (более подробная информация по ссылке: https://talapker.ayu.edu.kz/)"
            ],
            "scholarships": [
                "Наш университет предлагает своим студентам стипендии от различных организаций."
            ]
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "dku",
        "name": "Казахстанско-Немецкий Университет",
        "shortName": "DKU",
        "location": "Алматы",
        "description": "Казахстанско-Немецкий Университет (DKU) — частное некоммерческое высшее учебное заведение в Алматы, основанное в 1999 году. DKU является международным университетом, представляющим сотрудничество между Казахстаном и Германией. Университет готовит специалистов со знанием двух иностранных языков, применяя немецкие стандарты образования. Обучение ведется на английском, немецком и русском языках. Лучшие студенты имеют возможность пройти обучение в Германии по программе двойного диплома.",
        "foundedYear": 1999,
        "ranking": 54,
        "studentCount": 14000,
        "acceptanceRate": 80,
        "tuitionRange": {
            "min": 1500000,
            "max": 2500000
        },
        "website": "https://dku.kz",
        "logoUrl": "/logos/dku.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [
            {
                "id": "dku-p-0",
                "name": "Программы бакалавриата",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "dku-p-1",
                "name": "Программы магистратуры",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "dku-p-2",
                "name": "Летний университет",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "dku-p-3",
                "name": "Языковые курсы & Тесты",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "dku-p-4",
                "name": "Центр Довузовской Подготовки",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [
                "Для поступления необходимо сдать ЕНТ, пройти собеседование и предоставить сертификат, подтверждающий знание немецкого языка на уровне В1 (для программ с немецким языком обучения)."
            ],
            "scholarships": [
                "Конкурс на социальные стипендии от немецкой компании «Thomas Kurze GmbH» 25.11.2025, Результаты конкурса. Стипендии генерального консульства германии для студентов DKU немецкой национальности 17.11.2025, Перераспределение стипендий DAAD на обучение в 2025/2026 учебном году, Результаты конкурса. Cтипендия Erasmus+ на обучение во Freie Universität Berlin"
            ]
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Программа \"Двойной диплом\", Академическая мобильность, Erasmus+"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        },
        "virtualTourUrl": "https://dku.kz/ru/virtualnyj-tur"
    },
    {
        "id": "uni-5232179869495242864",
        "name": "Карагандинский университет имени академика Е.А. Букетова",
        "shortName": "КарУ",
        "location": "Караганда",
        "description": "1938: Открытие Карагандинского учительского института.\n1952: Карагандинский учительский институт преобразован в Педагогический институт.\n1972: Педагогический институт преобразован в Карагандинский государственный университет.\n1992: Карагандинскому государственному университету присвоено имя академика Евнея Арыстановича Букетова.\n2024: Карагандинскому университету имени академика Е.А. Букетова присвоен статус исследовательского университета.\n2025: Карагандинскому исследовательскому университету имени академика Е.А. Букетова присвоен национальный статус.",
        "foundedYear": 1938,
        "ranking": 10,
        "studentCount": 13300,
        "acceptanceRate": 79,
        "tuitionRange": {
            "min": 400000,
            "max": 800000
        },
        "website": "https://buketov.edu.kz",
        "logoUrl": "/logos/uni-5232179869495242864.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [
            {
                "id": "uni-5232179869495242864-p-0",
                "name": "Бакалавриат",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-1",
                "name": "Магистратура",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-2",
                "name": "Докторантура",
                "degree": "PhD",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-3",
                "name": "Иностранный язык два иностранных языка",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-4",
                "name": "Профессиональное обучение",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-5",
                "name": "Переводческое дело",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-6",
                "name": "Государственный аудит",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-7",
                "name": "Социальная работа",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-8",
                "name": "Приборостроение",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-9",
                "name": "История",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-10",
                "name": "Казахский язык и литература",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-11",
                "name": "Русский язык и литература",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-12",
                "name": "Основы права и экономики",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-13",
                "name": "Социология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-5232179869495242864-p-14",
                "name": "Учет и аудит",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [
                "Диплом алудың міндетті шарты – кемінде 240 кредитті игеру қажет. (Обязательное условие получения диплома – необходимо освоить не менее 240 кредитов.)"
            ],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Erasmus Mundus, DAAD"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "High",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--6700319370335425844",
        "name": "Кызылординский университет им. Коркыт Ата",
        "shortName": "КУ им. Коркыт Ата",
        "location": "Кызылорда",
        "description": "Кызылординский университет имени Коркыт Ата — высшее учебное заведение в городе Кызылорда, основанное в 1937 году как педагогический институт. В 1998 году объединен с Кызылординским политехническим институтом. Университет является крупным региональным образовательным и научным центром, предлагающим широкий спектр программ бакалавриата, магистратуры и докторантуры. Вуз активно развивает инфраструктуру, имеет 7 факультетов, включая Инженерно-технологический, Филологии, Педагогический и Экономики.",
        "foundedYear": 1937,
        "ranking": 55,
        "studentCount": 14000,
        "acceptanceRate": 92,
        "tuitionRange": {
            "min": 591000,
            "max": 800000
        },
        "website": "https://korkyt.kz",
        "logoUrl": "/logos/uni--6700319370335425844.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [
            {
                "id": "uni--6700319370335425844-p-0",
                "name": "Педагогика и психология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 591000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--6700319370335425844-p-1",
                "name": "Информационные технологии",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 650000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--6700319370335425844-p-2",
                "name": "Градостроительство и строительство",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 700000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--6700319370335425844-p-3",
                "name": "Филология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 591000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--6700319370335425844-p-4",
                "name": "Менеджмент и управление",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 600000,
                "language": "Russian, Kazakh"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-6316516275990030104",
        "name": "Актюбинский региональный университет им. К. Жубанова",
        "shortName": "АРУ им. К. Жубанова",
        "location": "Актобе",
        "description": "Актюбинский региональный университет имени К. Жубанова (АРУ) — многопрофильное высшее учебное заведение, расположенное в городе Актобе, основанное в 1966 году как педагогический институт. Университет готовит специалистов в различных областях, включая гуманитарные, естественные, технические и социальные науки. Вуз активно развивает международное сотрудничество и предлагает программы академической мобильности. Входит в QS Asia University Rankings.",
        "foundedYear": 1966,
        "ranking": 56,
        "studentCount": 14000,
        "acceptanceRate": 92,
        "tuitionRange": {
            "min": 594000,
            "max": 763200
        },
        "website": "https://arsu.kz",
        "logoUrl": "/logos/uni-6316516275990030104.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni-6316516275990030104-p-0",
                "name": "Педагогические науки",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 594000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni-6316516275990030104-p-1",
                "name": "Информационно-коммуникационные технологии",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 763200,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni-6316516275990030104-p-2",
                "name": "Инженерные, обрабатывающие и строительные отрасли",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 763200,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni-6316516275990030104-p-3",
                "name": "Искусство и гуманитарные науки",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 594000,
                "language": "Russian, Kazakh"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--1240759454570653317",
        "name": "Западно-Казахстанский университет им. М. Утемисова",
        "shortName": "ЗКУ им. М. Утемисова",
        "location": "Уральск",
        "description": "Западно-Казахстанский университет имени Махамбета Утемисова (ЗКУ им. М. Утемисова) — одно из старейших высших учебных заведений Западного Казахстана, основанное в 1932 году как Уральский педагогический институт. Университет является многопрофильным вузом, предлагающим программы бакалавриата и магистратуры по различным специальностям в области педагогики, инженерии, сельского хозяйства, права и экономики.",
        "foundedYear": 1932,
        "ranking": 57,
        "studentCount": 14000,
        "acceptanceRate": 60,
        "tuitionRange": {
            "min": 500000,
            "max": 700000
        },
        "website": "https://wksu.kz",
        "logoUrl": "/logos/uni--1240759454570653317.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni--1240759454570653317-p-0",
                "name": "Педагогика и психология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 550000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--1240759454570653317-p-1",
                "name": "Информационные технологии",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 650000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--1240759454570653317-p-2",
                "name": "Юриспруденция",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 600000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--1240759454570653317-p-3",
                "name": "Филология и языки",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 550000,
                "language": "Russian, Kazakh"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--4281874192912560931",
        "name": "Жетысуский университет им. И. Жансугурова",
        "shortName": "ЖУ им. И. Жансугурова",
        "location": "Талдыкорган",
        "description": "Жетысуский университет имени Ильяса Жансугурова (ЖУ им. И. Жансугурова) — многопрофильный региональный университет, расположенный в Талдыкоргане, основанный в 1972 году. Входит в десятку лучших многопрофильных вузов Казахстана. Университет готовит специалистов новой формации в области образования, экономики, права и технических наук, активно развивает международное сотрудничество и программы двойного диплома. Вуз предлагает более 40 специальностей бакалавриата и 6 специальностей магистратуры.",
        "foundedYear": 1972,
        "ranking": 58,
        "studentCount": 14000,
        "acceptanceRate": 71,
        "tuitionRange": {
            "min": 750000,
            "max": 900000
        },
        "website": "https://zhgu.edu.kz",
        "logoUrl": "/logos/uni--4281874192912560931.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni--4281874192912560931-p-0",
                "name": "Педагогика и психология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 750000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--4281874192912560931-p-1",
                "name": "Информационные системы",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 800000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--4281874192912560931-p-2",
                "name": "Право",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 850000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--4281874192912560931-p-3",
                "name": "Экономика",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 750000,
                "language": "Russian, Kazakh"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--7465315310493106002",
        "name": "Таразский региональный университет им. М.Х. Дулати",
        "shortName": "ТарРУ им. М.Х. Дулати",
        "location": "Тараз",
        "description": "Таразский региональный университет имени М.Х. Дулати (ТарРУ им. М.Х. Дулати) — ведущий образовательный центр Южного Казахстана, основанный в 1958 году. Университет является многопрофильным вузом, предлагающим программы в области гуманитарных, социальных, технических и естественных наук. Входит в Национальный рейтинг лучших многопрофильных вузов Казахстана (7 место в 2024 году). Вуз предлагает более 150 образовательных программ по различным направлениям.",
        "foundedYear": 1958,
        "ranking": 7,
        "studentCount": 14000,
        "acceptanceRate": 79,
        "tuitionRange": {
            "min": 500000,
            "max": 800000
        },
        "website": "https://tarsu.kz",
        "logoUrl": "/logos/uni--7465315310493106002.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni--7465315310493106002-p-0",
                "name": "Педагогика и методика начального обучения",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 550000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--7465315310493106002-p-1",
                "name": "Экономика и управление",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 600000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--7465315310493106002-p-2",
                "name": "Юриспруденция",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 650000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--7465315310493106002-p-3",
                "name": "Архитектура и строительство",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 700000,
                "language": "Russian, Kazakh"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-2080271182886988573",
        "name": "Мангистауский университет им. Ш. Есенова",
        "shortName": "Yessenov University",
        "location": "Актау",
        "description": "Мангистауский университет имени Ш. Есенова (Yessenov University) — ведущее многопрофильное высшее учебное заведение в Актау, основанное в 1976 году. Университет является главным центром образования, науки и культуры в Прикаспийском регионе. Готовит специалистов для нефтегазовой промышленности, инженерии, морского транспорта, педагогики, юриспруденции и экономики. Вуз предлагает 62 специальности бакалавриата, 35 магистратуры и 7 докторантуры.",
        "foundedYear": 1976,
        "ranking": 59,
        "studentCount": 14000,
        "acceptanceRate": 73,
        "tuitionRange": {
            "min": 450000,
            "max": 600000
        },
        "website": "https://mu.edu.kz",
        "logoUrl": "/logos/uni-2080271182886988573.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni-2080271182886988573-p-0",
                "name": "Нефтегазовый инжиниринг",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 550000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni-2080271182886988573-p-1",
                "name": "Морская академия",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 600000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni-2080271182886988573-p-2",
                "name": "Информационные технологии",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 500000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni-2080271182886988573-p-3",
                "name": "Педагогика и психология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 450000,
                "language": "Russian, Kazakh"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-5621531000843829357",
        "name": "Аркалыкский педагогический университет им. И. Алтынсарина",
        "shortName": "АркПИ им. И. Алтынсарина",
        "location": "Аркалык",
        "description": "Аркалыкский педагогический университет имени Ыбырая Алтынсарина — государственное высшее учебное заведение в Аркалыке, основанное в 1972 году. Специализируется на подготовке педагогических кадров, предлагая программы в области педагогики, психологии, филологии и естественных наук. Является одним из старейших региональных педагогических вузов Казахстана. По данным рейтинга НПП «Атамекен» (2023), университет занимает 1-е место по уровню трудоустройства выпускников – 94%.",
        "foundedYear": 1972,
        "ranking": 60,
        "studentCount": 5000,
        "acceptanceRate": 73,
        "tuitionRange": {
            "min": 568000,
            "max": 700000
        },
        "website": "https://api.kz",
        "logoUrl": "/logos/uni-5621531000843829357.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni-5621531000843829357-p-0",
                "name": "Педагогика и психология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 600000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni-5621531000843829357-p-1",
                "name": "Математика и информатика",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 600000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni-5621531000843829357-p-2",
                "name": "Физическая культура и спорт",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 600000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni-5621531000843829357-p-3",
                "name": "Казахский язык и литература",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 600000,
                "language": "Kazakh"
            }
        ],
        "admissions": {
            "deadline": "10 - 25 августа",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 94,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--2449650824423817646",
        "name": "Западно-Казахстанский медицинский университет им. М. Оспанова",
        "shortName": "ЗКМУ им. М. Оспанова",
        "location": "Актобе",
        "description": "Западно-Казахстанский медицинский университет имени Марата Оспанова (ЗКМУ) — ведущий медицинский вуз в Актобе, основанный в 1957 году. Университет готовит медицинские кадры для западного Казахстана, предлагая обучение по широкому спектру медицинских специальностей, включая общую медицину, стоматологию, фармацию и общественное здравоохранение. Университет активно участвует в международных научных проектах.",
        "foundedYear": 1957,
        "ranking": 61,
        "studentCount": 6000,
        "acceptanceRate": 84,
        "tuitionRange": {
            "min": 1033163,
            "max": 1640906
        },
        "website": "https://zkmu.kz",
        "logoUrl": "/logos/uni--2449650824423817646.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni--2449650824423817646-p-0",
                "name": "Общая медицина",
                "degree": "Bachelor",
                "duration": "5 years",
                "tuition": 1090000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--2449650824423817646-p-1",
                "name": "Стоматология",
                "degree": "Bachelor",
                "duration": "5 years",
                "tuition": 1200000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--2449650824423817646-p-2",
                "name": "Фармация",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 1033163,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni--2449650824423817646-p-3",
                "name": "Общественное здравоохранение",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 1033163,
                "language": "Russian, Kazakh"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-2869147498913696167",
        "name": "Семейский медицинский университет",
        "shortName": "МУС",
        "location": "Семей",
        "description": "Медицинский университет Семей (МУС) — один из крупнейших медицинских вузов Казахстана, основанный в 1953 году. Университет имеет богатые исторические традиции, собственную клиническую базу и филиалы в Павлодаре и Усть-Каменогорске. Предлагает полный цикл медицинского образования (бакалавриат, интернатура, резидентура, магистратура, докторантура) и является одним из ведущих медицинских вузов страны.",
        "foundedYear": 1953,
        "ranking": 62,
        "studentCount": 6000,
        "acceptanceRate": 67,
        "tuitionRange": {
            "min": 1020000,
            "max": 1200000
        },
        "website": "https://semeymeduniversity.kz",
        "logoUrl": "/logos/uni-2869147498913696167.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni-2869147498913696167-p-0",
                "name": "Общая медицина",
                "degree": "Bachelor",
                "duration": "5 years",
                "tuition": 1200000,
                "language": "Russian, Kazakh, English"
            },
            {
                "id": "uni-2869147498913696167-p-1",
                "name": "Стоматология",
                "degree": "Bachelor",
                "duration": "5 years",
                "tuition": 1200000,
                "language": "Russian, Kazakh, English"
            },
            {
                "id": "uni-2869147498913696167-p-2",
                "name": "Педиатрия",
                "degree": "Bachelor",
                "duration": "5 years",
                "tuition": 1020000,
                "language": "Russian, Kazakh"
            },
            {
                "id": "uni-2869147498913696167-p-3",
                "name": "Фармация",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 1020000,
                "language": "Russian, Kazakh"
            }
        ],
        "admissions": {
            "deadline": "13 - 20 июля (конкурс на грант), 10 - 25 августа (платное отделение)",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uib",
        "name": "Университет международного бизнеса (UIB)",
        "shortName": "UIB",
        "location": "Алматы",
        "description": "Университет международного бизнеса (UIB) — ведущий частный вуз Казахстана, основанный в 1992 году как Республиканская школа бизнеса. В 2001 году преобразован в университет. UIB специализируется на подготовке специалистов в области экономики, финансов, менеджмента, права и IT. Университет аккредитован Независимым казахстанским агентством по обеспечению качества в образовании (НКАОКО) и Австрийским агентством по качеству (AQA) по образовательным программам «Финансы и Экономика». В UIB обучается более 3000 студентов по программам бакалавриата, магистратуры и докторантуры.",
        "foundedYear": 1992,
        "ranking": 74,
        "studentCount": 14000,
        "acceptanceRate": 88,
        "tuitionRange": {
            "min": 1260000,
            "max": 0
        },
        "website": "https://uib.kz",
        "logoUrl": "/logos/uib.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [
            {
                "id": "uib-p-fix-0",
                "name": "Бакалавриат",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uib-p-fix-1",
                "name": "Магистратура",
                "degree": "Master",
                "duration": "2 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uib-p-fix-2",
                "name": "Докторантура",
                "degree": "PhD",
                "duration": "2 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uib-p-fix-3",
                "name": "MBA",
                "degree": "Master",
                "duration": "2 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uib-p-fix-4",
                "name": "DBA",
                "degree": "PhD",
                "duration": "2 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Программы академической мобильности",
                "Программы двойного диплома"
            ]
        },
        "stats": {
            "employmentRate": 95,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--2373279794740369929",
        "name": "Казахский университет технологии и бизнеса им. К. Кулажанова",
        "shortName": "КазУТБ",
        "location": "Астана",
        "description": "Казахский университет технологии и бизнеса имени К. Кулажанова (КазУТБ) — высшее учебное заведение в Астане, специализирующееся на подготовке конкурентоспособных кадров для пищевой, легкой и нефтехимической отраслей промышленности. Университет осуществляет многоуровневую систему подготовки специалистов, включая колледж, бакалавриат и магистратуру.",
        "foundedYear": 2000,
        "ranking": 16,
        "studentCount": 7000,
        "acceptanceRate": 87,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kutb.kz",
        "logoUrl": "/logos/uni--2373279794740369929.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--2857123560887802612",
        "name": "Международный инженерно-технологический университет (МИТУ)",
        "shortName": "МИТУ",
        "location": "Алматы",
        "description": "Международный инженерно-технологический университет (ранее КазИТУ) — высшее учебное заведение в Алматы, основанное в 2001 году. Университет специализируется на подготовке кадров в технических, технологических, аграрных, экономических и IT-специальностях. В 2022 году университет был переименован в МИТУ. Ведет подготовку специалистов по программам бакалавриата, магистратуры и докторантуры.",
        "foundedYear": 2001,
        "ranking": 75,
        "studentCount": 7000,
        "acceptanceRate": 67,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kitu.edu.kz",
        "logoUrl": "/logos/uni--2857123560887802612.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-7516652595068970342",
        "name": "Алматинский гуманитарно-экономический университет (АГЭУ)",
        "shortName": "АГЭУ",
        "location": "Алматы",
        "description": "Алматинский гуманитарно-экономический университет (АГЭУ) был создан в 2021 году путем объединения Алматинской академии экономики и статистики и университета «Алматы». Вуз специализируется на подготовке бакалавров и магистров в области гуманитарных наук, экономики, статистики, менеджмента, информатики и социальных дисциплин. Университет активно внедряет инновационные методики обучения и развивает международное сотрудничество.",
        "foundedYear": 2021,
        "ranking": 76,
        "studentCount": 14000,
        "acceptanceRate": 75,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://algeu.edu.kz",
        "logoUrl": "/logos/uni-7516652595068970342.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Программы академической мобильности"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-507883223402847990",
        "name": "Центрально-Азиатский университет (ЦАУ)",
        "shortName": "ЦАУ",
        "location": "Алматы",
        "description": "Центрально-Азиатский университет (ЦАУ) — частный университет в Алматы, основанный в 1997 году. Предлагает программы по широкому спектру направлений, включая нефтегазовое дело, машиностроение, информационные системы, экономику, юриспруденцию и педагогику. Университет активно развивает международные отношения и программы двойного диплома.",
        "foundedYear": 1997,
        "ranking": 77,
        "studentCount": 14000,
        "acceptanceRate": 66,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://cau.edu.kz",
        "logoUrl": "/logos/uni-507883223402847990.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Программы двойного диплома"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--7624519557524614851",
        "name": "Университет Алматы",
        "shortName": "Университе...",
        "location": "Алматы",
        "description": "Университет Алматы - высшее учебное заведение в Алматы. Информация по году основания и детальным программам требует уточнения. Согласно некоторым источникам, университет участвовал в процессе объединения с Алматинской академией экономики и статистики, в результате чего был сформирован АГЭУ.",
        "foundedYear": 2000,
        "ranking": 78,
        "studentCount": 14000,
        "acceptanceRate": 79,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://almaty-uni.kz",
        "logoUrl": "/logos/uni--7624519557524614851.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--7962034477461320147",
        "name": "Maqsut Narikbayev University (MNU)",
        "shortName": "MNU (KAZGUU)",
        "location": "Астана",
        "description": "Maqsut Narikbayev University (MNU), ранее известный как Казахский гуманитарно-юридический университет (KAZGUU), основан в 1994 году. MNU является ведущим университетом Казахстана в области права, экономики и гуманитарных наук. Это первый вуз в Центральной Азии, получивший британскую аккредитацию QAA Global Quality Award. Университет занимает лидирующие позиции в национальных рейтингах по востребованности образовательных программ.",
        "foundedYear": 1994,
        "ranking": 1,
        "studentCount": 14000,
        "acceptanceRate": 73,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kgyu.kz",
        "logoUrl": "/logos/uni--7962034477461320147.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [
            {
                "id": "uni--7962034477461320147-p-fix-0",
                "name": "Право",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--7962034477461320147-p-fix-1",
                "name": "Экономика",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--7962034477461320147-p-fix-2",
                "name": "Международные отношения",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--7962034477461320147-p-fix-3",
                "name": "Журналистика",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--7962034477461320147-p-fix-4",
                "name": "Психология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 95,
            "exchangePrograms": [
                "Академическая мобильность"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-8130542700432115702",
        "name": "Казахская академия труда и социальных отношений",
        "shortName": "Казахская ...",
        "location": "Алматы",
        "description": "Казахская академия труда и социальных отношений — специализированный государственный вуз в Алматы, основанный в 1991 году. Готовит специалистов в области управления персоналом, социологии, социальной работы, трудового права и экономики труда.",
        "foundedYear": 1991,
        "ranking": 79,
        "studentCount": 14000,
        "acceptanceRate": 83,
        "tuitionRange": {
            "min": 600000,
            "max": 900000
        },
        "website": "https://atso.kz",
        "logoUrl": "/logos/uni-8130542700432115702.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-1324505861564009776",
        "name": "Казахстанский университет инновационных и телекоммуникационных систем",
        "shortName": "Казахстанс...",
        "location": "Уральск",
        "description": "Казахстанский университет инновационных и телекоммуникационных систем (КИТС) — частный технический вуз в Уральске, основанный в 1994 году.  Специализируется на подготовке IT-специалистов, инженеров телекоммуникаций и программистов.",
        "foundedYear": 1994,
        "ranking": 80,
        "studentCount": 14000,
        "acceptanceRate": 87,
        "tuitionRange": {
            "min": 650000,
            "max": 950000
        },
        "website": "https://kazkits.kz",
        "logoUrl": "/logos/uni-1324505861564009776.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--3667488677691254893",
        "name": "Университет Сырдария",
        "shortName": "Университе...",
        "location": "Жетысай",
        "description": "Университет Сырдария — региональный государственный вуз в Жетысае (Туркестанская область), основанный в 1998 году. Готовит специалистов в области педагогики, экономики и сельского хозяйства для Южного Казахстана.",
        "foundedYear": 1998,
        "ranking": 81,
        "studentCount": 14000,
        "acceptanceRate": 83,
        "tuitionRange": {
            "min": 450000,
            "max": 700000
        },
        "website": "https://syrdariya.kz",
        "logoUrl": "/logos/uni--3667488677691254893.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--8015805321285272653",
        "name": "Инновационный Евразийский университет",
        "shortName": "Инновацион...",
        "location": "Павлодар",
        "description": "Инновационный Евразийский университет (ИнЕУ) — частный многопрофильный вуз в Павлодаре, основанный в 1999 году. Предлагает программы по экономике, юриспруденции, IT-технологиям, педагогике и техническим специальностям.",
        "foundedYear": 1999,
        "ranking": 82,
        "studentCount": 14000,
        "acceptanceRate": 71,
        "tuitionRange": {
            "min": 650000,
            "max": 950000
        },
        "website": "https://ieu.edu.kz",
        "logoUrl": "/logos/uni--8015805321285272653.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--6029595919813922830",
        "name": "Университет Улагат",
        "shortName": "Университе...",
        "location": "Кызылорда",
        "description": "Университет Улагат — частный региональный вуз в Кызылорде, основанный в 2000 году. Предлагает программы по экономике, юриспруденции, педагогике и сельскохозяйственным направлениям.",
        "foundedYear": 2000,
        "ranking": 83,
        "studentCount": 14000,
        "acceptanceRate": 91,
        "tuitionRange": {
            "min": 550000,
            "max": 800000
        },
        "website": "https://ulagat.edu.kz",
        "logoUrl": "/logos/uni--6029595919813922830.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--3808121638271283244",
        "name": "Университет Болашак",
        "shortName": "Университе...",
        "location": "Караганда",
        "description": "Университет Болашак — частный многопрофильный вуз в Караганде, основанный в 1994 году. Предлагает программы по экономике, юриспруденции, IT-технологиям, педагогике и техническим специальностям.",
        "foundedYear": 1994,
        "ranking": 84,
        "studentCount": 14000,
        "acceptanceRate": 78,
        "tuitionRange": {
            "min": 600000,
            "max": 900000
        },
        "website": "https://bulan.edu.kz",
        "logoUrl": "/logos/uni--3808121638271283244.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-3398268972084741579",
        "name": "Казахский университет экономики, финансов и международной торговли",
        "shortName": "Казахский ...",
        "location": "Астана",
        "description": "Казахский университет экономики, финансов и международной торговли (КУЭФМТ) — специализированный экономический вуз в Астане, основанный в 1992 году. Готовит экономистов, финансистов, специалистов по международной торговле и логистике.",
        "foundedYear": 1992,
        "ranking": 85,
        "studentCount": 14000,
        "acceptanceRate": 88,
        "tuitionRange": {
            "min": 700000,
            "max": 1000000
        },
        "website": "https://kuef.kz",
        "logoUrl": "/logos/uni-3398268972084741579.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--1589279087798563624",
        "name": "Медицинский университет Астана (МУА)",
        "shortName": "МУА",
        "location": "Астана",
        "description": "Медицинский университет Астана (МУА) — одно из крупнейших медицинских учебных заведений Казахстана, основанное в 1964 году как Целиноградский государственный медицинский институт. В 2009 году реорганизован в Медицинский университет Астана. Университет предлагает многоуровневую систему образования (бакалавриат, магистратура, докторантура) и является одним из ведущих медицинских вузов страны. В 2024 году МУА впервые вошел в рейтинг Times Higher Education World University Rankings.",
        "foundedYear": 1964,
        "ranking": 7,
        "studentCount": 6000,
        "acceptanceRate": 80,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://mua.edu.kz",
        "logoUrl": "/logos/uni--1589279087798563624.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-2776272513983860451",
        "name": "Университет Есенова",
        "shortName": "Университе...",
        "location": "Актау",
        "description": "Университет Есенова — частный технический университет в Актау, основанный в 2011 году. Специализируется на подготовке инженеров для нефтегазовой отрасли, морского транспорта и IT-технологий.",
        "foundedYear": 2011,
        "ranking": 28,
        "studentCount": 14000,
        "acceptanceRate": 70,
        "tuitionRange": {
            "min": 750000,
            "max": 1100000
        },
        "website": "https://esenovuniversity.kz",
        "logoUrl": "/logos/uni-2776272513983860451.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "adam",
        "name": "Университет ADAM",
        "shortName": "Университе...",
        "location": "Астана",
        "description": "Университет ADAM — частный многопрофильный вуз в Астане, основанный в 1992 году. Специализируется на подготовке специалистов в области экономики, юриспруденции, международных отношений, дизайна и IT-технологий.",
        "foundedYear": 1992,
        "ranking": 86,
        "studentCount": 14000,
        "acceptanceRate": 70,
        "tuitionRange": {
            "min": 800000,
            "max": 1200000
        },
        "website": "https://adam.edu.kz",
        "logoUrl": "/logos/adam.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-6345571375383274556",
        "name": "Евразийская юридическая академия им. Д.А. Кунаева",
        "shortName": "Евразийска...",
        "location": "Алматы",
        "description": "Евразийская юридическая академия имени Д.А. Кунаева — специализированное юридическое учебное заведение, основанное в 1994 году. Готовит юристов высокой квалификации для правоохранительных органов, судебной системы и частного сектора.",
        "foundedYear": 1994,
        "ranking": 87,
        "studentCount": 14000,
        "acceptanceRate": 91,
        "tuitionRange": {
            "min": 700000,
            "max": 950000
        },
        "website": "https://eyau.edu.kz",
        "logoUrl": "/logos/uni-6345571375383274556.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-1172230913695353967",
        "name": "Казахстанский университет народного дружбы",
        "shortName": "Казахстанс...",
        "location": "Астана",
        "description": "Казахстанский университет народов дружбы — многопрофильный частный вуз в Астане, специализирующийся на подготовке кадров в области педагогики, экономики, юриспруденции и гуманитарных наук. Основан в 1997 году.",
        "foundedYear": 1997,
        "ranking": 88,
        "studentCount": 14000,
        "acceptanceRate": 79,
        "tuitionRange": {
            "min": 600000,
            "max": 850000
        },
        "website": "https://kudn.kz",
        "logoUrl": "/logos/uni-1172230913695353967.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--7767533976299188269",
        "name": "Баишев Университет",
        "shortName": "Баишев Уни...",
        "location": "Актобе",
        "description": "Баишев Университет — частный многопрофильный вуз в Актобе, основанный в 1992 году. Предлагает программы в области экономики, юриспруденции, педагогики, технических специальностей и IT.",
        "foundedYear": 1992,
        "ranking": 89,
        "studentCount": 14000,
        "acceptanceRate": 77,
        "tuitionRange": {
            "min": 600000,
            "max": 950000
        },
        "website": "https://baishev.edu.kz",
        "logoUrl": "/logos/uni--7767533976299188269.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--4287225410822319410",
        "name": "Казахская академия физической культуры и спорта",
        "shortName": "Казахская ...",
        "location": "Алматы",
        "description": "Казахская академия физической культуры и спорта — национальный центр подготовки спортивных специалистов, тренеров, преподавателей физической культуры и спортивных менеджеров. Основана в 1960 году.",
        "foundedYear": 1960,
        "ranking": 90,
        "studentCount": 14000,
        "acceptanceRate": 87,
        "tuitionRange": {
            "min": 600000,
            "max": 900000
        },
        "website": "https://kazafc.kz",
        "logoUrl": "/logos/uni--4287225410822319410.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-652018238566937002",
        "name": "Военный институт Сухопутных войск",
        "shortName": "Военный ин...",
        "location": "Алматы",
        "description": "Военный институт Сухопутных войск имени Сагадата Нурмагамбетова — военное учебное заведение, готовящее офицеров для Сухопутных войск Вооруженных Сил РК. Обучение по военным специальностям. Основан в 1992 году.",
        "foundedYear": 1992,
        "ranking": 91,
        "studentCount": 14000,
        "acceptanceRate": 86,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://visu.kz",
        "logoUrl": "/logos/uni-652018238566937002.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-4673225052641464349",
        "name": "Академия правоохранительных органов при Генеральной прокуратуре",
        "shortName": "Академия п...",
        "location": "Астана",
        "description": "Академия правоохранительных органов при Генеральной прокуратуре РК — специализированное учебное заведение, готовящее кадры для органов прокуратуры, следственных и антикоррупционных органов. Основана в 1996 году.",
        "foundedYear": 1996,
        "ranking": 92,
        "studentCount": 14000,
        "acceptanceRate": 75,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://apo.gov.kz",
        "logoUrl": "/logos/uni-4673225052641464349.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--1589073166592525227",
        "name": "Пограничная академия КНБ РК",
        "shortName": "Погранична...",
        "location": "Алматы",
        "description": "Пограничная академия КНБ РК имени Калмаханова — военное учебное заведение, готовящее офицеров для пограничной службы Комитета национальной безопасности РК. Основана в 1992 году.",
        "foundedYear": 1992,
        "ranking": 93,
        "studentCount": 14000,
        "acceptanceRate": 73,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://pa.gov.kz",
        "logoUrl": "/logos/uni--1589073166592525227.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-4858577021546458940",
        "name": "Алматинская академия МВД РК",
        "shortName": "Алматинска...",
        "location": "Алматы",
        "description": "Алматинская академия МВД РК имени Макана Есбулатова — ведущее учебное заведение системы МВД, готовящее офицеров полиции, следственных работников и специалистов по внутренней безопасности. Основана в 1991 году.",
        "foundedYear": 1991,
        "ranking": 94,
        "studentCount": 14000,
        "acceptanceRate": 87,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://amvd.kz",
        "logoUrl": "/logos/uni-4858577021546458940.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-5242256392506902384",
        "name": "Костанайская академия МВД РК",
        "shortName": "Костанайск...",
        "location": "Костанай",
        "description": "Костанайская академия МВД РК имени Ш. Кабылбаева — региональное учебное заведение системы МВД, специализирующееся на подготовке кадров для правоохранительных органов Северного Казахстана. Основана в 1995 году.",
        "foundedYear": 1995,
        "ranking": 95,
        "studentCount": 14000,
        "acceptanceRate": 84,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kamvd.kz",
        "logoUrl": "/logos/uni-5242256392506902384.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-1043673213119592951",
        "name": "Карагандинская академия МВД РК",
        "shortName": "Карагандин...",
        "location": "Караганда",
        "description": "Карагандинская академия МВД РК имени Баримбека Бейсенова — учебное заведение системы МВД, готовящее специалистов для правоохранительных органов Центрального Казахстана. Основана в 1993 году.",
        "foundedYear": 1993,
        "ranking": 96,
        "studentCount": 14000,
        "acceptanceRate": 76,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://karaganda.mvd.kz",
        "logoUrl": "/logos/uni-1043673213119592951.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--4741507575272584273",
        "name": "Актюбинский юридический институт МВД",
        "shortName": "Актюбински...",
        "location": "Актобе",
        "description": "Актюбинский юридический институт МВД РК — региональное учебное заведение, готовящее юристов для правоохранительных органов и судебной системы Западного Казахстана. Основан в 1998 году.",
        "foundedYear": 1998,
        "ranking": 97,
        "studentCount": 14000,
        "acceptanceRate": 66,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://aktyubmvd.kz",
        "logoUrl": "/logos/uni--4741507575272584273.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-453039361397745456",
        "name": "Атырауский инженерно-гуманитарный институт",
        "shortName": "Атырауский...",
        "location": "Атырау",
        "description": "Атырауский инженерно-гуманитарный институт — региональное учебное заведение в Атырау, основанное в 1992 году. Готовит инженеров для нефтегазовой отрасли, экономистов и специалистов гуманитарных направлений.",
        "foundedYear": 1992,
        "ranking": 98,
        "studentCount": 14000,
        "acceptanceRate": 80,
        "tuitionRange": {
            "min": 550000,
            "max": 850000
        },
        "website": "https://aigi.kz",
        "logoUrl": "/logos/uni-453039361397745456.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-4470609038381567392",
        "name": "Шымкентский университет",
        "shortName": "Шымкентски...",
        "location": "Шымкент",
        "description": "Шымкентский университет — региональный государственный университет в Шымкенте, основанный в 1996 году. Предлагает программы по педагогике, экономике, юриспруденции и техническим специальностям для Южного Казахстана.",
        "foundedYear": 1996,
        "ranking": 99,
        "studentCount": 14000,
        "acceptanceRate": 79,
        "tuitionRange": {
            "min": 500000,
            "max": 750000
        },
        "website": "https://shimkent-uni.kz",
        "logoUrl": "/logos/uni-4470609038381567392.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-2173502621369934726",
        "name": "Казахский национальный исследовательский университет",
        "shortName": "Казахский ...",
        "location": "Алматы",
        "description": "Казахский национальный исследовательский университет — частный научно-исследовательский вуз в Алматы, основанный в 2017 году. Специализируется на подготовке исследователей в области IT, биотехнологий, инженерии и компьютерных наук.",
        "foundedYear": 2017,
        "ranking": 100,
        "studentCount": 14000,
        "acceptanceRate": 70,
        "tuitionRange": {
            "min": 1200000,
            "max": 2000000
        },
        "website": "https://kazniu.kz",
        "logoUrl": "/logos/uni-2173502621369934726.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-1220465696568054175",
        "name": "Университет Кунаева",
        "shortName": "Университе...",
        "location": "Алматы",
        "description": "Университет Кунаева — частный университет в Алматы, основанный в 1990 году как университет экономики и права. Предлагает программы по экономике, юриспруденции, управлению и IT.",
        "foundedYear": 1990,
        "ranking": 101,
        "studentCount": 14000,
        "acceptanceRate": 89,
        "tuitionRange": {
            "min": 750000,
            "max": 1100000
        },
        "website": "https://kunaev-uni.kz",
        "logoUrl": "/logos/uni-1220465696568054175.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-6792568883627797561",
        "name": "Университет Санат",
        "shortName": "Университе...",
        "location": "Алматы",
        "description": "Университет Санат — частный вуз в Алматы, основанный в 1992 году. Предлагает программы по экономике, менеджменту, юриспруденции, дизайну и туризму.",
        "foundedYear": 1992,
        "ranking": 102,
        "studentCount": 14000,
        "acceptanceRate": 73,
        "tuitionRange": {
            "min": 700000,
            "max": 1000000
        },
        "website": "https://sanat.edu.kz",
        "logoUrl": "/logos/uni-6792568883627797561.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--3980204453948891689",
        "name": "Академия Халықаралық",
        "shortName": "Академия Х...",
        "location": "Алматы",
        "description": "Академия Халықаралық — частная академия в Алматы, основанная в 1997 году. Специализируется на подготовке специалистов в области международных отношений, экономики и юриспруденции.",
        "foundedYear": 1997,
        "ranking": 103,
        "studentCount": 14000,
        "acceptanceRate": 84,
        "tuitionRange": {
            "min": 650000,
            "max": 950000
        },
        "website": "https://halyk.edu.kz",
        "logoUrl": "/logos/uni--3980204453948891689.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "pavlodar-university",
        "name": "Pavlodar University",
        "shortName": "Pavlodar U...",
        "location": "Павлодар",
        "description": "Pavlodar University — региональный государственный университет в Павлодаре, основанный в 1996 году. Предлагает программы по педагогике, экономике, техническим и естественным наукам для Северо-Восточного Казахстана.",
        "foundedYear": 1996,
        "ranking": 104,
        "studentCount": 14000,
        "acceptanceRate": 73,
        "tuitionRange": {
            "min": 500000,
            "max": 750000
        },
        "website": "https://pvl.edu.kz",
        "logoUrl": "/logos/pavlodar-university.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-7952881317946e29",
        "name": "Казахский национальный университет им. аль-Фараби (КазНУ)",
        "shortName": "КазНУ",
        "location": "Алматы",
        "description": "Казахский национальный университет имени аль-Фараби (КазНУ) – ведущий национальный исследовательский университет Казахстана, основанный в 1934 году. Вуз является крупнейшим центром образования и науки в Центральной Азии. Входит в топ-200 мирового рейтинга QS (163-е место в 2024 году) и топ-30 азиатского рейтинга QS. Университет предлагает более 550 образовательных программ по 16 факультетам.",
        "foundedYear": 1934,
        "ranking": 163,
        "studentCount": 25100,
        "acceptanceRate": 82,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kaznu.kz",
        "logoUrl": "/logos/uni-7952881317946e29.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 650,
            "exchangePrograms": [
                "Программы двойного диплома",
                "Академическая мобильность"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "High",
            "studentSatisfaction": 0
        },
        "virtualTourUrl": "http://3dtour.kaznu.kz/"
    },
    {
        "id": "uni-ddb93fd763bd9910",
        "name": "Казахский национальный медицинский университет им. С.Д. Асфендиярова (КазНМУ)",
        "shortName": "КазНМУ",
        "location": "Алматы",
        "description": "Казахский национальный медицинский университет имени С.Д. Асфендиярова (КазНМУ) — один из старейших и ведущих медицинских вузов Казахстана, основанный в 1930 году. Университет является лидером в подготовке квалифицированных медицинских кадров, предлагает широкий спектр программ бакалавриата, магистратуры и докторантуры. Признан национальным университетом в 2001 году.",
        "foundedYear": 1930,
        "ranking": 105,
        "studentCount": 6000,
        "acceptanceRate": 89,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kaznmu.kz",
        "logoUrl": "/logos/uni-ddb93fd763bd9910.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "national",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-e9d5e70029139651",
        "name": "Казахско-Российский медицинский университет (КРМУ)",
        "shortName": "КРМУ",
        "location": "Алматы",
        "description": "Казахско-Российский медицинский университет (КРМУ) — частное высшее учебное заведение в Алматы, основанное в 1992 году. Является одним из ведущих частных медицинских вузов Казахстана, признан Всемирной организацией здравоохранения (ВОЗ) и Национальной медицинской комиссией Индии (NMC). Университет предлагает программы по медицине, стоматологии и фармации, а также имеет высокий процент трудоустройства выпускников.",
        "foundedYear": 1992,
        "ranking": 66,
        "studentCount": 6000,
        "acceptanceRate": 89,
        "tuitionRange": {
            "min": 5000,
            "max": 5000
        },
        "website": "https://krmu.edu.kz",
        "logoUrl": "/logos/uni-e9d5e70029139651.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-395103b161cb458c",
        "name": "Южно-Казахстанский университет им. М. Ауэзова (ЮКУ)",
        "shortName": "ЮКУ им. Ауэзова",
        "location": "Шымкент",
        "description": "Южно-Казахстанский университет имени М. Ауэзова — крупный многопрофильный государственный университет, основанный в 1943 году в Шымкенте. Университет является ведущим научным и образовательным центром региона, входит в QS World University Rankings (621-е место в 2025 году) и имеет 4 звезды в рейтинге QS Stars. Предлагает программы по 76 техническим и гуманитарным специальностям.",
        "foundedYear": 1943,
        "ranking": 621,
        "studentCount": 14000,
        "acceptanceRate": 89,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://auezov.edu.kz",
        "logoUrl": "/logos/uni-395103b161cb458c.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "High",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-d0b3d42ad2e4de25",
        "name": "Карагандинский технический университет им. А. Сагинова (КарТУ)",
        "shortName": "КарТУ",
        "location": "Караганда",
        "description": "Карагандинский технический университет им. А. Сагинова — крупнейший технический вуз Центрального Казахстана, основанный в 1953 году. Готовит инженеров для горно-металлургической промышленности, IT и строительства.",
        "foundedYear": 1953,
        "ranking": 106,
        "studentCount": 7000,
        "acceptanceRate": 68,
        "tuitionRange": {
            "min": 600000,
            "max": 900000
        },
        "website": "https://ktu.edu.kz",
        "logoUrl": "/logos/uni-d0b3d42ad2e4de25.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-69043fe4dc40a6d9",
        "name": "Торайгыров Университет (ToU)",
        "shortName": "ToU",
        "location": "Павлодар",
        "description": "Торайгыров Университет — крупный государственный университет в Павлодаре, основанный в 1960 году. Предлагает широкий спектр программ по педагогике, техническим и естественным наукам, экономике и гуманитарным дисциплинам.",
        "foundedYear": 1960,
        "ranking": 107,
        "studentCount": 14000,
        "acceptanceRate": 75,
        "tuitionRange": {
            "min": 550000,
            "max": 800000
        },
        "website": "https://tou.edu.kz",
        "logoUrl": "/logos/uni-69043fe4dc40a6d9.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-7d8ba16f37dcc311",
        "name": "Университет Шакарима (Shakarim University)",
        "shortName": "Университет Шакарима",
        "location": "Семей",
        "description": "Университет Шакарима — многопрофильный государственный университет в Семее, основанный в 1934 году. Вуз является крупным научно-образовательным центром северо-восточного региона Казахстана. Университет входит в QS World University Rankings 2026 (Топ-18% мировых вузов) и QS Asia University Rankings 2026 (493-е место).",
        "foundedYear": 1934,
        "ranking": 493,
        "studentCount": 14000,
        "acceptanceRate": 73,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://semgu.kz",
        "logoUrl": "/logos/uni-7d8ba16f37dcc311.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 60,
            "exchangePrograms": [
                "Программы двойного диплома"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-d7df9efa25b73a61",
        "name": "Восточно-Казахстанский технический университет им. Д. Серикбаева (ВКТУ)",
        "shortName": "ВКТУ",
        "location": "Усть-Каменогорск",
        "description": "Восточно-Казахстанский технический университет имени Д. Серикбаева (ВКТУ) — ведущий региональный технический университет Казахстана, основанный в 1958 году. Университет является единственным вузом в Казахстане, готовящим специалистов для атомной отрасли. ВКТУ входит в QS World University Rankings (1001-1200 в 2026 году) и QS Asia University Rankings.",
        "foundedYear": 1958,
        "ranking": 1001,
        "studentCount": 7000,
        "acceptanceRate": 77,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://ektu.kz",
        "logoUrl": "/logos/uni-d7df9efa25b73a61.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "High",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-c6f723598d20aa9f",
        "name": "Восточно-Казахстанский университет им. С. Аманжолова",
        "shortName": "ВКУ им. Аманжолова",
        "location": "Усть-Каменогорск",
        "description": "Восточно-Казахстанский университет имени С. Аманжолова — крупнейший государственный университет Восточного Казахстана, основанный в 1952 году. Предлагает образование по педагогике, естественным наукам, экономике и техническим специальностям.",
        "foundedYear": 1952,
        "ranking": 108,
        "studentCount": 14000,
        "acceptanceRate": 75,
        "tuitionRange": {
            "min": 550000,
            "max": 800000
        },
        "website": "https://vkgu.kz",
        "logoUrl": "/logos/uni-c6f723598d20aa9f.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-bcdaac8c8e0012d3",
        "name": "Северо-Казахстанский университет им. М. Козыбаева (СКУ)",
        "shortName": "СКУ",
        "location": "Петропавловск",
        "description": "Северо-Казахстанский университет имени М. Козыбаева — один из старейших вузов Казахстана, основанный в 1937 году как педагогический институт. Сегодня является ведущим многопрофильным университетом в Северо-Казахстанском регионе. Университет входит в QS World University Rankings (1401+ в 2026 году) и QS Asia University Rankings.",
        "foundedYear": 1937,
        "ranking": 1401,
        "studentCount": 14000,
        "acceptanceRate": 85,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://nku.edu.kz",
        "logoUrl": "/logos/uni-bcdaac8c8e0012d3.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [
                "ЕНТ"
            ],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Программы академической мобильности"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-f47a688119896abb",
        "name": "Атырауский университет им. Х. Досмухамедова",
        "shortName": "Атырауский...",
        "location": "Атырау",
        "description": "Атырауский университет имени Х. Досмухамедова — государственный университет в Атырау, основанный в 1950 году. Готовит специалистов в области педагогики, естественных наук, экономики и гуманитарных дисциплин.",
        "foundedYear": 1950,
        "ranking": 109,
        "studentCount": 6000,
        "acceptanceRate": 84,
        "tuitionRange": {
            "min": 500000,
            "max": 750000
        },
        "website": "https://asu.edu.kz",
        "logoUrl": "/logos/uni-f47a688119896abb.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-ba1983c37e45a18b",
        "name": "Атырауский университет нефти и газа им. С. Утебаева",
        "shortName": "Атырауский...",
        "location": "Атырау",
        "description": "Атырауский университет нефти и газа имени С. Утебаева — специализированный технический университет, основанный в 1975 году. Готовит инженеров для нефтегазовой отрасли Казахстана.",
        "foundedYear": 1975,
        "ranking": 110,
        "studentCount": 14000,
        "acceptanceRate": 75,
        "tuitionRange": {
            "min": 700000,
            "max": 1000000
        },
        "website": "https://aogu.edu.kz",
        "logoUrl": "/logos/uni-ba1983c37e45a18b.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-970409720430f1a9",
        "name": "Западно-Казахстанский аграрно-технический университет им. Жангир хана",
        "shortName": "ЗКАТУ им. Жангир хана",
        "location": "Уральск",
        "description": "Западно-Казахстанский аграрно-технический университет имени Жангир хана — ведущий аграрный вуз Западного Казахстана, основанный в 1932 году. Готовит специалистов в области сельского хозяйства, ветеринарии и агроинженерии.",
        "foundedYear": 1932,
        "ranking": 111,
        "studentCount": 7000,
        "acceptanceRate": 84,
        "tuitionRange": {
            "min": 500000,
            "max": 750000
        },
        "website": "https://wkau.kz",
        "logoUrl": "/logos/uni-970409720430f1a9.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-d96f2e2f92280cfd",
        "name": "Костанайский региональный университет им. А. Байтурсынова",
        "shortName": "КРУ им. Байтурсынова",
        "location": "Костанай",
        "description": "Костанайский региональный университет имени А. Байтурсынова — государственный университет в Костанае, основанный в 1952 году. Предлагает образование по педагогике, естественным наукам, экономике и сельскому хозяйству.",
        "foundedYear": 1952,
        "ranking": 112,
        "studentCount": 14000,
        "acceptanceRate": 69,
        "tuitionRange": {
            "min": 500000,
            "max": 750000
        },
        "website": "https://ksu.edu.kz",
        "logoUrl": "/logos/uni-d96f2e2f92280cfd.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-5058e1acce8febe7",
        "name": "Кокшетауский университет им. Ш. Уалиханова (КУ)",
        "shortName": "КУ им. Уалиханова",
        "location": "Кокшетау",
        "description": "Кокшетауский университет имени Ш. Уалиханова — классический государственный университет, основанный в 1962 году. Является ведущим вузом Акмолинской области. Университет предлагает 83 программы бакалавриата, 44 магистратуры и 10 докторантуры. Вуз активно участвует в международных рейтингах (QS Asia University Rankings, THE Impact Rankings) и развивает международное сотрудничество с 62-летней историей.",
        "foundedYear": 1962,
        "ranking": 641,
        "studentCount": 14000,
        "acceptanceRate": 71,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kgu.kz",
        "logoUrl": "/logos/uni-5058e1acce8febe7.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Программы академической мобильности"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-2bdc8fad456f6367",
        "name": "Карагандинский медицинский университет (КМУ)",
        "shortName": "КМУ",
        "location": "Караганда",
        "description": "Карагандинский медицинский университет (КМУ) — один из ведущих медицинских вузов Казахстана, основанный в 1950 году. С 2019 года имеет статус исследовательского университета. КМУ предлагает многоуровневое обучение по медицинским специальностям (бакалавриат, магистратура, докторантура) и известен своей приверженностью практическому подходу к обучению и наличием современной материально-технической базы.",
        "foundedYear": 1950,
        "ranking": 8,
        "studentCount": 6000,
        "acceptanceRate": 91,
        "tuitionRange": {
            "min": 4100,
            "max": 4500
        },
        "website": "https://kgmu.kz",
        "logoUrl": "/logos/uni-2bdc8fad456f6367.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-275165bb025f9b09",
        "name": "Южно-Казахстанская медицинская академия (ЮКМА)",
        "shortName": "ЮКМА",
        "location": "Шымкент",
        "description": "Южно-Казахстанская медицинская академия (ЮКМА) — государственное медицинское учебное заведение в Шымкенте, основанное в 1979 году. Академия предлагает программы бакалавриата, магистратуры и докторантуры по медицине, стоматологии и фармации. ЮКМА признана ВОЗ и NMC, что обеспечивает международное признание ее дипломов.",
        "foundedYear": 1979,
        "ranking": 5,
        "studentCount": 6000,
        "acceptanceRate": 70,
        "tuitionRange": {
            "min": 4400,
            "max": 4400
        },
        "website": "https://ukma.kz",
        "logoUrl": "/logos/uni-275165bb025f9b09.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-227af6b0a8c80739",
        "name": "Астанинский медицинский университет",
        "shortName": "Астанинский...",
        "location": "Астана",
        "description": "Астанинский медицинский университет — государственный медицинский вуз в столице, основанный в 2013 году. Готовит врачей общей практики, стоматологов, фармацевтов и медсестер для Астаны и Северного Казахстана.",
        "foundedYear": 2013,
        "ranking": 113,
        "studentCount": 6000,
        "acceptanceRate": 69,
        "tuitionRange": {
            "min": 900000,
            "max": 1500000
        },
        "website": "https://amu.edu.kz",
        "logoUrl": "/logos/uni-227af6b0a8c80739.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-803ae5e566ec2e59",
        "name": "SDU University (Университет имени Сулеймана Демиреля)",
        "shortName": "SDU",
        "location": "Алматы",
        "description": "SDU University — частный университет в Каскелене (близ Алматы), основанный в 1996 году. Университет предлагает 61 образовательную программу на трех языках, при этом 70-82% программ преподаются на английском языке. SDU известен своим 'Smart Campus' и занимает позиции в международных рейтингах (QS World University Rankings 1201-1400 в 2025 году).",
        "foundedYear": 1996,
        "ranking": 1201,
        "studentCount": 5000,
        "acceptanceRate": 78,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://sdu.edu.kz",
        "logoUrl": "/logos/uni-803ae5e566ec2e59.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 70,
            "exchangePrograms": [
                "Программы академической мобильности"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-2713a30d63757e7c",
        "name": "Almaty Management University (AlmaU)",
        "shortName": "AlmaU",
        "location": "Алматы",
        "description": "Almaty Management University (AlmaU) — частный университет в Алматы, основанный в 1988 году как первая бизнес-школа в Казахстане. Университет является лидером в области предпринимательского образования, аккредитован IQA CEEMAN и BGA. Программы MBA и EMBA аккредитованы AMBA и входят в мировые рейтинги QS (Global MBA Rankings, Executive MBA Rankings).",
        "foundedYear": 1988,
        "ranking": 801,
        "studentCount": 4000,
        "acceptanceRate": 72,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://almau.edu.kz",
        "logoUrl": "/logos/uni-2713a30d63757e7c.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 150,
            "exchangePrograms": [
                "Программы двойного диплома"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-c42db22247b7fc27",
        "name": "Международный университет информационных технологий (IITU)",
        "shortName": "МУИТ",
        "location": "Алматы",
        "description": "Международный университет информационных технологий (IITU) — ведущий IT-университет в Казахстане, основанный в 2009 году. Специализируется на подготовке высококвалифицированных специалистов в области информационных технологий, кибербезопасности, программной инженерии и цифровых медиа. Университет имеет международную аккредитацию ASIIN и занимает высокие позиции в национальных рейтингах (4-е место среди технических вузов в 2024 году).",
        "foundedYear": 2009,
        "ranking": 4,
        "studentCount": 5200,
        "acceptanceRate": 75,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://iitu.edu.kz",
        "logoUrl": "/logos/uni-c42db22247b7fc27.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Программы академической мобильности"
            ]
        },
        "stats": {
            "employmentRate": 90,
            "researchOutput": "High",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-0dcb68738fc9bbc1",
        "name": "Университет Туран",
        "shortName": "Университет Туран",
        "location": "Алматы",
        "description": "Университет «Туран» — один из крупнейших частных вузов Казахстана, основанный в 1992 году. Представляет собой образовательную корпорацию, предлагающую полный цикл обучения от лицея до докторантуры. Вуз предлагает программы в области экономики, права, IT и гуманитарных наук, активно участвует в международных рейтингах (QS Emerging Europe and Central Asia 751-800) и программах двойного диплома.",
        "foundedYear": 1992,
        "ranking": 751,
        "studentCount": 5000,
        "acceptanceRate": 88,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://turan-edu.kz",
        "logoUrl": "/logos/uni-0dcb68738fc9bbc1.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Программы двойного диплома"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-3b373353b27513f2",
        "name": "Narxoz University",
        "shortName": "Narxoz",
        "location": "Алматы",
        "description": "Narxoz University — частный университет в Алматы, основанный в 1963 году. Специализируется на экономике, финансах, менеджменте и бизнесе. Известен высоким уровнем трудоустройства выпускников, занимает первое место среди частных вузов Казахстана по этому показателю в рейтинге QS. Предлагает программы бакалавриата, магистратуры и докторантуры.",
        "foundedYear": 1963,
        "ranking": 114,
        "studentCount": 6000,
        "acceptanceRate": 91,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://narxoz.kz",
        "logoUrl": "/logos/uni-3b373353b27513f2.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": []
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-9e5ee9aab639d4b1",
        "name": "Алматинский технологический университет (АТУ)",
        "shortName": "АТУ",
        "location": "Алматы",
        "description": "Алматинский технологический университет (АТУ) — ведущий технический вуз Казахстана, основанный в 1957 году. Специализируется на подготовке специалистов для пищевой, текстильной, легкой промышленности, а также в области инжиниринга, IT, экономики и бизнеса. Входит в QS World University Rankings (951-1000 в 2025 году) и предлагает программы двойного диплома.",
        "foundedYear": 1957,
        "ranking": 951,
        "studentCount": 7000,
        "acceptanceRate": 67,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://atu.edu.kz",
        "logoUrl": "/logos/uni-9e5ee9aab639d4b1.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Программы двойного диплома"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-099c9628f69e001d",
        "name": "Алматинский университет энергетики и связи им. Г. Даукеева (АУЭС)",
        "shortName": "АУЭС",
        "location": "Алматы",
        "description": "Алматинский университет энергетики и связи (АУЭС) — первый негосударственный технический университет в Казахстане, основанный в 1975 году как Алма-Атинский энергетический институт. Специализируется на подготовке инженерно-технических кадров в области энергетики, телекоммуникаций, IT и информационной безопасности. Вуз активно сотрудничает с международными университетами и компаниями, такими как Siemens.",
        "foundedYear": 1975,
        "ranking": 115,
        "studentCount": 7000,
        "acceptanceRate": 76,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://aues.kz",
        "logoUrl": "/logos/uni-099c9628f69e001d.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Программы академической мобильности"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "High",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-a874565cfd4336ea",
        "name": "Astana IT University (AITU)",
        "shortName": "AITU",
        "location": "Астана",
        "description": "Astana IT University (AITU) — частный университет в Астане, основанный в 2019 году. Является ведущим учебным заведением в области информационно-коммуникационных технологий (ИКТ) в Казахстане. Предлагает программы по IT-менеджменту, анализу данных, кибербезопасности и программной инженерии. Обучение ведется полностью на английском языке. Вуз активно развивает научные центры в партнерстве с крупными IT-компаниями.",
        "foundedYear": 2019,
        "ranking": 1201,
        "studentCount": 4500,
        "acceptanceRate": 66,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://astanait.edu.kz",
        "logoUrl": "/logos/uni-a874565cfd4336ea.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "private",
        "programs": [],
        "admissions": {
            "deadline": "",
            "requirements": [
                "ЕНТ",
                "Собеседование"
            ],
            "scholarships": []
        },
        "international": {
            "partners": 50,
            "exchangePrograms": [
                "Erasmus+"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "High",
            "studentSatisfaction": 0
        }
    }
];
