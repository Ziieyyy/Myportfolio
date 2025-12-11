import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { SocialLinks } from '@/components/SocialLinks';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form Message from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}
Email: ${formState.email}

Message:
${formState.message}`);
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=khairazizi@gmail.com&su=${subject}&body=${body}`;
    
    // Open Gmail with pre-filled email
    window.open(mailtoLink, '_blank');
    
    // Mark as submitted
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageTransition>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="fade-up text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="fade-up-delay-1 text-lg sm:text-xl text-muted-foreground">
                Have a question or want to work together? Let's connect.
              </p>
            </div>

            {/* Contact Form */}
            <div className="fade-up-delay-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="input-premium"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="input-premium"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    rows={6}
                    className="input-premium resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={cn(
                    'w-full btn-primary flex items-center justify-center gap-3',
                    'disabled:opacity-70 disabled:cursor-not-allowed',
                    isSubmitted && 'bg-emerald-500 hover:bg-emerald-500'
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Preparing Email...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Email Prepared! Check Gmail.
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  This will open your Gmail with a pre-filled email to khairazizi@gmail.com
                </p>
              </form>
            </div>

            {/* Alternative Contact */}
            <div className="fade-up-delay-3 mt-16 text-center">
              <p className="text-sm text-muted-foreground mb-6">
                Or connect with me on social media
              </p>
              <SocialLinks className="justify-center" />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;