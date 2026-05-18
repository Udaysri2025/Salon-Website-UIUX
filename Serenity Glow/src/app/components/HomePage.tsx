import { Sparkles, Clock, Award, Heart, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: 'home' | 'services' | 'contact') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Facial Treatments',
      description: 'Rejuvenate your skin with our signature facials and advanced skincare treatments.',
      image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Massage Therapy',
      description: 'Relax and unwind with therapeutic massages tailored to your needs.',
      image: 'https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Nail Services',
      description: 'Professional manicures and pedicures with premium products and care.',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      rating: 5,
      text: 'Absolutely amazing experience! The facial was transformative and the staff made me feel so pampered. I left feeling like a new person.',
    },
    {
      name: 'Emily Chen',
      rating: 5,
      text: 'Best spa in town! The massage therapist knew exactly what I needed. The atmosphere is so calming and luxurious.',
    },
    {
      name: 'Jennifer Adams',
      rating: 5,
      text: "I've been coming here for 2 years and wouldn't go anywhere else. Consistently excellent service and results every single time.",
    },
  ];

  const benefits = [
    'Licensed & certified professionals',
    'Premium organic products',
    'Flexible appointment scheduling',
    'Membership & package deals',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Luxury spa interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-[48px] md:text-[72px] leading-tight mb-6">
            Your Journey to
            <br />
            <span className="text-[#d4a574]">Radiant Beauty</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-white/90 mb-8 max-w-2xl mx-auto">
            Experience luxury skincare, therapeutic massage, and wellness treatments in a serene sanctuary designed for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#d4a574] text-white px-8 py-4 rounded-lg hover:bg-[#c49564] transition-colors flex items-center justify-center gap-2 text-[16px]"
            >
              Book Your Appointment
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-[16px]"
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#f8f6f3] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                <Award className="w-8 h-8 text-[#d4a574]" />
              </div>
              <p className="text-[28px] text-foreground mb-1">15+</p>
              <p className="text-[14px] text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Star className="w-8 h-8 text-[#d4a574]" />
              </div>
              <p className="text-[28px] text-foreground mb-1">4.9</p>
              <p className="text-[14px] text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Heart className="w-8 h-8 text-[#d4a574]" />
              </div>
              <p className="text-[28px] text-foreground mb-1">5,000+</p>
              <p className="text-[14px] text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <CheckCircle className="w-8 h-8 text-[#d4a574]" />
              </div>
              <p className="text-[28px] text-foreground mb-1">100%</p>
              <p className="text-[14px] text-muted-foreground">Licensed Pros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[48px] mb-4">
              Signature <span className="text-[#d4a574]">Services</span>
            </h2>
            <p className="text-[16px] text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated treatments designed to refresh, rejuvenate, and restore your natural glow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => onNavigate('services')}
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-[24px] mb-3">{service.title}</h3>
                <p className="text-[14px] text-muted-foreground mb-4">
                  {service.description}
                </p>
                <button className="text-[#d4a574] flex items-center gap-2 hover:gap-3 transition-all text-[14px]">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="bg-[#d4a574] text-white px-8 py-4 rounded-lg hover:bg-[#c49564] transition-colors text-[16px]"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[40px] md:text-[48px] mb-6">
                Why Choose <span className="text-[#d4a574]">SerenityGlow</span>
              </h2>
              <p className="text-[16px] text-muted-foreground mb-8">
                We're not just another spa. We're a team of passionate professionals dedicated to helping you look and feel your absolute best.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#d4a574] flex-shrink-0 mt-0.5" />
                    <span className="text-[16px]">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('contact')}
                className="mt-8 bg-[#d4a574] text-white px-8 py-4 rounded-lg hover:bg-[#c49564] transition-colors text-[16px]"
              >
                Book Now
              </button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1717160675158-fdd75b8595cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Spa treatment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[48px] mb-4">
              What Our Clients <span className="text-[#d4a574]">Say</span>
            </h2>
            <p className="text-[16px] text-muted-foreground">
              Real reviews from real people who trust us with their beauty and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#f8f6f3] p-8 rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#d4a574] text-[#d4a574]"
                    />
                  ))}
                </div>
                <p className="text-[14px] text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-[14px] text-muted-foreground">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#d4a574] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[40px] md:text-[48px] text-white mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-[18px] text-white/90 mb-8">
            Book your appointment today and experience the SerenityGlow difference. New clients receive 15% off their first service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#d4a574] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-[16px]"
            >
              Book Your First Visit
            </button>
            <a
              href="tel:+1234567890"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-[16px]"
            >
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
