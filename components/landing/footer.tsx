"use client"

import { useState } from "react"
import Link from "next/link"
import { Logo } from "@/components/brand/logo"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const footerLinks = {
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
}

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    content: `Last updated: ${new Date().toLocaleDateString()}

1. Information We Collect
We collect information you provide directly to us, such as when you create an account, make a booking, or contact us for support.

2. How We Use Your Information
We use the information we collect to provide, maintain, and improve our services, process transactions, and send you related information.

3. Information Sharing
We do not sell, trade, or otherwise transfer your personal information to outside parties except to provide our services or as required by law.

4. Data Security
We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

5. Your Rights
You have the right to access, update, or delete your personal information at any time by contacting us.

6. Contact Us
If you have questions about this Privacy Policy, please contact us at bookvsflow@gmail.com.`
  },
  terms: {
    title: "Terms of Service",
    content: `Last updated: ${new Date().toLocaleDateString()}

1. Acceptance of Terms
By accessing and using BookVSFlow, you accept and agree to be bound by these Terms of Service.

2. Description of Service
BookVSFlow provides a Telegram-based booking system for service professionals including salons, barbershops, and other appointment-based businesses.

3. User Responsibilities
You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.

4. Acceptable Use
You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the service.

5. Intellectual Property
All content, features, and functionality of the service are owned by BookVSFlow and are protected by international copyright and trademark laws.

6. Limitation of Liability
BookVSFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.

7. Changes to Terms
We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.

8. Contact
For questions about these Terms, contact us at bookvsflow@gmail.com.`
  },
  cookies: {
    title: "Cookie Policy",
    content: `Last updated: ${new Date().toLocaleDateString()}

1. What Are Cookies
Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience.

2. Types of Cookies We Use
- Essential Cookies: Required for the website to function properly
- Analytics Cookies: Help us understand how visitors interact with our website
- Preference Cookies: Remember your settings and preferences

3. Managing Cookies
You can control and manage cookies through your browser settings. Note that disabling certain cookies may affect website functionality.

4. Third-Party Cookies
We may use third-party services that place cookies on your device. These are governed by the respective third-party privacy policies.

5. Updates to This Policy
We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.

6. Contact
For questions about our Cookie Policy, contact us at bookvsflow@gmail.com.`
  }
}

export function Footer() {
  const [openDialog, setOpenDialog] = useState<"privacy" | "terms" | "cookies" | null>(null)

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <Logo size="sm" variant="light" />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/60 max-w-xs">
              Smart Booking System for Service Professionals. Telegram-first automation for modern salons.
            </p>
            {/* Contact info */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-accent">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span className="text-primary-foreground/70">bookvsflow@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-accent">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
                <Link 
                  href="https://t.me/VShliapin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  @VShliapin
                </Link>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-primary-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-primary-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => setOpenDialog("privacy")}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenDialog("terms")}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenDialog("cookies")}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold divider line */}
        <div className="mt-12 h-px bg-accent/20" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} BookVSFlow. All rights reserved.
          </p>
        </div>
      </div>

      {/* Legal Dialogs */}
      {(["privacy", "terms", "cookies"] as const).map((type) => (
        <Dialog key={type} open={openDialog === type} onOpenChange={(open) => setOpenDialog(open ? type : null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{legalContent[type].title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4 text-sm text-muted-foreground whitespace-pre-line">
              {legalContent[type].content}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </footer>
  )
}
