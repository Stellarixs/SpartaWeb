"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { Send, Mail, MessageSquare, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would normally send the form data to a server
    alert("Message sent! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6 mt-10">Contact Us</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Have questions about Sparta? Want to report a bug or suggest a feature? Get in touch with our team.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="border border-red-900/50 rounded-lg p-6 bg-gradient-to-b from-red-900/20 to-black"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-red-900/50 rounded px-4 py-2 text-white focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-red-900/50 rounded px-4 py-2 text-white focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gold mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-red-900/50 rounded px-4 py-2 text-white focus:border-gold focus:outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="bug">Bug Report</option>
                  <option value="suggestion">Feature Suggestion</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-black border border-red-900/50 rounded px-4 py-2 text-white focus:border-gold focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center bg-red-900 hover:bg-red-800 text-gold px-6 py-3 rounded border border-gold/30 transition-colors"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="border border-red-900/50 rounded-lg p-6 bg-gradient-to-b from-red-900/20 to-black mb-6">
              <h2 className="text-2xl font-bold text-gold mb-4">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-300">support@Sparta.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Discord</h3>
                    <p className="text-gray-300">Join our Discord community</p>
                    <a href="https://discord.gg/u4BKgKSMyX" className="text-gold text-sm hover:underline">
                      discord.gg/Sparta
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-5 w-5 text-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Forum</h3>
                    <p className="text-gray-300">Visit our community forum</p>
                    <a href="#" className="text-gold text-sm hover:underline">
                      forum.Sparta.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-red-900/50 rounded-lg p-6 bg-gradient-to-b from-red-900/20 to-black">
              <h2 className="text-2xl font-bold text-gold mb-4">Support Hours</h2>
              <p className="text-gray-300 mb-4">Our team is available to assist you during the following hours:</p>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-gold">9:00 AM - 6:00 PM CET</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-gold">10:00 AM - 4:00 PM CET</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-gold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
