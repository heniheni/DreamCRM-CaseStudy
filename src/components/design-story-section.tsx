import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Users, Search, Lightbulb, Repeat } from "lucide-react";

export function DesignStorySection() {
  const designProcess = [
    {
      icon: Search,
      title: "Ship & Learn",
      subtitle: "Design wasn't linear, it was survival",
      description: "With 6-month runway, we shipped rough prototypes while interviewing users. Competitor research happened during lunch breaks.",
      methods: "Guerrilla user interviews • Live prototype testing • Weekend competitive teardowns"
    },
    {
      icon: Users,
      title: "Build While You Research", 
      subtitle: "Startup reality: No time for perfect personas",
      description: "Created personas from our first 10 users while simultaneously building features. Every user call informed the next day's development.",
      methods: "Customer development • Build-measure-learn • Real user feedback"
    },
    {
      icon: Lightbulb,
      title: "Validate Fast, Fail Faster",
      subtitle: "50 ideas, 10 prototypes, 5 features",
      description: "Sketched concepts in morning standups, built clickable prototypes by afternoon, tested with users by evening. Speed > perfection.",
      methods: "Daily ideation • Rapid prototyping • Same-day user feedback"
    },
    {
      icon: Repeat,
      title: "Data-Driven Hustle",
      subtitle: "Every feature fought for its life",
      description: "In resource-constrained startup mode, only features that moved key metrics survived. A/B tested everything, killed our darlings ruthlessly.",
      methods: "Weekly A/B tests • Usage analytics • Conversion optimization"
    }
  ];

  const designPrinciples = [
    "Ship imperfect features fast, perfect is the enemy of done",
    "Every pixel must drive conversion, no room for decorative design",
    "User feedback trumps internal opinions, customers pay the bills", 
    "Build for scale from day one, we can't redesign for every new user"
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-6">
            Design Process
          </div>
          <h2 className="mb-6 text-gray-900">Startup Reality: Fast, Scrappy, Effective</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With limited runway and big ambitions, we couldn't afford textbook design processes. Instead, we designed, built, and tested in parallel, turning constraints into competitive advantage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {designProcess.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="mb-1 text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-xs mb-3">{step.subtitle}</p>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{step.description}</p>
                <div className="text-xs text-gray-500">{step.methods}</div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
              <div className="w-4 h-4 rounded bg-gray-600"></div>
            </div>
            <h3 className="text-gray-900">Startup Design Principles</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0 mt-2"></div>
                <p className="text-gray-600 leading-relaxed text-sm">{principle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}