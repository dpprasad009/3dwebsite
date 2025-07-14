import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '1000+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Globe, label: 'Countries Served', value: '15+' },
    { icon: Lightbulb, label: 'Innovations', value: '50+' }
  ];

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x300/2563eb/ffffff?text=AJ'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x300/10b981/ffffff?text=SC'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Lead Engineer',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x300/f59e0b/ffffff?text=MR'
    }
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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Innomakers</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            We are passionate innovators dedicated to creating smart solutions that enhance everyday life through technology
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Story</h3>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
              <p className="text-gray-300 leading-relaxed">
                Founded in 2019, Innomakers began as a vision to bridge the gap between complex technology 
                and everyday usability. We started with a simple belief: smart technology should make life 
                easier, not more complicated.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we specialize in GPS tracking solutions and home automation systems that seamlessly 
                integrate into your lifestyle. Our products are designed with user experience at the forefront, 
                ensuring that advanced technology remains accessible to everyone.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a focus on innovation, reliability, and customer satisfaction, we continue to push the 
                boundaries of what's possible in smart automation and tracking technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-white/10 p-6 sm:p-8">
              <img
                src="https://img-wrapper.vercel.app/image?url=https://placehold.co/600x600/2563eb/ffffff?text=Innomakers+Office"
                alt="Innomakers Office"
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://img-wrapper.vercel.app/image?url=https://placehold.co/600x600/2563eb/ffffff?text=Innomakers+Team";
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-16 sm:mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-400 text-xs sm:text-base">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Meet Our Team</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Our diverse team of experts brings together years of experience in technology, design, and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-4 sm:mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-blue-500 to-purple-600"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const initials = member.name.split(' ').map(n => n[0]).join('');
                    target.src = `https://img-wrapper.vercel.app/image?url=https://placehold.co/300x300/2563eb/ffffff?text=${initials}`;
                  }}
                />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{member.name}</h4>
              <p className="text-blue-400 text-sm sm:text-base">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
