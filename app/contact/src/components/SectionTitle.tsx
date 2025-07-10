'use client';

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => (
  <h3 className="sectionTitle">{title}</h3>
);

export default SectionTitle;
