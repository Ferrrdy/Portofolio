import { motion } from 'framer-motion';
import { listProyek } from '../data';
import { RiGithubFill, RiShareBoxFill } from 'react-icons/ri';

const Proyek = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="project" className="py-24 scroll-mt-0">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Project Pilihan</h2>
          <p className="text-base/loose text-zinc-400 mb-16">
            Beberapa proyek pribadi dan klien yang pernah saya kerjakan. Setiap project adalah sebuah cerita tentang pemecahan masalah dan kreativitas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {listProyek.map(proyek => (
            <motion.div
              key={proyek.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-zinc-800 rounded-xl overflow-hidden flex flex-col group"
            >
              <div className="overflow-hidden">
                 <img src={proyek.gambar} alt={proyek.nama} className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{proyek.nama}</h3>
                <p className="text-zinc-400 mb-4 flex-grow">{proyek.desk}</p>
                
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <span key={index} className="bg-zinc-700 text-violet-300 text-xs font-medium px-3 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyek;