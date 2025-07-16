"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Twitter, Github, Linkedin } from "lucide-react"

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Badge */}
        <Badge variant="secondary" className="text-sm font-medium">
          🚀 Something amazing is brewing
        </Badge>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Coming Soon
          </h1>
          <p className="text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">
            We're working hard to bring you something incredible. Stay tuned for updates!
          </p>
        </div>

        {/* Email signup */}
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900">Get notified when we launch</h3>
                <p className="text-sm text-slate-600">Be the first to know when we go live</p>
              </div>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" disabled={isSubscribed}>
                  {isSubscribed ? (
                    "Subscribed!"
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Notify Me
                    </>
                  )}
                </Button>
              </div>
              {isSubscribed && (
                <p className="text-sm text-green-600 font-medium">✓ Thanks! We'll notify you when we launch.</p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Social links */}
        <div className="space-y-4">
          <p className="text-slate-600">Follow us for updates</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full bg-transparent">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-transparent">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-transparent">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
