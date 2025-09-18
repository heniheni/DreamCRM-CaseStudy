import { CaseStudyHero } from "./components/case-study-hero";
import { ChallengeSection } from "./components/challenge-section";
import { RoleSection } from "./components/role-section";
import { DesignStorySection } from "./components/design-story-section";
import { FeaturesSection } from "./components/features-section";
import { OutcomesSection } from "./components/outcomes-section";
import { ReflectionSection } from "./components/reflection-section";
import { VisualSeparator } from "./components/visual-separator";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <CaseStudyHero />
      <VisualSeparator variant="line" />
      <ChallengeSection />
      <VisualSeparator variant="line" />
      <RoleSection />
      <VisualSeparator variant="line" />
      <DesignStorySection />
      <VisualSeparator variant="line" />
      <FeaturesSection />
      <VisualSeparator variant="line" />
      <OutcomesSection />
      <VisualSeparator variant="line" />
      <ReflectionSection />
    </div>
  );
}