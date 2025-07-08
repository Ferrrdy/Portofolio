import { motion } from 'framer-motion';
import { listTools } from '../data';

const Tools = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="tools" className="py-15 bg-zinc-900 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Teknologi & Tools</h2>
          <p className="text-base/loose text-zinc-400 mb-12">
            Berikut adalah beberapa teknologi dan tools yang saya kuasai untuk membangun dan merancang aplikasi web.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {listTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center p-4 bg-zinc-800 rounded-lg border border-transparent hover:border-violet-500 hover:-translate-y-1 transition-all duration-300"
            >
              <img src={tool.gambar} alt={tool.nama} className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h4 className="font-semibold text-white">{tool.nama}</h4>
              <p className="text-sm text-zinc-400">{tool.ket}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;