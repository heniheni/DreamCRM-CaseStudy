import { motion } from "motion/react";

interface VisualSeparatorProps {
  variant?: "dots" | "line" | "gradient";
}

export function VisualSeparator({ variant = "dots" }: VisualSeparatorProps) {
  if (variant === "dots") {
    return (
      <div className="flex justify-center py-12">
        <div className="flex items-center gap-2">
          <motion.div 
            className="w-2 h-2 bg-primary/30 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.div 
            className="w-2 h-2 bg-primary/50 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div 
            className="w-2 h-2 bg-primary/70 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>
    );
  }
  
  if (variant === "line") {
    return (
      <div className="py-12">
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    );
  }
  
  return (
    <div className="py-12">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}