export interface Program {
    id: string;
    name: string;
    degree: "Bachelor" | "Master" | "PhD";
    duration: string;
    tuition: number; // in KZT
    language: "English" | "Kazakh" | "Russian";
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
    type: "national" | "state" | "private";
    programs: Program[];
    admissions: {
        deadline: string;
        requirements: string[];
        scholarships: string[];
    };
    international: {
        partners: number;
        exchangePrograms: string[];
    };
    stats: {
        employmentRate: number;
        researchOutput: "High" | "Medium" | "Low";
        studentSatisfaction: number;
    };
}

// Automatically generated from scraped data
export const universities: University[] = [
    {
        "id": "uni--6215527010065643221",
        "name": "Назарбаев Университеті",
        "shortName": "НУ",
        "location": "Астана",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
                "name": "Бакалавриат",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6215527010065643221-p-1",
                "name": "Магистратура",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6215527010065643221-p-2",
                "name": "Докторантура",
                "degree": "PhD",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6215527010065643221-p-3",
                "name": "MA Global Affairs and Eurasian Studies",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--6215527010065643221-p-4",
                "name": "Еуразияны зерттеу",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "",
            "requirements": [
                "NU-да әрбір бағдарламаға түсудің өзіндік талаптары бар, соның ішінде академиялық біліктілік, тиісті тәжірибе мен ағылшын тілін меңгеру деңгейі жатады."
            ],
            "scholarships": [
                "Төлемдер және қаржыландыру"
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
        "id": "uni--1331048252443003479",
        "name": "ӘЛ-ФАРАБИ АТЫНДАҒЫ ҚАЗАҚ ҰЛТТЫҚ УНИВЕРСИТЕТІ",
        "shortName": "ҚазҰУ",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://www.kaznu.kz",
        "logoUrl": "/logos/uni--1331048252443003479.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
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
            "deadline": "",
            "requirements": [],
            "scholarships": []
        },
        "international": {
            "partners": 3,
            "exchangePrograms": [
                "Академиялық ұтқырлық"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--4247799133646007266",
        "name": "Евразийский национальный университет им. Л.Н. Гумилёва",
        "shortName": "Евразийски...",
        "location": "Астана",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://enu.kz",
        "logoUrl": "/logos/uni--4247799133646007266.png",
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
        "id": "uni--653985701906844209",
        "name": "Казахский национальный исследовательский технический университет",
        "shortName": "Казахский ...",
        "location": "Kazakhstan",
        "description": "Сатбаев Университет – старейший и ведущий технический университет в Казахстане, известный своими исследованиями в горнодобывающей и нефтегазовой отраслях. Более чем девяностолетняя история.",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://satbayev.university",
        "logoUrl": "/logos/uni--653985701906844209.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
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
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni--4070500783405386515",
        "name": "Казахский национальный педагогический университет имени Абая",
        "shortName": "КазНПУ имени Абая",
        "location": "Алматы",
        "description": "Казахский национальный педагогический университет имени Абая - первое высшее учебное заведение в Казахстане с 95-летней историей. Основан в 1928 году как Казахский государственный университет, позже преобразован в Казахский педагогический институт (КазПИ) в 1930 году. В 1935 году институту присвоено имя Абая. В 1990 году получил статус университета и стал Казахским государственным педагогическим университетом имени Абая. В 2003 году получил статус национального университета.",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kaznpu.kz",
        "logoUrl": "/logos/uni--4070500783405386515.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
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
        }
    },
    {
        "id": "uni-4032705414286304612",
        "name": "Казахский национальный аграрный исследовательский университет",
        "shortName": "Казахский ...",
        "location": "Алматы",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kaznau.kz",
        "logoUrl": "/logos/uni-4032705414286304612.png",
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
        "id": "uni-6181242416765302281",
        "name": "Казахский агротехнический исследовательский университет им. С.Сейфуллина",
        "shortName": "ҚАТЗУ",
        "location": "Астана",
        "description": "Университет основан в 1957 году как Акмолинский сельскохозяйственный институт. Впоследствии преобразован в Казахский агротехнический университет им. С.Сейфуллина. Прошел этапы становления и динамичного развития, став исследовательским университетом и крупным научным и образовательным центром страны.",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
        "shortName": "Казахская ...",
        "location": "Алматы",
        "description": "Основана в 1944 году. В 2009 году консерватория присоединилась к Болонской системе.",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://conservatoire.edu.kz",
        "logoUrl": "/logos/uni--5610011387983282598.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
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
        "description": "Академия основана в 1955 году как театральный факультет при консерватории им. Курмангазы. В 1977 году был создан Алматинский государственный театрально-художественный институт (АМТКИ). В 1989 году институту присвоено имя Темирбека Жургенова. В 2001 году академия получила статус национальной.",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kaznai.kz",
        "logoUrl": "/logos/uni--1769193353410854537.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni--1769193353410854537-p-0",
                "name": "Театральное искусство",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1769193353410854537-p-1",
                "name": "Кино и ТВ",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1769193353410854537-p-2",
                "name": "Хореография",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1769193353410854537-p-3",
                "name": "Живопись, скульптура и дизайн",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1769193353410854537-p-4",
                "name": "Искусствоведение",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1769193353410854537-p-5",
                "name": "Музыкальное искусство",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1769193353410854537-p-6",
                "name": "Театральное искусство",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1769193353410854537-p-7",
                "name": "Кино и ТВ",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1769193353410854537-p-8",
                "name": "Хореография",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1769193353410854537-p-9",
                "name": "Докторантура",
                "degree": "PhD",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1769193353410854537-p-10",
                "name": "Бакалавриат",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1769193353410854537-p-11",
                "name": "Магистратура",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni--1769193353410854537-p-12",
                "name": "Докторантура (PhD)",
                "degree": "PhD",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "",
            "requirements": [
                "Для поступления необходимо сдать экзамены и пройти творческие конкурсы."
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
        "name": "Казахский национальный педагогический университет для девочек",
        "shortName": "Казахский ...",
        "location": "Kazakhstan",
        "description": "Основан в 1944 году",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kazmkpu.kz",
        "logoUrl": "/logos/uni-507688501153389010.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni-507688501153389010-p-0",
                "name": "Колледж",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-1",
                "name": "Бакалавриат",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-2",
                "name": "Магистратура",
                "degree": "Master",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-3",
                "name": "Докторантура",
                "degree": "PhD",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-4",
                "name": "Педагогика и психология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-5",
                "name": "Филология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-6",
                "name": "Физика, математика и цифровые технологии",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-7",
                "name": "Естествознание",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-8",
                "name": "Социально-гуманитарные науки и искусство",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-9",
                "name": "Подготовка учителей физической культуры",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-10",
                "name": "Подготовка учителей изобразительного искусства и черчения",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-11",
                "name": "Хореография",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-12",
                "name": "Подготовка учителей музыки",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-13",
                "name": "Мектепке дейінгі тәрбие мен оқыту ұйымдарының тәрбиешісі",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-507688501153389010-p-14",
                "name": "Бастауыш білім беру мұғалімі",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "",
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
        "description": "Основан в 2001 году",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kbtu.kz",
        "logoUrl": "/logos/uni-2548293348053752146.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
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
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni-5774996796084143496",
        "name": "Университет КИМЭП",
        "shortName": "КИМЭП",
        "location": "Алматы",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kimep.kz",
        "logoUrl": "/logos/uni-5774996796084143496.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
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
            "requirements": [],
            "scholarships": [
                "Гранты: https://www.kimep.kz/prospective-students/ru/financial-aid/"
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
        "shortName": "Международ...",
        "location": "Туркестан",
        "description": "Международный казахско-турецкий университет имени Ходжи Ахмеда Ясави (Ахмет Ясави университеті) был открыт в 1991 году Указом Первого Президента Республики Казахстан Н.А.Назарбаева.",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://ayu.edu.kz",
        "logoUrl": "/logos/uni--6587150839111909576.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
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
            "deadline": "",
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
        "description": "25 лет на рынке Казахстана",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://dku.kz",
        "logoUrl": "/logos/dku.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
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
            "deadline": "",
            "requirements": [],
            "scholarships": [
                "Конкурс на социальные стипендии от немецкой компании «Thomas Kurze GmbH» 25.11.2025, Результаты конкурса. Стипендии генерального консульства германии для студентов DKU немецкой национальности 17.11.2025, Перераспределение стипендий DAAD на обучение в 2025/2026 учебном году, Результаты конкурса. Cтипендия Erasmus+ на обучение во Freie Universität Berlin"
            ]
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Программа \\\"Двойной диплом\\\", Академическая мобильность, Erasmus+"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Основан в 1992 году Мухтаром Алиевичем Алиевым совместно с профессором Маскеевым К.М. и доцентами Голубченко В.С. и Пановой О.А.",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
        "programs": [
            {
                "id": "uni-p-0",
                "name": "Общественное здоровье",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-1",
                "name": "Акушерство и гинекология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-2",
                "name": "Физическая культура",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-3",
                "name": "Фармакология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-4",
                "name": "Дерматовенерология с курсом фтизиатрии",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-5",
                "name": "Информационно-коммуникационные технологии",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-6",
                "name": "Молекулярная биология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-7",
                "name": "Онкология с курсом радиологии",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-8",
                "name": "Пропедевтика внутренних болезней",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-9",
                "name": "Травматология, ортопедия и военно-полевой хирургии",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-10",
                "name": "Медицина",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-11",
                "name": "Стоматология",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-12",
                "name": "Медико-профилактическое дело",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-13",
                "name": "Сестринское дело",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            },
            {
                "id": "uni-p-14",
                "name": "Фармация",
                "degree": "Bachelor",
                "duration": "4 years",
                "tuition": 0,
                "language": "English"
            }
        ],
        "admissions": {
            "deadline": "Прием документов на грант: 13.07. – 20.07.2025г.",
            "requirements": [
                "ЕНТ (история Казахстана, математическая грамотность, грамотность чтения, биология и химия), специальный экзамен (психометрический тест)"
            ],
            "scholarships": [
                "Образовательные гранты общественного фонда «Қазақстан халқына»"
            ]
        },
        "international": {
            "partners": 0,
            "exchangePrograms": [
                "Эразмус+"
            ]
        },
        "stats": {
            "employmentRate": 0,
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni-5232179869495242864",
        "name": "Карагандинский университет имени академика Е.А. Букетова",
        "shortName": "Карагандин...",
        "location": "Kazakhstan",
        "description": "1938: Открытие Карагандинского учительского института.\n1952: Карагандинский учительский институт преобразован в Педагогический институт.\n1972: Педагогический институт преобразован в Карагандинский государственный университет.\n1992: Карагандинскому государственному университету присвоено имя академика Евнея Арыстановича Букетова.\n2024: Карагандинскому университету имени академика Е.А. Букетова присвоен статус исследовательского университета.\n2025: Карагандинскому исследовательскому университету имени академика Е.А. Букетова присвоен национальный статус.",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://buketov.edu.kz",
        "logoUrl": "/logos/uni-5232179869495242864.png",
        "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "type": "state",
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
            "deadline": "",
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
            "researchOutput": "Medium",
            "studentSatisfaction": 0
        }
    },
    {
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni--6700319370335425844",
        "name": "Кызылординский университет им. Коркыт Ата",
        "shortName": "Кызылордин...",
        "location": "Кызылорда",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://korkyt.kz",
        "logoUrl": "/logos/uni--6700319370335425844.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni-6316516275990030104",
        "name": "Актюбинский региональный университет им. К. Жубанова",
        "shortName": "Актюбински...",
        "location": "Актобе",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://arsu.kz",
        "logoUrl": "/logos/uni-6316516275990030104.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni--1240759454570653317",
        "name": "Западно-Казахстанский университет им. М. Утемисова",
        "shortName": "Западно-Ка...",
        "location": "Уральск",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://wksu.kz",
        "logoUrl": "/logos/uni--1240759454570653317.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni--4281874192912560931",
        "name": "Жетысуский университет им. И. Жансугурова",
        "shortName": "Жетысуский...",
        "location": "Талдыкорган",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://zhgu.edu.kz",
        "logoUrl": "/logos/uni--4281874192912560931.png",
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
        "id": "uni--7465315310493106002",
        "name": "Таразский региональный университет им. М.Х. Дулати",
        "shortName": "Таразский ...",
        "location": "Тараз",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://tarsu.kz",
        "logoUrl": "/logos/uni--7465315310493106002.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni-2080271182886988573",
        "name": "Мангистауский университет им. Ш. Есенова",
        "shortName": "Мангистаус...",
        "location": "Актау",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://mu.edu.kz",
        "logoUrl": "/logos/uni-2080271182886988573.png",
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
        "id": "uni-5621531000843829357",
        "name": "Аркалыкский педагогический институт им. И. Алтынсарина",
        "shortName": "Аркалыкски...",
        "location": "Аркалык",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://api.kz",
        "logoUrl": "/logos/uni-5621531000843829357.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni--2449650824423817646",
        "name": "Западно-Казахстанский медицинский университет им. М. Оспанова",
        "shortName": "Западно-Ка...",
        "location": "Актобе",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://zkmu.kz",
        "logoUrl": "/logos/uni--2449650824423817646.png",
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
        "id": "uni-2869147498913696167",
        "name": "Семейский медицинский университет",
        "shortName": "Семейский ...",
        "location": "Семей",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://semeymeduniversity.kz",
        "logoUrl": "/logos/uni-2869147498913696167.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uib",
        "name": "Университет международного бизнеса (UIB)",
        "shortName": "Университе...",
        "location": "Алматы",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://uib.kz",
        "logoUrl": "/logos/uib.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni--2373279794740369929",
        "name": "Казахский университет технологии и бизнеса",
        "shortName": "Казахский ...",
        "location": "Астана",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "name": "Казахстанский инженерно-технологический университет",
        "shortName": "Казахстанс...",
        "location": "Алматы",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kitu.edu.kz",
        "logoUrl": "/logos/uni--2857123560887802612.png",
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
        "id": "uni-7516652595068970342",
        "name": "Алматинский гуманитарно-экономический университет",
        "shortName": "Алматински...",
        "location": "Алматы",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://algeu.edu.kz",
        "logoUrl": "/logos/uni-7516652595068970342.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni-507883223402847990",
        "name": "Центрально-Азиатский университет",
        "shortName": "Центрально...",
        "location": "Алматы",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://cau.edu.kz",
        "logoUrl": "/logos/uni-507883223402847990.png",
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
        "id": "uni--7624519557524614851",
        "name": "Университет Алматы",
        "shortName": "Университе...",
        "location": "Алматы",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
        "name": "Казахский гуманитарно-юридический университет",
        "shortName": "Казахский ...",
        "location": "Астана",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://kgyu.kz",
        "logoUrl": "/logos/uni--7962034477461320147.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni-8130542700432115702",
        "name": "Казахская академия труда и социальных отношений",
        "shortName": "Казахская ...",
        "location": "Алматы",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "name": "Медицинский университет Астана",
        "shortName": "Медицински...",
        "location": "Астана",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "https://essenov.edu.kz",
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
        "id": "uni",
        "name": "Unknown University",
        "shortName": "Uni",
        "location": "Kazakhstan",
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
        },
        "website": "",
        "logoUrl": "/logos/uni.png",
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
        "description": "Информация загружается...",
        "foundedYear": 2000,
        "ranking": 0,
        "studentCount": 0,
        "acceptanceRate": 0,
        "tuitionRange": {
            "min": 0,
            "max": 0
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
    }
];