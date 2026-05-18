import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1611441085337-56f4d0ea0ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Spa interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-[48px] md:text-[64px] leading-tight mb-4">
            Book Your <span className="text-[#d4a574]">Appointment</span>
          </h1>
          <p className="text-[18px] text-white/90">
            Take the first step toward radiant beauty and ultimate relaxation
          </p>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-[#d4a574] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white text-[18px]">
            ✨ <span className="font-medium">New Client Special:</span> Get 15% off your first service when you book today!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#f8f6f3] p-8 md:p-10 rounded-lg">
                <h2 className="text-[32px] mb-2">Request an Appointment</h2>
                <p className="text-[14px] text-muted-foreground mb-8">
                  Fill out the form below and we'll contact you within 24 hours to confirm your booking.
                </p>

                {submitted ? (
                  <div className="bg-white p-8 rounded-lg text-center">
                    <CheckCircle className="w-16 h-16 text-[#d4a574] mx-auto mb-4" />
                    <h3 className="text-[24px] mb-2">Thank You!</h3>
                    <p className="text-[14px] text-muted-foreground">
                      Your appointment request has been received. We'll contact you shortly to confirm your booking.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-[14px] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a574] text-[14px]"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[14px] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a574] text-[14px]"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-[14px] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a574] text-[14px]"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-[14px] mb-2">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a574] text-[14px]"
                        >
                          <option value="">Select a service</option>
                          <option value="facial">Facial Treatment</option>
                          <option value="massage">Massage Therapy</option>
                          <option value="nails">Nail Services</option>
                          <option value="package">Package/Membership</option>
                          <option value="consultation">Free Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-[14px] mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a574] text-[14px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[14px] mb-2">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a574] text-[14px] resize-none"
                        placeholder="Let us know any specific requests or concerns..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#d4a574] text-white py-4 rounded-lg hover:bg-[#c49564] transition-colors text-[16px]"
                    >
                      Submit Booking Request
                    </button>

                    <p className="text-[12px] text-muted-foreground text-center">
                      By submitting this form, you agree to receive appointment confirmations and promotional offers via email and SMS.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-[#f8f6f3] p-6 rounded-lg">
                  <h3 className="text-[20px] mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-[14px] mb-1">Phone</p>
                        <a
                          href="tel:+1234567890"
                          className="text-[14px] text-[#d4a574] hover:underline"
                        >
                          (123) 456-7890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-[14px] mb-1">Email</p>
                        <a
                          href="mailto:hello@serenityglow.com"
                          className="text-[14px] text-[#d4a574] hover:underline"
                        >
                          hello@serenityglow.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-[14px] mb-1">Location</p>
                        <p className="text-[14px]">
                          123 Wellness Avenue
                          <br />
                          Beverly Hills, CA 90210
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#f8f6f3] p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-[#d4a574]" />
                    <h3 className="text-[20px]">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-[14px]">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span>11:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Why Book With Us */}
                <div className="bg-[#d4a574] p-6 rounded-lg text-white">
                  <h3 className="text-[20px] mb-4">Why Book With Us?</h3>
                  <ul className="space-y-3 text-[14px]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Same-day appointments available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Flexible rescheduling policy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Expert licensed professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Premium organic products</span>
                    </li>
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <p className="text-[14px] text-muted-foreground mb-4">
                    Prefer to speak with someone?
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center gap-2 bg-[#d4a574] text-white px-6 py-3 rounded-lg hover:bg-[#c49564] transition-colors text-[14px]"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
