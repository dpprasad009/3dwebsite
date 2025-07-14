import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Smartphone } from 'lucide-react';
import Scene3D from '../3D/Scene3D';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* 3D Background - Hidden on small screens for performance */}
      <div className="absolute inset-0 opacity-30 hidden lg:block">
        <Scene3D className="w-full h-full" />
      </div>

      {/* Mobile gradient background */}
      <div className="absolute inset-0 lg:hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              Smart{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Automation
              </span>{' '}
              Solutions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Revolutionize your world with cutting-edge GPS tracking and home automation 
              technology. Experience the future of connected living today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12"
            >
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-base sm:text-lg font-medium rounded-full text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Our Services
              </button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">Smart Automation</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">Secure Tracking</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300">
                <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">Mobile Control</span>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="aspect-square w-full max-w-md mx-auto lg:max-w-none bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl lg:rounded-3xl backdrop-blur-sm border border-white/10 p-4 sm:p-6 lg:p-8">
              <div className="hidden lg:block w-full h-full">
                <Scene3D className="w-full h-full" />
              </div>
              <div className="lg:hidden flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl sm:text-2xl">IM</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Innomakers</h3>
                  <p className="text-sm text-gray-300">Smart Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
