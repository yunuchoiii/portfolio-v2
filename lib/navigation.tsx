export const moveToSection = (e: React.MouseEvent<HTMLElement>, href: string, onClick: () => void) => {
  e.preventDefault();
  
  // href에서 id 추출 (# 제거)
  const targetId = href.replace('#', '');
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    targetElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  onClick();
};