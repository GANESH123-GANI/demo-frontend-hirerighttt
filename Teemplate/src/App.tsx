import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import OnboardingStep1Page from './pages/OnboardingStep1Page'
import OnboardingStep2Page from './pages/OnboardingStep2Page'
import OnboardingStep3Page from './pages/OnboardingStep3Page'
import OnboardingStep4Page from './pages/OnboardingStep4Page'
import OnboardingStep5Page from './pages/OnboardingStep5Page'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about-us" element={<OnboardingStep1Page />} />
      
      {/* Onboarding Flow: 5 Steps */}
      <Route path="/onboarding" element={<OnboardingStep1Page />} />
      <Route path="/onboarding/step-1" element={<OnboardingStep1Page />} />
      <Route path="/onboarding/step-2" element={<OnboardingStep2Page />} />
      <Route path="/onboarding/step-3" element={<OnboardingStep3Page />} />
      <Route path="/onboarding/step-4" element={<OnboardingStep4Page />} />
      <Route path="/onboarding/step-5" element={<OnboardingStep5Page />} />
      
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
