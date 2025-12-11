import { PageTransition } from '@/components/PageTransition';
import { cn } from '@/lib/utils';

const skills = [
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Supabase', category: 'backend' },
  { name: 'GitHub', category: 'tools' },
  { name: 'UI/UX', category: 'design' },
  { name: 'Tailwind CSS', category: 'frontend' },
];

const categoryColors: Record<string, string> = {
  frontend: 'from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30',
  backend: 'from-emerald-500/20 to-green-500/20 hover:from-emerald-500/30 hover:to-green-500/30',
  tools: 'from-violet-500/20 to-purple-500/20 hover:from-violet-500/30 hover:to-purple-500/30',
  design: 'from-pink-500/20 to-rose-500/20 hover:from-pink-500/30 hover:to-rose-500/30',
};

const Skills = () => {
  return (
    <PageTransition>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="fade-up text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                My <span className="text-gradient">Skills</span>
              </h1>
              <p className="fade-up-delay-1 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I've been learning and working with.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap justify-center gap-4 stagger-children">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={cn(
                    'group relative px-6 py-4 rounded-2xl cursor-default',
                    'bg-gradient-to-br backdrop-blur-sm',
                    'border border-border/50',
                    'transition-all duration-500 ease-smooth',
                    'hover:scale-110 hover:shadow-glow',
                    'animate-float',
                    categoryColors[skill.category]
                  )}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationDuration: `${4 + Math.random() * 2}s`,
                  }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-primary/20" />
                  
                  <span className="relative text-sm sm:text-base font-medium text-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Learning Note */}
            <div className="fade-up-delay-3 mt-20 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Currently expanding my skills in React and backend development
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Skills;
