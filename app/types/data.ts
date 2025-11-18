

export type Projects = {
    slug: string;
    title: string;
    description: string;
    image: string;
    video?: string;
    techStack?: string[];
    features?: string[];
    liveLink?: string;
    githubLink?: string;
}

export type CaseStudyProps = Omit<Projects, 'slug'>;