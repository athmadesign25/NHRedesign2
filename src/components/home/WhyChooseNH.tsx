"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Award, FlaskConical, ShieldCheck, HeartHandshake, UserRound, Headset, Star } from "lucide-react";
import styles from "./WhyChooseNH.module.css";
import React from "react";


/* Interactive Bento Card with hover glow */
function BentoCard({ children, className, id, delay = 0, onMouseEnter, onMouseLeave }: { children: React.ReactNode, className: string, id: string, delay?: number, onMouseEnter?: () => void, onMouseLeave?: () => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`${styles.card} ${className}`}
      id={id}
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        className={styles.glow}
        style={{
          background: useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, var(--card-glow-color, rgba(255,255,255,0.12)), transparent 40%)`,
        }}
      />
      <motion.div 
        className={styles.cardInner}
        variants={{
          hover: { scale: 1.02 }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function WhyChooseNH() {
  const [isVideoHovered, setIsVideoHovered] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (isVideoHovered && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else if (!isVideoHovered && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isVideoHovered]);

  return (
    <section className={`section ${styles.section}`} id="why-choose-nh">
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-eyebrow">
            BEST IN HEALTHCARE
          </div>
          <h2 className={styles.title}>Why Choose Narayana Health?</h2>
          <p className={styles.subtitle}>
            Where your health &amp; well-being comes first, always.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.colStack}>
            {/* JCI Enterprise */}
            <BentoCard
              className={`${styles.tallCard} ${styles.cardJciEnterprise}`}
              id="why-jci-enterprise"
              delay={0}
            >
              <div className={styles.iconBadgeBlue}>
                <Award size={28} strokeWidth={2.5} />
              </div>
              <div className={styles.contentBottom}>
                <h3 className={styles.cardTitleDark}>JCI Enterprise</h3>
                <p className={styles.cardDescDark}>Network-wide global<br/>quality standard</p>
              </div>
            </BentoCard>

            {/* NABH */}
            <BentoCard
              className={`${styles.normalCard} ${styles.cardNabh}`}
              id="why-nabh"
              delay={0.1}
            >
              <div className={styles.iconBadgeGreen}>
                <ShieldCheck size={28} strokeWidth={2.5} />
              </div>
              <div className={styles.contentBottom}>
                <h3 className={styles.cardTitleDark}>NABH Accredited</h3>
                <p className={styles.cardDescDark}>India&apos;s recognised<br/>hospital quality norms</p>
              </div>
            </BentoCard>
          </div>

          {/* Center Column: Image */}
          <div className={styles.centerCol}>
            <BentoCard
              className={styles.cardImageWrap}
              id="why-doctor-patient"
              delay={0.15}
              onMouseEnter={() => setIsVideoHovered(true)}
              onMouseLeave={() => setIsVideoHovered(false)}
            >
              <motion.div 
                className={styles.imageScaleWrap}
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/doctor_patient.png"
                  alt="Doctor with patient"
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ opacity: isVideoHovered ? 0 : 1, transition: "opacity 0.3s" }}
                />
                <video 
                  ref={videoRef}
                  src="/Doctor Patient.mp4"
                  muted
                  loop
                  playsInline
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", aspectRatio: "1 / 1", opacity: isVideoHovered ? 1 : 0, transition: "opacity 0.3s" }}
                />
              </motion.div>
            </BentoCard>
          </div>

          {/* Right Column */}
          <div className={styles.colStack}>
            {/* JCI Hospitals */}
            <BentoCard
              className={`${styles.normalCard} ${styles.cardJciHospitals}`}
              id="why-jci-hospitals"
              delay={0.2}
            >
              <div className={styles.iconBadgeGold}>
                <Star size={28} strokeWidth={2.5} />
              </div>
              <div className={styles.contentBottom}>
                <h3 className={styles.cardTitleDark}>JCI Accredited Hospitals</h3>
                <p className={styles.cardDescDark}>International patient safety<br/>benchmarks</p>
              </div>
            </BentoCard>

            {/* CAP Labs */}
            <BentoCard
              className={`${styles.tallCard} ${styles.cardCapLabs}`}
              id="why-cap-labs"
              delay={0.3}
            >
              <div className={styles.iconBadgePurple}>
                <FlaskConical size={28} strokeWidth={2.5} />
              </div>
              <div className={styles.contentBottom}>
                <h3 className={styles.cardTitleDark}>CAP Accredited Labs</h3>
                <p className={styles.cardDescDark}>Accurate, reliable<br/>diagnostic reports</p>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <motion.div
          className={styles.featureBar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrap}>
              <UserRound size={22} className={styles.featureIconBlue} />
            </div>
            <div>
              <div className={styles.featureTitle}>Expert Doctors</div>
              <div className={styles.featureDesc}>Highly skilled &amp;<br/>compassionate care</div>
            </div>
          </div>
          
          <div className={styles.featureDivider} />

          <div className={styles.featureItem}>
            <div className={styles.featureIconWrap}>
              <HeartHandshake size={22} className={styles.featureIconBlue} />
            </div>
            <div>
              <div className={styles.featureTitle}>Advanced Technology</div>
              <div className={styles.featureDesc}>Cutting-edge facilities<br/>for better outcomes</div>
            </div>
          </div>

          <div className={styles.featureDivider} />

          <div className={styles.featureItem}>
            <div className={styles.featureIconWrap}>
              <ShieldCheck size={22} className={styles.featureIconBlue} />
            </div>
            <div>
              <div className={styles.featureTitle}>Patient Safety</div>
              <div className={styles.featureDesc}>Your safety is our<br/>top priority</div>
            </div>
          </div>

          <div className={styles.featureDivider} />

          <div className={styles.featureItem}>
            <div className={styles.featureIconWrap}>
              <Headset size={22} className={styles.featureIconBlue} />
            </div>
            <div>
              <div className={styles.featureTitle}>Always Here</div>
              <div className={styles.featureDesc}>24x7 care &amp;<br/>support</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
