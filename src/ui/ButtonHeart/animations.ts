export const generateParticles = (count: number) =>
  Array.from({ length: count }).map(() => ({
    id: Date.now() + Math.random(),
    x: Math.random() * 60 - 30,
    size: Math.random() * 0.6 + 0.7,
    rotate: Math.random() * 360 - 180,
    color: ["#ff3d6e", "#ff6b9a", "#ff95b3"][Math.floor(Math.random() * 3)],
    $fly: true,
  }));

export const generateConfetti = (count: number) =>
  Array.from({ length: count }).map(() => ({
    id: crypto.randomUUID(),
    x: (Math.random() - 0.5) * 120,
    y: -(Math.random() * 100 + 80),
    size: Math.random() * 6 + 4,
    rotate: Math.random() * 360,
    color: ["#FFD700", "#FF4500", "#1E90FF", "#32CD32", "#FF69B4"][
      Math.floor(Math.random() * 5)
    ],
  }));
