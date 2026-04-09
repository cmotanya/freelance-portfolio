import SplitType from "split-type";
import gsap from "gsap";

type HeroAnimationProps = {
  textEl: HTMLElement;
};

export function animateHeroEntrance({ textEl }: HeroAnimationProps) {
  const subSplit = SplitType.create(textEl, {
    types: "lines",
  });

  gsap.from(subSplit.lines, {
    y: 20,
    scale: 0.8,
    opacity: 0,
    duration: 0.25,
    ease: "power3.out",
    stagger: { each: 0.15 },
  });

  return () => {
    subSplit?.revert();
  };
}
