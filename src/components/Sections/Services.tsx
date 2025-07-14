import React from 'react';
import { motion } from 'framer-motion';
import { Home, Satellite, Smartphone, Shield, Wifi, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: '1',
      title: 'Home Automation',
      description: 'Transform your home into a smart living space with automated lighting, security, and climate control systems.',
      icon: Home,
      features: ['Smart Lighting Control', 'Climate Management', 'Security Integration', 'Voice Control'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '2',
      title: 'GPS Tracking Solutions',
      description: 'Advanced GPS tracking systems for vehicles, assets, and personal safety with real-time monitoring.',
      icon: Satellite,
      features: ['Real-time Location', 'Geofencing Alerts', 'Route Optimization', '24/7 Monitoring'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: '3',
      title: 'IoT Integration',
      description: 'Seamlessly connect all your devices and systems for unified control and monitoring.',
      icon: Wifi,
      features: ['Device Connectivity', 'Data Analytics', 'Remote Control', 'Cloud Integration'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: '4',
      title: 'Mobile Applications',
      description: 'Custom mobile apps for controlling and monitoring your automation systems on the go.',
      icon: Smartphone,
      features: ['iOS & Android Apps', 'Real-time Updates', 'Push Notifications', 'Offline Capabilities'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: '5',
      title: 'Security Systems',
      description: 'Comprehensive security solutions with smart cameras, alarms, and access control systems.',
      icon: Shield,
      features: ['Smart Cameras', 'Motion Detection', 'Access Control', 'Emergency Alerts'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: '6',
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance services to keep your systems running smoothly.',
      icon: Settings,
      features: ['24/7 Support', 'System Updates', 'Performance Monitoring', 'Troubleshooting'],
      color: 'from-pink-500 to-rose-500'
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive automation solutions designed to enhance your lifestyle and business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-gray-600 transition-all duration-300 h-full flex flex-col"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 sm:mb-6`}>
                  <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed flex-grow text-sm sm:text-base">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
