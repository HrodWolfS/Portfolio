"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, Copy, Linkedin, Github, Twitter } from 'lucide-react'
import { toast } from 'sonner'
import { ParticlesBackground } from '@/components/cv/particles-background'

interface ContactForm {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactForm>()
  const [previewMode, setPreviewMode] = useState(false)

  const onSubmit = async (data: ContactForm) => {
    try {
      // Simuler l'envoi
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Message envoyé avec succès!')
      
      // Reset form
      // form.reset()
    } catch (error) {
      toast.error("Une erreur s'est produite")
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@example.com')
    toast.success('Email copié!')
  }

  return (
    <div className="min-h-screen w-full relative">
      <ParticlesBackground />
      
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
              <span className="text-[rgb(var(--accent-neon))] neon-glow"> projet</span>
            </h1>
            <p className="text-lg text-gray-400">
              Une idée en tête ? N'hésitez pas à me contacter pour en discuter.
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
                    {...register('name', { required: 'Le nom est requis' })}
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-[rgb(var(--accent-neon))] transition-colors"
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    {...register('email', {
                      required: "L'email est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email invalide'
                      }
                    })}
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-[rgb(var(--accent-neon))] transition-colors"
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    {...register('message', { required: 'Le message est requis' })}
                    rows={5}
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-[rgb(var(--accent-neon))] transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[rgb(var(--accent-neon))] text-black font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
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
                  contact@example.com
                </button>
              </div>

              {/* Réseaux sociaux */}
              <div className="glassmorphism p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Réseaux sociaux</h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter size={20} />
                    Twitter
                  </a>
                </div>
              </div>

              {/* Localisation */}
              <div className="glassmorphism p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Localisation</h3>
                <p className="text-gray-400">
                  Paris, France
                  <br />
                  Disponible pour des projets à distance
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}