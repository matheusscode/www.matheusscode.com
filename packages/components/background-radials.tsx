export const RadialPurpleBlurCircle = () => (
  <div className="pointer-events-none fixed bottom-auto left-auto right-0 top-0 -z-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px] dark:opacity-20" />
);

export const RadialGradientScreen = () => (
  <div className="pointer-events-none fixed top-0 -z-0 h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
);

export const RadialBlueFade = () => (
  <div className="pointer-events-none fixed inset-0 -z-0 h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
);

export const RadialPurpleBlueFade = () => (
  <div className="pointer-events-none fixed top-0 -z-0 h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(120,119,198,0.3)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
);
