import { motion } from "framer-motion";
import { Award, Calendar, Building2, CheckCircle2 } from "lucide-react";

export const CertificationSection = () => {
    const trainingDetails = {
        company: "Elevvo Path",
        role: "Frontend Developer Intern",
        duration: "1 Month (Intensive Training)",
        description: "Joined an intensive frontend internship where I developed high-quality user interfaces using modern web technologies. During this period, I collaborated in a professional production environment, strictly implementing Clean Code principles and Agile team workflows.",
        skillsGained: ["React.js", "State Management", "Git & GitHub", "Component Architecture"]
    };

    return (
        <section className="py-20 px-4 bg-background/50">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative p-8 rounded-3xl bg-card border border-border shadow-2xl overflow-hidden group"
                >
                    {/* خلفية جمالية خفيفة */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>

                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

                        {/* أيقونة الشهادة أو لوجو الشركة */}
                        <div className="flex-shrink-0">
                            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner border border-primary/20">
                                <Award className="w-10 h-10" />
                            </div>
                        </div>

                        {/* تفاصيل التدريب */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">{trainingDetails.role}</h3>
                                    <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-medium mt-1">
                                        <Building2 className="w-4 h-4" />
                                        <span>{trainingDetails.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full text-sm">
                                    <Calendar className="w-4 h-4" />
                                    <span>{trainingDetails.duration}</span>
                                </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {trainingDetails.description}
                            </p>

                            {/* المهارات اللي اتعلمتها */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                {trainingDetails.skillsGained.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-background border border-border group-hover:border-primary/30 transition-colors"
                                    >
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/50 flex justify-center md:justify-end">
                        <a
                            href="/certaficate/Abdo.pdf" // حط مسار الشهادة هنا في الـ public
                            target="_blank"
                            className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
                        >
                            View Certificate
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};