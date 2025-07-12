import { motion } from 'framer-motion';
import { DataImage } from '../data';
import { RiDownloadFill, RiArrowRightLine } from 'react-icons/ri';

const Beranda = () => {
  return (
    <section id="beranda" className="flex items-center mt-32 scroll-mt-80">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl/tight font-bold mb-6 text-white">
              Hi, Saya Ferdy Ashari Putra
            </h1>
            <p className="text-base/loose mb-8 text-zinc-400">
              Mahasiswa Informatika yang aktif mengembangkan aplikasi web dan desain UI/UX. Saya fokus menciptakan solusi digital yang tidak hanya berjalan baik, tetapi juga memberikan pengalaman pengguna yang optimal.
            </p>
            <div className="flex items-center gap-4">
              <a href="#project" className="bg-violet-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-violet-700 transition-colors flex items-center gap-2">
                Lihat Proyek <RiArrowRightLine />
              </a>
              <a href="https://drive.google.com/drive/folders/1EnyqyHrKuD98W2CXlGJnp8nmYpCBYxft?usp=sharing" download className="bg-zinc-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-zinc-600 transition-colors flex items-center gap-2">
                Download CV <RiDownloadFill />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="w-full max-w-md mx-auto md:ml-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={DataImage.HeroImage} alt="Ferdy Ashari Putra" className="w-[500px] rounded-full md:ml-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;