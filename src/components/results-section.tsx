import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Quote, CheckCircle, Target, TrendingUp } from "lucide-react";

export function ResultsSection() {
  const impacts = [
    {
      icon: CheckCircle,
      title: "Reduced manual data entry to near-zero",
      description: "Automated pipeline management eliminated the need for constant CRM updates"
    },
    {
      icon: Target,
      title: "Positioned DreamCRM as investor-ready SaaS",
      description: "Transformed from consulting approach to scalable product offering"
    },
    {
      icon: TrendingUp,
      title: "Validated product-market fit",
      description: "70% weekly return rate demonstrated strong user engagement"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Results & Impact</Badge>
          <h2 className="mb-6">Measurable Success</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The project delivered significant business value and validated our product strategy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="mb-3">{impact.title}</h3>
                    <p className="text-muted-foreground">{impact.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 border shadow-lg"
        >
          <div className="flex items-start gap-4 mb-6">
            <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg italic mb-4">
                "This feels like CRM without the overhead."
              </p>
              <p className="text-muted-foreground">— Early adopter feedback</p>
            </div>
          </div>
          
          <div className="bg-accent/50 rounded-xl p-6">
            <h4 className="mb-3">Key Achievement</h4>
            <p className="text-muted-foreground">
              Successfully transformed a complex technical vision into an intuitive product that early users immediately understood and adopted, proving the concept's viability for scaling.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}