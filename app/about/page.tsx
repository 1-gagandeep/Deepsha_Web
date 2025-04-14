import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Deepsha</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">App Overview</h2>
                <p className="text-gray-600">
                  Deepsha is a mobile emergency response app designed to provide rapid assistance during crises by sending SOS messages with location and medical data to emergency contacts, ensuring users can quickly alert others when in distress.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Target Audience</h2>
                <p className="text-gray-600">
                  Individuals in disaster-prone areas, those with medical conditions, outdoor adventurers, and anyone prioritizing personal safety, especially in regions with limited connectivity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Real World Impact</h2>
                <p className="text-gray-600">
                  Imagine Sarah, hiking alone when she twists her ankle. Panicked and far from help, she opens Deepsha. With one tap, it sends her exact location and medical details (blood type, allergies) to her emergency contacts via SMS, even without internet. The app's voice activation lets her call for help hands-free, while a flashing SOS signal draws attention. Deepsha empowers users like Sarah to stay connected and safe, bridging the gap between isolation and rescue with reliable, automated alerts.
                </p>
              </section>
            </div>
          </div>

          <div className="relative h-[600px] w-full">
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* <!-- Insert Deepsha.jpeg here --> */}
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                {/* <p className="text-gray-500">App Logo Placeholder</p> */}
                <Image
  src="/assets/Deepsha.jpeg"
  alt="Deepsha App Logo"
  layout="fill"
  objectFit="cover"
/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}