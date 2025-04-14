import { AlertCircle, MapPin, Volume2, Vibrate, MessageSquare, Activity } from 'lucide-react';

const features = [
  {
    title: 'SOS Emergency Messaging',
    description: 'Pressing the SOS button sends critical info (location + medical data) to emergency contacts via SMS. Includes dynamic formatting based on internet availability.',
    icon: MessageSquare,
  },
  {
    title: 'Medical Data Integration',
    description: "App saves user's full name, age, gender, blood type, and emergency contact info locally, and includes this in SOS messages. Redirects users to complete data if fields are missing.",
    icon: Activity,
  },
  {
    title: 'Location Tracking',
    description: 'After an SOS is triggered, the app sends high-accuracy location updates every 2 minutes via FusedLocationProviderClient.',
    icon: MapPin,
  },
  {
    title: 'Flash and Audio SOS Signal',
    description: 'Triggers flashlight in SOS Morse code and plays looping SOS audio if enabled, alerting nearby people during emergencies.',
    icon: Volume2,
  },
  {
    title: 'Voice Recognition for SOS Activation',
    description: 'Listens for a user-defined emergency phrase like "help me" and triggers SOS using Android\'s SpeechRecognizer.',
    icon: AlertCircle,
  },
  {
    title: 'Shake-to-Activate SOS',
    description: 'Detects vigorous shaking and sends SOS with a 5-second cooldown to prevent accidental triggers.',
    icon: Vibrate,
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Safety
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deepsha comes packed with essential features designed to provide quick assistance during emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}