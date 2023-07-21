const projectsData = [
  {
    id: 1,
    proje: "Alışveriş Sepeti",
    aciklama:
      "Bu proje, Context API, React JS, JavaScript ve CSS kullanılarak geliştirilen bir web uygulamasıdır. Kullanıcıların bir listeden ürünleri seçmelerine, bunları bir sepete eklemelerine ve sepete eklenen ürünlerin toplam fiyatını görmelerine olanak tanır. Kullanıcılar ayrıca sepetten ürünleri kaldırabilir ve bu işlem sepetin toplam fiyatını azaltacaktır.",
    konular: ["JavaScript", "Redux", "HTML", "CSS"],
    linkler: [
      {
        site: "https://github.com/HalilAladag/fsweb-s11g1-shopping-cart",
        linkIsim: "GitHub",
      },
      {
        site: "https://shopping-cart-agmg1ohzw-halilaladag.vercel.app",
        linkIsim: "Site",
      },
    ],
    imageLink: "./Images/shopping-cart.png",
  },
  {
    id: 2,
    proje: "Movies Watchlist",
    aciklama:
      "Bu projede, bir film veritabanı içeren bir web uygulamasında iki farklı reducer ile çalışarak state ve redux eşlemeleri sıfırdan oluşturuldu. Film veritabanı, film detayları, yönetmen puanı ve açıklaması gibi verilere sahiptir. Seçilen filmler favorilere eklenebilir ve favoriler listesinde tutulabilir, liste görüntülenebilir ve veritabanında olmayan yeni filmler eklenip silinebilir.",
    konular: ["JavaScript", "Redux", "HTML", "CSS"],
    linkler: [
      {
        site: "https://github.com/HalilAladag/fsweb-s10g2-redux-filmler",
        linkIsim: "GitHub",
      },
      {
        site: "https://movie-watchlist-gold.vercel.app/",
        linkIsim: "Site",
      },
    ],
    imageLink: "./Images/watchlist.png",
  },
  {
    id: 3,
    proje: "Gratitude Journal",
    aciklama:
      "Minnet günlüğü, kişinin hayattaki olumluluklara odaklanarak şükran duyguları hissetmesi için sık ​​sık olumlu hissettiği şeyleri yazdığı bir tür günlüktür. Zihinsel iyilik için basit ancak oldukça etkili bir yöntemdir ve kişinin hayata olumlu bir bakış açısı geliştirmesine yardımcı olabilir. Bu günlükte, daha önce eklenen notlar listelenir, notlar silinebilir ve yeni notlar eklenir.",
    konular: ["JavaScript", "Redux", "HTML", "CSS"],
    linkler: [
      {
        site: "https://github.com/HalilAladag/fsweb-s10g2-redux-filmler",
        linkIsim: "GitHub",
      },
      {
        site: "https://gratitude-journal-example.vercel.app/",
        linkIsim: "Site",
      },
    ],
    imageLink: "./Images/journal.png",
  },
];

const projectsDataTr = [
  {
    id: 1,
    proje: "Shopping Cart",
    aciklama:
      "In this project, a web application was developed using Context API, React JS, JavaScript, and CSS. The application allows users to select products from a list, add them to a cart, and see the total price of the items in the cart. Users can also remove items from the cart, which will decrease the total price.",
    konular: ["JavaScript", "Redux", "HTML", "CSS"],
    linkler: [
      {
        site: "https://github.com/HalilAladag/fsweb-s11g1-shopping-cart",
        linkIsim: "GitHub",
      },
      {
        site: "https://shopping-cart-agmg1ohzw-halilaladag.vercel.app",
        linkIsim: "Site",
      },
    ],
    imageLink: "./Images/shopping-cart.png",
  },
  {
    id: 2,
    proje: "Movies Watchlist",
    aciklama:
      "In this project, state,action generators and reducer/redux pairings were created by processing with two different reducers in a web application containing a movie database. The application data contains such as movie details director score and description. It is added to the favorites and kept in the favorite movies list, and the list can be accessed and deleted or the list can be viewed.",
    konular: ["JavaScript", "Redux", "HTML", "CSS"],
    linkler: [
      {
        site: "https://github.com/HalilAladag/fsweb-s10g2-redux-filmler",
        linkIsim: "GitHub",
      },
      {
        site: "https://movie-watchlist-gold.vercel.app/",
        linkIsim: "Site",
      },
    ],
    imageLink: "./Images/watchlist.png",
  },
  {
    id: 3,
    proje: "Gratitude Journal",
    aciklama:
      "A gratitude journal is a type of journal where one often writes down the things one is thankful for so that they can focus on the positive things in their life and feel gratitude and gratitude. It is a simple but highly effective method for mental well-being and can help a person develop a positive outlook on life. In this diary, previously added notes are listed, notes can be deleted and new notes can be added.",
    konular: ["JavaScript", "Redux", "HTML", "CSS"],
    linkler: [
      {
        site: "https://github.com/HalilAladag/fsweb-s10g2-redux-filmler",
        linkIsim: "GitHub",
      },
      {
        site: "https://gratitude-journal-example.vercel.app/",
        linkIsim: "Site",
      },
    ],
    imageLink: "./Images/journal.png",
  },
];

export { projectsData, projectsDataTr };
