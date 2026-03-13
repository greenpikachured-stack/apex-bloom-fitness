/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_CONTACT_SERVICE_ID: string;
  readonly VITE_EMAILJS_CONTACT_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_CONTACT_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_TRIAL_SERVICE_ID: string;
  readonly VITE_EMAILJS_TRIAL_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_TRIAL_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
