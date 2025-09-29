import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-[88vh] grid place-items-center overflow-hidden pt-16 text-center">
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative p-2 rounded-xl shadow-[0_0_50px_-12px_rgba(139,92,246,0.6)] bg-neutral-950/20 backdrop-blur-sm mx-auto"
        >
          <img
            src="/avatar.jpg"
            alt="Mostafa Elelemy"
            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-xl"
            loading="eager"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="mt-6 text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100"
        >
          Mostafa Elelemy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
          className="mt-2 text-lg md:text-xl font-semibold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent"
        >
          Frontend Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg hover:opacity-95 active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            aria-label="View Projects section"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            aria-label="Go to Contact section"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
