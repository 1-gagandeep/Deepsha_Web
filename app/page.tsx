import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-red-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your help is a tap away
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Deepsha, a fast-acting emergency app, stores your key personal and medical data locally to assist in disasters. Save details, and trigger SOS via tap, shake, or voice for instant help when needed.
              </p>
              <Link
                href="/features"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[600px] w-full">
              {/* Replace src with actual image path once provided */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                {/* <!-- Insert Deepsha.jpeg here --> */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <Image
  src="/assets/Deepsha.jpeg"
  alt="Deepsha App Logo"
  fill
  className="object-cover"
/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}