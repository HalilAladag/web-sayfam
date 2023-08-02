// Profile.js
import React from 'react';
import texts from '../texts';
import { Link } from 'react-scroll';

const Profile = ({ language, darkMode }) => {
  const profileData = {
    profile: language === 'tr' ? 'Profil' : 'Profile',
    birth: language === 'tr' ? 'Doğum Tarihi' : 'Birth Date',
    city: language === 'tr' ? 'İkamet Şehri' : 'City',
    education: language === 'tr' ? 'Eğitim Durumu' : 'Education Status',
    role: language === 'tr' ? 'Tercih Ettiği Rol' : 'Position',
    edu: language === 'tr'
      ? 'Celal Bayar Üniversitesi, Makine Mühendisliği, Lisans, 2021'
      : 'Celal Bayar University, Mechanical Engineering, Bachelor\'s, 2021',
    about: language === 'tr' ? 'Hakkımda' : 'About',
    aboutp: language === 'tr'
      ? '2021 yılında Celal Bayar Üniversitesi Makine Mühendisliği bölümünden mezun oldum. Uzun süredir ilgimi çeken programlama alanına olan merakımı takip ederek, özenle hazırladığım bir plan ve yol haritasıyla bu alana geçiş yaptım. Kesin kararlar almak adına, University Of Michigan tarafından sunulan 19 saatlik Python eğitimini Coursera üzerinden başarıyla tamamladım. Ardından, Workintech tarafından düzenlenen 6 aylık hızlandırılmış ve yoğun Full Stack Web Geliştirici kursuna kayıt oldum. Sürekli Projeler ve araştırmalar yaparak kendimi geliştirmeye, yeni teknolojilere adapte olmaya ve sınırlarımı zorlamaya devam edeceğim.'
      : 'I graduated from Celal Bayar University with a degree in Mechanical Engineering in 2021. Following my long-standing interest in programming, I carefully prepared a plan and roadmap to transition into this field. To make informed decisions, I enrolled in the 19-hour Python course offered by the University of Michigan on Coursera and successfully completed it. Subsequently, I registered for the intensive 6-month Full Stack Web Developer course organized by Workintech. Continuously engaging in projects and conducting research, I am committed to furthering my development, adapting to new technologies, and pushing my boundaries. I am passionate about exploring innovative approaches and eagerly anticipate contributing to and celebrating shared successes.',
  };
  const sectionClass = darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800';
  const cardClass = darkMode ? 'bg-gray-800 text-indigo-600' : 'bg-white text-gray-800';
  const aboutClass = darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';

  return (
    <section className={`py-16 ${sectionClass}`} id="profile" style={{
      backgroundImage: `url('./Images/other-back.png')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">{profileData.profile}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`${cardClass} p-6 rounded-lg shadow-md`}>
            <h3 className="text-2xl font-semibold mb-4">{profileData.birth}</h3>
            <p className="text-base text-white">{"26.08.1997"}</p>
          </div>
          <div className={`${cardClass} p-6 rounded-lg shadow-md`}>
            <h3 className="text-2xl font-bold mb-8">{profileData.city}</h3>
            <p className="text-base text-white">{"Antalya"}</p>
          </div>
          <div className={`${cardClass} p-6 rounded-lg shadow-md`}>
            <h3 className="text-2xl font-semibold mb-4">{profileData.education}</h3>
            <p className="text-base text-white">{profileData.edu}</p>
          </div>
          <div className={`${cardClass} p-6 rounded-lg shadow-md`}>
            <h3 className="text-2xl font-semibold mb-4">{profileData.role}</h3>
            <p className="text-base text-white">{"Full Stack Developer, Front-End, Back-End"}</p>
          </div>
        </div>
        <div className={`mt-6 ${aboutClass} p-6 rounded-lg shadow-md`}>
          <h3 className="text-xl font-semibold mb-4 text-indigo-500">{profileData.about}</h3>
          <p className="text-base text-white">{profileData.aboutp}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
