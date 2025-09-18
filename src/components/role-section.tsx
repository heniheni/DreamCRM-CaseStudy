import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Target, Lightbulb, Users, BarChart3 } from "lucide-react";

export function RoleSection() {
  const responsibilities = [
    {
      icon: Target,
      title: "Product Vision & Strategy",
      description: "Defined the north star: 'Turn conversations into momentum' and translated founder vision into actionable product strategy",
      accent: "bg-blue-50 border-blue-200 text-blue-700"
    },
    {
      icon: BarChart3,
      title: "Feature Prioritization & Roadmap",
      description: "Led strategic decisions on what to build when, balancing user value, technical feasibility, and launch timeline",
      accent: "bg-green-50 border-green-200 text-green-700"
    },
    {
      icon: Lightbulb,
      title: "End-to-End Design System",
      description: "Created AI20 Labs' first design system and designed complete user flows from pipeline automation to AI insights",
      accent: "bg-yellow-50 border-yellow-200 text-yellow-700"
    },
    {
      icon: Users,
      title: "Cross-Functional Leadership", 
      description: "Aligned CEO, engineering, and users through agile sprints, authored epics, and ensured continuous feedback loops",
      accent: "bg-purple-50 border-purple-200 text-purple-700"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-primary">My Role</span>
          </div>
          
          <h2 className="mb-8 text-4xl font-medium text-primary">Lead Product Designer & Strategist</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Drove the entire product development process from ambiguous founder vision to successful alpha launch in <strong>8 weeks</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {responsibilities.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-border/50 bg-gradient-to-br from-card to-accent/5 relative overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary/10 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div className="h-8 w-px bg-border"></div>
                      <div className="text-xs text-muted-foreground">
                        0{index + 1}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-medium text-primary group-hover:text-primary/90 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div className="mt-6 h-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Summary callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-accent/50 rounded-full border border-border/50">
            <span className="text-sm text-muted-foreground">
              From concept to alpha in 8 weeks | 4 core features | 1 design system
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}