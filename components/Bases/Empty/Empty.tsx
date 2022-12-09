import { Button } from 'antd';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useRef } from 'react';

import styles from './Empty.module.css';
import { EmptyProps } from './Empty.props';
export const Empty: FunctionComponent<EmptyProps> = ({ title, subtitle, description }) => {
  const router = useRouter();
  const visorRef = useRef<HTMLCanvasElement>(null);

  function draw(): void {
    const ctxVisor = visorRef.current?.getContext('2d');
    if (ctxVisor) {
      console.debug('ctxVisor', ctxVisor);
      ctxVisor.beginPath();
      ctxVisor.moveTo(5, 45);
      ctxVisor.bezierCurveTo(15, 64, 45, 64, 55, 45);
      ctxVisor.lineTo(55, 20);
      ctxVisor.bezierCurveTo(55, 15, 50, 10, 45, 10);
      ctxVisor.lineTo(15, 10);
      ctxVisor.bezierCurveTo(15, 10, 5, 10, 5, 20);
      ctxVisor.lineTo(5, 45);
      ctxVisor.fillStyle = '#2f3640';
      ctxVisor.strokeStyle = '#f5f6fa';
      ctxVisor.fill();
      ctxVisor.stroke();
    }
  }

  useEffect(() => {
    draw();
  }, []);

  function goToHome(): void {
    router.push('/').catch(console.error);
  }

  return (
    <section className={styles.Empty}>
      <div className="moon"></div>
      <div className="moon__crater moon__crater1"></div>
      <div className="moon__crater moon__crater2"></div>
      <div className="moon__crater moon__crater3"></div>

      <div className="star star1"></div>
      <div className="star star2"></div>
      <div className="star star3"></div>
      <div className="star star4"></div>
      <div className="star star5"></div>

      <div className="error">
        <div className="error__title">{title}</div>
        <div className="error__subtitle">{subtitle}</div>
        <div className="error__description">{description}</div>
        <Button
          shape={'round'}
          size={'large'}
          ghost={true}
          className={styles.Empty__btn}
          onClick={goToHome}>
          Got to Home
        </Button>
      </div>

      <div className="astronaut">
        <div className="astronaut__backpack"></div>
        <div className="astronaut__body"></div>
        <div className="astronaut__body__chest"></div>
        <div className="astronaut__arm-left1"></div>
        <div className="astronaut__arm-left2"></div>
        <div className="astronaut__arm-right1"></div>
        <div className="astronaut__arm-right2"></div>
        <div className="astronaut__arm-thumb-left"></div>
        <div className="astronaut__arm-thumb-right"></div>
        <div className="astronaut__leg-left"></div>
        <div className="astronaut__leg-right"></div>
        <div className="astronaut__foot-left"></div>
        <div className="astronaut__foot-right"></div>
        <div className="astronaut__wrist-left"></div>
        <div className="astronaut__wrist-right"></div>

        <div className="astronaut__head">
          <canvas
            ref={visorRef}
            width="60px"
            height="60px"></canvas>
          <div className="astronaut__head-visor-flare1"></div>
          <div className="astronaut__head-visor-flare2"></div>
        </div>
      </div>
    </section>
  );
};
