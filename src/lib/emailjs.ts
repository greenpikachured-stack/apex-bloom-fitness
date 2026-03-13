interface EmailJsConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export const sendEmailJsForm = async (
  config: EmailJsConfig,
  templateParams: Record<string, string>,
) => {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }
};

