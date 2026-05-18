import { Sparkles, Heart, Star, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface ServicesPageProps {
  onNavigate: (page: 'home' | 'services' | 'contact') => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const serviceCategories = [
    {
      category: 'Facial Treatments',
      icon: <Sparkles className="w-8 h-8 text-[#d4a574]" />,
      image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      services: [
        {
          name: 'Signature Hydrating Facial',
          duration: '60 min',
          price: '$120',
          description: 'Deep cleansing, exfoliation, and hydration for radiant, glowing skin.',
        },
        {
          name: 'Anti-Aging Treatment',
          duration: '75 min',
          price: '$165',
          description: 'Advanced collagen-boosting facial with LED therapy and targeted serums.',
        },
        {
          name: 'Acne Clearing Facial',
          duration: '60 min',
          price: '$130',
          description: 'Specialized treatment to reduce breakouts and prevent future acne.',
        },
        {
          name: 'Express Glow Facial',
          duration: '30 min',
          price: '$75',
          description: 'Quick refresh perfect for busy schedules. Cleanse, exfoliate, and moisturize.',
        },
      ],
    },
    {
      category: 'Massage Therapy',
      icon: <Heart className="w-8 h-8 text-[#d4a574]" />,
      image: 'https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      services: [
        {
          name: 'Swedish Relaxation Massage',
          duration: '60 min',
          price: '$110',
          description: 'Classic full-body massage to ease tension and promote relaxation.',
        },
        {
          name: 'Deep Tissue Massage',
          duration: '75 min',
          price: '$145',
          description: 'Intensive therapy targeting chronic muscle tension and knots.',
        },
        {
          name: 'Hot Stone Massage',
          duration: '90 min',
          price: '$170',
          description: 'Heated stones combined with massage for deep muscle relaxation.',
        },
        {
          name: 'Prenatal Massage',
          duration: '60 min',
          price: '$120',
          description: 'Gentle, safe massage designed specifically for expecting mothers.',
        },
      ],
    },
    {
      category: 'Nail Services',
      icon: <Star className="w-8 h-8 text-[#d4a574]" />,
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      services: [
        {
          name: 'Luxury Manicure',
          duration: '45 min',
          price: '$55',
          description: 'Complete nail care with shaping, cuticle treatment, and polish.',
        },
        {
          name: 'Spa Pedicure',
          duration: '60 min',
          price: '$75',
          description: 'Indulgent foot treatment with exfoliation, massage, and polish.',
        },
        {
          name: 'Gel Manicure',
          duration: '60 min',
          price: '$70',
          description: 'Long-lasting gel polish with professional application.',
        },
        {
          name: 'Deluxe Mani-Pedi',
          duration: '90 min',
          price: '$115',
          description: 'Complete hand and foot pampering package with premium products.',
        },
      ],
    },
  ];

  const packages = [
    {
      name: 'Monthly Glow Membership',
      price: '$199/month',
      benefits: [
        'One signature facial per month',
        '20% off all additional services',
        'Priority booking',
        'Complimentary products',
      ],
    },
    {
      name: 'Wellness Package',
      price: '$499',
      benefits: [
        '2 massages + 1 facial',
        'Valid for 6 months',
        'Transferable to friends',
        'Save $80 vs. individual pricing',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Spa products"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-[48px] md:text-[64px] leading-tight mb-4">
            Our <span className="text-[#d4a574]">Services</span>
          </h1>
          <p className="text-[18px] text-white/90">
            Expert treatments tailored to your unique beauty and wellness needs
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <div className="flex items-center gap-4 mb-8">
                  {category.icon}
                  <h2 className="text-[36px]">{category.category}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Category Image */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-24 rounded-lg overflow-hidden h-[400px]">
                      <ImageWithFallback
                        src={category.image}
                        alt={category.category}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="lg:col-span-2 space-y-6">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="bg-[#f8f6f3] p-6 rounded-lg hover:shadow-lg transition-shadow"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                          <div className="flex-1">
                            <h3 className="text-[20px] mb-2">{service.name}</h3>
                            <p className="text-[14px] text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                          <div className="flex sm:flex-col items-start sm:items-end gap-2">
                            <span className="text-[24px] text-[#d4a574]">
                              {service.price}
                            </span>
                            <div className="flex items-center gap-1 text-muted-foreground text-[14px]">
                              <Clock className="w-4 h-4" />
                              <span>{service.duration}</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => onNavigate('contact')}
                          className="text-[#d4a574] flex items-center gap-2 hover:gap-3 transition-all text-[14px] mt-4"
                        >
                          Book This Service
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[40px] md:text-[48px] mb-4">
              Special <span className="text-[#d4a574]">Packages</span>
            </h2>
            <p className="text-[16px] text-muted-foreground max-w-2xl mx-auto">
              Save more with our curated packages and membership options designed for regular self-care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border-2 border-[#d4a574]/20 hover:border-[#d4a574] transition-colors"
              >
                <h3 className="text-[28px] mb-2">{pkg.name}</h3>
                <p className="text-[32px] text-[#d4a574] mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3 text-[14px]">
                      <Star className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-[#d4a574] text-white py-3 rounded-lg hover:bg-[#c49564] transition-colors text-[16px]"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[40px] md:text-[48px] mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-[18px] text-muted-foreground mb-8">
            Our expert team can help you choose the perfect treatment for your goals. Book a free consultation today.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#d4a574] text-white px-8 py-4 rounded-lg hover:bg-[#c49564] transition-colors text-[16px]"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
