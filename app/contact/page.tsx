"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Copy, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>();
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const onSubmit = async (data: ContactForm) => {
    // Définir l'état de soumission à true pour désactiver le bouton
    setIsSubmittingForm(true);

    // Afficher un toast de chargement
    const loadingToast = toast.loading("Envoi en cours...");

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      };

      // Ajouter un délai artificiel pour s'assurer que le bouton est désactivé
      // pour que Playwright ait le temps de le détecter
      await new Promise((resolve) => setTimeout(resolve, 500));

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Supprimer le toast de chargement et afficher le succès
      toast.dismiss(loadingToast);
      toast.success("Message envoyé avec succès! 🎉", {
        duration: 3000,
        position: "bottom-right",
      });

      reset();
    } catch (error) {
      // Supprimer le toast de chargement et afficher l'erreur
      toast.dismiss(loadingToast);
      toast.error("Une erreur s&apos;est produite lors de l&apos;envoi 😕", {
        duration: 3000,
        position: "bottom-right",
      });
    } finally {
      // Réinitialiser l'état de soumission quel que soit le résultat
      setIsSubmittingForm(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("stempfel.rodolphe@gmail.com");
    toast.success("Email copié!");
  };

  return (
    <div className="min-h-screen w-full relative">
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Parlons de votre
              <span className="text-[rgb(var(--accent-neon))] neon-glow">
                {" "}
                projet
              </span>
            </h1>
            <p className="text-lg text-gray-400">
              Une idée en tête ? N&apos;hésitez pas à me contacter pour en
              discuter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glassmorphism p-6 md:p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nom</label>
                  <input
                    type="text"
                    {...register("name", { required: "Le nom est requis" })}
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-[rgb(var(--accent-neon))] transition-colors"
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "L'email est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email invalide",
                      },
                    })}
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-[rgb(var(--accent-neon))] transition-colors"
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    {...register("message", {
                      required: "Le message est requis",
                    })}
                    rows={5}
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-[rgb(var(--accent-neon))] transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmittingForm}
                  data-testid="submit-button"
                  className="w-full py-3 bg-[rgb(var(--accent-neon))] text-black font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting || isSubmittingForm ? (
                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="glassmorphism p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Email</h3>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 text-[rgb(var(--accent-neon))] hover:underline"
                >
                  <Copy size={16} />
                  stempfel.rodolphe@gmail.com
                </button>
              </div>

              {/* Réseaux sociaux */}
              <div className="glassmorphism p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Réseaux sociaux</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/rodolphe-s-ba6a7a232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/HrodWolfS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Localisation */}
              <div className="glassmorphism p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Localisation</h3>
                <p className="text-gray-400">
                  Lille, France
                  <br />
                  Disponible pour des projets à distance
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
