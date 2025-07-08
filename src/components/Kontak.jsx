import { motion } from 'framer-motion';
import { RiMailSendFill, RiGithubFill } from 'react-icons/ri';

const Kontak = () => {
  return (
    <section id="kontak" className="mt-10 mb-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="max-w-xl mx-auto text-center"
        >
          {/* Judul */}
          <h2 className="text-3xl font-bold text-white mb-4">
            Hubungi Saya
          </h2>

          {/* Deskripsi Singkat */}
          <p className="text-lg text-zinc-400 mb-8">
            Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar menyapa. Jangan ragu untuk menghubungi saya.
          </p>

          {/* Tombol Call to Action */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            
            {/* Tombol Email */}
            <a 
              href="mailto:23081010058@student.upnjatim.ac.id" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-violet-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-violet-700 transition-colors duration-300"
            >
              <RiMailSendFill />
              Kirim Email
            </a>
            
            {/* Tombol GitHub */}
            <a 
              href="https://github.com/Ferrrdy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-zinc-700 transition-colors duration-300"
            >
              <RiGithubFill />
              Lihat GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Kontak;