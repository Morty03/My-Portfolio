
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. I will respond within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-stone-900 text-stone-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Let's Collaborate
            </h2>
            <div className="w-16 h-0.5 bg-amber-200 mx-auto mb-8"></div>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
              Looking for roles where I can ship real impact, learn fast, and grow with the team.
              I'm always interested in discussing new opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-amber-200 mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm uppercase tracking-widest text-stone-400 mb-1">
                      Email
                    </div>
                    <div className="text-lg">
                      skgoutham1344@gmail.com
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm uppercase tracking-widest text-stone-400 mb-1">
                      Location
                    </div>
                    <div className="text-lg">
                      Andhra Pradesh, IN
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm uppercase tracking-widest text-stone-400 mb-1">
                      Response Time
                    </div>
                    <div className="text-lg">
                      Within 24 hours
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-serif text-amber-200 mb-4">
                  Professional Networks
                </h4>
                <div className="flex space-x-6 text-stone-400">
                  <a
                  href="https://www.linkedin.com/in/k-goutham-344897207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-200 transition-colors duration-300">
                    LinkedIn
                  </a>

                  <a href="#" className="hover:text-amber-200 transition-colors duration-300">
                    GitHub
                  </a>
                  <a
                  href="https://drive.google.com/file/d/1yiI4dIvPwNONa4dgDl-fFOVIOjj5t9Se/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-200 transition-colors duration-300"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm uppercase tracking-widest text-stone-400 mb-2">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-stone-800 border-stone-700 text-stone-100 focus:border-amber-200 focus:ring-amber-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-widest text-stone-400 mb-2">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-stone-800 border-stone-700 text-stone-100 focus:border-amber-200 focus:ring-amber-200"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm uppercase tracking-widest text-stone-400 mb-2">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-stone-800 border-stone-700 text-stone-100 focus:border-amber-200 focus:ring-amber-200"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm uppercase tracking-widest text-stone-400 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-stone-800 border-stone-700 text-stone-100 focus:border-amber-200 focus:ring-amber-200 resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-stone-900 font-medium py-3 transition-colors duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t border-stone-800 mt-16 pt-8">
        <div className="text-center text-stone-500 text-sm">
          <p>© 2025 Goutham K. From concept to launch — precision at every phase.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
