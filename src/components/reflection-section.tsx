import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Quote, ArrowRight, Sparkles } from "lucide-react";

export function ReflectionSection() {
  const keyTakeaways = [
    "Strategic Vision → Turned ambiguous founder ideas into clear product roadmap",
    "User-Centered Execution → Balanced big bets with tactical delivery", 
    "Cross-Functional Leadership → Built trust across CEO, engineering, and users",
    "Innovation Framework → Established AI design playbook for the team"
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 border border-current rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-current rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-current rounded-full opacity-30"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">The Impact</span>
          </div>
          
          <div className="mb-12">
            <Quote className="w-16 h-16 mx-auto mb-8 opacity-60" />
            <blockquote className="text-3xl lg:text-4xl font-medium leading-tight mb-8 max-w-4xl mx-auto">
              "This feels like CRM without the overhead."
            </blockquote>
            <p className="text-xl opacity-80">Early adopter feedback</p>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xl lg:text-2xl leading-relaxed mb-8 max-w-4xl mx-auto opacity-95">
            This wasn't just designing screens, it was <strong>designing the product's DNA</strong>. 
            Creating an experience so intuitive that users immediately understood the value without explanation.
          </p>
        </motion.div>

        {/* Leadership Takeaways */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-medium text-center mb-12 opacity-90">What This Shows About My Design Leadership</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {keyTakeaways.map((takeaway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-lg leading-relaxed opacity-90">{takeaway}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-medium mb-6">Ready to Design What's Next?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              I bring strategic thinking, user advocacy, and execution excellence to transform ambitious visions into products users love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full">
                <span className="text-sm font-medium">Available for new opportunities</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Next Work CTA at very end of case study (no new section) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl mb-4 opacity-90">Next Work</p>
          <a
            href="https://www.henigb.com/dlab-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-500 text-black text-sm font-medium shadow-lg border border-transparent hover:bg-white hover:border-amber-500 hover:text-black transition-colors"
          >
            Impact Dashboard
          </a>
        </motion.div>
      </div>
    </section>
  );
}
