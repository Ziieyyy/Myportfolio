import { GraduationCap, Code, Palette, Coffee } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Diploma in Information Technology student with a strong foundation in programming and system design.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Beginner experience with React and Supabase, constantly learning and building new projects.',
  },
  {
    icon: Palette,
    title: 'UI/UX Mindset',
    description: 'Strong focus on creating intuitive, beautiful user interfaces that prioritize user experience.',
  },
  {
    icon: Coffee,
    title: 'Background',
    description: 'Customer-facing experience in coffee retail, bringing strong communication and service skills.',
  },
];

const About = () => {
  return (
    <PageTransition>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="fade-up text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h1>
              <p className="fade-up-delay-1 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                A passionate developer dedicated to crafting exceptional digital experiences.
              </p>
            </div>

            {/* Bio */}
            <div className="fade-up-delay-2 glass rounded-3xl p-8 md:p-12 mb-16">
              <p className="text-lg leading-relaxed text-foreground/80">
                Hello! I'm <span className="text-gradient font-semibold">Khairul Azizi</span>, 
                a Diploma in Information Technology student with a genuine passion for web development. 
                My journey in tech began with curiosity about how digital products are built, and it has 
                evolved into a dedicated pursuit of creating clean, functional, and user-friendly applications.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80 mt-6">
                While I'm still early in my development journey, I've been actively learning React and 
                Supabase to build modern web applications. My background in customer-facing roles, 
                particularly in coffee retail, has shaped my understanding of user needs and the 
                importance of intuitive design.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6 stagger-children">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group glass rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-elevated"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
