import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import exampleImage from "figma:asset/6c4927d72d10eae9374537dc3b35959ddb62e766.png";
import dashboardImage from "figma:asset/289bfeac109c176b6be1d14e687d7637d88f514f.png";
import tableImage from "figma:asset/4974703fba3629b2d387b88148b0b11ffd6eec07.png";
import strategicOpportunityImage from "figma:asset/cc59ff27441a2c720b162bb644942f6ead476116.png";
import aiNextStepsImage from "figma:asset/d34c5cc6ff292e51096c533a5b1d6b1fff03e9e3.png";
import { BarChart3, Users, Zap, Target, Brain } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Pipeline Automation",
      subtitle: "Auto-sorting into 4 categories",
      image: exampleImage,
      problem: "Sales teams waste 21% of their day on data entry and manual categorization",
      solution: "AI automatically sorts every email into Customer, Investor, Vendor, or Other categories",
      businessValue: "Eliminated 4+ hours/week of manual work per user",
      userValue: "Zero-effort organization • Instant visibility • No training required",
      impact: "Users can focus on relationships, not admin work"
    },
    {
      icon: Target,
      title: "Momentum Heatmap",
      subtitle: "Visual deal health tracking",
      image: dashboardImage,
      problem: "Deal momentum dies in email threads—67% of opportunities stall due to poor follow-up timing",
      solution: "Color-coded system (Hot, Warming, Cooling, Dormant) based on response patterns and engagement",
      businessValue: "Increased conversion rates by surfacing at-risk deals before they go cold",
      userValue: "Instant visual priority • Prevents deal slippage • Proactive alerts",
      impact: "Transform reactive sales into proactive relationship management"
    },
    {
      icon: Users,
      title: "Relationship Intelligence Table", 
      subtitle: "Structured stakeholder view",
      image: tableImage,
      problem: "Complex B2B deals involve multiple stakeholders—teams lose track of who matters when",
      solution: "Dynamic table mapping all contacts, their roles, interaction history, and influence level",
      businessValue: "Shortened sales cycles by ensuring no key decision-maker is overlooked",
      userValue: "Complete contact context • Relationship mapping • Interaction timeline",
      impact: "Navigate complex deals with confidence and clarity"
    },
    {
      icon: Zap,
      title: "Strategic Opportunities",
      subtitle: "AI-surfaced priority deals",
      image: strategicOpportunityImage,
      problem: "High-value opportunities get buried in busy inboxes—revenue potential goes unnoticed",
      solution: "ML algorithm identifies and surfaces deals with highest conversion probability and revenue impact",
      businessValue: "Increased average deal size by focusing attention on most promising opportunities",
      userValue: "Prioritized deal list • Revenue forecasting • Smart notifications",
      impact: "Never miss a game-changing opportunity again"
    },
    {
      icon: Brain,
      title: "AI Summaries & Next Steps",
      subtitle: "Cut through inbox noise",
      image: aiNextStepsImage,
      problem: "Email threads become overwhelming—key insights and action items get lost in conversation history",
      solution: "AI extracts key points, sentiment, and suggests contextual next steps for each conversation",
      businessValue: "Accelerated deal velocity through faster decision-making and clearer action plans",
      userValue: "Instant context • Smart suggestions • Conversation intelligence",
      impact: "Transform email chaos into actionable intelligence"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Core Features</Badge>
          <h2 className="mb-6">Solving Real Business Problems</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Each feature was designed to address specific pain points that cost sales teams time, money, and opportunities.
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`space-y-6 ${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-destructive mb-3">The Problem</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-primary mb-3">Our Solution</h4>
                      <p className="leading-relaxed">{feature.solution}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-green-700 mb-3">Business Value</h4>
                        <p className="text-muted-foreground leading-relaxed">{feature.businessValue}</p>
                      </div>
                      <div>
                        <h4 className="text-purple-700 mb-3">User Value</h4>
                        <p className="text-muted-foreground leading-relaxed">{feature.userValue}</p>
                      </div>
                    </div>

                    <div className="bg-primary/5 border-l-4 border-primary pl-6 py-4">
                      <h4 className="mb-2">Impact</h4>
                      <p className="leading-relaxed">{feature.impact}</p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`${isEven ? 'order-1 lg:order-2' : 'order-1'}`}
                >
                  <div className="relative">
                    <img
                      src={feature.image}
                      alt={`${feature.title} interface`}
                      className={`w-full rounded-xl shadow-lg border ${
                        feature.image === aiNextStepsImage 
                          ? 'h-80 object-cover object-top' 
                          : ''
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}