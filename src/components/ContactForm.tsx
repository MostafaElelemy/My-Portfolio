export function ContactForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/40 focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/40 focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
      <textarea
        name="message"
        placeholder="Your message"
        className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/40 focus:outline-none focus:ring-2 focus:ring-brand-500"
        rows={5}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-brand-gradient text-white hover:opacity-90 transition"
      >
        Send
      </button>
      <div className="mt-4 text-sm text-neutral-500">
        <p>
          Reach me directly:{" "}
          <a className="underline" href="mailto:mostelelemy@gmail.com">
            mostelelemy@gmail.com
          </a>{" "}
          ·{" "}
          <a
            className="underline"
            href="https://wa.me/201095159396"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>{" "}
          ·{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/mostafa-elelemy-502785204/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a
            className="underline"
            href="https://github.com/MostafaElelemy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </form>
  )
}
