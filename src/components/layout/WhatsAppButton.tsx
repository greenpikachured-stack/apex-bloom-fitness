const WHATSAPP_NUMBER = "916301499339";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp at +91 6301 499 339"
      title="Chat on WhatsApp"
      className="group fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-[9999] flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-[1.06] active:scale-95 sm:h-14 sm:w-14 md:bottom-6 md:right-6"
    >
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-md transition-opacity duration-300 group-hover:opacity-90" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] shadow-[0_14px_34px_rgba(37,211,102,0.5)] ring-2 ring-white/20" />
      <span className="relative flex h-full w-full items-center justify-center text-white">
        <svg
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          className="h-6 w-6 fill-current drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] sm:h-7 sm:w-7"
        >
          <path d="M19.11 4.93A10 10 0 0 0 3.18 16.68L2 22l5.48-1.44a10 10 0 0 0 4.77 1.21h.01A10 10 0 0 0 19.1 4.93Zm-6.74 15.3h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.25.85.87-3.16-.2-.32a8.3 8.3 0 1 1 7.12 3.97Zm4.56-6.22c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.57.12-.17.26-.66.81-.81.98-.15.17-.3.2-.56.07-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.26-.02-.39.11-.52.11-.11.26-.3.38-.44.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.07-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.45.07-.69.32-.23.26-.89.87-.89 2.12 0 1.25.91 2.45 1.03 2.62.13.17 1.79 2.73 4.34 3.82.61.26 1.09.42 1.46.54.61.2 1.17.17 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.3Z" />
        </svg>
      </span>
    </a>
  );
};
