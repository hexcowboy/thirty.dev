import {
  AnimationPlaybackControls,
  useAnimate,
  useInView,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Direction = "left" | "right";

interface Props {
  children: JSX.Element[];
  duration?: number;
  isPlaying?: boolean;
  direction?: Direction;
}

const Ticker = ({
  children,
  duration = 10,
  isPlaying = true,
  direction = "right",
}: Props) => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [tickerContentWidth, setTickerContentWidth] = useState<number>(2);
  const [numDupes, setNumDupes] = useState<number>(1);
  const [scope, animate] = useAnimate();
  const animationControlsRef = useRef<AnimationPlaybackControls>();
  const isInView = useInView(scope);
  const directionMultiplier = direction === "left" ? 1 : -1;
  const childRefs = useRef<Array<HTMLDivElement | null>>([]);
  const duplicatedChildren = useMemo(
    () =>
      [...Array(numDupes)].map(() =>
        children.map((item, index) => <div key={index}>{item}</div>)
      ),
    [numDupes, children]
  );

  useEffect(() => {
    childRefs.current = childRefs.current.slice(0, children.length);
  }, [children]);

  useEffect(() => {
    const contentWidth = childRefs.current.reduce((acc, ref) => {
      const width = ref?.clientWidth || 0;
      return acc + width;
    }, 0);
    setTickerContentWidth(contentWidth);
  }, [childRefs]);

  useEffect(() => {
    if (tickerRef.current && tickerContentWidth) {
      setNumDupes(
        Math.max(
          Math.ceil((2 * tickerRef.current.clientWidth) / tickerContentWidth),
          1
        )
      );
    }
  }, [tickerContentWidth]);

  useEffect(() => {
    if (isInView && !animationControlsRef.current) {
      const controls = animate(
        scope.current,
        { x: tickerContentWidth * directionMultiplier },
        { ease: "linear", duration, repeat: Infinity }
      );
      animationControlsRef.current = controls;
    }

    return () => {
      if (animationControlsRef.current) {
        animationControlsRef.current.cancel();
        animationControlsRef.current = undefined;
      }
    };
  }, [
    isInView,
    animate,
    scope,
    directionMultiplier,
    duration,
    animationControlsRef,
    tickerContentWidth,
  ]);

  useEffect(() => {
    if (animationControlsRef.current) {
      if (isInView && isPlaying) {
        animationControlsRef.current.play();
      } else {
        animationControlsRef.current.pause();
      }
    }
  }, [isInView, isPlaying, animationControlsRef]);

  const handleMouseEnter = () => {
    if (animationControlsRef.current) {
      animationControlsRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationControlsRef.current) {
      animationControlsRef.current.play();
    }
  };

  return (
    <div
      className="h-full w-full overflow-hidden"
      ref={tickerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={scope} className="flex">
        {children.map((item, index) => (
          <div key={index} ref={(ref) => (childRefs.current[index] = ref)}>
            {item}
          </div>
        ))}
        {duplicatedChildren}
      </div>
    </div>
  );
};

export default Ticker;
