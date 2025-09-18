import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Users, TrendingUp, CheckCircle, Target, Trophy } from "lucide-react";

export function OutcomesSection() {
  const outcomes = [
    {
      icon: Calendar,
      metric: "8 weeks",
      label: "Alpha to launch",
      color: "text-green-600"
    },
    {
      icon: Users,
      metric: "115+",
      label: "Early adopters",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      metric: "70%",
      label: "Weekly return rate",
      color: "text-purple-600"
    }
  ];

  const impacts = [
    {
      icon: CheckCircle,
      title: "Eliminated manual data entry",
      description: "Saved 4+ hours per user per week"
    },
    {
      icon: Target,
      title: "Validated product-market fit",
      description: "Strong user retention proved core value proposition"
    },
    {
      icon: Trophy,
      title: "Positioned for scale",
      description: "Transformed from consulting to investor-ready SaaS"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Impact</Badge>
          <h2 className="mb-6">Results That Matter</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Measurable outcomes that proved our design strategy and validated the business model.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className={`w-8 h-8 ${outcome.color}`} />
                    </div>
                    <div className={`text-3xl font-bold mb-2 ${outcome.color}`}>
                      {outcome.metric}
                    </div>
                    <p className="text-muted-foreground">{outcome.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
                <Card className="h-full hover:shadow-lg transition-all duration-300">
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
      </div>
    </section>
  );
}