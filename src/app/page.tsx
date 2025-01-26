"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { ArrowRight, PiggyBank, Building, Store, BookOpen } from "lucide-react"
import LoanCalculator from "@/components/LandingPage/Loan-Calculator"
import { LoanCalculatorProvider } from "@/context/loanContext"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="w-full py-6 bg-white text-center text-3xl font-extrabold shadow-md tracking-wide sticky top-0 z-50">
        <span className="text-blue-700">Saylani</span> Microfinance App
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-white">
        <h1 className="text-6xl font-extrabold mb-6 text-gray-900 animate-fade-in-down">Achieve Your Financial Dreams</h1>
        <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
          Hassle-free loan application with flexible repayment plans. Your journey towards financial stability begins here.
        </p>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 px-10 py-6 font-semibold text-lg rounded-full hover:shadow-2xl shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-2 text-white">
          Get Started <ArrowRight className="w-5 h-5" />
        </Button>
      </section>

      {/* Loan Categories */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Loan Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Wedding Loans",
              desc: "Valima, Furniture, and Jahez expenses covered.",
              icon: PiggyBank,
              color: "bg-pink-100 text-pink-700",
            },
            {
              title: "Home Construction",
              desc: "Build or renovate your dream home.",
              icon: Building,
              color: "bg-blue-100 text-blue-700",
            },
            {
              title: "Business Startup",
              desc: "Fund your startup and grow your business.",
              icon: Store,
              color: "bg-purple-100 text-purple-700",
            },
            {
              title: "Education Loans",
              desc: "Invest in your education with ease.",
              icon: BookOpen,
              color: "bg-yellow-100 text-yellow-700",
            },
          ].map((loan, index) => (
            <Card
              key={index}
              className={`${loan.color} shadow-xl rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <loan.icon className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{loan.title}</h3>
                <p className="text-sm text-gray-600">{loan.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Loan Calculator */}
      <LoanCalculator />

      {/* Footer */}
      <footer className="py-10 bg-gradient-to-r from-gray-800 to-gray-900 text-center text-white text-sm">
        <div className="max-w-4xl mx-auto px-6">
          <p>&copy; 2025 Saylani Microfinance. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
