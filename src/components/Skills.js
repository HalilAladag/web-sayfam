import React, { useState, useRef } from 'react';

const Skills = ({ language, darkMode }) => {
  const skillsData = [
    {
      title: language === 'tr' ? 'JavaScript' : 'JavaScript',
      description: language === 'tr' ? 'JavaScript, web sayfalarında dinamik davranışlar oluşturmak için kullanılan bir programlama dilidir. Hem istemci tarafında (yani tarayıcıda) hem de sunucu tarafında (Node.js) ortamlarda kullanılabilir.' : 'JavaScript is a programming language used to create dynamic behaviors on web pages. It can be used on both client-side (i.e., in the browser) and server-side (Node.js) environments.'
    },
    {
      title: language === 'tr' ? 'React.js' : 'React.js',
      description: language === 'tr' ? 'React.js, kullanıcı arabirimleri oluşturmak için kullanılan popüler bir açık kaynaklı JavaScript kitaplığıdır. Geliştiricilerin yeniden kullanılabilir UI bileşenleri oluşturmasına olanak tanır.' : 'React.js is a popular open-source JavaScript library used for building user interfaces. It allows developers to create reusable UI components.'
    },
    {
      title: 'CSS',
      description: language === 'tr' ? 'CSS, bir stil dilidir. Düzen, renkler, yazı tipleri ve diğer görsel öğeler dahil olmak üzere içeriğin web sayfasında nasıl görüntülendiğini tanımlar.' : 'CSS is a styling language used to describe the presentation of a document. It defines how the content is displayed on the web page, including layout, colors, fonts, and other visual elements.'
    },
    {
      title: 'Redux',
      description: language === 'tr' ? 'Redux, JavaScript uygulamaları için bir state yönetimi kütüphanesidir. Geliştiricilerin uygulama durumunu merkezi bir mağazada yönetmesine olanak tanıyarak karmaşık uygulamaların durumunu korumayı, hata ayıklamayı ve test etmeyi kolaylaştırır.' : 'Redux is a predictable state management library for JavaScript applications. It allows developers to manage the application state in a centralized store, making it easy to maintain, debug and test the state of complex applications.'
    },
    {
      title: 'Node.js',
      description: language === 'tr' ? 'Node.js, geliştiricilerin JavaScript kodunu bir web tarayıcısının dışında yürütmesine olanak tanıyan popüler bir açık kaynaklı JavaScript çalıştırma ortamıdır. Ölçeklenebilir ve yüksek performanslı bina için tasarlanmıştır.' : 'Node.js is a popular open-source JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It is designed for building scalable and high-performance applications.'
    },
    {
      title: 'Cypress',
      description: language === 'tr' ? 'Kullanıcılarınızın hangi tanımlama bilgilerini kabul edeceklerini veya reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimum kurulumlu bir tanımlama bilgisi eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalar için her türlü özelleştirmeyi mümkün kılar.' : 'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.'
    },
    {
      title: language === 'tr' ? 'Java' : 'Java',
      description: language === 'tr' ? 'Java çok platformlu, nesne odaklı ve ağ merkezli bir dil olup kendisi de bir platform olarak kullanılabilir. Mobil uygulamalar ve kurumsal yazılımlardan büyük veri uygulamalarına ve sunucu tarafı teknolojilere kadar her türlü yazılımı kodlamada kullanılabilecek hızlı, güvenli ve güvenilir bir programlama dilidir.' : 'Java is a multi-platform, object-oriented and network-centric language that can itself be used as a platform. It is a fast, secure and reliable programming language that can be used to code all kinds of software, from mobile applications and enterprise software to big data applications and server-side technologies.'
    },
    {
      title: language === 'tr' ? 'Python' : 'Python',
      description: language === 'tr' ? 'Python; sistem programlama, kullanıcı arabirimi programlama, ağ programlama, web programlama, uygulama ve veri tabanı yazılımı programlama gibi birçok alanda yazılım geliştirebilen bir yazılım dilidir' : 'Python is a software language that can develop software in many areas such as system programming, user interface programming, network programming, web programming, application and database software programming.'
    },
    {
      title: language === 'tr' ? 'Java Spring' : 'Java Spring',
      description: language === 'tr' ? 'Spring, kurumsal uygulamalar geliştirmek için kullanılan Java tabanlı bir web çerçevesidir. Minimum kodlama ile web uygulamaları geliştirmek için esnek bir platform sağlar. Finans, e-ticaret ve sağlık gibi çeşitli sektörlerde sıklıkla tercih edilir. Spring, kurumsal Java geliştirmeyi destekleyen bir çerçevedir.' : 'Spring is a Java-based web framework used for developing enterprise applications. It provides a flexible platform for developing web applications with minimal coding. It is often preferred in various industries such as finance, e-commerce and healthcare. Spring is a framework that supports enterprise Java development.'
    },
    {
      title: language === 'tr' ? 'SQL' : 'SQL',
      description: language === 'tr' ? 'Yapılandırılmış sorgu dili (SQL), bilgileri ilişkisel bir veri tabanında depolamak ve işlemek için kullanılan bir programlama dilidir. İlişkisel bir veri tabanı, farklı veri niteliklerini ve veri değerleri arasındaki çeşitli ilişkileri temsil eden satırlar ve sütunlar ile bilgileri tablo biçiminde depolar.' : 'Structured query language (SQL) is a programming language used to store and manipulate information in a relational database. A relational database stores information in tabular format, with rows and columns representing different data attributes and various relationships between data values.'
    },
   
  ];

  const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null);

  const handleSkillClick = (index) => {
    setSelectedSkillIndex(index === selectedSkillIndex ? null : index);
  };

  const handleSkillMouseEnter = (index) => {
    setHoveredSkillIndex(index);
  };

  const handleSkillMouseLeave = () => {
    setHoveredSkillIndex(null);
  };

  const skillsRef = useRef(null);

  const handleScrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`py-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}
      id="skills"
      style={{
        backgroundImage: `url('./Images/other-back.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      ref={skillsRef}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">
          {language === 'tr' ? 'Yetenekler' : 'Skills'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`${
                darkMode
                  ? 'bg-indigo-800 text-white'
                  : 'bg-gradient-to-br from-indigo-200 to-blue-300 text-blue-800'
              } p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105`}
              onClick={() => handleSkillClick(index)}
              onMouseEnter={() => handleSkillMouseEnter(index)}
              onMouseLeave={handleSkillMouseLeave}
            >
              <h3 className="text-xl font-semibold mb-4">
                {skill.title}
              </h3>
              {selectedSkillIndex === index && (
                <p>{skill.description}</p>
              )}
              {hoveredSkillIndex === index && selectedSkillIndex !== index && (
                <p className="text-gray-900 font-semibold">
                  {language === 'tr'
                    ? 'Detayları görmek için tıklayın!'
                    : 'Click to see details!'}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
