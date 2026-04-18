import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const line1 = "Hello there ヅ";
const line2 = "Welcome to my profile";
const letters1 = line1.split("");

const HELLO_SHOW_MS = 1700;
const WELCOME_SHOW_MS = 2400;
const TEXT_TO_DOOR_MS = 280;
const DOOR_MS = 1.32;
const easeSmooth = [0.25, 0.48, 0.45, 0.98];
const easeDoors = [0.08, 0.9, 0.12, 1];

export function PageIntro({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [textOut, setTextOut] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const completeRef = useRef(onComplete);
  completeRef.current = onComplete;

  const holdBeforeFade = HELLO_SHOW_MS + WELCOME_SHOW_MS;

  useEffect(() => {
    const toWelcome = window.setTimeout(() => setPhase(1), HELLO_SHOW_MS);
    const fadeText = window.setTimeout(() => setTextOut(true), holdBeforeFade);
    const openDoors = window.setTimeout(
      () => setDoorsOpen(true),
      holdBeforeFade + TEXT_TO_DOOR_MS
    );
    const done = window.setTimeout(
      () => completeRef.current(),
      holdBeforeFade + TEXT_TO_DOOR_MS + DOOR_MS * 1000 + 180
    );
    return () => {
      window.clearTimeout(toWelcome);
      window.clearTimeout(fadeText);
      window.clearTimeout(openDoors);
      window.clearTimeout(done);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[200] ${doorsOpen ? "pointer-events-none" : ""}`}
    >
      <motion.div
        className="absolute inset-0 z-10 flex min-h-[min(40vh,260px)] flex-col items-center justify-center px-4 text-white"
        animate={
          textOut
            ? { opacity: 0, y: -4, filter: "blur(3px)" }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
        }
        transition={{ duration: 0.58, ease: easeSmooth }}
      >
        <div className="relative w-full max-w-3xl">
          <AnimatePresence mode="wait" initial={false}>
            {phase === 0 && (
              <motion.div
                key="hello"
                className="flex flex-wrap items-center justify-center gap-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  y: -8,
                  filter: "blur(8px)",
                  transition: { duration: 0.45, ease: easeSmooth },
                }}
              >
                {letters1.map((char, i) => (
                  <motion.span
                    key={`h-${char}-${i}`}
                    className="inline-block text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.06 + i * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {char === " " ? "\u00a0" : char}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {phase === 1 && (
              <motion.p
                key="welcome"
                className="text-center text-3xl font-medium leading-snug tracking-tight sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, ease: easeSmooth }}
              >
                {line2}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-0 top-0 h-full w-1/2 bg-black"
        initial={{ x: 0 }}
        animate={doorsOpen ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: DOOR_MS, ease: easeDoors }}
      />
      <motion.div
        className="absolute right-0 top-0 h-full w-1/2 bg-black"
        initial={{ x: 0 }}
        animate={doorsOpen ? { x: "100%" } : { x: 0 }}
        transition={{ duration: DOOR_MS, ease: easeDoors }}
      />
    </div>
  );
}
