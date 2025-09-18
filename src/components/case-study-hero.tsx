import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrendingUp, Clock, Users, ArrowDown } from "lucide-react";

export function CaseStudyHero() {
  const quickStats = [
    { icon: TrendingUp, value: "3x faster", label: "Deal processing" },
    { icon: Clock, value: "8 weeks", label: "Concept to alpha" },
    { icon: Users, value: "Zero training", label: "User onboarding" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-accent/30 py-20 px-6 min-h-screen flex flex-col justify-center">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Attention-Grabbing Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-700">Alpha Launch Success</span>
          </div>
          
          <h1 className="mb-8 max-w-5xl mx-auto text-5xl lg:text-7xl font-medium leading-tight">
            <span className="bg-gradient-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              I turned a founder's dream into reality
            </span>
          </h1>
          
          <p className="mb-6 text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto font-medium">
            "What if your inbox were your CRM?" → Working product in 8 weeks
          </p>
          
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            How I led design and strategy at <strong>AI20Labs</strong> to create DreamCRM—an AI-powered CRM that works invisibly within Gmail, transforming conversations into deal pipelines.
          </p>
        </motion.div>

        {/* Quick Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary text-lg">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-border/50 relative overflow-hidden"
        >
          {/* Subtle background pattern in card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.02] rounded-full blur-3xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/20 mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">Lead Product Designer & Strategist</span>
                </div>
                
                <h2 className="mb-6 text-4xl font-medium text-primary leading-tight">
                  The Challenge That Started It All
                </h2>
                
                <div className="bg-accent/50 border-l-4 border-primary p-6 rounded-r-2xl mb-6">
                  <p className="text-lg text-muted-foreground italic leading-relaxed">
                    "CRM tools are where deals go to die. Can we make email itself intelligent?"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— AI20Labs Founder Vision</p>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  I transformed this ambiguous vision into a working product that automatically turns Gmail conversations into structured deal pipelines—no manual data entry, no workflow changes.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">AI-Powered</Badge>
                <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100">Gmail Native</Badge>
                <Badge className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100">Zero Setup</Badge>
                <Badge className="bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100">8-Week Sprint</Badge>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1736066331155-c95740b0bd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzU4MTkzNjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern workspace showcasing AI-powered CRM"
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/5"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/20 rounded-3xl"></div>
                
                {/* Floating UI elements */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                  <p className="text-xs font-medium text-gray-700">Live Deal Pipeline</p>
                </div>
                <div className="absolute bottom-6 right-6 bg-green-500/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                  <p className="text-xs font-medium text-white">AI Processing...</p>
                </div>
              </div>
              
              {/* Enhanced floating accent elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary/30 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </motion.div>

        {/* NDA Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="text-sm text-amber-700">
              <strong>NDA Notice:</strong> This case study shows only publicly available features. Internal designs and processes remain confidential.
            </span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-8"
        >
          <div className="inline-flex flex-col items-center gap-2 text-muted-foreground">
            <p className="text-sm">Scroll to see how we got there</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}