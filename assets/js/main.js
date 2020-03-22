let lang;
if (window.location.pathname === '/en/') {
  lang = 'en';
} else {
  lang = 'ar';
}
const FAQs = {
  en: [
    {
      question: 'How to register?',
      answer:
        'Download Maraphone app from the App Store, and register by your Saudi mobile number, type your First and Last name, and it’s done.'
    },
    {
      question: 'How to participate in the weekly goal?',
      answer:
        'The app automatically adds you to the weekly competition by giving you a weekly goal to achieve, you will receive a notification on Sunday with your next week’s goal, and how much you need to walk to achieve it.'
    },
    {
      question: 'How do you update my activity and movement?',
      answer:
        'The app gets your activity data from the Health App on iPhone, and Google Fit or Samsung Health omg Android, you only have to open the app once every 3 days so data gets updated.'
    },
    {
      question: 'When does the weekly challenge start and end?',
      answer:
        'The weekly challenge starts on Sunday and ends on Saturday every week, you will get notification when the challenge is started, and with your results when it’s ended.'
    },
    {
      question: 'How do you select weekly winners?',
      answer:
        'When a weekly challenge ends, our committee takes the data of the participants who completed the goal for this week, and run a random draw to select the winner for the weekly prize.'
    },
    {
      question: 'I WON, Now how will I collect my prize?',
      answer:
        'There are 2 options to collect the prize:1- Our team will contact you, and send you the prize via fast direct shipping to your location.2- Prize can be collected from one of our pre-selected STC stores.'
    },
    {
      question:
        'If I won last week’s challenge; when will you contact me for the prize?',
      answer:
        'We will deliver the prizes monthly to all winners of the last 4 weeks, let’s say you won the week 1 of January, then you will get your prize on week 4 of January.'
    },
    {
      question: 'How do you calculate my goal?',
      answer:
        'We calculate your AWD (average weekly distance) for the last 28 days and add to it the goal percentage as per the below table.'
    },
    {
      question: 'Do I have to give permissions on the app?',
      answer:
        'Yes, you need to give permissions only to the Health app of iPhone, or Samsung Health for Android. We will only get your moving distance history so we can calculate your goal.'
    }
  ],
  ar: [
    {
      question: 'كيف أسجل؟',
      answer:
        'حمّل تطبيق مارافون من متجر التطبيقات، وسجّل فيه باستخدام رقم جوالك السعودي، واكتب اسمك الأول واسمك الأخير، وبكذا تكون سجّلت في التطبيق!'
    },
    {
      question: 'كيف أشارك في الهدف الأسبوعي؟',
      answer:
        'يضيفك التطبيق تلقائيًا إلى المنافسة الأسبوعية من خلال تقديم هدف أسبوعي لك لتحققه، ويوصلك إشعار يوم الأحد بهدفك الأسبوعي التالي ومقدار المسافة اللي لازم تمشيها لتحقيق الهدف.'
    },
    {
      question: 'كيف تحدّثون نشاطي وحركتي؟',
      answer:
        'يحصل التطبيق على بيانات نشاطك من تطبيق Health على الـ iPhone ، وتطبيق Google Fit أو Samsung Health على الـ Android، وكل اللي عليك هو انك تفتح التطبيق مرة كل 3 أيام لنتمكن من تحديث بيانات تلقائياً.'
    },
    {
      question: 'متى يبدأ التحدي الأسبوعي ومتى ينتهي؟',
      answer:
        'يبدأ التحدي الأسبوعي يوم الأحد وينتهي يوم السبت من كل أسبوع، ويوصلك إشعار عند بداية التحدي، والنتائج اللي حققتها عند انتهاء التحدي.'
    },
    {
      question: 'كيف تختارون الفائزين أسبوعيًا؟',
      answer:
        'عند نهاية التحدي الأسبوعي، تحصل اللجنة الخاصة بنا على بيانات المشاركين اللي حققوا هدف الأسبوع ويكون هناك سحب عشوائي لاختيار الفائز بالجائزة الأسبوعية.'
    },
    {
      question: 'فزت في السحب! كيف أحصل على جائزتي؟',
      answer:
        'خيارين للحصول على الجائزة:<br/> 1- يتواصل فريقنا معك، ويرسل لك الجائزة عبر الشحن السريع المباشر إلى موقعك.<br /> 2- تقدر تحصل على الجائزة من أحد متاجر stc المحددة مسبقًا.'
    },
    {
      question:
        'إذا فزت بتحدي الأسبوع السابق؛ متى تتواصلون معي لتسليم الجائزة؟',
      answer:
        'يتم تسليم الجوائز شهريًا لجميع الفائزين عن الأسابيع الأربعة السابقة، لنفترض أنك فزت بتحدي الأسبوع الأول من شهر يناير، ستحصل على جائزتك في الأسبوع الرابع من شهر يناير.'
    },
    {
      question: 'كيف تحسبون هدفي الاسبوعي؟',
      answer:
        'نحسب متوسط المسافة الأسبوعية اللي قطعتها عن آخر 28 يوم، ونضيف لها نسبة الهدف وفقًا للجدول أدناه.'
    },
    {
      question: 'هل يجب أن أعطي صلاحيات على التطبيق؟',
      answer:
        'نعم، يجب أن تعطي إذن بالسماح فقط لتطبيق Health على iPhone أو تطبيق Samsung Health على Android، وسنحصل على سجل مسافة تحركك فقط لنتمكن من حساب هدفك.'
    }
  ]
};
const FAQsListContainer = document.querySelector('.FAQs-list');

// Render FAQs list
function render() {
  FAQsListContainer.innerHTML = FAQs[lang]
    .map(li => {
      return `
            <li>
                <div class="question" onclick="toggleExpandingPanels(event)">
                    <div>${li.question}</div>
                    
                    <div class="arrow-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF375E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>
                <p class="answer">${li.answer}</p>
            </li>
            `;
    })
    .join('');
}
render();

function toggleExpandingPanels(e) {
  e.target.closest('li').classList.toggle('expand');
}

// Animations
const animatedElements = document.querySelectorAll('.has-animation');
document.addEventListener('scroll', fireAnimations);

function fireAnimations() {
  animatedElements.forEach(el => {
    if (el.offsetTop + 150 < window.scrollY + window.innerHeight) {
      console.log(el);
      el.classList.add('animated');
      el.classList.remove('has-animation');
    }
  });
}
fireAnimations();
