import { Resume } from '../models/resume.interface';

export const CV_DATA: Resume = {
  name: "Jeferson Vinicio Tapia Aguirre",
  title: "Desarrollador Full Stack",
  summary: "Desarrollador de Software Full-Stack con más de 3 años de trayectoria en el ciclo completo de desarrollo de aplicaciones. Experto en resolver retos técnicos complejos mediante lógica estructurada, escalabilidad de sistemas y código mantenible. Orientado a la innovación constante, la optimización de procesos y la entrega continua de valor tecnológico.",
  contact: {
    email: "jefersontapia3a@gmail.com",
    phone: "+593 963229629",
    linkedin: "www.linkedin.com/in/jeferson-tapia-95b344257",
    github: "github.com/thejeferson2025"
  },
  experience: [
    {
      role: "Ingeniero de Software",
      company: "Netby IT Consulting",
      period: "2026 - Actualidad",
      description: [
        "Análisis y desarrollo de software a nivel de backend y frontend.",
        "Realizar documentación técnica y control de cambios con las mejores prácticas en proyectos de software desplegados.",
        "Gestionar los pull request y realizar revisiones de código de los proyectos de software."
      ]
    },
    {
      role: "Analista de Desarrollo",
      company: "Improve-IT",
      period: "2025 - 2026",
      description: [
        "Análisis y desarrollo de aplicaciones web del lado backend y fronted requeridas por clientes.",
        "Realizar mejoras y control de cambios con las mejores prácticas a proyectos de software desplegados.",
        "Gestionar documentación de las aplicaciones y realizar capacitaciones a clientes."
      ]
    },
    {
      role: "Asistente de Seguridad de la Información",
      company: "BanEcuador B.P.",
      period: "2024 - 2025",
      description: [
        "Asistencia en temas relacionados con tecnologías de la información y ciberseguridad.",
        "Concientización empresarial en temas relacionados con la seguridad de la información.",
        "Desarrollo de manuales y gestión de documentos internos del área."
      ]
    },
    {
      role: "Asistente de Tecnología y Sistemas",
      company: "PapaJohn's Ecuador",
      period: "2023 - 2024",
      description: [
        "Desarrollo de software interno de la empresa e implementación de mejoras.",
        "Asistencia en temas relacionados con tecnologías de la información.",
        "Gestión de Bases de datos Relacionales SQL Server y PostgreSQL.",
        "Ensamblaje de computadores, instalación  de sistemas operativos y actualización de software."
      ]
    }
  ],
  education: [
    {
      role: "Ingeniero en Sistemas Inteligentes",
      institute: "Universidad Bolivariana del Ecuador",
      period: "2024 - 2026",
    },
    {
      role: "Tecnólogo en Desarrollo de Software",
      institute: "Instituto Superior Tecnológico Yavirac",
      period: "2021 - 2023",
    },
    {
      role: "Certificaciones",
        description: [
            "Microsoft: Azure Developer Associate",
            "Microsoft: Azure IA Engineer Associate",
            "Microsoft: Azure IA Fundamentals",
            "Develop AI solutions in Azure",
            "Google: Cloud Computing",
            "Google: Desarrollo de Apps Móviles",
            "Ciberseguridad y Análisis forense"
        ]
    }

  ],
  skills: [
    { category: "Frontend", technologies: ["Angular", "React", "Blazor","TypeScript", "Html", "CSS", "javascript"] },
    { category: "Backend", technologies: [ "C#", "java", "Python", "Node.js", "MSC"] },
    { category: "Bases de Datos", technologies: ["SQL Server", "PostgreSQL", "MongoDB"] },
    { category: "Cloud", technologies: ["Azure", "Google Cloud Platform"] },
  ]
};
