import Header from '@/components/Header';
import { Github, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
          <div className="absolute inset-0 bg-[var(--gradient-accent)] opacity-50" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Panji Ahmad Nurhusni
              </span>
            </h1>
            <h2 className="sr-only">Software Engineer · Back End Engineer · Engineer</h2>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Welcome to my digital space
            </p>
            <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-[var(--glow-cyan)] transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </button>
              <button
                onClick={() => scrollToSection('background')}
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
            <div className="sr-only">
              <p>
                Panji Ahmad Nurhusni is a Software Engineer, Back End Engineer, and engineer based in Jakarta, Indonesia who
                architects high-availability payment systems using Go, cloud-native tooling, and resilient engineering practices.
              </p>
            </div>
          </div>
        </section>

        {/* Background Section */}
        <section id="background" className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
                Background
              </span>
            </h2>
            <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a software engineer who mainly tinkers in back-end engineering. I have been using Go
                as my main programming language throughout my professional career which deals with developing
                microservice systems and building features in the financial industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I also have limited experience in using Python and JavaScript. My work has focused on creating
                scalable and reliable solutions for complex financial services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have deep interest in software engineering in general and I am open to explore as many
                opportunities as I can to broaden my knowledge and skills.
              </p>
              <div className="sr-only">
                <p>
                  Panji Ahmad Nurhusni specializes in software engineering and back-end engineering, designing resilient
                  financial technology platforms with Go, Python, and cloud-native tooling for teams across Southeast Asia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="py-24 px-6 bg-card/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            
            <div className="space-y-8">
              {/* Experience Item */}
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary animate-glow" />
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <h3 className="font-display text-2xl font-semibold mb-2">Software Engineer II</h3>
                  <p className="text-primary mb-2">
                    <a href="https://www.ayoconnect.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Ayoconnect
                    </a> • Feb 2025 - Present
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Developing scalable microservices using Go to power payment gateway solutions such as virtual account and direct debit.
                    Created the auto-reporting system and auto-reconciliation system. 
                    Contributing to system architecture and implementing robust back-end features for the payment ecosystem.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { name: 'Go', icon: 'go' },
                      { name: 'MySQL', icon: 'mysql' },
                      { name: 'Google Cloud', icon: 'googlecloud' },
                      { name: 'Google BigQuery', icon: 'googlebigquery' },
                      { name: 'Google Pub/Sub', icon: 'googlepubsub' },
                      { name: 'Redis', icon: 'redis' },
                      { name: 'SonarQube Cloud', icon: 'sonarqubecloud' },
                    ].map((skill) => (
                      <div
                        key={skill.name}
                        className="grayscale hover:grayscale-0 transition-all duration-300 group"
                        title={skill.name}
                      >
                        <img
                          src={`https://cdn.simpleicons.org/${skill.icon}`}
                          alt={skill.name}
                          className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"
                          onError={(event) => {
                            const target = event.currentTarget;
                            if (!skill.fallback || target.dataset.fallbackApplied) {
                              return;
                            }
                            target.dataset.fallbackApplied = "true";
                            target.src = `https://cdn.simpleicons.org/${skill.fallback}`;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary animate-glow" />
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <h3 className="font-display text-2xl font-semibold mb-2">Software Engineer I</h3>
                <p className="text-primary mb-2">
                  <a href="https://mekari.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Mekari
                  </a> • Jul 2024 - Dec 2024
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Built and maintained services for SaaS solutions. Worked on back-end systems 
                  handling financial services such as disbursement, invoice, and payroll using Go.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'Go', icon: 'go' },
                    { name: 'Ruby', icon: 'ruby' },
                    { name: 'Ruby on Rails', icon: 'rubyonrails' },
                    { name: 'MySQL', icon: 'mysql' },
                    { name: 'PostgreSQL', icon: 'postgresql' },
                    { name: 'Redis', icon: 'redis' },
                    { name: 'Vue.js', icon: 'vuedotjs' },
                    { name: 'Grafana', icon: 'grafana' },
                    { name: 'Datadog', icon: 'datadog' },
                    { name: 'SonarQube Cloud', icon: 'sonarqubecloud' },
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="grayscale hover:grayscale-0 transition-all duration-300 group"
                      title={skill.name}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${skill.icon}`}
                        alt={skill.name}
                        className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary animate-glow" />
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <h3 className="font-display text-2xl font-semibold mb-2">Application Developer</h3>
                <p className="text-primary mb-2">
                  <a href="https://www.cbn.id/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    CBN
                  </a> • Jan 2024 - Jul 2024
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Developed back-end systems for telecommunication and ISP services, focusing on backoffice 
                  management and customer management using C# and .NET.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    // { name: 'C#', icon: 'csharp' },
                    { name: '.NET', icon: 'dotnet' },
                    // { name: 'Microsoft SQL Server', icon: 'microsoftsqlserver' },
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="grayscale hover:grayscale-0 transition-all duration-300 group"
                      title={skill.name}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${skill.icon}`}
                        alt={skill.name}
                        className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary animate-glow" />
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <h3 className="font-display text-2xl font-semibold mb-2">Back End Engineer I</h3>
                <p className="text-primary mb-2">
                  <a href="https://koinworks.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    KoinWorks
                  </a> • Feb 2022 - Dec 2023
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Started professional career building microservices in Go for fintech platforms. Gained experience 
                  in developing financial features, API design, and working with distributed systems.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'Go', icon: 'go' },
                    { name: 'PostgreSQL', icon: 'postgresql' },
                    // { name: 'gRPC', icon: 'grpc' },
                    { name: 'Apache Kafka', icon: 'apachekafka' },
                    { name: 'Datadog', icon: 'datadog' },
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="grayscale hover:grayscale-0 transition-all duration-300 group"
                      title={skill.name}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${skill.icon}`}
                        alt={skill.name}
                        className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
              <h3 className="font-display text-2xl font-semibold mb-2">Bachelor of Science in Physics</h3>
              <p className="text-primary mb-2">
                <a href="https://unj.ac.id/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Universitas Negeri Jakarta
                </a> • 2016 - 2022
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Studied fundamental physics principles with strong emphasis on mathematical modeling and analytical thinking. 
                Applied computational methods and problem-solving skills that translate well to software engineering.
              </p>
              <p className="text-sm text-muted-foreground">GPA: 3.10</p>
            </div>
          </div>
        </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-card/30">
          <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <p className="text-lg text-muted-foreground text-center mb-8">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
              <a
                href="mailto:contact@nurhusni.com"
                className="flex w-full items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">contact@nurhusni.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/6285157063991"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+62 851-5706-3991</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/nurhusni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/nurhusni</p>
                </div>
              </a>

              <a
                href="https://github.com/nurhusni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/nurhusni</p>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground space-y-4">
          <div className="flex items-center justify-center gap-4">
            {[
              { name: 'React', icon: 'react' },
              { name: 'TypeScript', icon: 'typescript' },
              { name: 'Vite', icon: 'vite' },
              { name: 'Tailwind CSS', icon: 'tailwindcss' },
            ].map((stack) => (
              <div
                key={stack.name}
                className="grayscale hover:grayscale-0 transition-all duration-300 group"
                title={stack.name}
              >
                <img
                  src={`https://cdn.simpleicons.org/${stack.icon}`}
                  alt={stack.name}
                  className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          <p>&copy; {new Date().getFullYear()} Panji Ahmad Nurhusni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
