import Image from "next/image";

type SkillCardProps = {
  title: string;
  image: string;
  alt: string;
};

export default function SkillCard({ title, image, alt }: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-card-content">
        <Image src={image} alt={alt} width={96} height={96} />
        <h2 className="font-medium ">{title}</h2>
      </div>
    </div>
  );
}
