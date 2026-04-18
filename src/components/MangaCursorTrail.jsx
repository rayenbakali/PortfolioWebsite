import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const PHRASES = [
  "出荷",
  "ビルド",
  "改善",
  "学習",
  "拡張",
  "デプロイ",
  "リファクタ",
  "コミット",
  "マージ",
  "プッシュ",
  "日々",
  "クリーン",
  "合格",
  "緑",
  "集中",
  "深掘り",
  "俯瞰",
  "価値",
  "最適",
  "本番",
  "堅牢",
  "耐久",
  "低遅延",
  "安定",
  "API",
  "型安全",
  "無負債",
  "継続",
  "余裕",
  "一息",
  "探究",
  "品質",
  "再確認",
  "自動",
  "記録",
  "迅速",
  "実践",
  "本気",
  "制覇",
  "丁寧",
  "前進",
  "前向き",
  "突破",
  "完走",
];

function pickPhrase() {
  return PHRASES[Math.floor(Math.random() * PHRASES.length)];
}

const MIN_DIST = 14;
const MAX_TRAIL = 36;
const LAG_FRAMES = 12;
const SMOOTH = 0.14;

export function MangaCursorTrail() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [particles, setParticles] = useState([]);
  const idRef = useRef(0);
  const lastEmitRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const smoothHistoryRef = useRef([]);
  const dotRef = useRef(null);
  const rafRef = useRef(0);
  const primedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return undefined;
    const prev = document.body.style.cursor;
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = prev;
    };
  }, [reduced]);

  useEffect(() => {
    if (reduced) return undefined;

    const spawn = (x, y) => {
      const id = ++idRef.current;
      const rotation = (Math.random() - 0.5) * 28;
      const scale = 0.8 + Math.random() * 0.45;
      const fontSize = 15 + Math.floor(Math.random() * 12);
      const driftY = 10 + Math.random() * 14;
      const driftX = (Math.random() - 0.5) * 22;
      const rotEnd = rotation + (Math.random() > 0.5 ? 8 : -8);
      setParticles((prev) => {
        const next = [
          ...prev,
          {
            id,
            x,
            y,
            phrase: pickPhrase(),
            rotation,
            scale,
            fontSize,
            driftY,
            driftX,
            rotEnd,
          },
        ];
        return next.length > MAX_TRAIL ? next.slice(-MAX_TRAIL) : next;
      });
      window.setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 920);
    };

    const onPointer = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (!primedRef.current) {
        primedRef.current = true;
        targetRef.current = { x, y };
        smoothRef.current = { x, y };
        smoothHistoryRef.current = [{ x, y }];
      } else {
        targetRef.current = { x, y };
      }
    };

    const tick = () => {
      const t = targetRef.current;
      let s = smoothRef.current;
      s = {
        x: s.x + (t.x - s.x) * SMOOTH,
        y: s.y + (t.y - s.y) * SMOOTH,
      };
      smoothRef.current = s;

      const hist = smoothHistoryRef.current;
      hist.push({ x: s.x, y: s.y });
      if (hist.length > 48) hist.shift();

      if (hist.length > LAG_FRAMES) {
        const lag = hist[hist.length - 1 - LAG_FRAMES];
        const prevEmit = lastEmitRef.current;
        if (
          !prevEmit ||
          Math.hypot(lag.x - prevEmit.x, lag.y - prevEmit.y) >= MIN_DIST
        ) {
          lastEmitRef.current = { x: lag.x, y: lag.y };
          spawn(lag.x, lag.y);
        }
      }

      const el = dotRef.current;
      if (el) {
        el.style.transform = `translate3d(${s.x - 7}px, ${s.y - 7}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointer);
      cancelAnimationFrame(rafRef.current);
      smoothHistoryRef.current = [];
      lastEmitRef.current = null;
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[45] overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="fixed z-[44]"
          style={{
            left: p.x,
            top: p.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.span
            className="inline-block select-none whitespace-nowrap font-medium tracking-tight text-foreground/38 dark:text-foreground/48"
            style={{
              fontSize: p.fontSize,
              fontFamily:
                '"Yu Gothic UI","YuGothic","Hiragino Sans","Hiragino Kaku Gothic ProN","Meiryo",sans-serif',
            }}
            initial={{ opacity: 0.88, scale: p.scale, rotate: p.rotation }}
            animate={{
              opacity: 0,
              y: p.driftY,
              x: p.driftX,
              rotate: p.rotEnd,
              scale: p.scale * 0.82,
            }}
            transition={{
              duration: 0.88,
              ease: [0.22, 1, 0.32, 1],
            }}
          >
            {p.phrase}
          </motion.span>
        </span>
      ))}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 z-[50] h-3.5 w-3.5 rounded-full border border-neutral-800 bg-neutral-950 shadow-sm will-change-transform dark:border-neutral-600 dark:bg-black"
        style={{ transform: "translate3d(0,0,0)" }}
        aria-hidden
      />
    </div>
  );
}
