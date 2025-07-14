import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Smartphone, Wifi, Shield, Battery } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: '1',
      name: 'GPS Tracker Pro',
      description: 'Advanced GPS tracking device with real-time location monitoring, geofencing, and long battery life.',
      features: [
        'Real-time GPS tracking',
        'Geofencing alerts',
        'SOS emergency button',
        '30-day battery life',
        'Waterproof design',
        'Mobile app control'
      ],
      price: '$299',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/2563eb/ffffff?text=GPS+Tracker+Pro',
      icon: MapPin,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '2',
      name: 'Smart Home Hub',
      description: 'Central control unit for all your home automation needs with voice control and AI integration.',
      features: [
        'Voice control support',
        'AI-powered automation',
        'Multi-device connectivity',
        'Energy monitoring',
        'Security integration',
        'Cloud synchronization'
      ],
      price: '$499',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/10b981/ffffff?text=Smart+Home+Hub',
      icon: Home,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const additionalFeatures = [
    { icon: Smartphone, title: 'Mobile App', description: 'Control everything from your smartphone' },
    { icon: Wifi, title: 'IoT Ready', description: 'Seamless integration with IoT devices' },
    { icon: Shield, title: 'Secure', description: 'End-to-end encryption and security' },
    { icon: Battery, title: 'Long Battery', description: 'Extended battery life for reliability' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Cutting-edge devices designed to bring smart automation and tracking to your daily life
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-gray-600 transition-all duration-300"
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/${product.color.includes('blue') ? '2563eb' : '10b981'}/ffffff?text=${encodeURIComponent(product.name)}`;
                    }}
                  />
                  <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                    <span className="text-gray-900 font-bold text-sm sm:text-base">{product.price}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">{product.name}</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{product.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 px-6 bg-gradient-to-r ${product.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base`}>
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-gray-600 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-white mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs sm:text-base">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
