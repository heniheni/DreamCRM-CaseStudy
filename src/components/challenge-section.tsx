import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ChallengeSection() {
  // Real feedback screenshots placed under `public/feedback/`.
  // Drop your three images with these names (or adjust paths below):
  const feedbackImages = [
    "/feedback/feedback-1.png",
    "/feedback/feedback-2.png",
    "/feedback/feedback-3.png",
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-32 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/5 rounded-full border border-destructive/20 mb-8">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">The Problem</span>
          </div>
          
          <h2 className="mb-8 text-4xl font-medium text-primary">Understanding User Pain Points</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Traditional CRMs create friction instead of flow. Our user research revealed the core frustrations:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {feedbackImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border-border/50 bg-card/95">
                <CardContent className="p-6">
                  <div className="rounded-2xl overflow-hidden border bg-white">
                    <ImageWithFallback
                      src={src}
                      alt={`User feedback ${index + 1}`}
                      className="w-full h-44 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-8 w-24 h-24 border border-current rounded-full"></div>
              <div className="absolute bottom-4 left-8 w-16 h-16 border border-current rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Key Insight</span>
              </div>
              
              <h3 className="mb-6 text-3xl font-medium">The Opportunity</h3>
              <p className="text-xl leading-relaxed opacity-95 max-w-2xl mx-auto">
                What if CRM worked <em>within</em> your existing workflow instead of demanding you abandon it? 
                Reimagine CRM as inbox-native and momentum-driven.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
