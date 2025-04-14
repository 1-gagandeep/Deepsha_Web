import { Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
            Get in Touch
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-medium text-gray-900">gk7079020@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-medium text-gray-900">+91 7079020338</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Connect With Us</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Twitter className="h-6 w-6 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}