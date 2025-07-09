import { motion } from 'framer-motion';

const Tentang = () => {
  return (
    <section id="tentang" className="mt-30 mb-10 scroll-mt-30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Tentang Saya</h2>
          <div className="w-24 h-1 bg-violet-500 mx-auto mb-8"></div>
          <p className="text-lg/relaxed text-zinc-300">
            Hi, saya Ferdy. Sebagai Full Stack Web Developer dan Designer, saya percaya bahwa fungsionalitas dan estetika harus berjalan selaras. Setiap proyek yang saya kerjakan tidak hanya dirancang untuk terlihat menarik, tetapi juga untuk memberikan pengalaman pengguna yang intuitif dan optimal. Saya bersemangat dalam memecahkan masalah dan menciptakan solusi digital yang berdampak.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tentang;